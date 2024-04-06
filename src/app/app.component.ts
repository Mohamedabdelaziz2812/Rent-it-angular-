import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isVisible : boolean = true;
  constructor(private auth : AuthenticationService){}
  ngOnInit(): void {
    this.auth.isLoggedIn$.subscribe((isLoggedIn)=>{
      this.navBarisLoggedIn = isLoggedIn;
         });
  }
  title = 'rentit';
  navBarisLoggedIn = false;
}
