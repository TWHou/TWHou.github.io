import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  project = {
    name: 'Voting App',
    image: 'https://images.unsplash.com/photo-1494172892981-ce47ca685eea',
    stack: ['react', 'react-router', 'express', 'mangodb'],
    info: 'voting app details'
  };

  constructor() { }

  ngOnInit() {
  }

}
