import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  declare title:string;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.setHeader()
  }

  private setHeader() {
    let path = this.route.url.split('/')[2];
    this.title = decodeURIComponent(path);
  }

}
