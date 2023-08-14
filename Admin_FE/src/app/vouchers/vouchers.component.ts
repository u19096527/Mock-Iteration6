import { Component, OnInit } from '@angular/core';
import { Voucher } from '../shared/voucher';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormsModule, NgControl, NgControlStatus, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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

    
    searchQuery: string = "";
    intSearchPercent: number = 0;
    
    searchVoucher() {
      if (this.searchQuery == "") {
        window.location.reload();
        this.getAllVouchers();
      }
      else {

        this.intSearchPercent = parseInt(this.searchQuery);
        const isConversionSuccessful: boolean = !isNaN(this.intSearchPercent);

        if (isConversionSuccessful == true) {

          if (this.intSearchPercent > 100 || this.intSearchPercent < 1) {
            Swal.fire('Please input a numeric value between 1 and 100','','warning');    

          }
          else{
            this.intSearchPercent = parseInt(this.searchQuery)
            this.dataService.SearchVoucherPercent(this.intSearchPercent).subscribe(
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
        else {
          Swal.fire('Please input a numeric value between 1 and 100','','warning');    
        }

      }
    }
    

    goToEditVoucher(voucher_ID: Number) {
      this.router.navigate(['/edit-voucher', voucher_ID]);
    }  

    deleteVoucher(voucher_ID: number){

      Swal.fire({
        title: 'Are you sure you want to delete this voucher?',
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonColor: "green",
        confirmButtonText: 'Yes',
        denyButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) //if user clicked yes
        {
          this.dataService.DeleteVoucher(voucher_ID).subscribe( (response:any) => {
            window.location.reload();
          })        
        } else if ( (result.isDenied) || (result.isDismissed))//if user clicked no
        {
          Swal.fire('Delete Voucher has been aborted', '', 'error')
        }
      })


    }  


}