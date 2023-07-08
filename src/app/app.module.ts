import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { EscolasComponent } from './pages/escolas/escolas.component';
import { HttpClientModule } from '@angular/common/http';
import { TurmasComponent } from './pages/turmas/turmas.component';
import { StorageService } from './local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EscolasComponent,
    TurmasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
