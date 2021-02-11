let month = document.getElementById('month')
let card = document.getElementById('card1')
let warnung = document.getElementById('warnung')
console.log(month.value);
function showHoroskop() {
  let months = month.value;
  switch (months){
    case "Jan":
    case "jan":
      warnung.style.display = "none"
      card.classList.add('card')
      card.innerHTML = `<img src="assets/img/icon_aquarius.png" alt="Aquarius">
      <div class="container">
        <h2><b>Your horoscope is Aquarius</b></h2>
        <p>Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…
        </p>
      </div>`
      break;
    case "Feb":
    case "feb":
      warnung.style.display = "none"
      card.classList.add('card')
      card.innerHTML = `<img src="assets/img/icon_pisces.png" alt="Pisces">
      <div class="container">
        <h2><b>Your horoscope is Pisces</b></h2>
        <p>Communication is very important today—written, spoken, and even nonverbal body language will all…
        </p>
      </div>`
      break;
    case "Mar":
    case "mar":
      warnung.style.display = "none"
      card.classList.add('card')
      card.innerHTML = `<img src="assets/img/icon_aries.png" alt="Aries">
      <div class="container">
        <h2><b>Your horoscope is Aries</b></h2>
        <p>Today your patience might be tested when one or more of your projects gets put on hold by someone…
        </p>
      </div>`
      break;
    case "Apr":
    case "apr":
      warnung.style.display = "none"
      card.classList.add('card')
      card.innerHTML = `<img src="assets/img/icon_taurus.png" alt="Taurus">
      <div class="container">
        <h2><b>Your horoscope is Taurus</b></h2>
        <p>Your intense energy makes you a great candidate for a leadership position right now, so if you are…
        </p>
      </div>`
      break;
    case "May":
    case "may":
      warnung.style.display = "none"
      card.classList.add('card')
      card.innerHTML = `<img src="assets/img/icon_gemini.png" alt="Gemini">
      <div class="container">
        <h2><b>Your horoscope is Gemini</b></h2>
        <p>If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…
        </p>
      </div>`
      break;
    case "Jun":
    case "jun":
      warnung.style.display = "none"
      card.classList.add('card')
      card.innerHTML = `<img src="assets/img/icon_cancer.png" alt="Cancer">
      <div class="container">
        <h2><b>Your horoscope is Cancer</b></h2>
        <p>Too many different elements in your life are overlapping with each other right now—and it's your…
        </p>
      </div>`
      break;
    case "Jul":
    case "jul":
      warnung.style.display = "none"
      card.classList.add('card')
      card.innerHTML = `<img src="assets/img/icon_leo.png" alt="Leo">
      <div class="container">
        <h2><b>Your horoscope is Leo</b></h2>
        <p>The issues you'll be dealing with today are very complicated ones—you will have to navigate your…
        </p>
      </div>`
      break;
    case "Aug":
    case "aug":
      warnung.style.display = "none"
      card.classList.add('card')
      card.innerHTML = `<img src="assets/img/icon_virgo.png" alt="Virgo">
      <div class="container">
        <h2><b>Your horoscope is Virgo</b></h2>
        <p>You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…
        </p>
      </div>`
      break;
    case "Sep":
    case "sep":
      warnung.style.display = "none"
      card.classList.add('card')
      card.innerHTML = `<img src="assets/img/icon_libra.png" alt="Libra">
      <div class="container">
        <h2><b>Your horoscope is Libra</b></h2>
        <p>Pick a cultural event that's coming up and get some tickets for it today.
        </p>
      </div>`
      break;
    case "Oct":
    case "oct":
      warnung.style.display = "none"
      card.classList.add('card')
      card.innerHTML = `<img src="assets/img/icon_scorpio.png" alt="Scorpio">
      <div class="container">
        <h2><b>Your horoscope is Scorpio</b></h2>
        <p>Someone will challenge a belief that you've held for a very long time today—and they will say an…
        </p>
      </div>`
      break;
    case "Nov":
    case "nov":
      warnung.style.display = "none"
      card.classList.add('card')
      card.innerHTML = `<img src="assets/img/icon_sagittarius.png" alt="Sagittarius">
      <div class="container">
        <h2><b>Your horoscope is Sagittarius</b></h2>
        <p>Someone in your life needs to step up and take on more responsibility—and you need to tell them to....
        </p>
      </div>`
      break;
    case "Dec":
    case "dec":
      warnung.style.display = "none"
      card.classList.add('card')
      card.innerHTML = `<img src="assets/img/icon_capricorn.png" alt="Capricorn">
      <div class="container">
        <h2><b>Your horoscope is Capricorn</b></h2>
        <p>Breaking the rules is not always a bad thing—especially if the rules limit your creativity.
        </p>
      </div>`
      break;
    default :
      warnung.style.display = "block"
      card.classList.remove('card')
      card.innerHTML = ""
  }
}
