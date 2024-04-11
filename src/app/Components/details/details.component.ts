import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  standalone:true,
  imports:[RouterLink,RouterOutlet,RouterLinkActive]
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {    
        this.router.navigate(['/details/overview']);
      if (params['page'] === 'service') {
        this.router.navigate(['/details/service']);
      }
      if (params['page'] === 'slots') {
        this.router.navigate(['/details/slots']);
      }
      if (params['page'] === 'rules') {
        this.router.navigate(['/details/rules']);
      }
    });
  }

}
