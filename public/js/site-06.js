(()=>{const fab=document.getElementById("wcFab"),sh=document.getElementById("wcSheet"),x=document.getElementById("wcX");if(!fab||!sh)return;
const mobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const open=()=>{sh.hidden=false;x.focus()},close=()=>{sh.hidden=true;fab.focus()};
fab.addEventListener("click",e=>{open();if(!mobile)e.preventDefault();/* on phones the weixin:// link also opens the app; the QR stays open behind it */});
x.addEventListener("click",close);
sh.addEventListener("click",e=>{if(e.target===sh)close()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!sh.hidden)close()});})();
