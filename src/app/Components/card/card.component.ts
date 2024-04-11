import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ShareComponent } from '../share/share.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [FormsModule,RouterLink,RouterOutlet]
})
export class CardComponent implements OnInit {
  private dialogRef: MatDialogRef<ShareComponent> | undefined;

  location: string = "Medchal,Hyderabad";
  isHeartFilled: boolean = false;
  isSavedFilled: boolean = false;
  isShareFilled: boolean = false;
  constructor(private dialog: MatDialog,
              private router : Router
  ) { }

  ngOnInit() {
  }
  seeLocation() {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.location)}`;
    window.open(googleMapsUrl, '_blank');
  }

  onHeartClick() {
    if (this.isHeartFilled === true) {
      this.isHeartFilled = false;
    } else {
      this.isHeartFilled = true;
    }
  }

  onSaveClick() {
    if (this.isSavedFilled === true) {
      this.isSavedFilled = false;
    } else {
      this.isSavedFilled = true;
    }
  }

  onShareClick() {
    if (this.isShareFilled === true) {
      this.isShareFilled = false;
    } else {
      this.isShareFilled = true;
    }
    this.dialogRef = this.dialog.open(ShareComponent);
    this.dialogRef?.afterClosed().subscribe(status => {
      this.isShareFilled = status;
    })
  }

}
