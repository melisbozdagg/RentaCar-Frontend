import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/models/brand';
import{BrandService} from 'src/app/services/brand.service'

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brand:Brands[] = [];
  dataLoaded=false;
  constructor(private brandservice:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandservice.getBrands().subscribe(response=>{
      this.brand = response.data;
      this.dataLoaded=true;
  });
}
}
