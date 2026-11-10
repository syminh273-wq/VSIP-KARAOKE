document.addEventListener("click",e=>{const b=e.target.closest("[data-rtab]");if(!b)return;
  document.querySelectorAll("[data-rtab]").forEach(x=>{const on=x===b;x.classList.toggle("active",on);x.setAttribute("aria-selected",on)});
  window.__rTabSet&&window.__rTabSet(b.dataset.rtab)});
