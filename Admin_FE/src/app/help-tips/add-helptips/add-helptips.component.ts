import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HelpTip } from 'src/app/shared/help-tip';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Import DomSanitizer

import { ElementRef, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-add-helptips',
  templateUrl: './add-helptips.component.html',
  styleUrls: ['./add-helptips.component.scss']
})

export class AddHelptipsComponent {

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;


  constructor(private dataService: DataService, private router: Router, private sanitizer: DomSanitizer) { 

  }

  formAddHelpTip: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    video: new FormControl('', [Validators.required])
  });


showVideo: boolean = false;
videoUrl: string = ""; // Initialize the variable
isVideoUploaded: boolean = false;
fileUploadMessage: string = "";
showNoVideoMessage: boolean = false;
isTheRightVideoUploaded: boolean = false;
isWrongVideoUploaded: boolean = false;
verifyButtons: boolean = false;
selectedFile: any;

ngOnInit(): void {
  document.getElementById("videoInput")?.addEventListener("change", this.handleVideoUpload.bind(this));
}

handleVideoUpload(event: Event) {
  //get the video from event handler
  this.selectedFile = (event.target as HTMLInputElement).files?.[0];

  //if file is uploaded then read it as a url for the video player
  if (this.selectedFile) 
  {
    this.isVideoUploaded = true;
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      this.videoUrl = event.target?.result as string; // Store the data URL
    };

    reader.readAsDataURL(this.selectedFile);
    // console.log(this.videoUrl);

  }
  else 
  {
    //else dont show the video player because file is not uploaded
    this.isVideoUploaded = false;
  }
}

//-----------------------VERIFICATION FOR VIDEO BEING UPLOADED-----------------------//
  VerifyVideo() {

    if(!this.formAddHelpTip.valid)
    {
      //trigger your form controls
      Object.values(this.formAddHelpTip.controls).forEach(control => {
        if(control.invalid)
        {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }else
    {

          //if video is not uploaded when verify video is clicked then...
    if (this.isVideoUploaded == false) {
      this.showVideo = false;
      this.showNoVideoMessage = true;
      this.isWrongVideoUploaded = false;
      this.isTheRightVideoUploaded = false;
  
      this.fileUploadMessage = "It looks you haven't uploaded a video, please upload a video.";
    }
    else {

      if(this.selectedFile.size > 30000000 ){

        this.showVideo = false;
        this.showNoVideoMessage = true;
        this.isWrongVideoUploaded = false;
        this.isTheRightVideoUploaded = false;
    
        this.fileUploadMessage = " It looks like the file you uploaded is a bit too large. Please make sure the file size is smaller than 30MB.";
     }
     else{
      this.showVideo = true;//shows the video
      this.showNoVideoMessage = false; //hides no video error message
      this.ConfirmButtonsHidden = false; //hides the confirm video buttons
      this.isWrongVideoUploaded = false;//hides the wrong video uploaded message
      this.isTheRightVideoUploaded = false;//hides the right video uploaded message

     }
    }
    }

    

  }

  ConfirmButtonsHidden: boolean = false;

  YesVideo() {
    this.showVideo = false;
    this.isWrongVideoUploaded = false;
    this.showNoVideoMessage = false;

    this.isTheRightVideoUploaded = true;
    this.ConfirmButtonsHidden = true;
    this.verifyButtons = true;
  }
  
  NoVideo() {
    this.showVideo = false;
    this.isWrongVideoUploaded = true;
    this.isTheRightVideoUploaded = false;
    this.showNoVideoMessage = false;

    this.fileUploadMessage = "It seems you have uploaded the wrong video. If you intended to upload a different video, please use the correct video file and try again. If you need assistance, feel free to contact our support team for help.";

  }
  //--------------------------------------------------------------------------------//


  addNewHelpTip() {

    if(!this.formAddHelpTip.valid)
    {
      //trigger your form controls
      Object.values(this.formAddHelpTip.controls).forEach(control => {
        if(control.invalid)
        {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
    else
    {
      let newHelpTip = new FormData();
      newHelpTip.append('Name', this.formAddHelpTip.value.name);
      newHelpTip.append('Description', this.formAddHelpTip.value.description);
      newHelpTip.append('VideoFile', this.selectedFile, this.selectedFile.name);

      this.dataService.AddNewHelpTip(newHelpTip).subscribe(
        result => {       
          this.router.navigate(['/help-tips'])

          // this.auditService.addAction(new auditEntry(1,auditEntryType.UploadedVideo,"Uploaded Video named " + this.formAddHelpTip.controls["Name"].value));
          // this.saveActions()
        },
        error => {
          // Handle error here
          console.error('Error adding new help tip:', error);
          // You can show an error message to the user or perform other actions
        }
      );
    }
  }

  
}







