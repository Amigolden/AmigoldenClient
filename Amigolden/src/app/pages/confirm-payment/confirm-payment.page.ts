import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.page.html',
  styleUrls: ['./confirm-payment.page.scss'],
})
export class ConfirmPaymentPage implements OnInit {
  total = 0;
  data = [
    {
      amount: 50,
      quantity: 3,
      title: '30 minute yoga class'
    },
    {
      amount: 3,
      quantity: 1,
      title: 'Service Fee'
    }
  ];
  constructor() { }

  ngOnInit() {
    this.total = 0;
    this.data.map(item => {
      this.total  += (item.amount * item.quantity);
    });
  }

}
