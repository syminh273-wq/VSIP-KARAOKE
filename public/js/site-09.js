/* mobile header menu (☰): open/close, highlight current page */
(()=>{const btn=document.getElementById("mMenuBtn"),menu=document.getElementById("mMenu");if(!btn||!menu)return;
const set=open=>{menu.hidden=!open;btn.setAttribute("aria-expanded",open);btn.querySelector(".ms").textContent=open?"close":"menu"};
const mark=()=>{const v=(location.hash||"#site").slice(1);menu.querySelectorAll("[data-v]").forEach(a=>{if(a.dataset.v===v)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")})};
btn.addEventListener("click",()=>set(menu.hidden));
menu.addEventListener("click",e=>{if(e.target.closest("a"))set(false)});
document.addEventListener("click",e=>{if(!menu.hidden&&!menu.contains(e.target)&&!btn.contains(e.target))set(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!menu.hidden){set(false);btn.focus()}});
window.addEventListener("hashchange",()=>{set(false);mark()});
window.matchMedia("(min-width:761px)").addEventListener("change",e=>{if(e.matches)set(false)});
mark()})();
