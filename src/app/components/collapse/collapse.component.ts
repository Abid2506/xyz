import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collapse',
 // standalone: true,
	//imports: [NgbCollapseModule],
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent {
  public isCollapsed = false;
}
