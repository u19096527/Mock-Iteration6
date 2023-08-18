import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HelpTip } from 'src/app/shared/help-tip';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-helptip',
  templateUrl: './view-helptip.component.html',
  styleUrls: ['./view-helptip.component.scss']
})
export class ViewHelptipComponent {
  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  selectedHelpTip: HelpTip = new HelpTip();

  ngOnInit(): void {
    //get id
    this.activatedRoute.params.subscribe(params => {


      //get data by query
      this.dataService.GetSelectedHelpTip(params['id']).subscribe(response => {

        //place response in page
        this.selectedHelpTip = response as HelpTip;

        this.getVideoLink();
      })
    })
  }

  videoUrl!:string;  
  streamLink!: string;

  getVideoLink() {
  this.videoUrl = this.selectedHelpTip.fileName
  this.dataService.GenerateVideoStreamLink(this.videoUrl).subscribe( result => {     
      this.streamLink = result as string
      console.log(this.streamLink)  
      // this.auditService.addAction(new auditEntry(1,auditEntryType.UploadedVideo,"Uploaded Video named " + this.formAddHelpTip.controls["Name"].value));
      // this.saveActions()
    });
  }
  // this.arrHelpTips = [];
  // this.dataService.GetAllTheHelpTips().subscribe( result => {
  //   let listHelpTips: any[] = result;
  //   listHelpTips.forEach( (element) => {
  //     this.dataService.GenerateVideoStreamLink(element.fileName).subscribe( result => {
  //       element.filePath = result as string
  //       console.log(element.filePath);
  //     });
  //     this.arrHelpTips.push(element);
  //   });
  // });
}

