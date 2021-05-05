import { Brands } from "./brand";
import { ResponseModel } from "./ResponseModel";


export interface BrandResponseModel extends ResponseModel{
    data:Brands[]
}