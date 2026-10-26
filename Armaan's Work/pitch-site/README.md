# Ge-32 pitch site

One-page storytelling pitch for MaverickX (TKS Triple Ignition). Vite + vanilla TypeScript + plain CSS, with GSAP/ScrollTrigger for parallax and fade-ins only.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + static build to dist/
```

## Change words

Every word, number, quote and source is in `src/content.ts`. Layout files contain no copy.

- Every number is a `Num` that links to a source in `SOURCES`, or to the panel holding our own math. Estimates set `estimate: true` and render "our estimate".
- Expert quotes have `permission: "named" | "role-only"`. All are `"role-only"` until each person confirms. Flip one to `"named"` to show their name.
- In dev, the console warns if a visible block goes over ~25 words or a number points at an unknown source.

## Swap in real media

Drop files into `public/` with these names. Until a file exists, its slot shows a grey placeholder naming the file and what belongs there. The full list, with a note per slot, is in `src/content.ts` (every `Media` object).

- `public/video/hero.mp4` + `public/img/hero-poster.jpg`
- `public/video/stat.mp4` + `public/img/stat-poster.jpg`
- `public/img/solution/{leach,capture,release,refinery}.jpg` (card photos, landscape)
- `public/img/solution/{leach,capture,release,refinery}-cutout.png` (transparent PNGs that peek above each card)
- `public/img/partners/{titan,teck,umicore,cezinc,winston,corning,5nplus,lattice,llnl}.jpg` (portrait 4:5)
- `public/img/experts/{umicore,tischler,azimi,nyabeze,alvin,kaksonen,lange}.jpg` (square)

Videos: muted, H.264, `+faststart`, under ~4 MB each. Reduced-motion visitors see the poster instead.
