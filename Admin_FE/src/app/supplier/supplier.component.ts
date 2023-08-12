import { Component, OnInit } from '@angular/core';
import { Supplier } from '../shared/supplier';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  supp: Supplier[] = []

  constructor(private dService: DataService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.GetSuppliers()
    console.log(this.supp)
  }

  //Get All Suppliers
  GetSuppliers() {
    this.dService.GetAllSuppliers().subscribe(result => {
      let suppList: any[] = result
      suppList.forEach((element) => {
        this.supp.push(element)
      });
    })
  }


  //Delete a supplier
  DeleteSupplier(supplier_ID: Number) {
    this.dService.DeleteSupplier(supplier_ID).subscribe((response: any) => {
      const index = this.supp.findIndex(supplier => supplier.supplier_ID === supplier_ID);
      if (index !== -1) {
        this.supp.splice(index, 1);
      }
      this.snackbar.open('Supplier has been successfully deleted', 'Close', { duration: 3000 });
    });
  }

  //UpdateSupplier page link
  updateSupplier(supplier_ID: Number) {
    this.router.navigate(['/update', supplier_ID]);
  }


  //Get All Suppliers
  searchInput: string = "";
  searchSupplier() {
    if (this.searchInput.trim() === "") {
      location.reload();
      this.GetSuppliers();
    }
    else {
      this.dService.SearchSupplier(this.searchInput).subscribe(result => {
        let suppList: any[] = result;
        this.supp = [];
        suppList.forEach((element) => {
          this.supp.push(element);
        })
      })
    }
  }

}





