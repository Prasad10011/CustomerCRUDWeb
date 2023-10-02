import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { DeletePopUpComponent } from './delete-pop-up/delete-pop-up.component';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { UpdatePopUpComponent } from './update-pop-up/update-pop-up.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AddPopUpComponent } from './add-pop-up/add-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DeletePopUpComponent,
    UpdatePopUpComponent,
    AddPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
