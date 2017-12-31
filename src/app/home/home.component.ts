import { Component, OnInit } from '@angular/core';

import { TweetsService } from '../services/tweets.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ TweetsService ]
})
export class HomeComponent implements OnInit {

  tweets: Array<Object> = [];
  loading = false;

  constructor( private tweetsService: TweetsService, private authService: AuthService ) { }

  ngOnInit() {
    this.loadTweets();
  }

  loadTweets() {
    this.loading = true;
    this.tweetsService.get()
    .subscribe(
      (tweets) => {
        console.log(tweets);
        this.tweets = tweets;
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  logout() {
    this.authService.logout();
  }
}
