import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
roll:number=10;
name:string="Dr. srikant Prasad"
status:boolean=true;

 ngOnInit(){
  console.log(this.roll);
  console.log(this.name);
  console.log(this.status);
 }
}
