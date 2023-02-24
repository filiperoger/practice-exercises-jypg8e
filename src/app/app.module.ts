import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ChoresListComponent } from './chores-list/chores-list.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MovieListComponent, ChoresListComponent, PageTitleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
