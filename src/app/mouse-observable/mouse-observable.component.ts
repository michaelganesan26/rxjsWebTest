import { Component, OnInit, ViewChild, ElementRef,AfterViewInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

import { Subscriber } from 'rxjs/Subscriber';



@Component({
  selector: 'app-mouse-observable',
  templateUrl: './mouse-observable.component.html',
  styleUrls: ['./mouse-observable.component.css']
})
export class MouseObservableComponent implements OnInit,AfterViewInit {
  
  @ViewChild("btnOne") btn:ElementRef;
  @ViewChild("btnTwo") btnTwo:ElementRef;
  @ViewChild("textArea") textArea:ElementRef;
  
  btnStream: Observable<MouseEvent>;
  textAreaStream: Observable<MouseEvent>;

  constructor(private renderer:Renderer2) {

   }

  ngOnInit() {
  }

  ngAfterViewInit(){

    console.log(this.btn.nativeElement);
    //this.renderer.setProperty(this.btn.nativeElement,'innerText','Wow, You just changed me');
    this.btn.nativeElement.innerText = "Bless You always!";

    this.btnStream = Observable.fromEvent<MouseEvent>(this.btnTwo.nativeElement,'click');

    this.btnStream.subscribe((event:MouseEvent)=>{
       console.log(`Your coordinate is: ${event.clientX},${event.clientY} px,`);
    });
    

  //  //Return the coordinates 
  //   Observable.fromEvent<MouseEvent>(this.textArea.nativeElement,'mousemove').subscribe((event:MouseEvent)=>{
  //     console.log(`Your coordinate is: ${event.clientX},${event.clientY} px,`);


  //   });

  //   Observable.fromEvent<MouseEvent>(this.textArea.nativeElement,'blur').subscribe((event:MouseEvent)=>{
  //       this.renderer.setStyle(this.textArea.nativeElement,"border","2px solid green");
  //   });


  //   Observable.fromEvent<MouseEvent>(this.textArea.nativeElement,'mouseenter').subscribe((event:MouseEvent)=>{
  //     this.renderer.setStyle(this.textArea.nativeElement,"border","2px solid orange");
  // });

    
    //Create observables from the current observable

    this.textAreaStream = Observable.fromEvent<MouseEvent>(this.textArea.nativeElement,"mousemove");

    this.textAreaStream.subscribe((event:MouseEvent)=>{
      //console.log(`All mouse move event: Main Area (${event.clientX},${event.clientY})`);

    });

    //Return the position of the element
    let rect = this.textArea.nativeElement.getBoundingClientRect();
  
    let width = (rect.left + rect.width)/2;
    console.log('Current Width: ',width);
    
    //Create observables from the main Observable
    let moveOnTheRight$= this.textAreaStream.filter(e=> e.clientX > width);
    
    let moveOnTheLeft$= this.textAreaStream.filter(e=> e.clientX < width);
    
    //Subscribe
    moveOnTheLeft$.subscribe((e:MouseEvent)=>{
        console.log(`You are moving to the left of text area! ${e.clientX}`);
    });
     
    moveOnTheRight$.subscribe((e:MouseEvent)=>{
      console.log(`You are moving to the right of text area! ${e.clientX}`);
  });
   




  }

  testClick(event:MouseEvent):void{
     console.log('You just clicked me!');

  }




}
