import { Component , OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { bookedevaluation } from 'src/app/shared/resellerbookBookedEvalautio';

@Component({
  selector: 'app-evaluation-scheduled',
  templateUrl: './evaluation-scheduled.component.html',
  styleUrls: ['./evaluation-scheduled.component.scss']
})
export class EvaluationScheduledComponent implements OnInit{

  constructor(private dataServices:DataService,
    private router:Router){}
    books:bookedevaluation[]=[];

  ngOnInit(): void {

    this.getBooks()
  }

  getBooks()
  {
    this.dataServices.getEvaluationBooked(1).subscribe(
      result => {
        let blist:any[] = result
        blist.forEach((element)=> {
          this.books.push(element)
        });
      }
    )
  }
}
