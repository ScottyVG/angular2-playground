import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding';

@Component({
  selector: 'app-root',
  templateUrl: `
    <h1>Root Component</h1>
    <fa-databinding></fa-databinding>
  `,
  directives: [DatabindingComponent]
})
export class AppComponent {
}
