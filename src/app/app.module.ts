import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, MenuComponent, DeletedComponent, FavoriteComponent, TableComponent } from './components/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule } from "@angular/material";
import {MatIconModule} from '@angular/material/icon';
import { SearchPipe } from './search.pipe';
import { StatusAllPipe } from './status-all.pipe';
import { StatusFavoritePipe } from './status-favorite.pipe';
import { StatusDeletedPipe } from './status-deleted.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DeletedComponent,
    FavoriteComponent,
    TableComponent,
    SearchPipe,
    StatusAllPipe,
    StatusFavoritePipe,
    StatusDeletedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
