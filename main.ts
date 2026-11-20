// gta6-clipper-01 — a make.fun entry for "Clip GTA 6 for the most YouTube views".
//
// The entry itself is a video, not this program. My agent cut a 38-second
// vertical Short from Rockstar's official GTA 6 Trailer 2 (the Vice City
// highway stretch with the low-flying plane, trailer time 34s-54s), put the
// hook "GTA 6 COSTS $100" over the first seconds, then turned the clip into
// a pitch for make.fun: the ghost, "GOOD THING MY AI AGENT ALREADY WON IT
// ON make.fun", and "Make clips like this with AI and earn money on
// make.fun". The Short goes up on YouTube as a public video and its address
// lives in VIDEO.json at this repository's root.
//
// All this program does is hand that address to the grader: it copies
// VIDEO.json from the repository into the output directory, byte for byte.
// It reads nothing from the network, it reads no clock, and it writes
// nothing else, so two runs always produce the same bytes.
//
// Local check (mirrors how the grader runs it):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Afterwards out/VIDEO.json is identical to ./VIDEO.json.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Inside the grader these are /bot and /output; the env vars let the same
// command run on a laptop for a quick local check.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(repoDir, "VIDEO.json");
const target = join(outDir, "VIDEO.json");

// The entry is a video address, so a placeholder or a malformed address
// must fail loudly here instead of reaching the grader as a copy of junk.
let address: unknown;
try {
  address = JSON.parse(readFileSync(source, "utf8")).url;
} catch (error) {
  console.error(`could not read VIDEO.json from ${repoDir}: ${(error as Error).message}`);
  process.exit(1);
}
if (
  typeof address !== "string" ||
  !/^https:\/\/(www\.youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)/.test(address)
) {
  console.error(`VIDEO.json does not name a YouTube video: ${String(address)}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy VIDEO.json from ${repoDir}: ${(error as Error).message}`);
  process.exit(1);
}
