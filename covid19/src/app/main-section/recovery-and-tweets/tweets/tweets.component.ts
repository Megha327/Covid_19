import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  constructor() { }

  tweets = [
    {
      "created_at": "Sat Apr 18 10:48:00 +0000 2020",
      "text": "To slow down #COVID19 transmission and reduce mortality, every country needs to keep implementing a National Action Plan that’s based on a whole-of society approach & a realistic appraisal of what can be done first.",
      "user": {
        "name": "World Health Organization (WHO)",
        "screen_name": "WHO",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/875476478988886016/_l61qZdR_normal.jpg"
      },
      "entities": {
       
      },
      "retweet_count": 160,
      "favorite_count": 295
    },
    {
      "created_at": "Sat Apr 4 02:38:00 +0000 2020",
      "text": "PM @narendramodi chaired a joint meeting of the Empowered Groups constituted for planning and ensuring implementation of COVID-19 response activities in the country.",
      "user": {
        "name": "PMO India",
        "screen_name": "PMOIndia",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1134090740592627712/0Fp-U5-p_normal.png"
      },
      "entities": {
       
      },
      "retweet_count": 2509,
      "favorite_count": 65067
    },
    {
      "created_at": "Sat Apr 18 10:50:00 +0000 2020",
      "text": "No matter what you do for the Do Nothing Democrats, no matter how GREAT a job you are doing, they will only respond to their Fake partners in the Lamestream Media in the negative, even in a time of crisis. I thought it would be different, but it’s not. In fact, it’s even worse...",
      "user": {
        "name": "Donald J. Trump",
        "screen_name": "realDonaldTrump",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg"
      },
      "entities": {
       
      },
      "retweet_count": 14776,
      "favorite_count": 55632
    }
  ];

  ngOnInit(): void {
  }
}
