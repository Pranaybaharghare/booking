import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  standalone: true
})
export class PaymentComponent implements OnInit {


  paymentType: string = 'cash';
  showUPIDropdown = false;
  selectedUPIOption: string = 'UPI';
  showCardDropdown: boolean = false;
  selectedCardOption: string = 'Card';
paymentButtonClick:boolean=false;
pay:string='Pay';
  constructor() { }

  ngOnInit() {
    this.selectedUPIOption = 'upi';
  }

  selectPaymentType(payment: string) {
    this.paymentType = payment;
  }

  toggleUPIDropdown() {
    this.showUPIDropdown = !this.showUPIDropdown;
  }

  selectUPIOption(option: 'GPay' | 'Paytm') {
    this.paymentType = 'upi';
    this.selectedUPIOption = option;
    // Perform further actions based on the selected UPI option
    console.log('Selected UPI option:', this.selectedUPIOption);

  }

  toggleCardDropdown() {
    this.showCardDropdown = !this.showCardDropdown;
  }

  selectCardOption(option: 'visa' | 'mastercard' | 'american-express') {
    this.paymentType = 'card';
    this.selectedCardOption = option;
    // Perform further actions based on the selected UPI option
    console.log('Selected UPI option:', this.selectedCardOption);
  }

  onPay() {
    this.paymentButtonClick = true;
    this.pay ='Processing';
  }

}
