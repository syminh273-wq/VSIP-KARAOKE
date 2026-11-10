/* KTV room slider: arrows, thumbnails, swipe (scroll-snap), autoplay that pauses on interaction */
(function(){let timer=0,paused=false,inView=false;const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
function els(){const tr=document.getElementById("ksTrack");return tr?{tr,n:tr.children.length,ths:[...document.querySelectorAll(".ks-th")],cnt:document.getElementById("ksCount")}:null}
function cur(e){return Math.round(e.tr.scrollLeft/e.tr.clientWidth)}
function go(i){const e=els();if(!e)return;i=(i+e.n)%e.n;e.tr.scrollTo({left:i*e.tr.clientWidth,behavior:reduce?"auto":"smooth"})}
function sync(){const e=els();if(!e)return;const i=cur(e);e.tr.querySelectorAll("video[data-ksv]").forEach(v=>{if(v.closest(".ks-slide")===e.tr.children[i]&&inView&&!reduce){v.preload="auto";v.play().catch(()=>{})}else v.pause()});e.cnt.textContent=(i+1)+" / "+e.n;e.ths.forEach((b,k)=>{b.classList.toggle("active",k===i);b.setAttribute("aria-selected",k===i);if(k===i){const c=b.parentElement;const l=b.offsetLeft-c.offsetLeft;if(l<c.scrollLeft||l+b.offsetWidth>c.scrollLeft+c.clientWidth)c.scrollTo({left:l-(c.clientWidth-b.offsetWidth)/2,behavior:reduce?"auto":"smooth"})}})}
function play(){clearInterval(timer);if(reduce)return;timer=setInterval(()=>{const e=els();if(!e||paused||!inView||document.hidden||!e.tr.offsetParent)return;go(cur(e)+1)},5000)}
window.__ksInit=()=>{const e=els();if(!e)return;let st;e.tr.addEventListener("scroll",()=>{clearTimeout(st);st=setTimeout(sync,60)},{passive:true});
  const box=document.getElementById("ks");box.addEventListener("mouseenter",()=>paused=true);box.addEventListener("mouseleave",()=>paused=false);
  box.addEventListener("focusin",()=>paused=true);box.addEventListener("focusout",()=>paused=false);box.addEventListener("touchstart",()=>{paused=true},{passive:true});
  e.tr.addEventListener("keydown",k=>{if(k.key==="ArrowRight"){k.preventDefault();go(cur(e)+1)}if(k.key==="ArrowLeft"){k.preventDefault();go(cur(e)-1)}});
  new IntersectionObserver(x=>{inView=x[0].isIntersecting;sync()},{threshold:.5}).observe(box);
  sync();play()};
document.addEventListener("click",ev=>{const a=ev.target.closest("[data-ks]");if(a){const e=els();if(e)go(cur(e)+ +a.dataset.ks);return}
  const th=ev.target.closest("[data-ksi]");if(th)go(+th.dataset.ksi)});
window.__ksInit();})();
