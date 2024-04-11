import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css'],
  standalone:true
})
export class SignoutComponent implements OnInit {


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  onClick() {
   this.dialog.closeAll();
    }
}
