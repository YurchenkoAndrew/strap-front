import {Component, OnInit} from '@angular/core';
import {About} from '../../models/about';
import {AboutService} from '../../data/services/about.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about!: About;
  baseUrl = environment.baseUrl;

  constructor(private service: AboutService) {
  }

  ngOnInit(): void {
    this.initAbout();
  }

  initAbout(): void {
    this.service.get(1).subscribe(response => {
      this.about = response;
    });
  }

}
