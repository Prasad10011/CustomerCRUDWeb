import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/shared/services/customer.service';
import { Customer } from 'src/shared/Models/Customer';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';
import { UpdatePopUpComponent } from '../update-pop-up/update-pop-up.component';
import { AddPopUpComponent } from '../add-pop-up/add-pop-up.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['Id', 'Name', 'Address', 'MobileNo', 'Action'];
  customers: any;
  dataSource = new MatTableDataSource<Customer>();

  constructor(private customer_service: CustomerService,private dialog:MatDialog) {

  }

  ngAfterViewInit() {
    this.showCustomers();
    // this.dataSource.paginator = this.paginator;
  }

  public showCustomers() {
    this.customer_service.getAllCustomers().subscribe((value) => {
      this.customers = value.data;
      this.dataSource.data = value.data;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addCustomer() {
    const Addpopup = this.dialog.open(AddPopUpComponent, {
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '200ms',
      width: '30%'
    })
    Addpopup.afterClosed().subscribe(res => {
      if(res=="added"){
        this.showCustomers();
      }
    })
    }

  updateCustomer(customerId: any) {
    const Updatepopup = this.dialog.open(UpdatePopUpComponent, {
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '200ms',
      width: '30%',
      data: {
        usercode: customerId
      }
    })
    Updatepopup.afterClosed().subscribe(res => {
      this.showCustomers();
    })
  }


  deleteCustomer(customerId: any) {
    const delpopup = this.dialog.open(DeletePopUpComponent, {
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '200ms',
      width: '30%',
      data: {
        usercode: customerId
      }
    })
    delpopup.afterClosed().subscribe(res => {
      this.showCustomers();
    })
  }

}


// const ELEMENT_DATA: Customer[] = [];


