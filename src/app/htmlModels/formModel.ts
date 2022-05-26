import { FormItem } from "./formItem";

export class FormModel
{
  Id:string;
  baslik:string;
  formItem:Array<FormItem>
  constructor(_id:string,_baslik:string,_formitem:Array<FormItem>)
  {
    this.Id=_id,this.baslik=_baslik,this.formItem=_formitem
  }
  
}