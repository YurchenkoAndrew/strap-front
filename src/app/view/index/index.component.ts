import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../data/services/settings.service';
import {Setting} from '../../models/setting';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  setting!: Setting;

  constructor(
    private service: SettingsService
  ) {
  }

  ngOnInit(): void {
    this.initSetting();
  }

  initSetting(): void {
    this.service.get(1).subscribe(response => {
      this.setting = response;
    });
  }

}
