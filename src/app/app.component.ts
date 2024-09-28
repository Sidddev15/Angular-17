import { Component } from '@angular/core'; // Import the Component decorator to create an Angular component.
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives like ngIf and ngFor.
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet for routing between different components.
import { FormsModule } from '@angular/forms'; // Import FormsModule to enable template-driven forms and ngModel for two-way data binding.

@Component({
  selector: 'app-root', // Define the selector for this component, which can be used in HTML as <app-root></app-root>.
  standalone: true, // Mark this component as standalone, allowing it to be used independently.
  imports: [RouterOutlet, CommonModule, FormsModule], // Import necessary modules for this component.
  templateUrl: './app.component.html', // Specify the HTML template for this component.
  styleUrls: ['./app.component.scss'] // Specify the stylesheet for this component (corrected from styleUrl).
})
export class AppComponent {
  name: string = ''; // Declare a property 'name' to hold user input, initialized as an empty string.
}
