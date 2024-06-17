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
      url: 'https://www.flickr.com/photos/mmaselli/8446880939'
    },
    {
      url: 'https://www.flickr.com/photos/mmaselli/8446880939'
    }
  ];
  Animation = Animation
}
