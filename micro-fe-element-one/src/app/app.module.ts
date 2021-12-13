import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddElComponent } from './add-el/add-el.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddElComponent
  ],
  entryComponents: [
    AddElComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const customEl = createCustomElement(AddElComponent, {
      injector: this.injector
    });
    customElements.define('custom-el-1', customEl);
  }

  ngDoBootstrap(): void {}
}
