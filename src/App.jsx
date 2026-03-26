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

const testimonials = [
  {
    quote:
      "I stopped blaming myself and finally built a routine I can follow. It feels calm now, not chaotic.",
    name: "Ananya, working professional"
  },
  {
    quote:
      "The clarity piece helped the most. I knew what mattered and didn’t overthink every day.",
    name: "Rohit, developer"
  },
  {
    quote:
      "I’m consistent in a way I haven’t been before. Small, simple habits finally stuck.",
    name: "Meera, student"
  }
];

const momentumStats = [
  { value: "4.9/5", label: "feel-good product direction" },
  { value: "30-day", label: "challenge-friendly habit format" },
  { value: "3x", label: "more memorable with streak-driven UX" }
];

const painPoints = [
  "You start strong, then stop halfway.",
  "You promise yourself tomorrow will be better, then repeat the same day.",
  "You feel guilty at night because the day slipped away again.",
  "You know what to do, but still don’t do it.",
  "You overthink simple habits until they feel impossible.",
  "You feel inconsistent no matter how much you care."
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
            <p className="eyebrow">For people who feel stuck in the same cycle</p>
            <h1>You’re not broken. You’re just stuck in a routine that isn’t working.</h1>
            <p className="hero-text">
              HabitNudge helps you get clarity, rebuild your routine, and follow through with a simple plan
              you can actually stick to. No guilt. No complicated system. Just a clear next step.
            </p>

            <div className="hero-actions">
              <a className="button" href="#contact">
                Fix My Routine
              </a>
              <a className="button button-ghost" href="#contact">
                Book 15-min Call
              </a>
            </div>

            <p className="hero-soft-line">You don’t need more motivation. You need clarity.</p>

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
        <section className="content-section" id="pain">
          <SectionTitle
            eyebrow="If this feels familiar"
            title="You are not alone in this."
            text="These are the patterns most people hide but feel every day."
          />

          <div className="pain-grid">
            {painPoints.map((item) => (
              <article className="pain-card" key={item}>
                <span className="pain-dot">•</span>
                <p>{item}</p>
              </article>
            ))}
          </div>

          <p className="pain-close">It’s not laziness. It’s a lack of a system that fits your real life.</p>
        </section>

        <section className="content-section founder-section" id="founder">
          <SectionTitle
            eyebrow="Founder"
            title="Hi, I’m Kamakshi."
            text="I help people who feel stuck with routine, consistency, and discipline find a simpler way forward."
          />

          <div className="founder-grid">
            <div className="founder-card">
              <p>
                I’m not a guru. I’m a guide who helps you make sense of what’s actually not working so you can fix it without
                overcomplicating your life.
              </p>
              <p>
                My approach is practical and calm: clarity first, tiny steps next, and a routine that fits your real schedule.
              </p>
            </div>
            <div className="founder-card founder-highlight">
              <p className="founder-label">How I help</p>
              <h3>Habit clarity, routine fixing, and a simple plan you can follow.</h3>
              <p>
                Most people don’t need more motivation. They need a system that feels doable.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section clarity-section" id="clarity-call">
          <SectionTitle
            eyebrow="15-minute clarity"
            title="Leave with a clear next step, not a bigger to-do list."
            text="This is a focused clarity session for people who feel stuck, inconsistent, or overwhelmed by their routine."
          />

          <div className="clarity-grid">
            <div className="clarity-card">
              <h3>What happens in the session</h3>
              <p>We cut through the noise, find what is actually blocking you, and simplify the next move.</p>
            </div>
            <div className="clarity-card">
              <h3>What you get</h3>
              <ul>
                <li>Clarity on what is breaking your routine</li>
                <li>A small, realistic plan you can follow</li>
                <li>Practical next steps for your day</li>
                <li>A calmer mindset about consistency</li>
              </ul>
            </div>
            <div className="clarity-card">
              <h3>Why it matters</h3>
              <p>When you stop guessing, you stop restarting. This gives you direction you can act on immediately.</p>
            </div>
          </div>

          <div className="clarity-cta">
            <a className="button" href="#contact">
              Book My Call
            </a>
            <p className="clarity-urgency">Limited slots. Personal attention. Kept intentionally small.</p>
          </div>
        </section>

        <section className="content-section" id="how">
          <SectionTitle
            eyebrow="How it works"
            title="Simple steps, no overthinking."
            text="Three steps. Clear direction."
          />

          <div className="how-grid">
            <article className="how-card">
              <span className="how-step">01</span>
              <h3>Book a call</h3>
              <p>Pick a slot that works for you.</p>
            </article>
            <article className="how-card">
              <span className="how-step">02</span>
              <h3>Discuss your problem</h3>
              <p>We talk through what is actually not working.</p>
            </article>
            <article className="how-card">
              <span className="how-step">03</span>
              <h3>Get a clear plan</h3>
              <p>Leave with a simple next step you can follow.</p>
            </article>
          </div>
        </section>

        <section className="content-section product-section" id="product">
          <SectionTitle
            eyebrow="Coming soon"
            title="HabitNudge is coming soon."
            text="A simple habit system that helps you track what matters, get smart nudges, and stay consistent."
          />

          <div className="product-card">
            <p>Habit tracking that feels calm and doable.</p>
            <p>Smart nudges that guide you back when you slip.</p>
            <p>A simple system built for real-life consistency.</p>
            <a className="button" href="#contact">
              Join Waitlist
            </a>
          </div>
        </section>

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

        <section className="content-section" id="testimonials">
          <SectionTitle
            eyebrow="Testimonials"
            title="Real clarity, real consistency"
            text="Short wins from people who wanted a routine that felt simple and doable."
          />

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p className="testimonial-quote">“{item.quote}”</p>
                <p className="testimonial-name">{item.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section cta-band" id="closing-cta">
          <div className="cta-copy">
            <p className="eyebrow">Final nudge</p>
            <h2>You don’t have to stay stuck in the same loop another week.</h2>
            <p className="section-text">
              Take one small step that gives you clarity and momentum today.
            </p>
          </div>
          <div className="closing-actions">
            <a className="button" href="#contact">
              Fix My Routine
            </a>
            <a className="button button-ghost" href="#contact">
              Book Call
            </a>
          </div>
        </section>

        <section className="content-section" id="contact">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s talk about what you need"
            text="Send a quick message and I’ll reply fast. WhatsApp is the easiest, email works too."
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
