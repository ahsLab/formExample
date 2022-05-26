import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  @Output() ItemEvent=new EventEmitter();
  @Output() InputEvent=new EventEmitter();
  @Output() TimeEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
AddInput()
{
  this.ItemEvent.emit()
  
}
AddChecBox()
{
  this.InputEvent.emit()
}
AddTime()
{
  this.TimeEvent.emit()

}
}
