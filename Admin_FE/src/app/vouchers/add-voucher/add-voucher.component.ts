import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Voucher } from 'src/app/shared/voucher';


@Component({
  selector: 'app-add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrls: ['./add-voucher.component.scss']
})
export class AddVoucherComponent {

  constructor(private dataService: DataService, private router: Router) { }

  formAddVoucher: FormGroup = new FormGroup
  ({
    percent: new FormControl('', [Validators.required]),
    expiry_Date: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {}

  addNewVoucher() {
    let newVoucher = new Voucher();
    newVoucher.percent = this.formAddVoucher.value.percent;

    const expiryDate = this.formAddVoucher.value.expiry_Date;
    const formattedExpiryDate = new Date(expiryDate).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');

    newVoucher.expiry_Date = formattedExpiryDate;

    this.dataService.AddNewVoucher(newVoucher).subscribe(result => {
      this.router.navigate(['/vouchers'])
    });
  }



}