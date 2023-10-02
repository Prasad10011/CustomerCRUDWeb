import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/shared/services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-pop-up',
  templateUrl: './delete-pop-up.component.html',
  styleUrls: ['./delete-pop-up.component.css']
})
export class DeletePopUpComponent {

  constructor(private customer_service: CustomerService, @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService) {

  }
  deleteCustomer() {
    this.customer_service.deleteCustomer(this.data.usercode).subscribe(value => {
      // const toast = this.toastr.success("User deleted successfully");
      if (value.success) {
        this.toastr.success("customer deleted successfully");
      }
      else {
        this.toastr.error("customer does not exists");
      }
    })
  }

}
