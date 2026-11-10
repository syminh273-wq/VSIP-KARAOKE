import fs from "node:fs";
import path from "node:path";
import SiteScripts from "@/components/SiteScripts";

// The page markup lives in app/markup.html (edit text/prices/links there).
// It is read at build time and rendered as static HTML.
const markup = fs.readFileSync(path.join(process.cwd(), "app", "markup.html"), "utf8");

export default function Home() {
  return (
    <>
      <div id="vsip-root" style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: markup }} />
      <SiteScripts />
    </>
  );
}
