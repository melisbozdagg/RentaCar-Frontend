import { Component, OnInit } from '@angular/core';
import { customers } from 'src/app/models/customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customer:customers[] = [];
  constructor(private customerService:CustomersService) { }

  ngOnInit(): void {
    this.getCustomers()
  }
  getCustomers(){
  this.customerService.getClients().subscribe(response=>{
    this.customer=response.data;
  })
  }

}
