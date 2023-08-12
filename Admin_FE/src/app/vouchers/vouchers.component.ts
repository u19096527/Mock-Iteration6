import { Component, OnInit } from '@angular/core';
import { Voucher } from '../shared/voucher';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormsModule, NgControl, NgControlStatus, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.scss']
})
export class VouchersComponent  implements OnInit {

  arrVouchers: Voucher[] = []
  constructor( private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getAllVouchers();
  }

    // RETRIEVE ALL VOUCHERS
    getAllVouchers() {
      this.dataService.GetAllTheVouchers().subscribe(result => {
        let listVouchers: any[] = result
        listVouchers.forEach((element) => {
          this.arrVouchers.push(element)
        });
      })
    }

    
    searchQuery: string ="";
    searchVoucher() {
      if (this.searchQuery.trim() === "") {
        window.location.reload();
        this.getAllVouchers();
      }
      else {
        this.dataService.SearchVoucher(this.searchQuery).subscribe(
          result => {
            let listVouchers: any[] = result;
            this.arrVouchers = [];
            listVouchers.forEach( (element) => {
              this.arrVouchers.push(element);
            });
          }
        );
      }
    }
    

    goToEditVoucher(voucher_ID: Number) {
      this.router.navigate(['/edit-voucher', voucher_ID]);
    }

    deleteVoucher(voucher_ID: number){
      this.dataService.DeleteVoucher(voucher_ID).subscribe( (response:any) => {
        window.location.reload();
      })
    }


  // search() {
  //   this.http.get<any[]>('your-api-url/search?term=' + this.searchTerm)
  //     .subscribe((response: Voucher[]) => {
  //       this.arrVouchers = response;
  //     });
  // }

  
  


}