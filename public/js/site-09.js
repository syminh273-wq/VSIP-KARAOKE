/* mobile header menu (☰): open/close, highlight current page.
   Uses event delegation + lookups at event time, so it keeps working even if the header markup is re-rendered. */
(()=>{const $=id=>document.getElementById(id);
const set=open=>{const btn=$("mMenuBtn"),menu=$("mMenu");if(!btn||!menu)return;menu.hidden=!open;btn.setAttribute("aria-expanded",open);const ic=btn.querySelector(".ms");if(ic)ic.textContent=open?"close":"menu"};
const mark=()=>{const menu=$("mMenu");if(!menu)return;const v=(location.hash||"#site").slice(1);menu.querySelectorAll("[data-v]").forEach(a=>{if(a.dataset.v===v)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")})};
document.addEventListener("click",e=>{const menu=$("mMenu");if(!menu)return;
  if(e.target.closest("#mMenuBtn")){set(menu.hidden);mark();return}
  if(e.target.closest("#mMenu a")){set(false);return}
  if(!menu.hidden&&!e.target.closest("#mMenu"))set(false)});
document.addEventListener("keydown",e=>{const menu=$("mMenu");if(e.key==="Escape"&&menu&&!menu.hidden){set(false);const b=$("mMenuBtn");if(b)b.focus()}});
window.addEventListener("hashchange",()=>{set(false);mark()});
window.matchMedia("(min-width:761px)").addEventListener("change",e=>{if(e.matches)set(false)});
mark()})();
