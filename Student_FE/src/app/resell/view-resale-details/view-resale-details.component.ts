import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { bookedevaluation } from 'src/app/shared/resellerbookBookedEvalautio';
import { resellerbook } from 'src/app/shared/resellerbook';

@Component({
  selector: 'app-view-resale-details',
  templateUrl: './view-resale-details.component.html',
  styleUrls: ['./view-resale-details.component.scss']
})
export class ViewResaleDetailsComponent {
  constructor(private dataServices: DataService,
    private router: Router) { }
  books: bookedevaluation[] = [];
  book:resellerbook[]=[]

  ngOnInit(): void {

    this.getBooks();
    this.getbooks();
  }

  getBooks() {
    this.dataServices.getEvaluationBooked(1).subscribe(
      result => {
        let blist: any[] = result
        blist.forEach((element) => {
          this.books.push(element)
        });
      }
    )
  }

  getbooks()
  {
    this.dataServices.getPendingBooking(1)
    .subscribe(result => {
      let  blist:any[]= result
      blist.forEach((element)=>
      {
        this.book.push(element)
      });
    })
  }
}
