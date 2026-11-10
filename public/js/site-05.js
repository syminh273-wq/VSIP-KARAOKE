/* karaoke reel: hover/tap preview, click opens fullscreen video */
(function(){const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches,canHover=matchMedia("(hover:hover)").matches;
document.addEventListener("click",e=>{const sl=e.target.closest(".ks-slide");if(!sl)return;const w=e.target.closest("[data-vfull]");if(!w&&e.target.closest("a,button"))return;const v=sl.querySelector("video");if(!v)return;
  const src=w?w.dataset.vfull:v.getAttribute("src");const back=w||sl;v.pause();
  const d=document.createElement("div");d.className="vlb";d.setAttribute("role","dialog");d.setAttribute("aria-modal","true");d.setAttribute("aria-label","Xem video");
  d.innerHTML=`<button type="button" aria-label="Đóng">×</button><video src="${src}" controls autoplay playsinline></video>`;document.body.appendChild(d);const x=d.querySelector("button");x.focus();
  const close=()=>{d.remove();document.removeEventListener("keydown",esc);back.focus&&back.focus()};const esc=k=>{if(k.key==="Escape")close()};
  x.onclick=close;d.addEventListener("click",k=>{if(k.target===d)close()});document.addEventListener("keydown",esc)});
const clips=document.querySelectorAll(".clip");
clips.forEach(c=>{const v=c.querySelector("video");
  if(canHover){c.addEventListener("mouseenter",()=>{if(reduce)return;v.preload="auto";v.play().catch(()=>{})});c.addEventListener("mouseleave",()=>v.pause())}
  c.addEventListener("click",()=>{const d=document.createElement("div");d.className="vlb";d.setAttribute("role","dialog");d.setAttribute("aria-modal","true");d.setAttribute("aria-label","Xem video");
    d.innerHTML=`<button type="button" aria-label="Đóng">×</button><video src="${c.dataset.full}" controls autoplay playsinline></video>`;document.body.appendChild(d);const x=d.querySelector("button");x.focus();
    const close=()=>{d.remove();document.removeEventListener("keydown",esc);c.focus()};const esc=e=>{if(e.key==="Escape")close()};
    x.onclick=close;d.addEventListener("click",e=>{if(e.target===d)close()});document.addEventListener("keydown",esc)})});
if(!canHover&&!reduce){const io=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target.querySelector("video");if(e.isIntersecting&&e.intersectionRatio>.7){v.preload="auto";v.play().catch(()=>{})}else v.pause()}),{threshold:[0,.7,1]});clips.forEach(c=>io.observe(c))}
})();
