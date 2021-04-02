import {Component, Input, OnInit} from '@angular/core';
import {Setting} from '../../models/setting';
import {environment} from '../../../environments/environment';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() setting!: Setting;
  baseUrl = environment.baseUrl;

  isNoHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => !result.matches),
      shareReplay()
    );
  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
  }

  ngOnInit(): void {
  }
}
