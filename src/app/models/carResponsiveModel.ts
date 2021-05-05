import { car } from "./car";
import { ResponseModel } from "./ResponseModel";

export interface carResponsiveModel extends ResponseModel{
    data:car[];
}