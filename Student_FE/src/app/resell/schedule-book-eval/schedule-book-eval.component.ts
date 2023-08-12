import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/shared/schedules';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { booking } from 'src/app/shared/booking';
import { resellerbook } from 'src/app/shared/resellerbook';
import { resellerbookingVM } from 'src/app/shared/ResellerBookingVM';

@Component({
  selector: 'app-schedule-book-eval',
  templateUrl: './schedule-book-eval.component.html',
  styleUrls: ['./schedule-book-eval.component.scss']
})
export class ScheduleBookEvalComponent implements OnInit {
  cart: number = 5;
  //newSchedule:Schedule
  constructor(private data:DataService, private router :Router) { }
  savedScheduleId :number =0;
  newbooking!: booking ; // Initialize with an empty object
  books:resellerbook[]=[];
  ngOnInit(): void {
    this.getbooks();
  }


  selectedDate: string = '';

  updateDate(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedDate = inputElement.value;
    this.CreateDate(this.selectedDate);
  }


  CreateDate(date: string) {
    let newschedule = new Schedule();
    newschedule.event_Name = "Booking";
    newschedule.date = date;
    newschedule.slots_Available = 5;
    newschedule.employee_ID = 1;

    this.data.AddSchedule(newschedule).subscribe(
      (newlyCreatedSchedule: Schedule) => {
        if (newlyCreatedSchedule) {
          // The newly created Schedule object is available in the response
          const scheduleId = newlyCreatedSchedule.schedule_ID;
          console.log('Newly Created Schedule ID:', scheduleId);
          this.createbooking(newlyCreatedSchedule)
        }
      },
      (error) => {
        console.error('Error adding schedule:', error);
      }
    );
  }


  createbooking(schId: Schedule) {
    this.data.createBooking(schId.schedule_ID).subscribe((bookings: booking[]) => {
      if (bookings && bookings.length > 0) {
        this.newbooking = bookings[0]; // Assuming you want to use the first booking in the array
        //this.getbooks();
        console.log(this.newbooking)
      }
    }, (error) => {
      console.error('Error adding booking:', error);
    });
  }




  getbooks()
  {
    this.data.getPendingBooking(1)
    .subscribe(result => {
      let  blist:any[]= result
      blist.forEach((element)=>
      {
        this.books.push(element)
      });
    })
  }
  bookBook(id: number) {
    if (!this.newbooking || !this.newbooking.booking_ID) {
      console.error('Error: newbooking is not initialized or does not have booking_ID property.');
      return;
    }

    let k = new resellerbookingVM();
    k.resellerBook_ID = id; // Correct property name
    k.booking_Id = this.newbooking.booking_ID; // Correct property name

    this.data.addBooking(k).subscribe(
      (messageback: any) => {
        if (messageback.statusCode === 200) {
          alert(messageback.message); // Display the success message
        } else {
          console.error('Error adding booking:', messageback.message); // Display the error message
        }
      },
      (error) => {
        console.error('Error adding booking:', error);
      }
    );
  }




  Submit()
  {
    this.router.navigate(['/'])
  }

  // ...
}










