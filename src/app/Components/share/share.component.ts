import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  private dialogRef: MatDialogRef<ShareComponent> | undefined;

  currentUrl: string = '';
  buttonName: string = "copy";
  @ViewChild('urlInput', { static: true }) urlInputRef: ElementRef<HTMLInputElement> | undefined;
  @Output() shareStatusChanged = new EventEmitter<boolean>();
  constructor(private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.currentUrl = window.location.href;
  }

  copyUrl() {
    this.buttonName = "copied";
    navigator.clipboard.writeText(this.currentUrl);
  }
  
  selectUrl() {
    if (this.urlInputRef?.nativeElement) {
      this.urlInputRef.nativeElement.select();
    }
  }

  closeDialog() {
    if (this.dialog) {
      this.dialog.closeAll();
      this.shareStatusChanged.emit(false);
    }
  }
}
