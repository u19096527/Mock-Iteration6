import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HelpTip } from 'src/app/shared/help-tip';

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
      })
    })
  }

  videoUrl!: SafeResourceUrl;  

}
