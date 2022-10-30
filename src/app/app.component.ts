import { Component } from '@angular/core';

import { SidebarConfiguration } from './modules/shared/config/sidebar.config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  sidebarConfiguration : SidebarConfiguration = new SidebarConfiguration();
}
