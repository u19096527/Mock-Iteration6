import { Component , OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { resellerbook } from 'src/app/shared/resellerbook';

@Component({
  selector: 'app-pending-bookings',
  templateUrl: './pending-bookings.component.html',
  styleUrls: ['./pending-bookings.component.scss']
})
export class PendingBookingsComponent implements OnInit {

  constructor(private dataServices:DataService,
    private router:Router){}

    books:resellerbook[]=[]
  ngOnInit(): void {
    this.getbooks();
  }

  getbooks()
  {
    this.dataServices.getPendingBooking(1)
    .subscribe(result => {
      let  blist:any[]= result
      blist.forEach((element)=>
      {
        this.books.push(element)
      });
    })
  }

}
