import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../navbar/DarkMode.service';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css'],
  standalone:true
})
export class DashboardComponent implements OnInit {

  constructor(public darkModeService:DarkModeService) { }

  ngOnInit() {
  }

}
