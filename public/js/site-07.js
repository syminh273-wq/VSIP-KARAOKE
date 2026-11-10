(()=>{const hs=document.getElementById("homeSlider");if(!hs)return;
  const slides=[...hs.querySelectorAll(".hs-slide")],tabs=[...hs.querySelectorAll(".hs-tab")],pp=hs.querySelector(".hs-pp"),now=hs.querySelector(".hs-now");
  const DUR=6500,reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  let cur=0,timer=null,hover=false,user=false,left=DUR,t0=0;
  function go(i){cur=(i+slides.length)%slides.length;
    slides.forEach((s,k)=>{s.classList.toggle("on",k===cur);s.setAttribute("aria-hidden",k!==cur);s.inert=k!==cur});
    tabs.forEach((t,k)=>{t.setAttribute("aria-selected",k===cur);const b=t.querySelector("i");b.style.display="none";b.offsetWidth;b.style.display=""});
    left=DUR;schedule()}
  function visible(){const v=document.getElementById("view-site");return !document.hidden&&(!v||!v.hidden)}
  function schedule(){clearTimeout(timer);timer=null;if(reduce||hover||user)return;t0=performance.now();timer=setTimeout(()=>visible()?go(cur+1):schedule(),left)}
  function pause(){if(timer){clearTimeout(timer);timer=null;left=Math.max(300,left-(performance.now()-t0))}hs.classList.add("paused")}
  function resume(){if(hover||user)return;hs.classList.remove("paused");schedule()}
  hs.querySelector(".hs-prev").onclick=()=>go(cur-1);hs.querySelector(".hs-next").onclick=()=>go(cur+1);
  tabs.forEach((t,k)=>t.onclick=()=>go(k));
  pp.onclick=()=>{user=!user;pp.setAttribute("aria-pressed",user);pp.setAttribute("aria-label",user?"Tiếp tục":"Tạm dừng");user?pause():resume()};
  hs.addEventListener("mouseenter",()=>{hover=true;pause()});hs.addEventListener("mouseleave",()=>{hover=false;resume()});
  hs.addEventListener("keydown",e=>{if(e.key==="ArrowRight")go(cur+1);if(e.key==="ArrowLeft")go(cur-1)});
  let x0=null,y0=0;
  hs.addEventListener("touchstart",e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
  hs.addEventListener("touchend",e=>{if(x0==null)return;const dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy))go(cur+(dx<0?1:-1));x0=null});
  document.addEventListener("visibilitychange",()=>document.hidden?pause():resume());
  go(0);})();
