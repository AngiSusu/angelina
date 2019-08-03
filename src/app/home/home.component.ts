import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import {CdkDropList, CdkDragDrop, CdkDragEnter, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

   ngOnInit() {
  }

}
