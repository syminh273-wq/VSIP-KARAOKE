"use client";

import { useEffect } from "react";
import scripts from "./scripts.json";

// Loads the site's interactive scripts (public/js/site-XX.js) in their original order,
// once, after the static markup is on the page.
const QR_LIB = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";

declare global {
  interface Window {
    __vsipScriptsLoaded?: boolean;
  }
}

function load(src: string) {
  return new Promise<void>((resolve) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = () => resolve();
    s.onerror = () => {
      console.error("Failed to load", src);
      resolve();
    };
    document.body.appendChild(s);
  });
}

export default function SiteScripts() {
  useEffect(() => {
    if (window.__vsipScriptsLoaded) return;
    window.__vsipScriptsLoaded = true;
    (async () => {
      await load(QR_LIB);
      for (const name of scripts as string[]) await load(`/js/${name}`);
    })();
  }, []);
  return null;
}
