import { ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HelpTip } from 'src/app/shared/help-tip';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-helptip',
  templateUrl: './edit-helptip.component.html',
  styleUrls: ['./edit-helptip.component.scss']
})
export class EditHelptipComponent {
  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  //Creating the form 
  editedHelpTip: HelpTip = new HelpTip();

  formEditHelpTip: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    video: new FormControl('', [Validators.required])
  })

  videoUrl: string = ""; // Initialize the variable
  linkGenerated: boolean = false;

  ngOnInit(): void {

    //get id
    this.activatedRoute.params.subscribe(params => {


      //get data by query
      this.dataService.GetSelectedHelpTip(params['id']).subscribe(response => {

        //place response in page
        this.editedHelpTip = response as HelpTip;

        //place retrieved data in cells
        this.formEditHelpTip.controls['name'].setValue(this.editedHelpTip.name);
        this.formEditHelpTip.controls['date'].setValue(this.editedHelpTip.date);
        this.formEditHelpTip.controls['description'].setValue(this.editedHelpTip.description);
        console.log("retrieved file path:"+this.editedHelpTip.filePath);
        console.log("retrieved file name: "+this.editedHelpTip.fileName);

          this.dataService.GenerateVideoStreamLink(this.editedHelpTip.fileName).subscribe(
            (response: string) => {
                this.videoUrl = response; // Assign the plain text URL to videoUrl
                console.log("Stream link:", this.videoUrl);
                this.linkGenerated=true;
            },
            error => {
                console.error('Error generating help tip:', error);
            }
        );
      
  
      })


    })

  }
  EditVideo: boolean = false

  YesChangeVideo(){
this.linkGenerated = false;
  }
  NoChangeVideo(){

  }

  AbortEditHelp(){
    Swal.fire({
      icon: 'error',
      text: 'Edit Help Tip has been aborted.',
    }).then( (answer) =>{
      if (answer.isConfirmed) {
        this.router.navigate(['/help-tips'])
      }
    });
  }

  ConfirmEditHelp() {
    Swal.fire({
      title: 'Do you want to save the changes made to this help tip?',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.editAHelpTip();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  editAHelpTip()
  {
    if (this.formEditHelpTip.controls['name']?.invalid || this.formEditHelpTip.controls['description']?.invalid) {
      Swal.fire('Please fill in the form','','warning')
    }
    else{
      let selectedHelpTip = new FormData();
      //if no new video is added then only edit the textboxes
      if (this.selectedFile == null || this.selectedFile.length < 0) {
        selectedHelpTip.append('Name', this.formEditHelpTip.value.name);
        selectedHelpTip.append('Description', this.formEditHelpTip.value.description);
      }
      else //else if video is uploaded then edit video too
      {
        selectedHelpTip.append('Name', this.formEditHelpTip.value.name);
        selectedHelpTip.append('Description', this.formEditHelpTip.value.description);
        selectedHelpTip.append('VideoFile', this.selectedFile, this.selectedFile.name);
      }

      this.dataService.UpdateAHelpTip(this.editedHelpTip.help_ID, selectedHelpTip).subscribe(
        result => {       
          this.router.navigate(['/help-tips'])

          // this.auditService.addAction(new auditEntry(1,auditEntryType.UploadedVideo,"Uploaded Video named " + this.formAddHelpTip.controls["Name"].value));
          // this.saveActions()
        },
        error => {
          // Handle error here
          Swal.fire('Error adding new help tip',error,'error');
          // console.error('Error adding new help tip:', error);
          // You can show an error message to the user or perform other actions
        }
      )

    }


  }

  //-----------------get video from file upload
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
  showVideo: boolean = false;
  isVideoUploaded: boolean = false;
  fileUploadMessage: string = "";
  showNoVideoMessage: boolean = false;
  showErrorMessage: boolean = false;
  verifyButtons: boolean = false;
  selectedFile: any;

  VerifyVideo() {

    if(!this.formEditHelpTip.valid)
    {
      //trigger your form controls
      Object.values(this.formEditHelpTip.controls).forEach(control => {
        if(control.invalid)
        {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
    else
    {

          //if video is not uploaded when verify video is clicked then...
    if (this.isVideoUploaded == false) {
      this.showVideo = false;
      this.showNoVideoMessage = true;
    this.showErrorMessage = true
      this.fileUploadMessage = "It looks you haven't uploaded a video, please upload a video.";
    }
    else {

      if(this.selectedFile.size > 30000000 ){

        this.showVideo = false;
        this.showNoVideoMessage = true;
        this.showErrorMessage=true
        this.fileUploadMessage = " It looks like the file you uploaded is a bit too large. Please make sure the file size is smaller than 30MB.";
     }
     else{
      this.showVideo = true;//shows the video
      this.showNoVideoMessage = false; //hides no video error message
      this.ConfirmButtonsHidden = false; //hides the confirm video buttons
this.showErrorMessage= false;
     }
    }
    }

  }

  ConfirmButtonsHidden: boolean = false;

  YesVideo() {
    this.showVideo = false;
    this.showNoVideoMessage = false;
    this.ConfirmButtonsHidden = true;
    this.verifyButtons = true;
  }
  
  NoVideo() {
    this.showVideo = false;
    this.showNoVideoMessage = false;

    this.fileUploadMessage = "It seems you have uploaded the wrong video. If you intended to upload a different video, please use the correct video file and try again. If you need assistance, feel free to contact our support team for help.";

  }
  //--------------------------------------------------------------------------------//



}
