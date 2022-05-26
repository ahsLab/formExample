import { Component, ElementRef, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormItem } from 'src/app/htmlModels/formItem';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listItems:Array<FormItem>=[]
  
  baslik:string=""
  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
  
  }
  drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
    moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);
    console.log(event.previousIndex);
    console.log(event.currentIndex);
    
  }
  SatirEkle()
  {

    let customObj = new FormItem(
      "Satır","fgdfgdgfdg","","","",""
    );
    
    this.listItems.push(customObj)
      
  }

  InputAdd()
  {
    let customObj = new FormItem(
      "Onay Kutusu","fgdfgdgfdg","","","",""
    );
    
    this.listItems.push(customObj)
  }
  TimeAdd()
  {
    let customObj = new FormItem(
      "Tarih Alanı","fgdfgdgfdg","left","","",""
    );
    
    this.listItems.push(customObj)
  }
  OnChange(e:Event,id:string,type:string)
  {

  }
  Delete(id:string)
  {

  }

}
