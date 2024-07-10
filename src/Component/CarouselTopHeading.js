import React, { useState } from "react";

function CarouselTopHeading(props) {
  let [state, setState] = useState({
    articles: [
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "NDTV",
        title:
          "'Heart-Wrenching If Children Die': PM Modi To Putin On Ukraine War - NDTV",
        description: null,
        url: "https://news.google.com/rss/articles/CBMioAFodHRwczovL3d3dy5uZHR2LmNvbS9pbmRpYS1uZXdzL3BtLWluLXJ1c3NpYS1wbS1tb2RpLXZsYWRpbWlyLXB1dGluLWJpbGF0ZXJhbC1pbmRpYS1ydXNzaWEtY29vcGVyYXRpb24taW4tZW5lcmd5LXNlY3Rvci1oZWxwZWQtd29ybGQtYXMtd2VsbC1wbS10by1wdXRpbi02MDY3NTk20gGmAWh0dHBzOi8vd3d3Lm5kdHYuY29tL2luZGlhLW5ld3MvcG0taW4tcnVzc2lhLXBtLW1vZGktdmxhZGltaXItcHV0aW4tYmlsYXRlcmFsLWluZGlhLXJ1c3NpYS1jb29wZXJhdGlvbi1pbi1lbmVyZ3ktc2VjdG9yLWhlbHBlZC13b3JsZC1hcy13ZWxsLXBtLXRvLXB1dGluLTYwNjc1OTYvYW1wLzE?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-09T15:44:00Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "India Today",
        },
        author: "Omkar Wable",
        title:
          "Two pregnant women among 9 new cases of Zika virus in Pune - India Today",
        description:
          "Pune has seen an uptick in cases of Zika virus recording nine new infections in the past one week Two pregnant women are among the nine new cases recorded in the city",
        url: "https://www.indiatoday.in/india/story/pune-zika-virus-cases-pregnant-women-national-institute-of-virology-2564516-2024-07-09",
        urlToImage:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/zika-virus-pregnant-women-094109695-16x9_0.jpeg?VersionId=9a_Rg8dgTugYz2zYqQea.TF1XkZr093J",
        publishedAt: "2024-07-09T15:41:40Z",
        content:
          "Two pregnant women are among the nine new cases of Zika virus confirmed in Pune, bringing the total number of infections in the city to 15, health officials said on Tuesday.\r\nOver the past week alone… [+1691 chars]",
      },
      {
        source: {
          id: "the-hindu",
          name: "The Hindu",
        },
        author: "The Hindu",
        title:
          "Gautam Gambhir appointed India men’s cricket head coach - The Hindu",
        description: null,
        url: "https://www.thehindu.com/sport/cricket/gautam-gambhir-appointed-as-indian-team-head-coach/article68385873.ece",
        urlToImage: null,
        publishedAt: "2024-07-09T15:38:00Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "NDTV News",
        },
        author: "NDTV Sports Desk",
        title:
          '"Privilege To Call You My Confidant": Rohit Sharma\'s Emotional Post For "Work Wife" Rahul Dravid - NDTV Sports',
        description:
          "India captain Rohit Sharma put an emotional post on social media for former head coach of the team, Rahul Dravid.",
        url: "https://sports.ndtv.com/t20-world-cup-2024/privilege-to-call-you-my-confidant-rohit-sharmas-emotional-post-for-work-wife-rahul-dravid-6067354",
        urlToImage:
          "https://c.ndtvimg.com/2024-07/ncoipd6g_rohit-sharma-rahul-dravid-ritika-sajdeh-insta-rohitsharma45_625x300_09_July_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738",
        publishedAt: "2024-07-09T14:23:31Z",
        content:
          "India captain Rohit Sharma came up with an emotional post on social media for former head coach of the team, Rahul Dravid. The latter's coaching tenure ended with the conclusion of T20 World Cup 2024… [+1543 chars]",
      },
      {
        source: {
          id: null,
          name: "Investing.com",
        },
        author: "Investing.com India",
        title:
          "Indian scientists develop tool to generate infrared star catalogue for Thirty Meter Telescope By IANS - Investing.com India",
        description: null,
        url: "https://in.investing.com/news/general-news/indian-scientists-develop-tool-to-generate-infrared-star-catalogue-for-thirty-meter-telescope-4298798",
        urlToImage: null,
        publishedAt: "2024-07-09T14:21:27Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Livemint",
        },
        author: "Livemint",
        title:
          "Redmi 13 5G launched in India Snapdragon 4 Gen 2 AE chipset: Check price, and specs | Mint - Mint",
        description:
          "Redmi launched the 13 5G in India with Snapdragon 4 Gen 2 AE chipset, starting at Rs. 13,999. Available in colors like Hawaiian Blue and Black Diamond, sales start on July 12. Features include a 108MP camera, 120Hz display, and 128GB storage.",
        url: "https://www.livemint.com/technology/tech-news/redmi-13-5g-launched-in-india-snapdragon-4-gen-2-ae-chipset-check-price-and-specs-11720533289828.html",
        urlToImage:
          "https://www.livemint.com/lm-img/img/2024/07/09/1600x900/REDMI_13_1720533412434_1720533420359.webp",
        publishedAt: "2024-07-09T13:59:14Z",
        content:
          "Redmi unveiled the 13 5G in India on Tuesday, marking a significant milestone as it celebrates a decade in the country. This smartphone is notable for being the first in India to feature the Snapdrag… [+2449 chars]",
      },
      {
        source: {
          id: null,
          name: "NDTV News",
        },
        author: null,
        title:
          "Dengue Can Seriously Affect The Brain, Nervous System, Say Doctors - NDTV",
        description:
          "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
        url: "https://www.ndtv.com/",
        urlToImage: "https://cdn.ndtv.com/common/images/ogndtv.png",
        publishedAt: "2024-07-09T13:51:09Z",
        content: null,
      },
      {
        source: {
          id: "the-times-of-india",
          name: "The Times of India",
        },
        author: "TOI News Desk",
        title:
          "'They treat us like garbage': Husband of Mumbai hit-and-run victim slams Maha govt, questions timing of M - The Times of India",
        description:
          "India News: Reacting to the arrest of Shiv Sena leader Rajesh Shah's son Mihir Shah, who was involved in a fatal incident resulting in the death of a woman, the v",
        url: "https://timesofindia.indiatimes.com/india/they-treat-us-like-garbage-husband-of-mumbai-hit-and-run-victim-slams-maha-govt-questions-timing-of-mihir-shahs-arrest/articleshow/111610435.cms",
        urlToImage:
          "https://static.toiimg.com/thumb/msid-111612168,width-1070,height-580,imgsize-4817853,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        publishedAt: "2024-07-09T13:49:00Z",
        content: null,
      },
      {
        source: {
          id: "the-hindu",
          name: "The Hindu",
        },
        author: "The Hindu",
        title: "Encounter breaks out in Jammu & Kashmir’s Doda - The Hindu",
        description: null,
        url: "https://www.thehindu.com/news/national/encounter-in-jammu-kashmirs-doda/article68385270.ece",
        urlToImage: null,
        publishedAt: "2024-07-09T13:38:00Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Hindustan Times",
        },
        author: "Khushi Pal",
        title:
          "NASA reveals breathtaking views of space: See 10 stellar pics - Hindustan Times",
        description:
          "Here is a look at ten captivating images of space shared by NASA.",
        url: "https://www.hindustantimes.com/web-stories/in-focus/nasa-reveals-breathtaking-views-of-space-see-10-stellar-pics-101720513432220.html",
        urlToImage: null,
        publishedAt: "2024-07-09T13:30:03Z",
        content:
          "By Khushi PalPublished Jul 09, 2024\r\nHindustan TimesIn FocusPhoto Credits: NASA",
      },
      {
        source: {
          id: "the-times-of-india",
          name: "The Times of India",
        },
        author: "TOI Lifestyle Desk",
        title:
          "Eye diseases to watch out for during monsoon season - The Times of India",
        description:
          "During the monsoon season, be aware of common eye issues like conjunctivitis, allergic conjunctivitis, styes, dry eyes, and corneal ulcers. Take preca",
        url: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/eye-diseases-to-watch-out-for-during-monsoon-season/articleshow/111605300.cms",
        urlToImage:
          "https://static.toiimg.com/thumb/msid-111605245,width-1070,height-580,imgsize-847852,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        publishedAt: "2024-07-09T13:30:00Z",
        content: null,
      },
      {
        source: {
          id: "the-hindu",
          name: "The Hindu",
        },
        author: "The Hindu",
        title:
          "NEET-UG leak case: CBI arrests 2 more people from Patna - The Hindu",
        description: null,
        url: "https://www.thehindu.com/news/national/neet-ug-leak-case-cbi-arrests-2-more-people-from-patna/article68385073.ece",
        urlToImage: null,
        publishedAt: "2024-07-09T13:05:00Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Business Standard",
        },
        author: "Ishita Ayan Dutt",
        title:
          "Kesoram's cement business demerger may be completed by December 2024 - Business Standard",
        description:
          "The cement business accounted for the bulk of Kesoram's revenue from operations. According to the FY24 annual report, revenue from cement was Rs 3,736.10 crore",
        url: "https://www.business-standard.com/companies/news/kesoram-s-cement-business-demerger-may-be-completed-by-december-2024-124070900809_1.html",
        urlToImage:
          "https://bsmedia.business-standard.com/_media/bs/img/article/2024-04/11/thumb/fitandfill/400X400/1712858004-1257.jpg",
        publishedAt: "2024-07-09T12:41:41Z",
        content:
          "The cement business accounted for the bulk of Kesoram's revenue from operations. According to the FY24 annual report, revenue from cement was Rs 3,736.10 crore\r\nIshita Ayan DuttKolkata\r\nThe demerger … [+752 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Hindustan Times",
        title:
          "Radhika Merchant channels Shakuntala with ‘phool dupatta’ for haldi look; Sonam Kapoor says 'simple is always winner' - Hindustan Times",
        description: null,
        url: "https://news.google.com/rss/articles/CBMitAFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vbGlmZXN0eWxlL2Zhc2hpb24vcmFkaGlrYS1tZXJjaGFudC1jaGFubmVscy1zaGFrdW50YWxhLWluLWJyaWdodC1hbmQtbG92ZWx5LWhhbGRpLWxvb2stc29uYW0ta2Fwb29yLXNheXMtc2ltcGxlLWlzLWFsd2F5cy13aW5uZXItMTAxNzIwNTI3NTAwODE0Lmh0bWzSAbgBaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL2xpZmVzdHlsZS9mYXNoaW9uL3JhZGhpa2EtbWVyY2hhbnQtY2hhbm5lbHMtc2hha3VudGFsYS1pbi1icmlnaHQtYW5kLWxvdmVseS1oYWxkaS1sb29rLXNvbmFtLWthcG9vci1zYXlzLXNpbXBsZS1pcy1hbHdheXMtd2lubmVyLTEwMTcyMDUyNzUwMDgxNC1hbXAuaHRtbA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-09T12:19:42Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Hindustan Times",
        },
        author: "HT News Desk",
        title:
          "MHA extends ban on Gurpatwant Pannun's Sikhs for Justice by 5 years - Hindustan Times",
        description:
          "Gurpatwant Singh Pannun was designated as a terrorist by the Centre in 2020 | Latest News India",
        url: "https://www.hindustantimes.com/india-news/mha-extends-ban-on-gurpatwant-pannuns-sikhs-for-justice-by-5-years-101720527496194.html",
        urlToImage:
          "https://images.hindustantimes.com/img/2024/07/09/1600x900/gurpatwant_pannun_1720527586310_1720527586659.jpg",
        publishedAt: "2024-07-09T12:19:09Z",
        content:
          "The Ministry of Home Affairs (MHA) on Tuesday extended ban on pro-Khalistani terrorist Gurpatwant Singh Pannun's outfit Sikhs for Justice (SFJ) by another five years. The terror outfit was first bann… [+2188 chars]",
      },
      {
        source: {
          id: null,
          name: "NDTV News",
        },
        author: null,
        title:
          "Kathua Terror Attack Saw Strike On 2 Trucks, Armour-Piercing Bullets Used - NDTV",
        description:
          "The terror attack in Jammu and Kashmir's Kathua on Monday afternoon, in which five soldiers were killed and five others injured, was a coordinated strike on two trucks carrying dozens of troops.",
        url: "https://www.ndtv.com/india-news/j-k-terror-attack-news-kathua-terrorist-attack-kathua-terror-attack-saw-strike-on-2-trucks-armour-piercing-bullets-used-6068151",
        urlToImage:
          "https://c.ndtvimg.com/2024-07/44omrab_kathua-terrorist-attack_625x300_09_July_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240615.100",
        publishedAt: "2024-07-09T12:17:03Z",
        content:
          "The terrorists targeted the trucks, which were 500 metres apart, with grenades.\r\nSrinagar: The terror attack in Jammu and Kashmir's Kathua on Monday afternoon, in which five soldiers were killed and … [+2747 chars]",
      },
      {
        source: {
          id: null,
          name: "Benzinga",
        },
        author: "Ananthu C U",
        title:
          "Equity Fund Inflows Jump by 17% In June To Over ₹40000 Cr, Shows AMFI Data - Benzinga India",
        description:
          "AMFI reports 17% rise in equity fund inflows in June, crossing ₹60 lakh crore AUM for first time. Debt fund saw outflows while NFOs drove sectoral fund inflows.",
        url: "https://in.benzinga.com/content/39684354/equity-fund-inflows-jump-by-17-in-june-to-over-40-000-cr-shows-amfi-data",
        urlToImage:
          "https://cdn.benzinga.com/files/images/story/2024/07/09/mutual-funds--market.png?width=1200&height=800&fit=crop",
        publishedAt: "2024-07-09T11:38:31Z",
        content:
          "The Association of Mutual Funds of India (AMFI) has reported a 17% month-on-month increase in equity fund inflows. This surge has led the mutual fund industrys assets under management (AUM) to cross … [+2450 chars]",
      },
      {
        source: {
          id: null,
          name: "Hindustan Times",
        },
        author: "AFP",
        title:
          "Ukraine: Mourning in Kyiv as rescuers clear rubble from children's hospital - Hindustan Times",
        description:
          "President Zelensky said 38 people in Ukraine were killed, including four children, and 190 wounded in a wave of nearly 40 missiles targeting the country. | World News",
        url: "https://www.hindustantimes.com/world-news/ukraine-mourning-in-kyiv-as-rescuers-clear-rubble-from-childrens-hospital-101720522621303.html",
        urlToImage:
          "https://images.hindustantimes.com/img/2024/07/09/1600x900/UKRAINE-CRISIS-ATTACK-KYIV-11_1720522696214_1720522721901.JPG",
        publishedAt: "2024-07-09T11:12:39Z",
        content:
          "Rescue workers were clearing debris and Ukraine was in mourning Tuesday, the day after deadly Russian strikes tore open a children's hospital and sparked international condemnation.\r\nRescuers carry t… [+3328 chars]",
      },
      {
        source: {
          id: null,
          name: "India Today",
        },
        author: "India Today World Desk",
        title:
          "4 of Indian origin arrested in US's Princeton in human trafficking case - India Today",
        description:
          "Princeton Police department said that they received a complaint about a possible human trafficking racket at a house on Ginsburg Lane in Colin County in March following which they arrested the four",
        url: "https://www.indiatoday.in/world/story/princeton-texas-human-trafficking-case-four-indian-origin-men-arrested-police-2564373-2024-07-09",
        urlToImage:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/four-indian-origin-people-arrested-in-texas-094157502-16x9_0.png?VersionId=FbT2rglBYw5X85wnhjMIWbXZwtYImKvA",
        publishedAt: "2024-07-09T10:48:36Z",
        content:
          "Four Indian-origin people were arrested in Princeton in Texas in the US in connection with a human trafficking case on Monday.\r\nThe Princeton Police arrested Chandan Dasireddy, 24, Santhosh Katkoori,… [+1572 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Jasprit Bumrah beats Rohit Sharma to become ICC men's Player of the Month for T20WC heroics; Mandhana wins women's award - Hindustan Times",
        description: null,
        url: "https://families.google.com/service-restricted",
        urlToImage: null,
        publishedAt: "2024-07-09T10:35:35Z",
        content: null,
      },
    ],
  });

  let url = props.url;
  //   useEffect(() => {
  //     let fun = async () => {
  //       let promise = await fetch(url);
  //       let data = await promise.json();
  //       let parsedData = data.articles;
  //       setState({
  //         articles: parsedData,
  //       });
  //     };
  //     fun();
  //   }, []);

  return (
    <>
      <div className="container">
        <div className="heading-div">
          <h3 id="heading-top" className="my-4">
            {props.heading}
          </h3>
        </div>
        <div className="row">
          {state.articles.map((element) => {
            return (
              <div className="col-md-3 mx-4 my-4" key={element.url}>
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
    </>
  );
}

export default CarouselTopHeading;
