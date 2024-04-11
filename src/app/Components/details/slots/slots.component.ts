import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css'],
  standalone:true
})
export class SlotsComponent implements OnInit {
  selectedTimeSlot: string = '';

  constructor() { }

  ngOnInit() {
    this.selectedTimeSlot = '7.00 am-10.00am';
  }

  selectTimeSlot(timeSlot: string) {
    this.selectedTimeSlot = timeSlot;
  }

  onBook() {
    // console.log();
    
    }
}
