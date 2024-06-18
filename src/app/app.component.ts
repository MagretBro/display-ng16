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
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://as2.ftcdn.net/v2/jpg/05/62/00/63/1000_F_562006361_m7TWdjygckwKBT7UG8IpE4MiIdLF7zA9.jpg'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://as2.ftcdn.net/v2/jpg/05/62/00/63/1000_F_562006361_m7TWdjygckwKBT7UG8IpE4MiIdLF7zA9.jpg'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
    {
      url: 'https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/440295216_820233250132192_2053997752159370290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCaQZczdvKZmL7ddSEdU-spD_uDzCouaykP-4PMKi5rABwQ-vuPco6154OkrhkBQjT1LPM7vtfi0zeM51OYRVP&_nc_ohc=HFa-pXzc-zEQ7kNvgG4cALE&_nc_ht=scontent.fbkk18-2.fna&oh=00_AYBtYtfhd6a1qXPmUzulFRNZb1fn16nGlZW8W5_FLRSf-g&oe=66761C81'
    },
  ];
  Animation = Animation
}
