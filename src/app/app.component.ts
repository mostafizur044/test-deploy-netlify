import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netlify-demo';

  constructor(private http: HttpClient) {
    http.get('https://heroku-node-demo-app.herokuapp.com/api').subscribe(data => {
      console.log(data);
    });
  }
}
