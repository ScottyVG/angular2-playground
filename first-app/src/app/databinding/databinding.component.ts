import { Component } from '@angular/core';

import { PropertyBindingComponent } from './property-binding.component'
import { EventBindingComponent } from './event-binding.component'

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  directives: [PropertyBindingComponent, EventBindingComponent]
})
export class DatabindingComponent implements OnInit {
  stringInterpolation = 'This is string interpolation!';
  numberInterpolation = 2;

  onTest() {
    return true;
  }
}
