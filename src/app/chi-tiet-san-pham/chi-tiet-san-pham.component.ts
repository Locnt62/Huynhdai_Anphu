import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-san-pham',
  templateUrl: './chi-tiet-san-pham.component.html',
  styleUrls: ['./chi-tiet-san-pham.component.css']
})
export class ChiTietSanPhamComponent implements OnInit {

  viTri: number;

  ST: number


  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.viTri = window.scrollY;
  }

  constructor() { }

  ngOnInit() {
  }

  Hello(){}

  scrollTo(id) {
  this.ST = document.getElementById(id).offsetTop;
  window.scrollTo({
    top: this.ST,
    behavior: 'smooth'
  });
}

}
