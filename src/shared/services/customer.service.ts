import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddCustomer, Customer } from '../Models/Customer';
import { Observable } from 'rxjs';
import { Response } from '../Models/Response';
import { OnSameUrlNavigation } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  public getAllCustomers():Observable<Response>{
    return this.httpClient.get<Response>("http://localhost:8080/api/v1/customer/getAllCustomers");
  }

  public getCustomerById(id:number):Observable<Response>{
    return this.httpClient.get<Response>("http://localhost:8080/api/v1/customer/getCustomerById/"+id);
  }

  public deleteCustomer(id:number):Observable<Response>{
    return this.httpClient.delete<Response>("http://localhost:8080/api/v1/customer/delete/"+id);
  }

  public addCustomer(customer:AddCustomer):Observable<Response>{
    const httpOptions= {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.post<Response>("http://localhost:8080/api/v1/customer/save",customer,httpOptions);
  }

  public updateCustomer(customer:Customer):Observable<Response>{
    const httpOptions= {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.put<Response>("http://localhost:8080/api/v1/customer/update",customer,httpOptions);
  }
}
