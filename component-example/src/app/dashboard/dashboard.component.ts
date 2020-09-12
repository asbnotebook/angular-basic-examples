import { Component, OnInit } from '@angular/core';

export interface Post {
  name: String,
  totalWords: number
};

export interface PostCard{
  title: String,
  estimatedReadTime: number,
  post : Post
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  _cards :Array<PostCard> = [];

  constructor() { }

  ngOnInit(): void {
    this.generatePostData();
  }

  generatePostData(){
    for(var i=0; i<30; i++){
      let post = {'name': 'Post '+i, 'totalWords' : i*100 };
      this._cards.push({'title': 'Post ' + i, 'estimatedReadTime' : i*2, 'post' : post });
    }
  }
}
