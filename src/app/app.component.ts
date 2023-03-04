import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Interpolation
  // data = 'Enlight Solution'
  // sum = 5 + 5

  // Property Binding
  // name = 'Enlight'
  // disable = true

  // Two Way Binding
  // title = 'Two Way Binding';
  // data: any

  // Parent to Child
  // title = 'Parent to Child'
  // data = 100

  // Child to Parent
  title = 'Child to Parent'
  data = 'Parent Compo'
  updateData(item: string) {
    console.log(item)
    this.data = item;
  }

}
