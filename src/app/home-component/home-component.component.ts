import { Component } from '@angular/core';
import { ContentComponentComponent } from '../content-component/content-component.component';
import { SlideComponentComponent } from '../slide-component/slide-component.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [ContentComponentComponent, SlideComponentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
