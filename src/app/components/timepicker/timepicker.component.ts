import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-timepicker',
  standalone: true,
	imports: [NgbTimepickerModule, FormsModule, JsonPipe],
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent {
  time = { hour: 13, minute: 30 };
}
