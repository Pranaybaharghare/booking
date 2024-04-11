import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  standalone:true
})
export class OverviewComponent implements OnInit {

location:string="NexGen Cricket Academy, Mandaipally Vill Thumukunta - Shamirpet Mandal Medchal Malkajgiri Dist";
  constructor() { }

  ngOnInit() {
  }

  seeLocation() {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.location)}`;
    window.open(googleMapsUrl, '_blank');
  }
}
