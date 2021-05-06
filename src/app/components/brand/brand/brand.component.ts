import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brands } from 'src/app/models/brand';
import{BrandService} from 'src/app/services/brand.service'

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brand:Brands[] = [];
  currentBrand :Brands;
  dataLoaded=false;
  constructor(private brandservice:BrandService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["name"]){
        this.getBrandsByName(params["name"]);
      }
      else this.getBrands();
    })
    this.getBrands();
  }

  getBrands(){
    this.brandservice.getBrands().subscribe(response=>{
      this.brand = response.data;
      this.dataLoaded=true;
  });
  }
  getCurrentBrand(brand:Brands){
    if(brand==this.currentBrand){
      return "table-secondary table-dark"
    }
    else{
      return "table-secondary"
    }
  }
  setCurrentBrand(brand:Brands){
    this.currentBrand=brand;
    console.log(brand.name);
  }
  getBrandsByName(brand:string){
    this.brandservice.getBrandsByName(brand).subscribe(response=>{
      this.brand = response.data;
      this.dataLoaded=true;
    })
  };
  
}
