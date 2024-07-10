import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
function Sports(props) {
  let url = props.url;

let [state,setState] = useState({
  articles : [{
    "source": {
      "id": null,
      "name": "News18"
    },
    "author": "Harshit Bisht",
    "title": "James Anderson Needs 13 Wickets To Become 1st Pacer In The World To… - News18",
    "description": "Anderson, who made his Test debut for England at Lord's in 2003, is all set to play his final Test for the English team at the same venue this week.",
    "url": "https://www.news18.com/cricket/james-anderson-needs-13-wickets-to-become-1st-pacer-in-the-world-to-8959210.html",
    "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/07/james-anderson-england-2024-07-3a260ae04b56b2a1d3bdb87071ef3e75-16x9.jpg?impolicy=website&width=1200&height=675",
    "publishedAt": "2024-07-09T16:28:00Z",
    "content": "Legendary fast bowler James Anderson is all set to play his last Test for England. The first Test of the three-match series between England and the West Indies, which is set to be played at the Lords… [+2486 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
  },
  {
    "source": {
      "id": null,
      "name": "News18"
    },
    "author": "Harshit Bisht",
    "title": "Sanju Samson To Replace Jurel, Jaiswal In For…: India’s Likely Playing XI For 3rd T20I Against Zimbabwe - News18",
    "description": "The third T20I between India and Zimbabwe is scheduled to take place at the Harare Sports Club on Wednesday.",
    "url": "https://www.news18.com/cricket/sanju-samson-to-replace-jurel-jaiswal-in-for-indias-likely-playing-xi-for-3rd-t20i-against-zimbabwe-8959299.html",
    "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/07/the-third-t20i-between-india-and-zimbabwe-is-scheduled-to-take-place-in-harare-on-july-10-2024-07-5af7e03e3c560210dd7d45f6e09e576e-16x9.jpg?impolicy=website&width=1200&height=675",
    "publishedAt": "2024-07-09T15:43:45Z",
    "content": "After securing a 100-run win in the second T20I played at Harare Sports Club on Sunday (July 7), India would like to maintain the good show and get the better of Zimbabwe once again during the third … [+2010 chars]"
  },
  {
    "source": {
      "id": "the-hindu",
      "name": "The Hindu"
    },
    "author": "The Hindu",
    "title": "Gautam Gambhir appointed India men’s cricket head coach - The Hindu",
    "description": null,
    "url": "https://www.thehindu.com/sport/cricket/gautam-gambhir-appointed-as-indian-team-head-coach/article68385873.ece",
    "urlToImage": null,
    "publishedAt": "2024-07-09T15:38:00Z",
    "content": null
  },
  {
    "source": {
      "id": null,
      "name": "Hindustan Times"
    },
    "author": "HT Sports Desk",
    "title": "Ravi Shastri 'bumps into gorgeous Maria Sharapova' on sidelines of Wimbledon 2024, pic becomes instant hit on internet - Hindustan Times",
    "description": "Ravi Shastri met tennis legend Maria Sharapova, as he posted a photo with her on social media, praising her talent on the court. | Crickit",
    "url": "https://www.hindustantimes.com/cricket/ravi-shastri-bumps-into-gorgeous-maria-sharapova-on-sidelines-of-wimbledon-2024-pic-becomes-instant-hit-on-internet-101720534558574.html",
    "urlToImage": "https://images.hindustantimes.com/img/2024/07/09/1600x900/Ravi_Shastri_maria_Sharapova_1720535682592_1720535689017.jpg",
    "publishedAt": "2024-07-09T14:37:32Z",
    "content": "Former India head coach Ravi Shastri has been enjoying a vacation in the United Kingdom after his commentating stint in the recently concluded T20 World Cup. In his visit to the UK, the legendary cri… [+2032 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Hindustan Times"
    },
    "author": "Sugandha Rawal",
    "title": "Wimbledon 2024: Sidharth Malhotra and Kiara Advani catch quarter-final action. Watch - Hindustan Times",
    "description": "Kiara Advani and Sidharth Malhotra made a stylish appearance at Wimbledon, sending their fans into a frenzy. | Bollywood",
    "url": "https://www.hindustantimes.com/entertainment/bollywood/wimbledon-2024-sidharth-malhotra-and-kiara-advani-catch-quarter-final-action-watch-101720534338822.html",
    "urlToImage": "https://images.hindustantimes.com/img/2024/07/09/1600x900/kiarasid_1720535151038_1720535194029.png",
    "publishedAt": "2024-07-09T14:31:45Z",
    "content": "Star power at Wimbledon! Bollywood couple Kiara Advani and Sidharth Malhotra were spotted watching the quarter-finals on Tuesday at Wimbledon 2024. The couple looked effortlessly stylish as they enjo… [+2569 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "NDTV News"
    },
    "author": "NDTV Sports Desk",
    "title": "\"Privilege To Call You My Confidant\": Rohit Sharma's Emotional Post For \"Work Wife\" Rahul Dravid - NDTV Sports",
    "description": "India captain Rohit Sharma put an emotional post on social media for former head coach of the team, Rahul Dravid.",
    "url": "https://sports.ndtv.com/t20-world-cup-2024/privilege-to-call-you-my-confidant-rohit-sharmas-emotional-post-for-work-wife-rahul-dravid-6067354",
    "urlToImage": "https://c.ndtvimg.com/2024-07/ncoipd6g_rohit-sharma-rahul-dravid-ritika-sajdeh-insta-rohitsharma45_625x300_09_July_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738",
    "publishedAt": "2024-07-09T14:23:31Z",
    "content": "India captain Rohit Sharma came up with an emotional post on social media for former head coach of the team, Rahul Dravid. The latter's coaching tenure ended with the conclusion of T20 World Cup 2024… [+1543 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "NDTV News"
    },
    "author": "Indo-Asian News Service",
    "title": "Paris Olympics: Antim Panghal Wants To Live Up To Country's Expectations - NDTV Sports",
    "description": "Antim Panghal will bring her prodigious wrestling talent to Paris 2024 as the 19-year-old is expected to be a medal contender in the 53 kg weight category in the upcoming Olympic Games.",
    "url": "https://sports.ndtv.com/olympics-2024/paris-olympics-antim-panghal-wants-to-live-up-to-countrys-expectations-6068227",
    "urlToImage": "https://c.ndtvimg.com/2023-10/94rvil98_antim-panghal_625x300_05_October_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738",
    "publishedAt": "2024-07-09T13:14:06Z",
    "content": "Antim Panghal will bring her prodigious wrestling talent to Paris 2024 as the 19-year-old is expected to be a medal contender in the 53 kg weight category in the upcoming Olympic Games. Panghal's jou… [+2188 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Hindustan Times"
    },
    "author": "HT Sports Desk",
    "title": "Ruturaj Gaikwad opens up on taking Virat Kohli's No. 3 position in T20Is for India: It's just like filling Dhoni's shoes - Hindustan Times",
    "description": "After being dismissed for just seven runs, Ruturaj Gaikwad smashed an unbeaten 77 in the second match against Zimbabwe batting at Virat Kohli's usual position | Crickit",
    "url": "https://www.hindustantimes.com/cricket/india-vs-zimbabwe-ruturaj-gaikwad-taking-virat-kohli-no-3-position-t20is-india-like-filling-ms-dhonis-shoes-101720524437020.html",
    "urlToImage": "https://images.hindustantimes.com/img/2024/07/09/1600x900/gaikwad_kohli_1720524880946_1720524894296.jpg",
    "publishedAt": "2024-07-09T12:29:32Z",
    "content": "Virat Kohli may have won India the 2024 T20 World Cup title as an opener, but for the larger part of his glorious career in the shortest format, he was always identified as a No. 3 batter. With the f… [+2236 chars]"
  },
  {
    "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
    },
    "author": "TOI Sports Desk",
    "title": "'Jasprit Bumrah mein confidence nahi tha, uska awkward bowling action...': Ramiz Raja lauds Indian star a - The Times of India",
    "description": "Cricket News: Former Pakistan captain Ramiz Raja praised Indian pace spearhead Jasprit Bumrah as a \"legend in all three formats\" on his YouTube channel, highlightin",
    "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/jasprit-bumrah-mein-confidence-nahi-tha-uska-awkward-bowling-action-ramiz-raja-lauds-indian-star-after-t20-world-cup-heroics/articleshow/111609135.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-111609259,width-1070,height-580,imgsize-52886,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "publishedAt": "2024-07-09T12:04:00Z",
    "content": null
  },
  {
    "source": {
      "id": null,
      "name": "NDTV News"
    },
    "author": "Asian News International",
    "title": "England Great's Remark On Virat Kohli, Rohit Sharma's T20I Exit Could Trigger Row - NDTV Sports",
    "description": "He said that though the tournament was the perfect send-off for Virat Kohli, Rohit Sharm and Ravindra Jadeja, they could have won more white ball trophies among themselves.",
    "url": "https://sports.ndtv.com/cricket/england-greats-remark-on-virat-kohli-rohit-sharmas-t20i-exit-could-trigger-row-6063034",
    "urlToImage": "https://c.ndtvimg.com/2024-06/cm02vis_virat-kohli-rohit-sharma_625x300_30_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
    "publishedAt": "2024-07-09T12:01:37Z",
    "content": "Former England batter and skipper Michael Vaughan has said that the ICC T20 World Cup triumph was a perfect way for veterans Virat Kohli, skipper Rohit Sharma and all-rounder Ravindra Jadeja to bow o… [+2092 chars]"
  },
  {
    "source": {
      "id": "google-news",
      "name": "Google News"
    },
    "author": "Cricbuzz",
    "title": "Warner open to playing 2025 Champions Trophy - Cricbuzz",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiWWh0dHBzOi8vd3d3LmNyaWNidXp6LmNvbS9jcmlja2V0LW5ld3MvMTMwOTkxL3dhcm5lci1vcGVuLXRvLXBsYXlpbmctMjAyNS1jaGFtcGlvbnMtdHJvcGh50gEA?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-07-09T11:32:01Z",
    "content": null
  },
  {
    "source": {
      "id": "google-news",
      "name": "Google News"
    },
    "author": "NDTV Sports",
    "title": "From Personality Clashes To Fitness, Gary Kirsten Given Free Hand By PCB To Fix Pakistan Team: Repor.. - NDTV Sports",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiiwFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9jcmlja2V0L2Zyb20tcGVyc29uYWxpdHktY2xhc2hlcy10by1maXRuZXNzLWdhcnkta2lyc3Rlbi1naXZlbi1mcmVlLWhhbmQtYnktcGNiLXRvLWZpeC1wYWtpc3Rhbi10ZWFtLXJlcG9ydC02MDY3NDQ20gGRAWh0dHBzOi8vc3BvcnRzLm5kdHYuY29tL2NyaWNrZXQvZnJvbS1wZXJzb25hbGl0eS1jbGFzaGVzLXRvLWZpdG5lc3MtZ2FyeS1raXJzdGVuLWdpdmVuLWZyZWUtaGFuZC1ieS1wY2ItdG8tZml4LXBha2lzdGFuLXRlYW0tcmVwb3J0LTYwNjc0NDYvYW1wLzE?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-07-09T11:13:13Z",
    "content": null
  },
  {
    "source": {
      "id": null,
      "name": "NDTV News"
    },
    "author": "NDTV Sports Desk",
    "title": "Unseen Video Of Virat Kohli-Rohit Sharma Moment At Start Of T20 World Cup Final Is Viral - NDTV Sports",
    "description": "Virat Kohli and Rohit Sharma announced their shock retirements from the format after helping India win their second T20 World Cup last month in Barbados.",
    "url": "https://sports.ndtv.com/cricket/unseen-video-of-virat-kohli-rohit-sharma-moment-at-start-of-t20-world-cup-final-is-viral-6059915",
    "urlToImage": "https://c.ndtvimg.com/2024-07/ougmlqfo_virat-rohit_625x300_08_July_24.jpeg",
    "publishedAt": "2024-07-09T10:47:15Z",
    "content": "Star batters Virat Kohli and Rohit Sharma announced their shock retirements from the format after helping India win their second T20 World Cup last month in Barbados. During the post-match presentati… [+1929 chars]"
  },
  {
    "source": {
      "id": "google-news",
      "name": "Google News"
    },
    "author": null,
    "title": "Jasprit Bumrah beats Rohit Sharma to become ICC men's Player of the Month for T20WC heroics; Mandhana wins women's award - Hindustan Times",
    "description": null,
    "url": "https://families.google.com/service-restricted",
    "urlToImage": null,
    "publishedAt": "2024-07-09T10:35:35Z",
    "content": null
  },
  {
    "source": {
      "id": null,
      "name": "Crictracker.com"
    },
    "author": "CricTracker Staff",
    "title": "India Women vs South Africa Women Match Prediction, 3rd T20I - Who will win today’s match? - CricTracker",
    "description": "PreviewIn the T20I leg of the all-format tour, South Africa Women's (SA-W) performance has been vastly unimaginable to all, considering their struggles in the ODI and the one-off Test match prece",
    "url": "https://www.crictracker.com/cricket-match-predictions/india-women-vs-south-africa-women-match-prediction-3rd-t20i-who-will-win-todays-match/",
    "urlToImage": "https://media.crictracker.com/media/attachments/1720421570643_Untitled-1.jpeg",
    "publishedAt": "2024-07-09T10:30:00Z",
    "content": "Preview\r\nIn the T20I leg of the all-format tour, South Africa Women's (SA-W) performance has been vastly unimaginable to all, considering their struggles in the ODI and the one-off Test match precedi… [+4167 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Hindustan Times"
    },
    "author": "HT Sports Desk",
    "title": "Rahul Dravid urges kids to lower their bats on receiving guard of honour, hero's welcome in Bengaluru Cricket Academy - Hindustan Times",
    "description": "Rahul Dravid requested the kids giving him a guard of honour on his arrival at a academy to lower their bats. | Crickit",
    "url": "https://www.hindustantimes.com/cricket/rahul-dravid-urges-kids-to-lower-their-bats-on-receiving-guard-of-honour-heros-welcome-in-bengaluru-cricket-academy-101720511952213.html",
    "urlToImage": "https://images.hindustantimes.com/img/2024/07/09/1600x900/dravid-guard-of-honour_1720512211037_1720512220182.jpg",
    "publishedAt": "2024-07-09T09:45:42Z",
    "content": "Think of the most ideal farewells in sports, and what comes to mind? Sir Alex Ferguson and Paul Scholes ending his legendary association with Manchester United with an EPL title in 2013? Kumar Sangak… [+2903 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Formula 1"
    },
    "author": "F1",
    "title": "How 945 days of blood, sweat and tears paid off for Hamilton - Formula 1",
    "description": "Lewis Hamilton produced one of the finest performances of his F1 career with a virtuoso drive to victory in Sunday’s British Grand Prix – one that not only ended a drought of almost 1,000 days and set a record for the most wins at a single venue, but also hit…",
    "url": "https://www.formula1.com/en/latest/article/how-945-days-of-blood-sweat-and-tears-paid-off-in-hamiltons-statement.800tMcXNheG80C6lQkQXV",
    "urlToImage": "https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1720517184/fom-website/2024/Mercedes/Formula%201%20header%20template%20(61).png",
    "publishedAt": "2024-07-09T09:40:52Z",
    "content": "It would get even better as the season rolled on to Austria. Although Mercedes were a step behind the lead Red Bull and McLaren machines of Verstappen and Lando Norris all weekend, Russell was there … [+1165 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Hindustan Times"
    },
    "author": "HT Sports Desk",
    "title": "Hardik Pandya captures IPL heartbreak to unexpected 'Hardik' chants at Wankhede in tear-jerking 'comeback' post - Hindustan Times",
    "description": "The short clip highlighted the setback Hardik Pandya incurred over the last few months and how he overcame the difficulties to help India win the T20 World Cup. | Crickit",
    "url": "https://www.hindustantimes.com/cricket/hardik-pandya-captures-ipl-heartbreak-to-unexpected-hardik-chants-wankhede-in-tear-jerking-comeback-post-t20-world-cup-101720514387526.html",
    "urlToImage": "https://images.hindustantimes.com/img/2024/07/09/1600x900/hardik_emotional_post_1720514980522_1720514990183.jpg",
    "publishedAt": "2024-07-09T09:22:02Z",
    "content": "Days after celebrating India's historic T20 World Cup victory, where he played a pivotal role in the final against South Africa in Barbados on June 29, all-rounder Hardik Pandya shared an emotional s… [+2032 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Livemint"
    },
    "author": "Livemint",
    "title": "'Shame on Rohit Sharma': Why Indian captain's new profile pic with tricolour flag irked netizens | Today News - Mint",
    "description": "Rohit Sharma’s new profile picture with the Indian flag has sparked a furore on social media. Many users have accused the Indian cricket team captain of disrespecting the tricolour.",
    "url": "https://www.livemint.com/news/trends/shame-on-rohit-sharma-why-indian-team-captains-new-profile-pic-with-indian-flag-has-irked-netizens-11720513582425.html",
    "urlToImage": "https://www.livemint.com/lm-img/img/2024/07/09/1600x900/Rohit_Sharma_1720513566962_1720513577919.jpg",
    "publishedAt": "2024-07-09T09:18:38Z",
    "content": "Days after leading Team India to the T20 World Cup triumph in Barbados, captain Rohit Sharma has sparked controversy over his new profile picture on X, formerly Twitter. Several social media users ha… [+2989 chars]"
  }
]});

// useEffect(()=>{
//   let fun = async() =>{
//     let promise = await fetch(url);
//     let parsedData = await promise.json();
//     setState({
//       articles : parsedData.articles,
//     })
//   }
//   fun();
// },[]);

  return (
    <>
    <div className="conatiner mx-4">
        <div className="heading-div">
          <h3 id="heading-top" className="my-4">
            {props.heading}
          </h3>
          <div className="row">
          {state.articles.map((element) => {
            return (
              <div className="col-md-3 mx-2 my-3" key={element.url}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50mHKSr83o2HKeSJbgZmYaYoxcmxd3epXUQ&s"
                    }
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{element.title.slice(0, 45)}</h5>
                    <p className="card-text">
                      {element.description
                        ? element.description.slice(0, 88)
                        : "Read More..."}
                      ...
                    </p>
                    <a href={element.url} className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
    </div>
    </>
  )
}

export default Sports

Sports.protoType = {
  heading : PropTypes.string,
  url : PropTypes.string.isRequired

}