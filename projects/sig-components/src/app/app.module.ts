import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { IconComponent } from './icon/icon.component';
import { LabelComponent } from './label/label.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [IconComponent, LabelComponent, LogoComponent, NavbarComponent],
  imports: [BrowserModule, MatIconModule],
  entryComponents: [
    IconComponent,
    LabelComponent,
    LogoComponent,
    NavbarComponent,
  ],
  bootstrap: [AppModule],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const iconComponent = createCustomElement(IconComponent, { injector });
    customElements.define('sig-icon', iconComponent);

    const labelComponent = createCustomElement(LabelComponent, { injector });
    customElements.define('sig-label', labelComponent);

    const logoComponent = createCustomElement(LogoComponent, { injector });
    customElements.define('sig-logo', logoComponent);

    const navbarComponent = createCustomElement(NavbarComponent, { injector });
    customElements.define('sig-navbar', navbarComponent);
  }

  ngDoBootstrap() {}
}
