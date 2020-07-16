import { Component, OnInit } from '@angular/core';
import { WeatherSevice } from './weather/weather.service'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { TodoService } from '../app/to-do/services/todo.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public enableDock: boolean = true;
  public width: string = '220px';
  public dockSize: string = '72px';
  constructor() {

  }
  ngOnInit() {

  }
  private _opened: boolean = false;
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  public status :boolean = false;
   changeStatus(){
    this.status =!this.status;
    console.log(this.status)
  }
}

