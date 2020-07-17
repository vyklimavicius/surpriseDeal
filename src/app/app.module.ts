import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DescriptionComponent } from './components/description/description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ProductImageComponent } from './components/product.image/product.image.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    ProductImageComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialog,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
