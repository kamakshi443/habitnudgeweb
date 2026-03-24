const featureHighlights = [
  {
    title: "Daily Focus",
    text: "See today’s habits, tap done fast, and keep routines moving even on busy days."
  },
  {
    title: "Gentle Nudges",
    text: "Smart reminders help users come back before one missed day becomes a dropped routine."
  },
  {
    title: "Visible Progress",
    text: "Streaks, completion rates, and habit wins make consistency feel rewarding."
  }
];

const appFeatures = [
  {
    title: "Habit plans for real life",
    text: "Track skincare, fitness, study, hydration, sleep, and self-care habits in one place."
  },
  {
    title: "Reminder system that keeps up",
    text: "HabitNudge helps users show up with timely prompts instead of relying on memory."
  },
  {
    title: "Insights that prevent drop-off",
    text: "Weekly trends and progress signals highlight what is working and where routines need support."
  },
  {
    title: "Built for glow-ups and growth",
    text: "Designed for ambitious users who want better routines, better energy, and better follow-through."
  }
];

const audienceCards = [
  {
    title: "Students",
    text: "Keep study streaks, sleep routines, and self-care habits steady during packed weeks."
  },
  {
    title: "Working Professionals",
    text: "Balance health, focus, and consistency without a heavy or stressful routine planner."
  },
  {
    title: "Glow-up Communities",
    text: "Perfect for skincare, hydration, walking, journaling, and confidence-building challenges."
  }
];

const socialProof = [
  "Morning skincare completed 12 days in a row",
  "Hydration streak back on track after a missed day",
  "Study routine improved with shorter daily sessions"
];

const momentumStats = [
  { value: "4.9/5", label: "feel-good product direction" },
  { value: "30-day", label: "challenge-friendly habit format" },
  { value: "3x", label: "more memorable with streak-driven UX" }
];

const monetizationCards = [
  {
    tier: "Free",
    price: "₹0",
    text: "Bring in new users with habit tracking, streaks, reminders, and beautifully simple daily check-ins."
  },
  {
    tier: "Premium",
    price: "₹299/mo",
    text: "Unlock unlimited habits, deeper insights, better coaching, and advanced retention features that can generate revenue."
  },
  {
    tier: "Challenge Packs",
    price: "₹499+",
    text: "Sell glow-up plans, skincare challenges, study resets, and creator bundles for niche audiences."
  }
];

const growthSteps = [
  "Create a free challenge or waitlist lead magnet to capture visitors before the app-store launch.",
  "Turn habit streak screenshots into social content for Instagram, YouTube Shorts, and creator collaborations.",
  "Add premium features and paid challenge bundles so traffic can convert into recurring revenue."
];

const faqs = [
  {
    question: "What is HabitNudge?",
    answer:
      "HabitNudge is a habit-building app that helps users stay consistent with reminders, streaks, progress tracking, and gentle coaching."
  },
  {
    question: "Who is it made for?",
    answer:
      "It is designed for people building healthier, calmer, and more confident routines, especially around glow-up, wellness, study, and personal growth habits."
  },
  {
    question: "What makes it different?",
    answer:
      "HabitNudge focuses on emotional momentum. It is not just a tracker, it is meant to help users keep going when motivation drops."
  }
];

const contactDetails = [
  { label: "Founder", value: "Kamakshi" },
  { label: "Role", value: "Software Engineer" },
  { label: "Phone", value: "8700246242", href: "tel:8700246242" },
  {
    label: "Email",
    value: "kamkashi443gmail.com"
  }
];

function LogoMark() {
  return (
    <div className="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 64 64" role="img">
        <defs>
          <linearGradient id="habitGlow" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#ff8a5b" />
            <stop offset="55%" stopColor="#ffcb6b" />
            <stop offset="100%" stopColor="#59c7a5" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="20" fill="url(#habitGlow)" />
        <path
          d="M21 33.5c3.8-8.1 8.5-12.2 14.1-12.2 5.9 0 9.4 3.6 9.4 8.4 0 6.5-5.1 10.1-14.8 10.1H21V33.5Z"
          fill="#102033"
          opacity="0.92"
        />
        <path
          d="M23 42.8c2.8-4.4 6.7-6.6 11.6-6.6 4.7 0 8.1 1.9 10.4 5.7"
          fill="none"
          stroke="#fffaf0"
          strokeLinecap="round"
          strokeWidth="4.2"
        />
      </svg>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-text">{text}</p>
    </div>
  );
}

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="hero">
        <nav className="topbar">
          <a className="brand" href="#top" aria-label="HabitNudge home">
            <LogoMark />
            <div className="brand-copy">
              <strong>HabitNudge</strong>
              <span>Build habits that actually stick</span>
            </div>
          </a>

          <div className="nav-actions">
            <a href="#features">Features</a>
            <a href="#audience">Who it’s for</a>
            <a href="#faq">FAQ</a>
            <a className="button button-soft" href="mailto:hello@thehabitnudge.com">
              Contact
            </a>
          </div>
        </nav>

        <div className="hero-layout" id="top">
          <section className="hero-copy">
            <p className="eyebrow">Launch-ready habit app website</p>
            <h1>Make every routine feel easier to start and easier to keep.</h1>
            <p className="hero-text">
              HabitNudge helps people stay consistent with daily reminders, streaks,
              beautiful progress tracking, and supportive nudges for glow-up, wellness,
              study, and self-growth routines.
            </p>

            <div className="hero-actions">
              <a className="button" href="#contact">
                Join the launch
              </a>
              <a className="button button-ghost" href="#monetize">
                See how it earns
              </a>
            </div>

            <div className="hero-stats">
              <article>
                <strong>Daily tracking</strong>
                <span>Fast check-ins for habits that matter most</span>
              </article>
              <article>
                <strong>Smart nudges</strong>
                <span>Reminders that support action without pressure</span>
              </article>
              <article>
                <strong>Habit streaks</strong>
                <span>Motivation that grows through visible momentum</span>
              </article>
            </div>

            <div className="momentum-strip">
              {momentumStats.map((item) => (
                <article className="momentum-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </section>

          <aside className="hero-showcase">
            <div className="phone-card">
              <div className="phone-header">
                <span>Today’s Momentum</span>
                <strong>76%</strong>
              </div>

              <div className="habit-stack">
                <article className="habit-row done">
                  <div>
                    <p>Skincare routine</p>
                    <span>12 day streak</span>
                  </div>
                  <strong>Done</strong>
                </article>
                <article className="habit-row done">
                  <div>
                    <p>Drink 3L water</p>
                    <span>Goal almost complete</span>
                  </div>
                  <strong>Done</strong>
                </article>
                <article className="habit-row pending">
                  <div>
                    <p>30 minute walk</p>
                    <span>Nudge scheduled for 7:00 PM</span>
                  </div>
                  <strong>Next</strong>
                </article>
              </div>

              <div className="insight-callout">
                <p>Habit insight</p>
                <h3>Short evening routines are your strongest consistency window.</h3>
              </div>
            </div>

            <div className="floating-card">
              <span>Live-ready branding</span>
              <strong>Warm, clear, and made for real users</strong>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="content-section" id="features">
          <SectionTitle
            eyebrow="Why users will stay"
            title="A homepage that explains the app in seconds"
            text="This website introduces HabitNudge as a calming but motivating habit companion, with clear value for first-time visitors landing on your domain."
          />

          <div className="highlight-grid">
            {featureHighlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section split-layout">
          <div className="feature-panel">
            <SectionTitle
              eyebrow="App benefits"
              title="Everything visitors need to understand before downloading"
              text="The page now shows what HabitNudge does, who it helps, and why the product feels useful instead of generic."
            />

            <div className="feature-grid">
              {appFeatures.map((item) => (
                <article className="feature-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="proof-panel">
            <SectionTitle
              eyebrow="The feeling"
              title="Supportive, attractive, and focused on momentum"
              text="The visual direction uses warm color, soft glass panels, stronger typography, and product-style UI cards to make the brand feel premium."
            />

            <div className="proof-list">
              {socialProof.map((item) => (
                <article className="proof-card" key={item}>
                  <span className="proof-dot" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="audience">
          <SectionTitle
            eyebrow="Made for"
            title="A better fit for the people most likely to love the app"
            text="HabitNudge is positioned for audiences who care about visible progress, realistic routines, and a polished self-improvement experience."
          />

          <div className="audience-grid">
            {audienceCards.map((item) => (
              <article className="audience-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section split-layout" id="monetize">
          <div className="feature-panel">
            <SectionTitle
              eyebrow="Revenue path"
              title="Designed to turn attention into users and users into income"
              text="A beautiful site helps traffic stay longer, but real earning comes from clear product packaging. HabitNudge now presents a stronger premium story for launch."
            />

            <div className="pricing-grid">
              {monetizationCards.map((item) => (
                <article className="price-card" key={item.tier}>
                  <p className="price-tier">{item.tier}</p>
                  <h3>{item.price}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="proof-panel">
            <SectionTitle
              eyebrow="Growth"
              title="What helps a site reach more people"
              text="No design can promise millions of users by itself, but stronger positioning, better visuals, and clear conversion paths can make every visitor more valuable."
            />

            <div className="growth-list">
              {growthSteps.map((item) => (
                <article className="growth-card" key={item}>
                  <span className="growth-number">0{growthSteps.indexOf(item) + 1}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section cta-band">
          <div className="cta-copy">
            <p className="eyebrow">Ready to grow</p>
            <h2>Make the domain work like a launch machine, not just a brochure.</h2>
            <p className="section-text">
              Use this homepage to attract users, build trust fast, collect interest, and guide people toward premium upgrades, challenge packs, or future app downloads.
            </p>
          </div>
          <a className="button" href="#contact">
            Contact the founder
          </a>
        </section>

        <section className="content-section" id="contact">
          <SectionTitle
            eyebrow="Contact"
            title="Built and launched by Kamakshi"
            text="If someone wants to connect about HabitNudge, they can reach out directly using the details below."
          />

          <div className="contact-grid">
            {contactDetails.map((item) => (
              <article className="contact-card" key={item.label}>
                <p className="contact-label">{item.label}</p>
                {item.href ? (
                  <a className="contact-value" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  <p className="contact-value">{item.value}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="faq">
          <SectionTitle
            eyebrow="FAQ"
            title="Clear answers for first-time visitors"
            text="These answers reduce confusion and help the site feel launch-ready even before app store links are added."
          />

          <div className="faq-grid">
            {faqs.map((item) => (
              <article className="faq-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
