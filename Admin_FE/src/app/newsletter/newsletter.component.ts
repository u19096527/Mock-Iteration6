import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Newsletter } from '../shared/newsletter';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  arrNewsletters: Newsletter[] = [];
  searchQuery: string = "";
  constructor(private dataService: DataService){

  }
  ngOnInit():void {
    this.getNewsletters();

  }
  searchNewsletter() {

  }
  //Get All the Help Tips
  getNewsletters(){
    this.arrNewsletters = [];
    this.dataService.GetAllTheNewsletters().subscribe( result => {
      let listNewsletters: any[] = result;
      listNewsletters.forEach( (element) => {
        this.dataService.GenerateVideoStreamLink(element.FileName).subscribe( result => {
          element.FilePath = result as string
        });
        this.arrNewsletters.push(element);
      });
    });
  }

  handleChange() {
    const selectElement = document.getElementById("dateOrderBy") as HTMLSelectElement;
    const selectedValue = selectElement.value;
    
    // Do something with the selected value
    console.log("Selected value: " + selectedValue);

    if (selectedValue == "ascending") {
      this.arrNewsletters = [];
      this.dataService.GetAllTheNewsletters().subscribe( result => {
        let listNewsletters: any[] = result;
        listNewsletters.forEach( (element) => {
          this.dataService.GenerateVideoStreamLink(element.FileName).subscribe( result => {
            element.FilePath = result as string
          });
          this.arrNewsletters.push(element);
        });
      });
    }

    else if (selectedValue =="descending") {
      this.arrNewsletters = [];
      this.dataService.SortNewslettersByDescending().subscribe( result => {
        let listNewsletters: any[] = result;
        listNewsletters.forEach( (element) => {
          this.dataService.GenerateVideoStreamLink(element.FileName).subscribe( result => {
            element.FilePath = result as string
          });
          this.arrNewsletters.push(element);
        });
      });
    }
  }
  
}
