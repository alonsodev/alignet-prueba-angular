import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from './customdialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('box1', { static: false }) box1: ElementRef<any>;
  @ViewChild('box2', { static: false }) box2: ElementRef<any>;

  box1Position: any = {x:0,y:0};
  box2Position: any = {x:0,y:0};

  rectangleWidth = 350;
  rectangleHeight = 200;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit () {
    this.box1Position.x = this.box1.nativeElement.getBoundingClientRect().x;
    this.box1Position.y = this.box1.nativeElement.getBoundingClientRect().y;
    this.box2Position.x = this.box2.nativeElement.getBoundingClientRect().x;
    this.box2Position.y = this.box2.nativeElement.getBoundingClientRect().y;
  }


  public dragEnded1(event:any){
    let targetBox1 = event.source.element.nativeElement.getBoundingClientRect();
    this.box1Position.x = targetBox1.x;
    this.box1Position.y = targetBox1.y;

    if(
      targetBox1.x + this.rectangleWidth >= this.box2Position.x && targetBox1.x <= this.box2Position.x + this.rectangleWidth
      && targetBox1.y + this.rectangleHeight >= this.box2Position.y && targetBox1.y <= this.box2Position.y + this.rectangleHeight
      ){
        console.log("colision");
        this.dialog.open(CustomDialogComponent,{

          width: '300px',
        });
    }
    console.log("targetBox1", targetBox1);
    console.log("this.box2Position", this.box2Position);
  }

  public dragEnded2(event:any){
    let targetBox2 = event.source.element.nativeElement.getBoundingClientRect();
    this.box2Position.x = targetBox2.x;
    this.box2Position.y = targetBox2.y;

    if(
      targetBox2.x + this.rectangleWidth >= this.box1Position.x && targetBox2.x <= this.box1Position.x + this.rectangleWidth
      && targetBox2.y + this.rectangleHeight >= this.box1Position.y && targetBox2.y <= this.box1Position.y + this.rectangleHeight
      ){
        console.log("colision");
        this.dialog.open(CustomDialogComponent,{
          width: '300px',
        });
    }
    console.log("targetBox2", targetBox2);
    console.log("this.box1Position", this.box1Position);
  }
}
