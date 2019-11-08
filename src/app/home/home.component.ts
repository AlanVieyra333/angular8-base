import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../shared';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  title = 'base';

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
  }

  request() {
    this.loaderService.show();
    setTimeout(() => { this.loaderService.hide(); }, 1000);
  }

}
