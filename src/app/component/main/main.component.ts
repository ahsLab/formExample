import { Component, ElementRef, OnInit } from '@angular/core';
import { HtmlElementsComponent } from 'src/app/htmlModels/html-elements/html-elements.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormItem } from 'src/app/htmlModels/formItem';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listItems:Array<FormItem>=[]
  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
  
  }
  drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
    moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);
  }
  SatirEkle()
  {
    let a= new HtmlElementsComponent()
    let customObj = new FormItem(
      "Episode I ","fgdfgdgfdg","","","",""
    );
    
    this.listItems.push(customObj)
      
    
  }


  

}
