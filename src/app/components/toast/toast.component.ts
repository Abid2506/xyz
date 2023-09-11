import { Component } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-toast',
 // standalone: true,
//	imports: [NgbToastModule, NgIf],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  show = true;
}
