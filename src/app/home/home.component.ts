import { Component, OnInit } from '@angular/core';

import { TweetsService } from '../services/tweets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ TweetsService ]
})
export class HomeComponent implements OnInit {

  tweets: Array<Object> = [];
  loading = false;

  constructor( private tweetsService: TweetsService ) { }

  ngOnInit() {
    this.loadTweets();
  }

  loadTweets() {
    this.tweetsService.get()
    .subscribe(
      (tweets) => {
        console.log(tweets);
        this.tweets = tweets;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
