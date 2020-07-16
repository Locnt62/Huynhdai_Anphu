import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component'
import { CarouselComponent } from './carousel/carousel.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { WeatherComponent } from './weather/weather.component';
import { ToDoComponent } from './to-do/to-do.component'
import { SidebarComponent } from './sidebar/sidebar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { ChiTietSanPhamComponent} from './chi-tiet-san-pham/chi-tiet-san-pham.component'
import { FootterComponent } from './footter/footter.component';
import { NavbarComponent } from './navbar/navbar.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'jumbotron', component: JumbotronComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'todo', component: ToDoComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'ag-grid', component: AgGridComponent },
  { path: 'chi-tiet', component: ChiTietSanPhamComponent },
  { path: 'footer', component: FootterComponent},
  { path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
