import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './componentes/menu-title/menu-title.component';
import { BigCardComponent } from './componentes/big-card/big-card.component';
import { SmallCardComponent } from './componentes/small-card/small-card.component';

@NgModule({
  declarations: [AppComponent, MenuBarComponent, MenuTitleComponent, BigCardComponent, SmallCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
