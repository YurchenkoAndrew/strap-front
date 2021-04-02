import {Component, Input, OnInit} from '@angular/core';
import {Setting} from '../../models/setting';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() setting!: Setting;
  baseUrl = environment.baseUrl;

  constructor() {
  }

  ngOnInit(): void {
  }

}
