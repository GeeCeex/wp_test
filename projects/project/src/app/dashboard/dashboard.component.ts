import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  posts:any[] = [
    {"name" : 'Card Heading',"image" : 'https://cdn.dribbble.com/users/1007583/screenshots/5426597/screen4_1x.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://digitalsynopsis.com/wp-content/uploads/2017/08/free-hd-backgrounds-blurred-geometric-polygon-textures-4.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://www.w3schools.com/css/paris.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/aurora_prior_to_launch.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://i.pinimg.com/originals/ca/43/80/ca4380e906260c928503e31c7df5f649.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://66.media.tumblr.com/tumblr_mdq1vwplXD1rc7pm9o1_400.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/aurora_prior_to_launch.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'http://desktop-backgrounds-org.s3.amazonaws.com/400x300/iphone-backgrounds-tumblr-hi-tech.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://i.pinimg.com/originals/10/16/39/101639f864d5b4b072c8014f32f2479a.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://cdn.dribbble.com/users/1007583/screenshots/5426597/screen4_1x.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://digitalsynopsis.com/wp-content/uploads/2017/08/free-hd-backgrounds-blurred-geometric-polygon-textures-4.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://www.w3schools.com/css/paris.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/aurora_prior_to_launch.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://i.pinimg.com/originals/ca/43/80/ca4380e906260c928503e31c7df5f649.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://66.media.tumblr.com/tumblr_mdq1vwplXD1rc7pm9o1_400.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
    {"name" : 'Card Heading',"image" : 'https://i.pinimg.com/originals/10/16/39/101639f864d5b4b072c8014f32f2479a.jpg', "claims" : 22, "excerpt" : 'A small text description followed by a call to action'},
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.posts)
  }

}
