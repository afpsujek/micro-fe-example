import { APP_BASE_HREF } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageElComponent } from './message-el/message-el.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageElComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    MessageElComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector) {
    const customEl = createCustomElement(MessageElComponent, {
      injector: this.injector
    });
    customElements.define('custom-el-2', customEl);
  }

  ngDoBootstrap(): void {}
}
