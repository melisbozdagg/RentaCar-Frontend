import { customers } from "./customers";
import { ResponseModel } from "./ResponseModel";

export interface customerResponsiveModel extends ResponseModel{
    data:customers[];
}