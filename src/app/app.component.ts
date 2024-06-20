import { Component } from '@angular/core';
import { Animation } from './components/carousel/carousel.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  slides: {url: string} [] = [
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/pic.png'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/pic.png'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
    {
      url: 'assets/bird.jpeg'
    },
  ];
  Animation = Animation
}
