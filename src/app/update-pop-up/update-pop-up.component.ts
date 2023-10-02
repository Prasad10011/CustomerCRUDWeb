import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/shared/Models/Customer';
import { CustomerService } from 'src/shared/services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-pop-up',
  templateUrl: './update-pop-up.component.html',
  styleUrls: ['./update-pop-up.component.css']
})
export class UpdatePopUpComponent implements OnInit {

  customerDetails = {} as Customer;

  constructor(private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<UpdatePopUpComponent>, private customer_service: CustomerService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.showCustomerDetails();
  }

  customerForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    mobile: this.builder.control('', Validators.required),
  });

  showCustomerDetails() {
    this.customer_service.getCustomerById(this.data.usercode).subscribe(value => {
      this.customerDetails = value.data;
      this.customerForm.setValue({
        name: this.customerDetails.customerName,
        address: this.customerDetails.customerAddress,
        mobile: (this.customerDetails.mobileNo).toString(),
      });
    })
  }

  submitUser() {
    if (this.customerForm.valid) {
      this.customerDetails.customerName = this.customerForm.getRawValue()['name'];
      this.customerDetails.customerAddress = this.customerForm.getRawValue()['address'];
      this.customerDetails.mobileNo = (Number)(this.customerForm.getRawValue()['mobile']);
      this.customer_service.updateCustomer(this.customerDetails).subscribe(res => {
        if(res.success){
        this.toastr.success("Updated successfully");
        this.dialog.close();
        }
      })
    }
    else {
      this.toastr.error("Please enter required fields");
    }
  }
}
