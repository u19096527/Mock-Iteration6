import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Voucher } from 'src/app/shared/voucher';

@Component({
  selector: 'app-edit-voucher',
  templateUrl: './edit-voucher.component.html',
  styleUrls: ['./edit-voucher.component.scss']
})
export class EditVoucherComponent {

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  //Creating the form 
  editedVoucher: Voucher = new Voucher();

  formEditVoucher: FormGroup = new FormGroup({
    percent: new FormControl('', [Validators.required]),
    expiry_Date: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {

    //get id
    this.activatedRoute.params.subscribe(params => {


      //get data by query
      this.dataService.GetSelectedVoucher(params['id']).subscribe(response => {

        //place response in page
        this.editedVoucher = response as Voucher;

        //place retrieved data in cells
        this.formEditVoucher.controls['percent'].setValue(this.editedVoucher.percent);
        this.formEditVoucher.controls['expiry_Date'].setValue(this.editedVoucher.expiry_Date);
      })

    })

  }

  editAVoucher()
  {
    let selectedVoucher = new Voucher();
    selectedVoucher.percent = this.formEditVoucher.value.percent;

    const expiryDate = this.formEditVoucher.value.expiry_Date;
    const formattedExpiryDate = new Date(expiryDate).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');

    selectedVoucher.expiry_Date = formattedExpiryDate;


   this.dataService.UpdateAVoucher(this.editedVoucher.voucher_ID, selectedVoucher).subscribe((response:any) => {
      this.router.navigate(['/vouchers'])

   });

  }



}