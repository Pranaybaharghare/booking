import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from '../../payment/payment.component';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css'],
  standalone:true
})
export class SlotsComponent implements OnInit {
  selectedTimeSlot: string = '';

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
    this.selectedTimeSlot = '7.00 am-10.00am';
  }

  selectTimeSlot(timeSlot: string) {
    this.selectedTimeSlot = timeSlot;
  }

  onBook() {
      this.dialog.open(PaymentComponent);
    }
}
