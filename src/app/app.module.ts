import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';
import { ChartsModule } from 'ng2-charts';
import { DropdownModule } from "ng2-dropdown";
import { Ng2MenuModule } from "ng2-menu";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';



import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { WeatherComponent } from './weather/weather.component';
import { from } from 'rxjs';
import { WeatherSevice } from './weather/weather.service';
import { ToDoComponent } from './to-do/to-do.component';
import { HeaderComponent } from './to-do/header/header.component';
import { FooterComponent } from './to-do/footer/footer.component';
import { TodoInputComponent } from './to-do/todo-input/todo-input.component';
import { TodoItemComponent } from './to-do/todo-item/todo-item.component';
import { TodoListComponent } from './to-do/todo-list/todo-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule} from 'ag-grid-angular';
import { NgApexchartsModule} from 'ng-apexcharts';
import { NavbarComponent } from './navbar/navbar.component';
import { FootterComponent } from './footter/footter.component';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PricingComponent,
    HomeComponent,
    CarouselComponent,
    JumbotronComponent,
    WeatherComponent,
    ToDoComponent,
    HeaderComponent,
    FooterComponent,
    TodoInputComponent,
    TodoItemComponent,
    TodoListComponent,
    SidebarComponent,
    DropdownComponent,
    AgGridComponent,
    NavbarComponent,
    FootterComponent,
    ChiTietSanPhamComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SidebarModule,
    ChartsModule,
    DropdownModule,
    Ng2MenuModule,
    NgbModule,
    Ng2PageScrollModule,
    NgApexchartsModule,
    AgGridModule.withComponents([])
  ],
  providers: [WeatherSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
