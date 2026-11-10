export const cases = [
  {
    slug: 'aedion', number: '01', title: 'Aedion', category: 'HEALTHCARE / APPLIED AI', kicker: 'When an image is the input, quality comes first.',
    deck: 'Scan flows, input checks and backend work for a healthcare assistant. V1 is in use; V2 architecture is still being developed.',
    status: 'Live V1 · V2 in progress', role: 'AI Engineer / Lead Backend Developer', links: [],
    situationTitle: 'A scan needs more than a model.',
    situation: 'A photo can be too dark, poorly framed or simply unusable. The experience needs a way to catch that early and tell someone what to do next. The service also has to carry the request through the right API path.',
    fact: 'The scan work in V1 is live. The V2 architecture and capture research are ongoing; this page keeps those stages separate.',
    contributionTitle: 'I worked on the path into the scan.',
    contribution: 'I collaborated on chatbot architecture from May 2026 and joined formally in August. My verified work covers scan/API improvements, image-input quality, typed retake feedback and backend architecture.',
    decisions: [
      ['Give bad inputs a useful answer', 'Capture checks and retake reasons make the next action clearer than a generic failure.'],
      ['Keep the service boundaries visible', 'The scan flow, API and conversation path have different jobs; the case study shows where they meet.'],
      ['Separate shipped work from research', 'V1, V2 and calibration experiments are shown with their actual status.']
    ],
    seeTitle: 'Follow the input path.', seeCopy: 'Select a stage to see what the code handles there. The development capture below shows a rejected test input; the illustration is concept artwork, not a clinical result.', media: 'aedion',
    proofs: [
      ['CODE REVIEW', 'Scan and capture modules', 'Local source shows image-quality checks, typed retake reasons and API work. These repositories are private.'],
      ['ROLE', 'Your confirmed contribution', 'The scan/API and input-quality work is yours; the model-training notebook is credited to another developer.'],
      ['DEV CAPTURE', 'Eye-scan test harness', 'A local development screen shows a no-eye-detected input and the typed retake reason. It is not the shipped interface.', 'assets/evidence/aedion-eye-test.webp']
    ],
    limit: 'I do not claim model-weight training, clinical validation or a measured latency improvement here.'
  },
  {
    slug: 'giftyview', number: '02', title: 'GiftyView', category: 'CONSUMER PRODUCT / FLUTTER + WEB', kicker: 'One product, three surfaces to build.',
    deck: 'A live gift-card and bill-payment product. I built its Flutter app, admin portal and web experience, while another developer owned the backend.',
    status: 'Live product', role: 'Freelance interface development',
    links: [
      ['Visit live website', 'https://giftyview.com/'],
      ['Google Play listing', 'https://play.google.com/store/apps/details?id=com.giftyview.app']
    ],
    situationTitle: 'The customer and the operator need different views.',
    situation: 'The customer journey covers gift cards, bills and transactions. The team also needed web and admin interfaces around the product. Those screens have to make sense together, even though they serve different people.',
    fact: 'The live website and Play Store listing are public. The embedded build below is an earlier local design prototype with sample content.',
    contributionTitle: 'I built the three interfaces.',
    contribution: 'I developed the Flutter app, admin portal and web experience for a freelance client. I guided and contributed to backend integration, but the backend itself was built by another developer.',
    decisions: [
      ['Carry the journey through', 'The local UI source contains gift-card, bill-payment, processing and receipt screens, connected by a shared navigation flow.'],
      ['Give operations its own surface', 'The admin portal supports the product from the other side of a transaction.'],
      ['Keep ownership explicit', 'The case study shows my interface work and calls out the collaborative backend boundary.']
    ],
    seeTitle: 'Try the earlier interface build.', seeCopy: 'This is a working design build compiled from the GiftyView project files on this computer. The person, balances and transactions in it are sample content; the live product may differ.', media: 'giftyview',
    proofs: [
      ['WORKING PREVIEW', 'Local interface build', 'A click-through prototype with home, gift-card, bill-payment and receipt screens. Sample data only.', 'previews/giftyview-ui/index.html'],
      ['LIVE PRODUCT', 'Public website', 'The current GiftyView site is live. Its content may have changed after my freelance delivery.', 'https://giftyview.com/'],
      ['APP LISTING', 'Google Play', 'The Android app is listed publicly. The listing confirms availability, not which individual wrote each backend service.', 'https://play.google.com/store/apps/details?id=com.giftyview.app']
    ],
    limit: 'The preview is a design build, not a transaction sandbox. I did not build the backend alone, and the current website may include later client changes.'
  },
  {
    slug: 'elixir', number: '03', title: 'Elixir', category: 'HOSPITAL SOFTWARE / PHP + MOBILE', kicker: 'Extending software that people already use.',
    deck: 'Maternity, interface, wallet and patient mobile work added to an existing hospital management system in real clinical use.',
    status: 'Live clinical use', role: 'Backend and mobile development', links: [],
    situationTitle: 'The system was already there.',
    situation: 'Elixir was an existing hospital platform. The challenge was to add useful workflows without treating the project as a fresh build: maternity work, patient-facing mobile flows, wallet integration and interface changes had to fit into the existing system.',
    fact: 'I continued Elixir work separately as a freelance/contract developer after ToksNet ended in July 2026.',
    contributionTitle: 'I extended the HMS.',
    contribution: 'My scope includes maternity features, interface work, wallet/mobile integration and AI-related extensions. I do not claim the original platform as my own build.',
    decisions: [
      ['Meet the existing data model', 'New workflows have to fit the hospital system already used by staff.'],
      ['Connect mobile to the core', 'The patient app uses the system’s backend rather than operating as a disconnected demo.'],
      ['Keep clinical examples safe', 'Published walkthroughs will use anonymised or clearly synthetic records.']
    ],
    seeTitle: 'See how the pieces connect.', seeCopy: 'This scope map is based on the local code. The visual is concept artwork; no patient record or live clinical screen is shown.', media: 'elixir',
    proofs: [
      ['SOURCE', 'Existing HMS and mobile modules', 'The local codebase contains the PHP system and patient mobile work.'],
      ['STATUS', 'Real clinical use', 'You confirmed that hospitals or clinical staff use Elixir.'],
      ['NEXT CAPTURE', 'Anonymised workflow', 'Add actual maternity and patient-app screens after replacing identifiable records.']
    ],
    limit: 'The original HMS predates my extensions. The diagram is explanatory; it is not a screenshot of a hospital deployment.'
  },
  {
    slug: 'miauditops', number: '04', title: 'MiAuditOps', category: 'AUDIT + INVENTORY / FULL STACK', kicker: 'Make a stock movement explainable.',
    deck: 'A freelance audit and inventory system I built from scratch through the version handed to its owner.',
    status: 'Client handoff', role: 'Freelance full-stack development', links: [['View public code', 'https://github.com/Ghost-tech-ng/Audittops']],
    situationTitle: 'A balance needs a history.',
    situation: 'Inventory software is useful when a stock number can be traced through incoming, outgoing and corrected movements. The project brings that ledger together with audits, reports and organisation access.',
    fact: 'I built the initial system through handoff. The owner continued development with another developer afterwards.',
    contributionTitle: 'I built the first working system.',
    contribution: 'The version in my codebase covers the original audit, inventory and subscription application. I handed it to the client for continued development; I do not claim later changes.',
    decisions: [
      ['Keep movements visible', 'The ledger tells a better story than a balance alone.'],
      ['Build operational views', 'Reports, audit routes and organisation access sit around the inventory core.'],
      ['Mark the handoff point', 'The code link is evidence for the version I delivered, not a claim of continuing ownership.']
    ],
    seeTitle: 'Re-play a tiny ledger.', seeCopy: 'Use the controls to see how movements change a balance. This is a synthetic explainer built for the portfolio, not a live client account or copied production data.', media: 'miauditops',
    proofs: [
      ['PUBLIC CODE', 'Audittops repository', 'The source is public and includes the audit and inventory application.', 'https://github.com/Ghost-tech-ng/Audittops'],
      ['SCOPE', 'Original build through handoff', 'Your confirmed role is the initial freelance build; another developer continued after delivery.'],
      ['DEMO', 'Synthetic ledger replay', 'The interactive example here illustrates the inventory idea. It is not a screenshot of the client deployment.']
    ],
    limit: 'Current deployment and usage after handoff are unconfirmed. The sample values below are invented solely to explain the interaction.'
  },
  {
    slug: 'pipeup', number: '05', title: 'PipeUp', category: 'SPEECH / MOBILE + APPLIED AI', kicker: 'A useful breakdown of what you actually said.',
    deck: 'My own speech-practice app combines timed word-level feedback with language-model coaching. The working build is still in testing.',
    status: 'Working build · testing', role: 'Own product / mobile and backend', links: [],
    situationTitle: 'Feedback needs to be specific.',
    situation: 'A speaker can hear that a recording felt rushed, but still needs to know where the rush, filler or long pause happened. PipeUp lines up words with time so a person can revisit the moment.',
    fact: 'The app is not publicly launched. Its timing metrics are deterministic; the language model is used for content coaching.',
    contributionTitle: 'I built the app and its service path.',
    contribution: 'My work spans the mobile experience, speech timing and analysis, transcription/coaching integration, plus backend auth, quotas and entitlements.',
    decisions: [
      ['Anchor feedback to time', 'Word timestamps make the result inspectable instead of a vague score.'],
      ['Separate measurement from coaching', 'Pace, pauses and fillers come from timed data; the model writes content advice.'],
      ['Build for a real product', 'Auth, quota and subscription entitlement logic sit behind the practice flow.']
    ],
    seeTitle: 'Explore a sample transcript.', seeCopy: 'Click a word to inspect its position in a short synthetic sample. This interaction explains the product idea; it is not a processed user recording.', media: 'pipeup',
    proofs: [
      ['WORKING BUILD', 'Mobile and service source', 'The local project includes the app, speech-processing flow and backend functions.'],
      ['METHOD', 'Timed metrics versus model output', 'The distinction is visible in the implementation and retained in the case-study wording.'],
      ['NEXT CAPTURE', 'Real build walkthrough', 'Add a short recording from a consented or synthetic speaker and the resulting screen.']
    ],
    limit: 'No public launch or measured speaking improvement is claimed. This sample transcript is portfolio demo data.'
  },
  {
    slug: 'lincoln', number: '06', title: 'Lincoln BSI', category: 'SPATIAL ANALYSIS / ML', kicker: 'The diagnostic plots belong in the story.',
    deck: 'A freelance spatial analysis project using feature engineering, clustering and evaluation to study business suitability.',
    status: 'Freelance project', role: 'Data and ML development', links: [],
    situationTitle: 'A map can hide weak assumptions.',
    situation: 'The pipeline combines public demographic, business and place data into spatial features. The case study is about how those features were modelled and checked, rather than turning a coloured map into an unsupported claim.',
    fact: 'The repository includes diagnostic plots and a validation report. Their results should be read as exploratory evidence, not as a proven business-success predictor.',
    contributionTitle: 'I coded the analysis project.',
    contribution: 'I developed the freelance codebase and can show its pipeline outputs. This is freelance work; it should not be presented as my own University of Lincoln research.',
    decisions: [
      ['Bring different sources onto one map', 'The pipeline works with census, business and OpenStreetMap inputs.'],
      ['Check the clustering choice', 'The source compares K-Means candidates with elbow and silhouette diagnostics.'],
      ['Show the limits', 'The validation report does not justify a claim that the score predicts commercial success.']
    ],
    seeTitle: 'Inspect the actual plots.', seeCopy: 'These images are exported by the local Lincoln BSI pipeline. Switch between cluster selection and the score/population comparison.', media: 'lincoln',
    proofs: [
      ['REAL OUTPUT', 'K selection diagnostic', 'The plot shows the elbow curve and silhouette score from the local pipeline.', 'assets/evidence/lincoln-k-selection.png'],
      ['REAL OUTPUT', 'BSI versus population density', 'A pipeline scatter plot for food and beverage, retail and entertainment scores.', 'assets/evidence/lincoln-bsi-population.png'],
      ['METHOD', 'Validation report', 'A local validation report exists; it contains mixed/weak signals, so no predictive accuracy is claimed.']
    ],
    limit: 'The plots are real pipeline artefacts, but they do not establish commercial outcomes or a validated recommendation system.'
  },
  {
    slug: 'harvestlink', number: '07', title: 'HarvestLink', category: 'AGRICULTURE / OFFLINE MOBILE', kicker: 'A field app cannot count on a signal.',
    deck: 'An E-Prime pilot connecting an offline mobile registry, backend sync and a map-based operations desk.',
    status: 'Prototype / pilot', role: 'Own product / mobile and backend', links: [],
    situationTitle: 'Fieldwork happens offline.', situation: 'A field agent may register a farmer or boundary where connectivity is poor. The app has to hold changes locally and send them later without losing the work.',
    fact: 'The code contains an Expo/SQLite outbox and retry flow, FastAPI service and React/MapLibre operations desk. Forecasting and payments remain roadmap items.',
    contributionTitle: 'I built the registry and sync path.', contribution: 'This is my own/E-Prime product work across mobile, API and web desk components. The current status is a working prototype or pilot.',
    decisions: [
      ['Save work locally first', 'The mobile outbox records changes before they can be sent.'],
      ['Retry with context', 'Sync status should show whether a change is waiting, sent or needs attention.'],
      ['Keep demo records separate', 'The operations desk labels demo farmers separately from real records.']
    ],
    seeTitle: 'Walk through an offline queue.', seeCopy: 'Add a synthetic field record while offline, then reconnect. The local web-desk login capture is real; this queue is an explainer and does not connect to the pilot database.', media: 'harvestlink',
    proofs: [
      ['SOURCE', 'Offline outbox and sync code', 'The local Expo/SQLite and FastAPI code supports the current registry stage.'],
      ['LOCAL BUILD', 'Field desk login', 'Captured from the local web build, without account details or farmer records.', 'assets/evidence/harvestlink-desk-login.webp'],
      ['STATUS', 'Prototype / pilot', 'Forecasting, offers, collection and payout are roadmap features, not claims about current operation.']
    ],
    limit: 'The queue below is a synthetic demonstration. No real farmer data is shown and future roadmap stages are not presented as shipped.'
  },
  {
    slug: 'edusmart', number: '08', title: 'EduSmart', category: 'EDUCATION / FULL STACK', kicker: 'A school system now meeting its first schools.',
    deck: 'The original PHP/CodeIgniter school management system I built is currently onboarding two schools.',
    status: 'Onboarding two schools', role: 'Original full-stack build', links: [],
    situationTitle: 'One system, several school workflows.', situation: 'School administration needs a set of connected views and records. The first version had to provide a foundation schools could begin onboarding to.',
    fact: 'Two schools are currently onboarding. That is the confirmed status; established active use is not claimed.',
    contributionTitle: 'I built the original system.', contribution: 'I developed the original PHP/CodeIgniter, MySQL and web interface codebase from scratch.',
    decisions: [
      ['Connect the records', 'The application brings school data and administrative workflows into one place.'],
      ['Prepare for onboarding', 'The current story is the original build and the two-school onboarding stage.'],
      ['Keep adoption claims exact', 'The site will describe onboarding rather than imply mature deployment.']
    ],
    seeTitle: 'The original system at a glance.', seeCopy: 'This dashboard image comes from local brochure material for the application. Its on-screen counts are demonstration content, not adoption metrics.', media: 'edusmart',
    proofs: [
      ['SOURCE', 'Original application', 'The local project contains the PHP/CodeIgniter and MySQL school system.'],
      ['LOCAL CAPTURE', 'Admin dashboard', 'Local brochure image of the EduSmart360 application. On-screen numbers are demo content.', 'assets/evidence/edusmart-admin.webp'],
      ['STATUS', 'Two schools onboarding', 'This stage is confirmed by you; it is not described as a completed rollout.']
    ],
    limit: 'No school names, user counts or deployment results are included without evidence.'
  },
  {
    slug: 'afrorave', number: '09', title: 'AfroRave', category: 'EVENTS / FRONTEND', kicker: 'A specific contribution in a team product.',
    deck: 'Creator and vendor-facing features built within an existing event platform frontend.',
    status: 'Team contribution', role: 'Frontend feature development', links: [['View team repository', 'https://github.com/Greg-Soap/AfroRave--Frontend']],
    situationTitle: 'Creators and vendors need different tools.', situation: 'The event product has several user journeys. The work I can speak to is the part of the frontend I changed, not the entire team application.',
    fact: 'Local commits attributed to Ghost-tech-ng support the specific screens and responsive improvements listed here.',
    contributionTitle: 'I built selected screens and flows.', contribution: 'My verified contributions include creator dashboard work, vendor signup/dashboard/profile and slot flows, creator settings, event selection/filtering, a creator guide and responsive fixes.',
    decisions: [
      ['Make a dashboard usable', 'Creator and vendor views needed layout and state work, not just new colours.'],
      ['Follow the full flow', 'Signup, profile, slots and event selection connect screens that users move through.'],
      ['Credit the team', 'The case study identifies my authored features within the wider frontend.']
    ],
    seeTitle: 'Trace the feature set.', seeCopy: 'The empty vendor sign-up screen was captured from the local team frontend. It is one of the flows I contributed to, shown without any personal submission data.', media: 'afrorave',
    proofs: [
      ['PUBLIC CODE', 'Team frontend repository', 'The source is public; local authored commits were checked for specific feature ownership.', 'https://github.com/Greg-Soap/AfroRave--Frontend'],
      ['LOCAL CAPTURE', 'Complete vendor sign-up', 'Complete empty vendor form captured from the local team build; no personal details were entered.', 'assets/evidence/afrorave-vendor-signup-complete.jpg']
    ],
    limit: 'I do not claim to have built the complete frontend. Some local vendor views were backed by mock data.'
  }
];
