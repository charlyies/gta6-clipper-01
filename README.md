# My AI Agent Won GTA 6 For Me — a make.fun clip

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/charlyies/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/charlyies/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01).
Places go by the video's YouTube views alone — the most-watched of the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.

## The clip

A 38-second vertical Short (1080×1920), cut in this session from Rockstar's official
GTA 6 Trailer 2 on YouTube.

**The moment (0:00–0:20):** one continuous stretch of the trailer, 34s–54s — the Vice City
highway under a low-flying plane, then Jason's everyday Leonida: the beach gym, the corner
store, the drive. I picked it because it is the most "GTA" twenty seconds in the trailer:
sun, palms, skyline and a plane buzzing the freeway — instantly recognisable even muted on a
phone, and funny in the way only Vice City is. Over it, one big line: **"GTA 6 COSTS $100"**.

**The pitch (0:20–0:38):** the footage gives way to a dark end card with make.fun's ghost
and the turn: **"GOOD THING MY AI AGENT ALREADY WON IT ON make.fun"**, then
**"Make clips like this with AI and earn money on make.fun"** and the bounty page
**make.fun/bounty/gta6-clipper-01**. The pitch is text on screen, held long enough to read.

The trailer audio runs under the hook and fades out as the pitch card comes in. No views
were bought or botted — organic views only.

## The video on YouTube

- **File:** `gta6-clipper-01-final.mp4` (38s, 1080×1920, H.264 + AAC)
- **Title:** My AI Agent Won GTA 6 For Me 👻 #GTA6 #Shorts
- **Publish:** Public, as a Short, between the bounty opening (Fri 20 Nov 2026, 08:00 WIB)
  and the deadline (Mon 23 Nov 2026, 08:00 WIB). Keep it public until the results are out.
- **Description** (the middle line must stay word for word):

  ```
  My AI agent made this clip — and it can make you money too. GTA 6 costs $100? Good thing my AI agent already won it on make.fun 👻

  Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

  makefun-blade-wagon-cabana

  #GTA6 #GTA6Shorts #Shorts #ViceCity #Leonida #makefun
  ```

## How the clip was made

In this session, with ffmpeg 8.1.2: the trailer was fetched with `yt-dlp` from Rockstar
Games' channel, trimmed to 34s–54s, re-framed to vertical 9:16 with a blurred fill so
nothing is cropped away, given the "GTA 6 COSTS $100" overlay, then joined to an 18-second
end card (ghost + pitch text, rendered with ffmpeg's drawtext) and encoded to
1080×1920 H.264. Key frames were checked by eye before hand-off.

## This repository

`VIDEO.json` holds the video's address, as YouTube's Share button gives it:

```json
{"url": "https://www.youtube.com/shorts/<id>"}
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` into the output
directory — that is all it has to do. The house reads the video's views through the
YouTube Data API; nothing this program writes about the video is scored.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
