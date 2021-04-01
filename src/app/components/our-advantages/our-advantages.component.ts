import {Component, OnInit} from '@angular/core';
import {OurAdvantage} from '../../models/our-advantage';
import {OurAdvantageService} from '../../data/services/our-advantage.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-our-advantages',
  templateUrl: './our-advantages.component.html',
  styleUrls: ['./our-advantages.component.scss']
})
export class OurAdvantagesComponent implements OnInit {

  items!: OurAdvantage[];
  baseUrl = environment.baseUrl;

  constructor(
    private service: OurAdvantageService
  ) {
  }

  ngOnInit(): void {
    this.initItems();
  }

  initItems(): void {
    this.service.getAll().subscribe(response => {
      this.items = response;
    });
  }

}
