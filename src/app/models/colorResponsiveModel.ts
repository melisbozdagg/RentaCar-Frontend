import { colors } from "./color";
import { ResponseModel } from "./ResponseModel";
export interface colorResponsiveModel extends ResponseModel{
  data:colors[];
}