import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { HelpTip } from '../shared/help-tip';

@Component({
  selector: 'app-help-tips',
  templateUrl: './help-tips.component.html',
  styleUrls: ['./help-tips.component.scss']
})
export class HelpTipsComponent implements OnInit{
  isIconFlipped: boolean = false;
  options: IntersectionObserverInit | undefined;
  flipIcon() {
    this.isIconFlipped = !this.isIconFlipped;
  }
  arrHelpTips: HelpTip[] = [];
  panelOpenState = false;

  constructor(private dataService: DataService){

  }
  
  ngOnInit(): void {
    this.getAllHelpTips();

 }

  getAllHelpTips(){
    this.arrHelpTips = [];
    this.dataService.GetAllTheHelpTips().subscribe( result => {
      let listHelpTips: any[] = result;
      listHelpTips.forEach( (element) => {
        this.dataService.GenerateVideoStreamLink(element.fileName).subscribe( result => {
          element.filePath = result as string
          console.log(element.filePath);
        });
        this.arrHelpTips.push(element);
      });
    });
  }


}
