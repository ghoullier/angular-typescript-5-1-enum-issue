import { Component } from '@angular/core';

import { Enum_TS_5_1 } from './Enum_TS_5_1';
import { Enum_TS_5_0 } from './Enum_TS_5_0';

console.log('Enum_TS_5_1', Enum_TS_5_1);
console.log('Enum_TS_5_0', Enum_TS_5_0);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Enum_TS_5_1 = JSON.stringify(Enum_TS_5_1);
  Enum_TS_5_0 = JSON.stringify(Enum_TS_5_0);
}
