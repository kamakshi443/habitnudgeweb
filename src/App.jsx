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

const habitNudgeDifferences = [
  {
    title: "Not another habit tracker",
    text: "This is built to feel human, not like a dashboard you avoid."
  },
  {
    title: "No overwhelm",
    text: "You start with one clear habit, so you don’t burn out in week one."
  },
  {
    title: "A simple system",
    text: "Small steps, gentle nudges, and consistency without pressure."
  },
  {
    title: "Guidance that feels real",
    text: "You get clarity and direction, not generic advice or guilt."
  }
];

const momentumStats = [
  { value: "4.9/5", label: "feel-good product direction" },
  { value: "30-day", label: "challenge-friendly habit format" },
  { value: "3x", label: "more memorable with streak-driven UX" }
];

const painPoints = [
  "I plan my day, then somehow nothing happens.",
  "I know what I should do… but I don’t do it.",
  "I overthink simple habits until they feel too big.",
  "I tell myself I’m lazy, but I know that’s not true.",
  "Why can’t I stay consistent even when I really want to?",
  "I end most nights feeling guilty and frustrated."
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
            <p className="eyebrow">If you feel stuck, this is for you</p>
            <h1>
              You keep telling yourself you’ll change, but the day ends the same and you feel guilty again.
            </h1>
            <p className="hero-text">
              HabitNudge helps you rebuild your routine with a simple, human plan you can actually follow.
              We start small, remove the pressure, and give you a clear next step that feels doable.
            </p>

            <div className="hero-actions">
              <a className="button" href="#contact">
                Fix My Routine
              </a>
              <a className="button button-ghost" href="#contact">
                Book 15-min Call
              </a>
            </div>

            <p className="hero-soft-line">You don’t need a lecture. You need a system that fits your real life.</p>

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

        <section className="content-section routine-check" id="routine-check">
          <SectionTitle
            eyebrow="Free routine check"
            title="A quick check-in to see what’s actually off."
            text="Answer a few simple questions and get a personalized habit nudge."
          />

          <form className="routine-form">
            <label className="routine-field">
              <span>Do you follow your routine daily?</span>
              <select name="routine-daily">
                <option value="">Select one</option>
                <option value="yes">Most days</option>
                <option value="sometimes">Sometimes</option>
                <option value="rarely">Rarely</option>
              </select>
            </label>

            <label className="routine-field">
              <span>Biggest struggle right now?</span>
              <select name="routine-struggle">
                <option value="">Select one</option>
                <option value="motivation">Lack of motivation</option>
                <option value="overthinking">Overthinking</option>
                <option value="time">No time / too busy</option>
                <option value="consistency">Consistency</option>
              </select>
            </label>

            <label className="routine-field">
              <span>Sleep timing lately?</span>
              <select name="routine-sleep">
                <option value="">Select one</option>
                <option value="early">Mostly on time</option>
                <option value="late">Too late most nights</option>
                <option value="irregular">Very irregular</option>
              </select>
            </label>

            <label className="routine-field">
              <span>Focus level these days?</span>
              <select name="routine-focus">
                <option value="">Select one</option>
                <option value="strong">Good focus</option>
                <option value="mixed">Up and down</option>
                <option value="low">Low focus</option>
              </select>
            </label>

            <button className="button routine-submit" type="button">
              Get your personalized habit suggestion
            </button>
          </form>
        </section>

        <section className="content-section founder-section" id="founder">
          <SectionTitle
            eyebrow="Founder"
            title="Hi, I’m Kamakshi."
            text="I built HabitNudge because I know what it’s like to care a lot and still feel stuck."
          />

          <div className="founder-grid">
            <div className="founder-card">
              <p>
                I struggled with consistency for years. I would plan, feel motivated, then lose the rhythm and feel guilty
                at night.
              </p>
              <p>
                The turning point was realizing it wasn’t laziness. I just didn’t have a system that fit real life. That’s
                why HabitNudge exists — to make habits feel doable, not heavy.
              </p>
            </div>
            <div className="founder-card founder-highlight">
              <p className="founder-label">How I help</p>
              <h3>Simple systems, gentle structure, and clarity that keeps you moving.</h3>
              <p>I keep it honest, practical, and realistic so it doesn’t fall apart after day three.</p>
            </div>
          </div>
        </section>

        <section className="content-section clarity-section" id="clarity-call">
          <SectionTitle
            eyebrow="15-minute clarity"
            title="A small breakthrough that changes how your day feels."
            text="This is not just a call. It’s a short, focused moment to cut through the noise and finally see a clear way forward."
          />

          <div className="clarity-grid">
            <div className="clarity-card">
              <h3>What happens in the session</h3>
              <p>We talk through what’s been breaking your routine, then simplify it into one clear next step.</p>
            </div>
            <div className="clarity-card">
              <h3>What you get</h3>
              <ul>
                <li>Clarity on what is actually blocking you</li>
                <li>A simple plan that fits your real day</li>
                <li>One habit to start with, not ten</li>
                <li>A calmer way to stay consistent</li>
              </ul>
            </div>
            <div className="clarity-card">
              <h3>Why it works</h3>
              <p>Clarity removes pressure. Simplicity creates action. That is how consistency starts.</p>
            </div>
          </div>

          <div className="clarity-cta">
            <a className="button" href="#contact">
              Book My Call
            </a>
            <p className="clarity-urgency">
              Limited slots, kept intentionally small for personal attention. If you’re ready, book now.
            </p>
          </div>
        </section>

        <section className="content-section" id="how">
          <SectionTitle
            eyebrow="How it works"
            title="Simple steps, no overthinking."
            text="Three steps. That’s it."
          />

          <div className="how-grid">
            <article className="how-card">
              <span className="how-step">01</span>
              <h3>Book a call</h3>
              <p>Book a call</p>
            </article>
            <article className="how-card">
              <span className="how-step">02</span>
              <h3>Share your problem</h3>
              <p>Share your problem</p>
            </article>
            <article className="how-card">
              <span className="how-step">03</span>
              <h3>Get a clear action plan</h3>
              <p>Get a clear action plan</p>
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

        <section className="content-section difference-section" id="difference">
          <SectionTitle
            eyebrow="Why HabitNudge is different"
            title="Simple, human, and built for real follow-through."
            text="No overwhelm. No guilt. Just a system that feels doable and actually sticks."
          />

          <div className="difference-grid">
            {habitNudgeDifferences.map((item) => (
              <article className="difference-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
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
