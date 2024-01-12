import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked,OnDestroy{
[x: string]: any;
  title:string = 'This is demo Component';
  @Input() message:string = "Hello";
  @ViewChild('temp') tempPara!: ElementRef;
  @ContentChild('temp1') parentContent!:ElementRef


  constructor(){
    console.log("Demo component constructor called");
    console.log(this.title);
    console.log(this.message);
  }



  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChange hook will be executed");
    console.log(changes);
  };


  ngOnInit(): void {
    console.log("ngOnInit will be executed");

  };


  ngDoCheck(){
      console.log("Do check Hook Will be executed");
  };

  ngAfterContentInit(){
    console.log("ngAfterContentInnit hook will be executeds");
    console.log(this.parentContent.nativeElement);
  };


  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Hook will be executed");

  }

  ngAfterViewInit(){
console.log("ngAterViewInit hook will be called");
console.log("ngAterViewInit hook will be called", this.tempPara);

  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
    console.log(this.tempPara.nativeElement.textContent);

  }


  ngOnDestroy(){
    console.log("ngOnChange hook will be call");
  }
}


