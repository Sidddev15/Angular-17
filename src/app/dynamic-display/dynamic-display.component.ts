// Import the necessary Angular decorators and functionality
import { Component, Input } from '@angular/core';

// Define the component using the @Component decorator
@Component({
  // 'app-dynamic-display' will be the tag name used in templates to include this component
  selector: 'app-dynamic-display', 

  // Declare this as a standalone component (no need to declare in NgModule)
  standalone: true,

  // Specify any modules to import, though it's empty here
  imports: [],

  // Path to the HTML file that defines the template for this component
  templateUrl: './dynamic-display.component.html',

  // Path to the stylesheet file for the component's styles
  styleUrl: './dynamic-display.component.scss'
})
export class DynamicDisplayComponent {
  // Declare the 'title' property as an Input that will receive data from the parent component
  @Input() title: string = ''; // Default value is an empty string

  // Define a method that gets called when a button is clicked
  onClick() {
    // Update the 'title' property when the button is clicked
    this.title = 'you clicked the button'; // This will be reflected in the template
  }
}
