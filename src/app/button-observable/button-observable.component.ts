import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

//Reactive Library
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/buffer';





@Component({
  selector: 'app-button-observable',
  templateUrl: './button-observable.component.html',
  styleUrls: ['./button-observable.component.css']
})
export class ButtonObservableComponent implements OnInit,AfterViewInit {
  @ViewChild('myButton') btn:ElementRef
  @ViewChild('myButtonTwo') btnTwo:ElementRef;

   //rxjs
   buttonStream$: Observable<MouseEvent>;
   btnRightClick$:Observable<MouseEvent>;
   btnRightSingleClick$:Observable<MouseEvent>;

  constructor() { }

  //This is how to hide the right click menu
  hideContextMenu(event:MouseEvent){

     return(false);



  }


  ngAfterViewInit(){

     this.buttonStream$ = Observable.fromEvent(this.btn.nativeElement,"click");

     let doubleClick$:Observable<any> = this.buttonStream$
                  .buffer(this.buttonStream$.debounceTime(250)).map(x=>x.length).filter(x=> x==2);

     doubleClick$.subscribe(x=>{
       console.log("You just clicked me twice!");
     },(error)=>{},()=>{});

     
     //myButtonTwo
     this.btnRightClick$ = Observable.fromEvent(this.btnTwo.nativeElement,'contextmenu');

     this.btnRightSingleClick$ = Observable.fromEvent(this.btnTwo.nativeElement,"click");
      
      this.btnRightSingleClick$.buffer(this.btnRightSingleClick$.debounceTime(250))
          .map(x => x.length).filter(x => x === 2).subscribe(x=>{
               console.log(`Left double click click!!`);
          });


     this.btnRightClick$.buffer(this.btnRightClick$.debounceTime(250))
                  .map(x => x.length).filter(x=> x==2).subscribe(x=>{
                    console.log(`You just clicked me twice (right mouse button)`);

                  });    






  }






  ngOnInit() {
  }

}
;