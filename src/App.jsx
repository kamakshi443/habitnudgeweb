const testimonials = [
  {
    quote:
      "I finally understood why I wasn’t consistent. It made everything feel lighter.",
    name: "Ananya"
  },
  {
    quote:
      "Simple advice, but it actually worked. I stopped restarting every Monday.",
    name: "Rohit"
  },
  {
    quote:
      "I felt clarity for the first time in months. That alone was a huge shift.",
    name: "Meera"
  }
];

const habitNudgeDifferences = [
  {
    title: "Not another habit tracker",
    text: "Built to feel human, not like a dashboard you avoid."
  },
  {
    title: "No guilt, no pressure",
    text: "You don’t get punished for missing days. You get guided back."
  },
  {
    title: "No overtracking",
    text: "Track only what matters so the system stays light and doable."
  },
  {
    title: "Simple + human",
    text: "Clear guidance and a simple system that works in real life."
  }
];

const painPoints = [
  "I know what to do… but I don’t do it.",
  "Why can’t I stay consistent?",
  "I waste time and feel guilty at night.",
  "I keep restarting and it’s exhausting."
];

const contactDetails = [
  { label: "WhatsApp", value: "+91 8700246242", href: "https://wa.me/918700246242" },
  {
    label: "Email",
    value: "kamkashi443@gmail.com",
    href: "mailto:kamkashi443@gmail.com"
  }
];

function LogoMark() {
  return (
    <div className="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 64 64" role="img">
        <defs>
          <linearGradient id="habitGlow" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="55%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#60a5fa" />
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
            <a href="#routine-check">Free Check</a>
            <a href="#clarity-call">1:1 Call</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-layout" id="top">
          <section className="hero-copy">
            <p className="eyebrow">Stop scrolling moment</p>
            <h1>You know what to do… but still don’t do it.</h1>
            <p className="hero-text">
              You’re not lazy. You’re stuck in a broken system. I help you fix it with a simple routine that
              actually works.
            </p>

            <div className="hero-actions">
              <a className="button" href="#contact">
                Fix My Routine
              </a>
              <a className="button button-ghost" href="#contact">
                Book 15-min Call
              </a>
            </div>

            <p className="hero-soft-line">Real guidance. No pressure. No overthinking.</p>
            <a className="scroll-hook" href="#routine-check">
              ↓ See why you’re stuck
            </a>
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
        <section className="content-section routine-check" id="routine-check">
          <SectionTitle
            eyebrow="Free routine check"
            title="Get Your Routine Fix in 2 Minutes (No Signup)"
            text="Answer a few quick questions and understand what’s actually holding you back."
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

            <button className="button routine-submit" type="button">
              Generate My Plan Instantly
            </button>
          </form>
          <div className="cta-inline">
            <a className="button button-ghost" href="#clarity-call">
              Book 15-min Call
            </a>
          </div>
        </section>

        <section className="content-section" id="pain">
          <SectionTitle
            eyebrow="Pain"
            title="This is the loop most people live in."
            text="If this feels familiar, you’re not alone."
          />

          <div className="pain-grid">
            {painPoints.map((item) => (
              <article className="pain-card" key={item}>
                <span className="pain-dot">•</span>
                <p>{item}</p>
              </article>
            ))}
          </div>

          <p className="pain-close">It’s not laziness. It’s lack of a system.</p>
          <div className="cta-inline">
            <a className="button" href="#clarity-call">
              Fix My Routine
            </a>
          </div>
        </section>

        <section className="content-section founder-section" id="founder">
          <SectionTitle
            eyebrow="Founder"
            title="Hi, I’m Kamakshi."
            text="I’ve been stuck too — wanting change and still struggling to follow through."
          />

          <div className="founder-grid">
            <div className="founder-card">
              <p>
                I kept planning my days, then watching them slip away. It felt heavy and frustrating.
              </p>
              <p>
                The realization was simple: it wasn’t laziness. I just didn’t have a system that fit my real
                life. That’s why HabitNudge exists.
              </p>
            </div>
            <div className="founder-card founder-highlight">
              <p className="founder-label">How I help</p>
              <h3>Simple systems that help you follow through.</h3>
              <p>Clarity first, small steps next, and a routine that actually fits your day.</p>
            </div>
          </div>
        </section>

        <section className="content-section clarity-section" id="clarity-call">
          <SectionTitle
            eyebrow="15-minute clarity"
            title="Fix Your Routine in 15 Minutes — Or Stay Stuck"
            text="In this 1:1 clarity call, we identify exactly what’s not working and fix it with a simple plan you can actually follow."
          />

          <div className="clarity-grid">
            <div className="clarity-card">
              <h3>What happens in the session</h3>
              <p>We find the real block and turn it into a clear, doable routine.</p>
            </div>
            <div className="clarity-card">
              <h3>What you get</h3>
              <ul>
                <li>Clarity on what’s actually broken</li>
                <li>Clear routine breakdown</li>
                <li>Simple action plan you can start today</li>
              </ul>
            </div>
            <div className="clarity-card">
              <h3>Why it works</h3>
              <p>Clarity + simplicity gives you momentum without pressure.</p>
            </div>
          </div>

          <div className="clarity-cta">
            <a className="button" href="#contact">
              Book My Call
            </a>
            <p className="clarity-urgency">Only 5 people per day. Personal attention in every call.</p>
          </div>
          <p className="clarity-note">
            If you’ve been stuck for months, this can change it in 15 minutes.
          </p>
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
            </article>
            <article className="how-card">
              <span className="how-step">02</span>
              <h3>Share your problem</h3>
            </article>
            <article className="how-card">
              <span className="how-step">03</span>
              <h3>Get a clear action plan</h3>
            </article>
          </div>
        </section>

        <section className="content-section difference-section" id="difference">
          <SectionTitle
            eyebrow="Why HabitNudge is different"
            title="Not Another Habit Tracker"
            text="No guilt. No pressure. No overtracking. Just a simple system with human guidance."
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

        <section className="content-section visual-trust" id="visuals">
          <SectionTitle
            eyebrow="Visual trust"
            title="See the calm, simple system you’ll use every day."
            text="Use the habit UI in the hero (right side), and these dashboards mid-page to build trust fast."
          />

          <div className="visual-grid">
            <div className="visual-card">
              <h3>Habit dashboard</h3>
              <p>Today’s habits with clear check-ins and a calm layout.</p>
            </div>
            <div className="visual-card">
              <h3>Progress tracker</h3>
              <p>Weekly progress so you can see what’s working fast.</p>
            </div>
            <div className="visual-card">
              <h3>Streak visuals</h3>
              <p>Small streak wins that keep you consistent without pressure.</p>
            </div>
          </div>
        </section>

        <section className="content-section product-section" id="product">
          <SectionTitle
            eyebrow="Coming soon"
            title="HabitNudge (Coming Soon)"
            text="A simple habit system with smart nudges to help you stay consistent without feeling overwhelmed."
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

        <section className="content-section" id="testimonials">
          <SectionTitle
            eyebrow="Testimonials"
            title="Real words from people who felt stuck"
            text="Short, honest feedback from clarity calls and routine fixes."
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
            <h2>You don’t need to stay stuck anymore.</h2>
            <p className="section-text">Start now with one simple step.</p>
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
            title="Want help? Just reach out."
            text="I usually reply within a few hours. WhatsApp is fastest, email works too."
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
      </main>

      <a className="button sticky-cta" href="#contact">
        Fix My Routine
      </a>
    </div>
  );
}

export default App;
