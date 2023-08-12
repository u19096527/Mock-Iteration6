import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Supplier } from 'src/app/shared/supplier';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.scss']
})
export class UpdateSupplierComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private activated: ActivatedRoute, private snackbar: MatSnackBar) { }

  //Creating the form 
  upSupplier: Supplier = new Supplier();
  formUpdate: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    cell: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {

    //get id
    this.activated.params.subscribe(params => {


      //get data by query
      this.data.GetSupplier(params['id']).subscribe(response => {

        //place response in page
        this.upSupplier = response as Supplier;

        //place retrieved data in cells
        this.formUpdate.controls['name'].setValue(this.upSupplier.supplier_Name);
        this.formUpdate.controls['address'].setValue(this.upSupplier.supplier_Address);
        this.formUpdate.controls['email'].setValue(this.upSupplier.supplier_Email);
        this.formUpdate.controls['cell'].setValue(this.upSupplier.supplier_CellNumber);
      })

    })

  }


  UpdateSupplier() {
    let supplier = new Supplier();
    supplier.supplier_Name = this.formUpdate.value.name;
    supplier.supplier_Address = this.formUpdate.value.address;
    supplier.supplier_Email = this.formUpdate.value.email;
    supplier.supplier_CellNumber = this.formUpdate.value.cell;

    this.data.UpdateSupplier(this.upSupplier.supplier_ID, supplier).subscribe((response: any) => {
      this.router.navigate(['/supplier']);
      this.snackbar.open('Supplier Has Been Successfully Updated', 'Close', { duration: 2000 });
    });



  }



}

