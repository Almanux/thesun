import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from "@angular/material/slider";
import { SateliteDetailComponent } from './satelite-detail/satelite-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataServiceService } from './data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateStormComponent } from './create-storm/create-storm.component';
import { SolarWindDetailComponent } from './solar-wind-detail/solar-wind-detail.component';
import { MisionsInfoComponent } from './misions-info/misions-info.component';


@NgModule({
  declarations: [
    AppComponent,
    SateliteDetailComponent,
    CreateStormComponent,
    SolarWindDetailComponent,
    MisionsInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    NgbModule,
    HttpClientModule,
    MatIconModule,
    MatSliderModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
