import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddCustomer } from 'src/shared/Models/Customer';
import { CustomerService } from 'src/shared/services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.css']
})
export class AddPopUpComponent implements OnInit {

  customerDetails = {} as AddCustomer;

  constructor(private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<AddPopUpComponent>, private customer_service: CustomerService,
    private toastr: ToastrService, private router: Router) {
  }

  ngOnInit(): void {

  }

  customerForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    mobile: this.builder.control('', Validators.required),
  });


  submitUser() {
    if (this.customerForm.valid) {
      this.customerDetails.customerName = this.customerForm.getRawValue()['name'];
      this.customerDetails.customerAddress = this.customerForm.getRawValue()['address'];
      this.customerDetails.mobileNo = (Number)(this.customerForm.getRawValue()['mobile']);
      this.customer_service.addCustomer(this.customerDetails).subscribe(res => {
        if (res.success) {
          this.toastr.success("Added successfully");
          this.dialog.close("added");
        }
      })
    }
    else {
      this.toastr.error("Please enter required fields");
    }
  }
}
