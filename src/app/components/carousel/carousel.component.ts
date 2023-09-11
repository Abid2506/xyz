import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
 // standalone: true,
 //imports: [NgbCarouselModule, NgIf],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [1000, 1011, 984,700].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
