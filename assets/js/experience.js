AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "BLOOM ENERGY v1.0",
    cardImage: "assets/images/experience-page/118825351_111158214057008_5421058653368215815_n.jpg",
    place: "SRM TRP Engineering College",
    time: "(February, 2020 )",
    desp: "<b>EVENTS:</b> Technical quiz, Meme Creation and Project.",
  },
  {
    title: "BLOOM ENERGY v1.0.1",
    cardImage: "assets/images/experience-page/p (4).jpg",
    place: "Imayam College Of Engineering",
    time: "(Aug, 2019)",
    desp: "<b>EVENTS:</b> Technical quiz, and Circuit Debugging.",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "TEK-CLUSTER'20",
    cardImage: "assets/images/experience-page/C (32).jpg",
    description:
      "",
  },
  {
    title: "TECNOKRATZ'2k21",
    cardImage: "assets/images/experience-page/C (12).jpg",
    description:
      "",
  },
  {
    title: "AGRITHON 2k21",
    cardImage: "assets/images/experience-page/C (31).jpg",
    description:
      "",
  },
  {
    title: "FAISCA'20",
    cardImage: "assets/images/experience-page/C (33).jpg",
    description:
      "",
  },
  {
    title: "ZREYAS'20",
    cardImage: "assets/images/experience-page/C (35).jpg",
    description:
      "",
  },
  {
    title: "MESCIA 2021",
    cardImage: "assets/images/experience-page/Picture1.jpg",
    description:
      "",
  },
  {
    title: "INNOVATION BATTLEFILD",
    cardImage: "assets/images/experience-page/Screenshot (9).png",
    description:
      "",
  },
  {
    title: "HERTZ21'",
    cardImage: "assets/images/experience-page/C (1).jpg",
    description:
      "",
  },
  {
    title: "AVENTURO'21",
    cardImage: "assets/images/experience-page/Screenshot (5).png",
    description:
      "",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:600px">
      
      <img src="${cardImage}" height="300" width="300" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "KRANTI 2020",
    image: "assets/images/experience-page/C (6).jpg",
    time: "13/02/2020",
    desp: "<li>I secuured the 1st place and won cash Price of ₹3500</li><li>I recevied the awards for AD and Meme Battle.</li>",
  },
  {
    title: "ICE-TECHFEST 2019",
    image: "assets/images/experience-page/C (7).jpg",
    time: "30/08/2020",
    desp: "<li>I won the first 1st Prize with Cash Amount.</li> <br> <li>And also I'm the winner of Technical Quiz and Debugging.</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
