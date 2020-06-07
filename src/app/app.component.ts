import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-angular';
  is_login = 'false';

  ngOnInit(): void {
  	this.is_login = localStorage.getItem("is_login")
  }
}
