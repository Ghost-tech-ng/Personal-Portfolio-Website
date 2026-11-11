# Eghosa Ephraim Portfolio

Working Systems Atelier portfolio, built with Vite. The homepage and ten project stories are separate static pages. Each story names Eghosa's contribution and distinguishes local captures, sample-data interface builds, exploratory outputs, and generated concept artwork.

Run `npm ci`, then `npm run dev` for local review. Run `npm run build` before publishing. The current production site is hosted on Vercel at https://eghosaephraim.vercel.app/. The Ghost-tech-ng repository is connected to the Vercel project so pushes to `main` can deploy automatically. The local repository is also linked for `vercel deploy --prod`. The build uses Vite's runner config loader so Windows paths work consistently.

The source of each project image is recorded in `visuals.js` and described on its case page. GiftyView screens come from a local UI build and contain sample financial data. The EduSmart brochure screen contains demo values. Aedion's eye-scan image is a development test capture. Lincoln plots are exploratory pipeline outputs. Elixir uses an actual local clinical dashboard capture with no patient records. Iron Discipline uses five actual React Native screens captured from an isolated browser build with demo state. MiAuditOps, PipeUp, HarvestLink and Aedion covers use generated illustrations and are labelled as such. No patient, client or pilot records are published in these assets.

The project pages include GiftyView and Iron Discipline screen galleries, a GiftyView local preview, a Lincoln output switcher, and code-derived explainers for the other work. Animations respect reduced-motion preferences. The original React implementation remains in `src/` for reference and is not included in the current page entry points.

The portfolio was approved for publication on 10 November 2026. The GitHub source and the public hosting URL should be checked separately after each release.


