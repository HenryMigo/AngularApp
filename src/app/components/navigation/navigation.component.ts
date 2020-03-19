import { Component, OnInit } from '@angular/core';

import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  faLightbulb = faLightbulb;

  constructor() { }

  ngOnInit() {
  }

}
