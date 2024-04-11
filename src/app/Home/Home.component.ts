import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
  standalone:true,
  imports:[MatSlideToggleModule,MatSidenavModule, MatButtonModule,MatIconModule]
})
export class HomeComponent implements OnInit {
  showFiller:Boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
