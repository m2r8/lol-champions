var img = document.getElementById('image');
var isSylas = true;
var isVayne = true;
var isGaren = true;
var isDraven = true;
var isDarius = true;
var isSamira = true;
var isSejuani = true;
var isAshe = true;
var isNunu = true;
var isMalzahar = true;
var isKassadin = true;
var isKaisa = true;
var isSylasCiasteczko = false;

var isCiemny = true;

let banner = document.getElementById('banner');
let divdem = document.getElementById("div-dem");
let divnox = document.getElementById("div-nox");
let divfrelj = document.getElementById("div-frelj");
let divvoid = document.getElementById('div-void');


TrybCiemnoJasny();
Sylas();
Garen();
Vayne();
Draven();
Darius();
Samira();
Sejuani();
Ashe();
Nunu();
Malzahar();
Kassadin();
Kaisa();

function SylasChange(){

  if (isSylas) {
    document.getElementById("myImage").src = "pink-icon.jpg";
    isSylas = false;
    document.getElementById("sylas").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
    localStorage.setItem("sylas", "sylas");
    playPing1();
    
  } else {
    document.getElementById("myImage").src = "grey-icon.jpg";
    document.getElementById("sylas").style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
    isSylas = true;
    localStorage.removeItem("sylas");
    playPing2()
    
  }
}


function VayneChange() {
  if (isVayne) {
    document.getElementById("VayneIcon").src = "pink-icon.jpg";
    isVayne = false;
    document.getElementById("vayne").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
    localStorage.setItem("vayne","vayne")
    playPing1()
  } else {
    document.getElementById("VayneIcon").src = "grey-icon.jpg";
    document.getElementById("vayne").style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
    isVayne = true;
    localStorage.removeItem("vayne");
    playPing2()
  }
}
function GarenChange() {
  if (isGaren) {
    document.getElementById("GarenIcon").src = "pink-icon.jpg";
    isGaren = false;
    document.getElementById("garen").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
    localStorage.setItem("garen","garen")
    playPing1()
  } else {
    document.getElementById("GarenIcon").src = "grey-icon.jpg";
    document.getElementById("garen").style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
    isGaren = true;
    localStorage.removeItem("garen")
    playPing2()
  }
}
function DravenChange() {
  if (isDraven) {
    document.getElementById("DravenIcon").src = "pink-icon.jpg";
    isDraven = false;
    document.getElementById("draven").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
    localStorage.setItem("draven","draven");
    playPing1()
  } else {
    document.getElementById("DravenIcon").src = "grey-icon.jpg";
    document.getElementById("draven").style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
    isDraven = true;
    localStorage.removeItem("draven");
    playPing2()
  }
}
function DariusChange() {
  if (isDarius) {
    document.getElementById("DariusIcon").src = "pink-icon.jpg";
    isDarius = false;
    document.getElementById("darius").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
    localStorage.setItem("darius","darius");
    playPing1()
  } else {
    document.getElementById("DariusIcon").src = "grey-icon.jpg";
    document.getElementById("darius").style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
    isDarius = true;
    localStorage.removeItem("darius");
    playPing2()
  }
}
function SamiraChange() {
  if (isSamira) {
    document.getElementById("SamiraIcon").src = "pink-icon.jpg";
    isSamira = false;
    document.getElementById("samira").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
    localStorage.setItem("samira","samira");
    playPing1()
  } else {
    document.getElementById("SamiraIcon").src = "grey-icon.jpg";
    document.getElementById("samira").style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
    isSamira = true;
    localStorage.removeItem("samira");
    playPing2()
  }
}
function SejuaniChange() {
  if (isSejuani) {
    document.getElementById("SejuaniIcon").src = "pink-icon.jpg";
    isSejuani = false;
    document.getElementById("sejuani").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
    localStorage.setItem("sejuani", "sejuani");
    playPing1();
  } else {
    document.getElementById("SejuaniIcon").src = "grey-icon.jpg";
    document.getElementById("sejuani").style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
    isSejuani = true;
    localStorage.removeItem("sejuani");
    playPing2();
  }
}
function AsheChange() {
  if (isAshe) {
    document.getElementById("AsheIcon").src = "pink-icon.jpg";
    isAshe = false;
    document.getElementById("ashe").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
    localStorage.setItem("ashe","ashe");
    playPing1();
  } else {
    document.getElementById("AsheIcon").src = "grey-icon.jpg";
    document.getElementById("ashe").style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
    isAshe = true;
    localStorage.removeItem("ashe");
    playPing2();
  }
}
function NunuChange() {
  if (isNunu) {
    document.getElementById("NunuIcon").src = "pink-icon.jpg";
    isNunu = false;
    document.getElementById("nunu").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
    localStorage.setItem("nunu","nunu")
    playPing1()
  } else {
    document.getElementById("NunuIcon").src = "grey-icon.jpg";
    document.getElementById("nunu").style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
    isNunu = true;
    localStorage.removeItem("nunu");
    playPing2()
  }  
}
function MalzaharChange() {
  if (isMalzahar) {
    document.getElementById("MalzaharIcon").src = "pink-icon.jpg";
    isMalzahar = false;
    document.getElementById("malzahar").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
    localStorage.setItem("malzahar","malzahar");
    playPing1()
  } else {
    document.getElementById("MalzaharIcon").src = "grey-icon.jpg";
    document.getElementById("malzahar").style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
    isMalzahar = true;
    localStorage.removeItem("malzahar");
    playPing2()
  }
}
function KassadinChange() {
  if (isKassadin) {
    document.getElementById("KassadinIcon").src = "pink-icon.jpg";
    isKassadin = false;
    document.getElementById("kassadin").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
    localStorage.setItem("kassadin","kassadin");
    playPing1()
  } else {
    document.getElementById("KassadinIcon").src = "grey-icon.jpg";
    document.getElementById("kassadin").style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
    isKassadin = true;
    localStorage.removeItem("kassadin");
    playPing2()
  }
}
function KaisaChange() {
  if (isKaisa) {
    document.getElementById("KaisaIcon").src = "pink-icon.jpg";
    isKaisa = false;
    document.getElementById("kaisa").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
    localStorage.setItem("kaisa","kaisa");
    playPing1()
  } else {
    document.getElementById("KaisaIcon").src = "grey-icon.jpg";
    document.getElementById("kaisa").style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
    isKaisa = true;
    localStorage.removeItem("kaisa");
    playPing2()
    
  }
}
function Sylas() {
  let sylas = localStorage.getItem("sylas"); 
  if(sylas === "sylas") {
     document.getElementById("sylas").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("myImage").src = "pink-icon.jpg";
     isSylas = false; 
     playPing1()
  } else {
  }
}
function Garen() {
  let garen = localStorage.getItem("garen"); 
  if(garen === "garen") {
     document.getElementById("garen").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("GarenIcon").src = "pink-icon.jpg";
     isGaren = false; 
     playPing1()
  } else {
  }
}
function Vayne() {
  let garen = localStorage.getItem("vayne"); 
  if(garen === "vayne") {
     document.getElementById("garen").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("GarenIcon").src = "pink-icon.jpg";
     isGaren = false; 
     playPing1()
  } else {
  }
}
function Vayne() {
  let vayne = localStorage.getItem("vayne"); 
  if(vayne === "vayne") {
     document.getElementById("vayne").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("VayneIcon").src = "pink-icon.jpg";
     isVayne = false; 
     playPing1()
  } else {
  }
}
function Vayne() {
  let vayne = localStorage.getItem("vayne"); 
  if(vayne === "vayne") {
     document.getElementById("vayne").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("VayneIcon").src = "pink-icon.jpg";
     isVayne = false; 
     playPing1()
  } else {
  }
}
function Draven() {
  let draven = localStorage.getItem("draven"); 
  if(draven === "draven") {
     document.getElementById("draven").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("DravenIcon").src = "pink-icon.jpg";
     isDraven = false; 
     playPing1()
  } else {
  }
}
function Darius() {
  let darius = localStorage.getItem("darius"); 
  if(darius === "darius") {
     document.getElementById("darius").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("DariusIcon").src = "pink-icon.jpg";
     isDarius = false; 
     playPing1()
  } else {
  }
}
function Samira() {
  let samira = localStorage.getItem("samira"); 
  if(samira === "samira") {
     document.getElementById("samira").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("SamiraIcon").src = "pink-icon.jpg";
     isSamira = false; 
     playPing1()
  } else {
  }
}
function Sejuani() {
  let sejuani = localStorage.getItem("sejuani"); 
  if(sejuani === "sejuani") {
     document.getElementById("sejuani").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("SejuaniIcon").src = "pink-icon.jpg";
     isSejuani = false; 
     playPing1()
  } else {
  }
}
function Ashe() {
  let ashe = localStorage.getItem("ashe"); 
  if(ashe === "ashe") {
     document.getElementById("ashe").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("AsheIcon").src = "pink-icon.jpg";
     isAshe = false; 
     playPing1()
  } else {
  }
}
function Nunu() {
  let nunu = localStorage.getItem("nunu"); 
  if(nunu === "nunu") {
     document.getElementById("nunu").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("NunuIcon").src = "pink-icon.jpg";
     isNunu = false; 
     playPing1()
  } else {
  }
}
function Malzahar() {
  let malzahar = localStorage.getItem("malzahar"); 
  if(malzahar === "malzahar") {
     document.getElementById("malzahar").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("MalzaharIcon").src = "pink-icon.jpg";
     isMalzahar = false; 
     playPing1()
  } else {
  }
}
function Kassadin() {
  let kassadin = localStorage.getItem("kassadin"); 
  if(kassadin === "kassadin") {
     document.getElementById("kassadin").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("KassadinIcon").src = "pink-icon.jpg";
     isKassadin = false; 
     playPing1()
  } else {
  }
}
function Kaisa() {
  let kaisa = localStorage.getItem("kaisa"); 
  if(kaisa === "kaisa") {
     document.getElementById("kaisa").style.boxShadow = '0px 0px 20px 0px rgb(299, 93, 93)';
     document.getElementById("KaisaIcon").src = "pink-icon.jpg";
     isKaisa = false; 
     playPing1()
  } else {
  }
}
function TrybChange() {
  if(isCiemny) {
  banner.style.background = "linear-gradient(to bottom right, rgb(234, 201, 232), rgb(211, 178, 132))"; 
  divdem.style.backgroundImage = "url(bg-demacia.jpg)";
  divnox.style.backgroundImage = "url(bg-noxus.jpg)";
  divfrelj.style.backgroundImage = "url(bg-freljord.jpg)";
  divvoid.style.backgroundImage = "url(bg-void.jpg)";
  isCiemny = false; 
  playPing3();
  localStorage.setItem("trybJasny","trybJasny");
  }
  else {
   banner.style.background = "linear-gradient(to bottom right, rgb(25, 68, 133), rgb(16, 95, 84))"; 

   divdem.style.backgroundImage = "url(dbg-demacia.jpg)";
   divnox.style.backgroundImage = "url(dbg-noxus.jpg)";
   divfrelj.style.backgroundImage = "url(dbg-freljord.jpg)";
   divvoid.style.backgroundImage = "url(dbg-void.jpg)";
   isCiemny = true;
   playPing4();
   localStorage.removeItem("trybJasny");
  }
}
function playPing1() {
  let audio = new Audio("ping1.mp3");
  audio.play();
}
function playPing2() {
  let audio = new Audio("ping2.mp3");
  audio.play();
}
function playPing3() {
  let audio = new Audio("ping3.mp3");
  audio.play();
}
function playPing4() {
  let audio = new Audio("ping4.mp3");
  audio.play();
}
function Flejord() {
  let audio = new Audio("flejord.mp3");
  audio.play();
}
function Void() {
  let audio = new Audio("void.mp3");
  audio.play();
}
function Noxus() {
  let audio = new Audio("noxus.mp3");
  audio.play();
}
function Demacia() {
  let audio = new Audio("demacia.mp3");
  audio.play();
}
function Miasta() {
  let audio = new Audio("miasta.mp3");
  audio.play();  
}
function scrollToSection (id, offset) {
  Miasta();
  var section = document.getElementById(id);
  var sectionPos = section.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
    top: sectionPos = offset,
    behavior: 'smooth'
  });
}
function TrybCiemnoJasny() {
  console.log(localStorage.getItem("trybJasny"));
  let trybJasny = localStorage.getItem("trybJasny","trybJasny");
  if(trybJasny === "trybJasny") {
    banner.style.background = "linear-gradient(to bottom right, rgb(234, 201, 232), rgb(211, 178, 132))"; 
  divdem.style.backgroundImage = "url(bg-demacia.jpg)";
  divnox.style.backgroundImage = "url(bg-noxus.jpg)";
  divfrelj.style.backgroundImage = "url(bg-freljord.jpg)";
  divvoid.style.backgroundImage = "url(bg-void.jpg)";
  isCiemny = false;
  }
}





















  
  
   
