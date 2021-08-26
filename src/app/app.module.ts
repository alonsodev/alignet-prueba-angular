import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { CustomDialogComponent } from './customdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDialogComponent
  ],
  entryComponents: [
    CustomDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTableModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
