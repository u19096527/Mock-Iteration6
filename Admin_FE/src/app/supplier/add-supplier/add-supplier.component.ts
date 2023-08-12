import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Supplier } from 'src/app/shared/supplier';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent {

  constructor(private data: DataService, private router: Router, private snackbar: MatSnackBar) { }

  formAdd: FormGroup = new FormGroup
    ({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      cell: new FormControl('', [Validators.required])
    })

  ngOnInit(): void { }

  addSupplier() {
    let supp = new Supplier();
    supp.supplier_Name = this.formAdd.value.name;
    supp.supplier_Address = this.formAdd.value.address;
    supp.supplier_Email = this.formAdd.value.email;
    supp.supplier_CellNumber = this.formAdd.value.cell;

    this.data.AddSupplier(supp).subscribe((response: any) => {
      this.router.navigate(['/supplier']);
      this.snackbar.open('Supplier Has Been Successfully Added', 'Close', { duration: 2000 });

    });

  }





}