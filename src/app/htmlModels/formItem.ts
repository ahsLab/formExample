export class FormItem
{
  Id:string;
  text:string;
  aling:string;
  stylefont:string;
  inputType:string;
  satirMesafe:string;
  constructor(text:string,Id:string,aling:string,styleFont:string,inputType:string,satirMesafe:string)
  {
    this.text=text,this.Id=Id,this.aling=aling,this.stylefont=styleFont,this.inputType=inputType,
    this.satirMesafe=satirMesafe
  }
  
}