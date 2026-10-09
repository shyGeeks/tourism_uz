const testdata = [
  {
    id: 1,
    question: "Madaniy meros tushunchasi eng to‘liq qaysi javobda ifodalangan?",
    options: [
      "Faqat tarixiy binolar majmui",
      "Avloddan-avlodga o‘tuvchi moddiy va nomoddiy madaniy qadriyatlar majmui",
      "Faqat muzey eksponatlari",
      "Faqat xalq og‘zaki ijodi"
    ],
    answer: "Avloddan-avlodga o‘tuvchi moddiy va nomoddiy madaniy qadriyatlar majmui",
  },
  {
    id: 2,
    question: "Nomoddiy madaniy merosga qaysi misol mos keladi?",
    options: [
      "Tarixiy madrasa",
      "Arxeologik qazilma",
      "An’anaviy marosim va og‘zaki ijod",
      "Muzey binosi"
    ],
    answer: "An’anaviy marosim va og‘zaki ijod",
  },
  {
    id: 3,
    question: "Madaniy meros turizmi mahsulotining markaziy elementi nima?",
    options: [
      "Faqat transport",
      "Madaniy qadriyat va uni talqin qilish tajribasi",
      "Faqat reklama",
      "Faqat ovqatlanish xizmati"
    ],
    answer: "Madaniy qadriyat va uni talqin qilish tajribasi",
  },
  {
    id: 4,
    question: "Turistik mahsulotni shakllantirishda qaysi omil madaniy mazmunni boyitadi?",
    options: [
      "Talqin va hikoyalash",
      "Faqat narxni oshirish",
      "Faqat transport turini almashtirish",
      "Faqat savdo nuqtalarini ko‘paytirish"
    ],
    answer: "Talqin va hikoyalash",
  },
  {
    id: 5,
    question: "Muqobil turizmning asosiy xususiyatlaridan biri qaysi?",
    options: [
      "Mahalliy muhitga mas’uliyatli munosabat",
      "Faqat ommaviy oqimni ko‘paytirish",
      "Meros obyektlarini cheklovsiz ishlatish",
      "Faqat ko‘ngilochar xizmatlar"
    ],
    answer: "Mahalliy muhitga mas’uliyatli munosabat",
  },
  {
    id: 6,
    question: "Madaniy meros obyektlarini boshqarishda eng maqbul yondashuv qaysi?",
    options: [
      "Saqlash va foydalanish manfaatlarini muvozanatlash",
      "Faqat turistlar sonini oshirish",
      "Obyektni to‘liq tijoratlashtirish",
      "Mahalliy aholini chetlashtirish"
    ],
    answer: "Saqlash va foydalanish manfaatlarini muvozanatlash",
  },
  {
    id: 7,
    question: "Muzeyning turizmdagi muhim vazifasi nima?",
    options: [
      "Tarixiy-madaniy axborotni talqin qilib yetkazish",
      "Faqat suvenir sotish",
      "Faqat binoni saqlash",
      "Faqat statistik ma’lumot to‘plash"
    ],
    answer: "Tarixiy-madaniy axborotni talqin qilib yetkazish",
  },
  {
    id: 8,
    question: "Muzey ekspozitsiyasi bilan ishlashda gid uchun eng muhim talab qaysi?",
    options: [
      "Eksponatni kontekst bilan tushuntirish",
      "Faqat sanalarni yoddan aytish",
      "Faqat o‘z fikrini bildirish",
      "Faqat qisqa gapirish"
    ],
    answer: "Eksponatni kontekst bilan tushuntirish",
  },
  {
    id: 9,
    question: "Dark turizm nimaga bog‘liq obyekt va voqealarga tashrifni anglatadi?",
    options: [
      "Faqat tungi sayohatlarga",
      "Fojia, halokat yoki og‘ir tarixiy xotira bilan bog‘liq joylarga",
      "Faqat yerosti inshootlariga",
      "Faqat sarguzasht turizmiga"
    ],
    answer: "Fojia, halokat yoki og‘ir tarixiy xotira bilan bog‘liq joylarga",
  },
  {
    id: 10,
    question: "Dark turizmda gidning etik vazifasi nimadan iborat?",
    options: [
      "Vaziyatni sensatsiyalashtirish",
      "Qurbonlar xotirasiga hurmat bilan, faktlarga tayangan holda talqin qilish",
      "Faqat kulgili hikoyalar aytish",
      "Faktlarni ataylab dramatizatsiya qilish"
    ],
    answer: "Qurbonlar xotirasiga hurmat bilan, faktlarga tayangan holda talqin qilish",
  },
  {
    id: 11,
    question: "Arxeologik yodgorlikning asosiy ilmiy qiymati nimada?",
    options: [
      "O‘tmish hayoti va madaniyati haqida dalil berishida",
      "Faqat sayyohlarni suratga tushirishida",
      "Faqat savdo maydoni yaratishida",
      "Faqat zamonaviy arxitektura namunasida"
    ],
    answer: "O‘tmish hayoti va madaniyati haqida dalil berishida",
  },
  {
    id: 12,
    question: "Arxeologik obyektga ekskursiyada qaysi tamoyil muhim?",
    options: [
      "Obyektni asrash va tushuntirishni uyg‘unlashtirish",
      "Topilmalarni qo‘lga olishga ruxsat berish",
      "Cheklovlarni bekor qilish",
      "Faqat tezkor ko‘rik o‘tkazish"
    ],
    answer: "Obyektni asrash va tushuntirishni uyg‘unlashtirish",
  },
  {
    id: 13,
    question: "Volontyor turizm nimani birlashtiradi?",
    options: [
      "Sayohat va ixtiyoriy foydali faoliyatni",
      "Faqat pullik mehnatni",
      "Faqat sportni",
      "Faqat xizmat ko‘rsatishni"
    ],
    answer: "Sayohat va ixtiyoriy foydali faoliyatni",
  },
  {
    id: 14,
    question: "Madaniy meros sohasidagi volontyorlikka qaysi faoliyat mos keladi?",
    options: [
      "Axborot tarqatish va merosni asrash aksiyalarida qatnashish",
      "Obyektga ruxsatsiz o‘zgartirish kiritish",
      "Eksponatlarni olib chiqish",
      "Tarixiy faktlarni o‘zgartirish"
    ],
    answer: "Axborot tarqatish va merosni asrash aksiyalarida qatnashish",
  },
  {
    id: 15,
    question: "Umummadaniy kompetensiyaning aksiologik komponenti nimani ifodalaydi?",
    options: [
      "Qadriyatlarga hurmat va mas’uliyatli munosabatni",
      "Faqat faktlarni eslab qolishni",
      "Faqat texnik hisob-kitobni",
      "Faqat jismoniy faollikni"
    ],
    answer: "Qadriyatlarga hurmat va mas’uliyatli munosabatni",
  },
  {
    id: 16,
    question: "Madaniy obyekt haqida gid matni tuzishda avvalo nima aniqlanadi?",
    options: [
      "Asosiy tarixiy-madaniy g‘oya va auditoriya",
      "Faqat matn hajmi",
      "Faqat bezak turi",
      "Faqat reklama shiori"
    ],
    answer: "Asosiy tarixiy-madaniy g‘oya va auditoriya",
  },
  {
    id: 17,
    question: "Meros obyektidan turizmda foydalanishning barqaror shakli qaysi?",
    options: [
      "Tashrifni boshqarish va muhofaza talablariga rioya qilish",
      "Cheklovsiz turist oqimi",
      "Har qanday qurilishga ruxsat berish",
      "Faqat tijorat tadbirlari o‘tkazish"
    ],
    answer: "Tashrifni boshqarish va muhofaza talablariga rioya qilish",
  },
  {
    id: 18,
    question: "Madaniy turizmda autentiklik tushunchasi nimaga yaqin?",
    options: [
      "Obyekt yoki an’ananing haqiqiyligi va o‘ziga xosligiga",
      "Faqat yangi dizaynga",
      "Faqat reklama uslubiga",
      "Faqat qulaylik darajasiga"
    ],
    answer: "Obyekt yoki an’ananing haqiqiyligi va o‘ziga xosligiga",
  },
  {
    id: 19,
    question: "Muzeyda interaktiv topshiriqning asosiy pedagogik foydasi nima?",
    options: [
      "Kuzatish, tahlil va muloqotni faollashtiradi",
      "Faqat vaqtni to‘ldiradi",
      "Faqat baho qo‘yishni osonlashtiradi",
      "Faqat eksponatlar sonini oshiradi"
    ],
    answer: "Kuzatish, tahlil va muloqotni faollashtiradi",
  },
  {
    id: 20,
    question: "Madaniy meros obyektiga oid WebQuestning asosiy natijasi nima bo‘lishi kerak?",
    options: [
      "Ishonchli manbalardan ma’lumot izlash, tahlil qilish va mahsulot yaratish",
      "Faqat nusxa ko‘chirish",
      "Faqat bitta saytni yodlash",
      "Faqat test yechish"
    ],
    answer: "Ishonchli manbalardan ma’lumot izlash, tahlil qilish va mahsulot yaratish",
  },
  {
    id: 21,
    question: "Ziyorat turizmining markaziy motivi qaysi?",
    options: [
      "Ma’naviy-diniy qadriyatlar bilan bog‘liq joylarga tashrif",
      "Faqat sport musobaqalari",
      "Faqat xarid qilish",
      "Faqat dengiz bo‘yida dam olish"
    ],
    answer: "Ma’naviy-diniy qadriyatlar bilan bog‘liq joylarga tashrif",
  },
  {
    id: 22,
    question: "Ziyorat obyektida turistga qoidalarni tushuntirishda gid qanday uslubdan foydalanishi kerak?",
    options: [
      "Hurmatli, xolis va tushunarli",
      "Buyruqboz va keskin",
      "Hazil-mutoyibaga asoslangan",
      "Noaniq va umumiy"
    ],
    answer: "Hurmatli, xolis va tushunarli",
  },
  {
    id: 23,
    question: "Madaniy markazlarning turizmdagi vazifasi nima?",
    options: [
      "Mahalliy madaniyatni namoyish etish va muloqot maydonini yaratish",
      "Faqat savdo qilish",
      "Faqat transport xizmatini ko‘rsatish",
      "Faqat sport tadbiri o‘tkazish"
    ],
    answer: "Mahalliy madaniyatni namoyish etish va muloqot maydonini yaratish",
  },
  {
    id: 24,
    question: "Madaniy markaz uchun turistik dastur tuzishda nimalar uyg‘unlashtiriladi?",
    options: [
      "Ko‘rgazma, ijodiy faoliyat, mahalliy an’ana va muloqot",
      "Faqat reklama",
      "Faqat chipta narxi",
      "Faqat transport jadvali"
    ],
    answer: "Ko‘rgazma, ijodiy faoliyat, mahalliy an’ana va muloqot",
  },
  {
    id: 25,
    question: "Turizmda tarixni talqin qilish nimani anglatadi?",
    options: [
      "Tarixiy ma’lumotni auditoriyaga mazmunli va asosli tushuntirish",
      "Faktlarni o‘zgartirish",
      "Faqat sanalarni sanash",
      "Rivoyatni fakt sifatida taqdim etish"
    ],
    answer: "Tarixiy ma’lumotni auditoriyaga mazmunli va asosli tushuntirish",
  },
  {
    id: 26,
    question: "Tarixiy rivoyatni gid qanday taqdim etishi maqsadga muvofiq?",
    options: [
      "Uni rivoyat ekanini aniq ajratib ko‘rsatib",
      "Uni tekshirilgan fakt sifatida",
      "Manbasiz mutlaq haqiqat sifatida",
      "Faqat dramatik effekt uchun"
    ],
    answer: "Uni rivoyat ekanini aniq ajratib ko‘rsatib",
  },
  {
    id: 27,
    question: "O‘troq madaniyatning muhim belgisi qaysi?",
    options: [
      "Doimiy yashash joyi va shakllangan shahar-qishloq madaniy muhiti",
      "Faqat ko‘chmanchi hayot",
      "Faqat mavsumiy lager",
      "Faqat zamonaviy mehmonxona"
    ],
    answer: "Doimiy yashash joyi va shakllangan shahar-qishloq madaniy muhiti",
  },
  {
    id: 28,
    question: "O‘troq madaniyatni o‘rganishda qaysi obyektlar muhim manba bo‘la oladi?",
    options: [
      "Mahalla, hunarmandchilik, me’moriy muhit va kundalik turmush",
      "Faqat aeroportlar",
      "Faqat savdo markazlari",
      "Faqat sport inshootlari"
    ],
    answer: "Mahalla, hunarmandchilik, me’moriy muhit va kundalik turmush",
  },
  {
    id: 29,
    question: "UNESCOning madaniy meros sohasidagi asosiy roli nimaga qaratilgan?",
    options: [
      "Muhim merosni muhofaza qilish va xalqaro hamkorlikni qo‘llab-quvvatlash",
      "Faqat turpaket sotish",
      "Faqat mehmonxona qurish",
      "Faqat reklama qilish"
    ],
    answer: "Muhim merosni muhofaza qilish va xalqaro hamkorlikni qo‘llab-quvvatlash",
  },
  {
    id: 30,
    question: "UNESCO bilan bog‘liq meros obyektlarida turizmni tashkil etishda qaysi tamoyil muhim?",
    options: [
      "Muhofaza, boshqaruv va mas’uliyatli tashrif",
      "Faqat turistlar sonini maksimal oshirish",
      "Cheklovlarni bekor qilish",
      "Faqat tijorat maqsadi"
    ],
    answer: "Muhofaza, boshqaruv va mas’uliyatli tashrif",
  },
  {
    id: 31,
    question: "ICOMOS asosan qaysi yo‘nalish bilan bog‘liq?",
    options: [
      "Yodgorliklar va tarixiy joylarni muhofaza qilish bo‘yicha ekspertiza va maslahat",
      "Aviatsiya xavfsizligi",
      "Sport turizmi",
      "Mehmonxona marketingi"
    ],
    answer: "Yodgorliklar va tarixiy joylarni muhofaza qilish bo‘yicha ekspertiza va maslahat",
  },
  {
    id: 32,
    question: "ICOMOSga xos professional yondashuv qaysi?",
    options: [
      "Autentiklik, yaxlitlik va muhofaza holatini ekspert baholash",
      "Faqat chipta narxini baholash",
      "Faqat turistlar fikrini hisoblash",
      "Faqat reklama matnini tekshirish"
    ],
    answer: "Autentiklik, yaxlitlik va muhofaza holatini ekspert baholash",
  },
  {
    id: 33,
    question: "World Monuments Fund faoliyatiga qaysi yo‘nalish mos?",
    options: [
      "Xavf ostidagi madaniy meros obyektlarini saqlashni qo‘llab-quvvatlash",
      "Faqat yangi ko‘ngilochar markazlar qurish",
      "Faqat transport infratuzilmasi",
      "Faqat savdo yarmarkalari"
    ],
    answer: "Xavf ostidagi madaniy meros obyektlarini saqlashni qo‘llab-quvvatlash",
  },
  {
    id: 34,
    question: "Meros obyektiga tahdidlarni aniqlashda qaysi omillar baholanadi?",
    options: [
      "Tabiiy, antropogen va boshqaruv bilan bog‘liq xavflar",
      "Faqat ob-havo",
      "Faqat chipta narxi",
      "Faqat reklama hajmi"
    ],
    answer: "Tabiiy, antropogen va boshqaruv bilan bog‘liq xavflar",
  },
  {
    id: 35,
    question: "Madaniyatlararo muloqotda gidning eng muhim sifati qaysi?",
    options: [
      "Hurmat, moslashuvchanlik va xolis muloqot",
      "Faqat tez gapirish",
      "Faqat ko‘p ma’lumot berish",
      "Faqat chet tilidagi murakkab terminlar ishlatish"
    ],
    answer: "Hurmat, moslashuvchanlik va xolis muloqot",
  },
  {
    id: 36,
    question: "Turist savoliga javob noma’lum bo‘lsa, gid qanday yo‘l tutishi kerak?",
    options: [
      "Bilmasligini xolis aytib, ishonchli manbadan aniqlashni va’da qilish",
      "Taxminiy javobni fakt sifatida aytish",
      "Savolni e’tiborsiz qoldirish",
      "Turistni tanqid qilish"
    ],
    answer: "Bilmasligini xolis aytib, ishonchli manbadan aniqlashni va’da qilish",
  },
  {
    id: 37,
    question: "Ziyorat marshrutida vaqt rejalashtirishda nimani hisobga olish kerak?",
    options: [
      "Ibodat va odob qoidalari, tashrif vaqti, turist ehtiyojlari",
      "Faqat suratga olish vaqti",
      "Faqat savdo qilish",
      "Faqat transport narxi"
    ],
    answer: "Ibodat va odob qoidalari, tashrif vaqti, turist ehtiyojlari",
  },
  {
    id: 38,
    question: "Madaniy markazda loyiha topshirig‘ining samarali mahsuloti qaysi?",
    options: [
      "Mahalliy madaniyatni namoyish etuvchi turistik dastur yoki tadbir konsepsiyasi",
      "Faqat shior",
      "Faqat bir jumlalik izoh",
      "Faqat narxlar jadvali"
    ],
    answer: "Mahalliy madaniyatni namoyish etuvchi turistik dastur yoki tadbir konsepsiyasi",
  },
  {
    id: 39,
    question: "Tarixiy talqinda manbalarni solishtirish nima uchun kerak?",
    options: [
      "Faktlarning ishonchliligini tekshirish va turli nuqtai nazarni ko‘rish uchun",
      "Faqat matnni uzaytirish uchun",
      "Faqat bitta manbani tasdiqlash uchun",
      "Faqat bezak uchun"
    ],
    answer: "Faktlarning ishonchliligini tekshirish va turli nuqtai nazarni ko‘rish uchun",
  },
  {
    id: 40,
    question: "Umummadaniy kompetensiyaning shaxsiy-kommunikativ komponenti nimani qamrab oladi?",
    options: [
      "Nutq madaniyati, muloqot, moslashuvchanlik va etik xulq",
      "Faqat tarixiy sanalar",
      "Faqat iqtisodiy hisob",
      "Faqat jismoniy mehnat"
    ],
    answer: "Nutq madaniyati, muloqot, moslashuvchanlik va etik xulq",
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
                    const botToken = "8787615057:AAFRZUcE5msGau-T_ZQEIvClNtI2tsMWUpg"; // Bot tokenini o'zgartiring
                    const chatId = "1305055395"; // O'zingizning chat ID ni kiriting

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
