import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectiveComponent } from './directive/directive.component';
import { StyleDirective } from './style.directive';
import { Renderer2Component } from './renderer2/renderer2.component';
import { Renderer2Directive } from './renderer2.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { AppHoverDirective } from './CustomDirective/app-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DirectiveComponent,
    StyleDirective,
    Renderer2Component,
    Renderer2Directive,
    HighlightDirective,
    AppHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
