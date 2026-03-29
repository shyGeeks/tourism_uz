const testdata = [
  {
    id: 1,
    question: "Elektr toki nima?",
    options: [
      "Zaryadlarning tartibsiz harakati",
      "Elektr kuchlanishi",
      "Magnit maydon",
      "Zaryadlangan zarrachalarning yo‘nalgan harakati"
    ],
    answer: "Zaryadlangan zarrachalarning yo‘nalgan harakati",
  },
  {
    id: 2,
    question: "Tok kuchi qaysi birlikda o‘lchanadi?",
    options: ["Volt", "Om", "Amper", "Vatt"],
    answer: "Amper",
  },
  {
    id: 3,
    question: "Ohm qonuni nimani ifodalaydi?",
    options: [
      "Tok va magnit maydon bog‘liqligini",
      "Kuchlanish va qarshilik bog‘liqligini",
      "Tok, kuchlanish va qarshilik orasidagi bog‘liqlikni",
      "Faqat tokni"
    ],
    answer: "Tok, kuchlanish va qarshilik orasidagi bog‘liqlikni",
  },
  {
    id: 4,
    question: "Qarshilikning o‘lchov birligi nima?",
    options: ["Volt", "Om", "Amper", "Farad"],
    answer: "Om",
  },
  {
    id: 5,
    question: "Elektr kuchlanishi nima?",
    options: [
      "Tok tezligi",
      "Zaryadlar soni",
      "Zaryadlarni harakatga keltiruvchi kuch",
      "Qarshilik turi"
    ],
    answer: "Zaryadlarni harakatga keltiruvchi kuch",
  },
  {
    id: 6,
    question: "Elektr zanjiri nima?",
    options: [
      "Faqat generator",
      "Faqat iste’molchi",
      "Tok o‘tadigan yopiq yo‘l",
      "Faqat sim"
    ],
    answer: "Tok o‘tadigan yopiq yo‘l",
  },
  {
    id: 7,
    question: "O‘zgarmas tok qanday tok?",
    options: [
      "Yo‘nalishi o‘zgaruvchi tok",
      "Yo‘nalishi o‘zgarmaydigan tok",
      "Faqat yuqori kuchlanishli tok",
      "Magnit tok"
    ],
    answer: "Yo‘nalishi o‘zgarmaydigan tok",
  },
  {
    id: 8,
    question: "O‘zgaruvchan tokning chastotasi nimani bildiradi?",
    options: [
      "Tok kuchini",
      "Qarshilikni",
      "Sekunddagi tebranishlar sonini",
      "Kuchlanishni"
    ],
    answer: "Sekunddagi tebranishlar sonini",
  },
  {
    id: 9,
    question: "Transformatorning asosiy vazifasi nima?",
    options: [
      "Tokni ishlab chiqarish",
      "Kuchlanishni o‘zgartirish",
      "Qarshilikni oshirish",
      "Tokni to‘xtatish"
    ],
    answer: "Kuchlanishni o‘zgartirish",
  },
  {
    id: 10,
    question: "Generator nima qiladi?",
    options: [
      "Elektrni saqlaydi",
      "Elektr energiyasini mexanik energiyaga aylantiradi",
      "Mexanik energiyani elektr energiyasiga aylantiradi",
      "Tokni kamaytiradi"
    ],
    answer: "Mexanik energiyani elektr energiyasiga aylantiradi",
  },
  {
    id: 11,
    question: "Elektr motor nima qiladi?",
    options: [
      "Elektrni ishlab chiqaradi",
      "Elektrni yo‘q qiladi",
      "Elektr energiyasini mexanik energiyaga aylantiradi",
      "Tokni saqlaydi"
    ],
    answer: "Elektr energiyasini mexanik energiyaga aylantiradi",
  },
  {
    id: 12,
    question: "Qisqa tutashuv nima?",
    options: [
      "Tokning kamayishi",
      "Tokning uzilishi",
      "Qarshilik juda kichik bo‘lganda tokning keskin ortishi",
      "Kuchlanish yo‘qolishi"
    ],
    answer: "Qarshilik juda kichik bo‘lganda tokning keskin ortishi",
  },
  {
    id: 13,
    question: "Elektr quvvatining formulasi qaysi?",
    options: ["P=U+I", "P=U/I", "P=U*I", "P=I-R"],
    answer: "P=U*I",
  },
  {
    id: 14,
    question: "Quvvat birligi nima?",
    options: ["Volt", "Amper", "Om", "Vatt"],
    answer: "Vatt",
  },
  {
    id: 15,
    question: "Elektr energiyasi nima?",
    options: [
      "Tok kuchi",
      "Kuchlanish",
      "Quvvat va vaqt ko‘paytmasi",
      "Qarshilik"
    ],
    answer: "Quvvat va vaqt ko‘paytmasi",
  },
  {
    id: 16,
    question: "Kondensator nima uchun ishlatiladi?",
    options: [
      "Tokni oshirish uchun",
      "Zaryad to‘plash uchun",
      "Tokni yo‘q qilish uchun",
      "Qarshilikni kamaytirish uchun"
    ],
    answer: "Zaryad to‘plash uchun",
  },
  {
    id: 17,
    question: "Induktivlik nimani bildiradi?",
    options: [
      "Qarshilikni",
      "Zaryadni",
      "Magnit maydonda energiya yig‘ish qobiliyatini",
      "Kuchlanishni"
    ],
    answer: "Magnit maydonda energiya yig‘ish qobiliyatini",
  },
  {
    id: 18,
    question: "Elektr mashinalari nechta asosiy turga bo‘linadi?",
    options: ["2", "3", "4", "5"],
    answer: "2",
  },
  {
    id: 19,
    question: "Asinxron motor qaysi sohada keng qo‘llaniladi?",
    options: [
      "Faqat laboratoriyada",
      "Transportda",
      "Sanoatda",
      "Faqat uyda"
    ],
    answer: "Sanoatda",
  },
  {
    id: 20,
    question: "Sinxron motorning asosiy xususiyati nima?",
    options: [
      "Tezligi o‘zgaradi",
      "Tezligi yukga bog‘liq",
      "Rotor tezligi magnit maydon tezligiga teng",
      "Tokni ishlab chiqaradi"
    ],
    answer: "Rotor tezligi magnit maydon tezligiga teng",
  },
  {
    id: 21,
    question: "Elektr yuritma nima?",
    options: [
      "Tok manbai",
      "Elektr dvigatel va boshqaruv tizimi majmui",
      "Faqat sim",
      "Generator"
    ],
    answer: "Elektr dvigatel va boshqaruv tizimi majmui",
  },
  {
    id: 22,
    question: "Rele nima vazifani bajaradi?",
    options: [
      "Tokni ishlab chiqaradi",
      "Signalni kuchaytiradi",
      "Zanjirni avtomatik ulaydi yoki uzadi",
      "Tokni saqlaydi"
    ],
    answer: "Zanjirni avtomatik ulaydi yoki uzadi",
  },
  {
    id: 23,
    question: "Elektr xavfsizligi nima uchun muhim?",
    options: [
      "Faqat ishlab chiqarish uchun",
      "Qurilmalarni saqlash uchun",
      "Inson hayotini himoya qilish uchun",
      "Tokni oshirish uchun"
    ],
    answer: "Inson hayotini himoya qilish uchun",
  },
  {
    id: 24,
    question: "Yerga ulash (zazemlenie) nima?",
    options: [
      "Tokni oshirish",
      "Qarshilikni kamaytirish",
      "Tokni yerga uzatish orqali himoya qilish",
      "Kuchlanishni oshirish"
    ],
    answer: "Tokni yerga uzatish orqali himoya qilish",
  },
  {
    id: 25,
    question: "Elektr energiyasini tejash nimani anglatadi?",
    options: [
      "Ko‘proq energiya ishlatish",
      "Energiyani yo‘q qilish",
      "Energiya sarfini kamaytirish",
      "Tokni oshirish"
    ],
    answer: "Energiya sarfini kamaytirish",
  },
  {
    id: 26,
    question: "Avtomatlashtirish nima?",
    options: [
      "Qo‘lda boshqarish",
      "Jarayonlarni inson ishtirokisiz boshqarish",
      "Tokni kamaytirish",
      "Kuchlanishni oshirish"
    ],
    answer: "Jarayonlarni inson ishtirokisiz boshqarish",
  },
  {
    id: 27,
    question: "Datchik (sensor) nima?",
    options: [
      "Tok manbai",
      "Ma’lumotni sezuvchi va signalga aylantiruvchi qurilma",
      "Generator",
      "Sim"
    ],
    answer: "Ma’lumotni sezuvchi va signalga aylantiruvchi qurilma",
  },
  {
    id: 28,
    question: "Invertor nima qiladi?",
    options: [
      "O‘zgaruvchan tokni o‘zgarmas tokka aylantiradi",
      "Tokni saqlaydi",
      "O‘zgarmas tokni o‘zgaruvchan tokka aylantiradi",
      "Qarshilikni oshiradi"
    ],
    answer: "O‘zgarmas tokni o‘zgaruvchan tokka aylantiradi",
  },
  {
    id: 29,
    question: "Elektr tizimida himoya apparatlari nima uchun kerak?",
    options: [
      "Tokni oshirish uchun",
      "Energiya ishlab chiqarish uchun",
      "Nosozliklardan himoya qilish uchun",
      "Qarshilikni kamaytirish uchun"
    ],
    answer: "Nosozliklardan himoya qilish uchun",
  },
  {
    id: 30,
    question: "Raqamli texnologiyalar elektr sohada nima uchun qo‘llaniladi?",
    options: [
      "Faqat hisoblash uchun",
      "Qog‘oz ishlarini kamaytirish uchun",
      "Jarayonlarni modellashtirish va avtomatlashtirish uchun",
      "Tokni kamaytirish uchun"
    ],
    answer: "Jarayonlarni modellashtirish va avtomatlashtirish uchun",
  },
];



const user_answer = new Array(25).fill(null);
const select_answer = new Array(25).fill(null);

// console.log(user_answer)
let ansverId;
let arrayTest = [];
let arrOption = [];
var k = 1;
let fine=0;
let attemp=5;

$(document).ready(() => {
  arrayTest = massivTuzish(testdata.length, 25);
  for (var k = 1; k <= arrayTest.length; k++) {
    arrOption.push(massivTuzish(4, 4));
    testbtnlist.innerHTML += `
      <li>
        <a class="done" id="que_${k}" onclick="clickbtn(${k})" href="#">${k}</a>
      </li>
    `;
  }
  setValue(1);
  timer1();
});

function massivTuzish(m, n) {
  let massiv = [];
  let i = 0;

  while (i < n) {
    var k = Math.floor(Math.random() * m);
    if (!massiv.includes(k)) {
      massiv.push(k);
      i++;
    }
  }
  return massiv;
}



function toggleParentClass(radio) {
  var parent = radio.parentNode;

  // Remove 'checked' class from all answer-items
  var answerItems = document.querySelectorAll(".answer-item");

  for (var i = 0; i < answerItems.length; i++) {
    if (answerItems[i] == parent) {
      select_answer[ansverId - 1] = i;
      user_answer[ansverId - 1] = parent.querySelector("span").innerHTML;
    }

    if (answerItems[i] !== parent) {
      answerItems[i].classList.remove("checked");
      answerItems[i].querySelector('input[type="radio"]').checked = false;
    }
  }

  if (radio.checked) {
    parent.classList.add("checked");
    // console.log(testdata[ansverId].answer)
  } else {
    parent.classList.remove("checked");
  }

  // alert(k);
  let cur = document.querySelector(`#que_${ansverId}`);
  cur.style.background = "rgb(0, 156, 255)";
}

function checked_ansver() {
  var answerItems = document.querySelectorAll(".answer-item");

  for (var i = 0; i < answerItems.length; i++) {
    answerItems[i].classList.remove("checked");
    answerItems[i].querySelector('input[type="radio"]').checked = false;
  }

  if (user_answer[ansverId - 1] != null) {
    for (var i = 0; i < answerItems.length; i++) {
      if (i == select_answer[ansverId - 1]) {
        answerItems[i].classList.add("checked");
        answerItems[i].querySelector('input[type="radio"]').checked = true;
      }
    }
  }
}

const el = (e) => document.querySelector(e);

const testbtnlist = el("#questionbtn");
const count_question = el("#count_question");
const number_question = el("#question-num");
const question_text = el(".question-text");
const timer_teg = el("#timer");

const option1 = el("#op1");
const option2 = el("#op2");
const option3 = el("#op3");
const option4 = el("#op4");

let n,
  a = 1;

function setValue(k) {
  n = arrayTest.length;
  ansverId = k;
  number_question.innerHTML = k;
  count_question.innerHTML = k + "/" + n;
  question_text.innerHTML = testdata[arrayTest[k - 1]].question;

  option1.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][0]];
  option2.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][1]];
  option3.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][2]];
  option4.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][3]];

  checked_ansver();
}

function clickbtn(id) {
  k = document.getElementById(`que_${id}`).innerHTML;
  setValue(k);
}

function pClick() {
  var b = parseInt(number_question.innerHTML);

  if (b > 1) {
    b -= 1;
    setValue(b);
  }
}

function nClick() {
  var b = parseInt(number_question.innerHTML);
  if (b < n) {
    b += 1;
    setValue(b);
  }
}

function timer1() {
  var timeLimitInMinutes = 50;
  var timeLimitInSeconds = timeLimitInMinutes * 60;
  var timerElement = document.getElementById("timer");

  function startTimer() {
    timeLimitInSeconds--;

    var minutes = Math.floor(timeLimitInSeconds / 60);
    var seconds = timeLimitInSeconds % 60;

    if (timeLimitInSeconds < 0) {
      timerElement.textContent = "00:00";
      clearInterval(timerInterval);
      return;
    }

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    timerElement.innerHTML = minutes + ":" + seconds;
  }

  var timerInterval = setInterval(startTimer, 1000);
}

let ansverId1=document.querySelector("#answerId")
function getAnsver(){
  fine++;
  q=number_question.innerHTML;
  ansverId1.textContent=testdata[arrayTest[q - 1]].answer;
}
function endTest() {
  var c = 0, inc = 0, usc = 0;
  
  for (var i = 0; i < arrayTest.length; i++) {
      if (user_answer[i] != null) {
          if (user_answer[i] == testdata[arrayTest[i]].answer) {
              c++;
          } else {
              inc++;
          }
      } else {
          usc++;
      }
  }

  // Natijalarni ekranga chiqarish
  document.querySelector("#cans").textContent = `To'g'ri: ${c}`;
  document.querySelector("#icans").textContent = `Noto'g'ri: ${inc}`;
  document.querySelector("#fine").textContent = `Jarima: ${fine}`;
  document.querySelector("#fullball").textContent = `Umumiy ball: ${(c - fine)*4}`;
  document.querySelector("#noselect").textContent = `Belgilanmagan: ${usc}`;

  // Vaqtni olish
  const now = new Date();
  const timestamp = now.toLocaleString("uz-UZ"); // O'zbek formati
  const email1 = localStorage.getItem("userEmail");

// Telegram bot ma'lumotlari
                    const botToken = "8718320338:AAFi3zTa85Yly0Kykjw11ZURl4KSAgHIs20"; // Bot tokenini o'zgartiring
                    const chatId = "7438762563"; // O'zingizning chat ID ni kiriting

  // Xabar matni
  const message = `
🕒 Test tugallangan vaqt: ${timestamp}
📧 Email address: ${email1}
📊 *Test natijasi:*
✅ To'g'ri javoblar: ${c}
❌ Noto'g'ri javoblar: ${inc}
⚪ Belgilanmagan javoblar: ${usc}
🏆 Umumiy ball: ${(c - fine)*4}`;

  // Telegram API-ga so‘rov yuborish
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          chat_id: chatId,
          text: message
      })
  })
  .then(response => response.json())
  .then(data => {
      console.log("Xabar yuborildi:", data);
      
      // 1.5 soniya kutish va keyin sahifani o‘zgartirish
      setTimeout(() => {
          window.location = "studentindex.html";
      }, 20000);
  })
  .catch(error => {
      console.error("Xatolik yuz berdi:", error);
  });
}
