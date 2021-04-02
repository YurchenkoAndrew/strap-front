import {Component, OnInit} from '@angular/core';
import {Delivery} from '../../models/delivery';
import {DeliveryService} from '../../data/services/delivery.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  delivery!: Delivery;
  baseUrl = environment.baseUrl;

  constructor(private service: DeliveryService) {
  }

  ngOnInit(): void {
    this.initDelivery();
  }

  initDelivery(): void {
    this.service.get(1).subscribe(response => {
      this.delivery = response;
    });
  }

}
