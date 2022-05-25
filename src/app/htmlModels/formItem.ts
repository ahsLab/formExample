export class FormItem
{
  _Id:string;
  _text:string;
  _aling:string;
  _stylefont:string;
  _inputType:string;
  _satirMesafe:string;
  constructor(text:string,Id:string,aling:string,styleFont:string,inputType:string,satirMesafe:string)
  {
    this._text=text,this._Id=Id,this._aling=aling,this._stylefont=styleFont,this._inputType=inputType,
    this._satirMesafe=satirMesafe
  }
  
}