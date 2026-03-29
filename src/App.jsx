import { useState } from "react";

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
  "You plan your day… but don’t follow it.",
  "You start things… but don’t finish.",
  "You feel guilty at night.",
  "And the same cycle repeats."
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
  const [routineForm, setRoutineForm] = useState({
    daily: "",
    struggle: "",
    sleep: ""
  });
  const [routineLoading, setRoutineLoading] = useState(false);
  const [routinePlan, setRoutinePlan] = useState(null);
  const [routineError, setRoutineError] = useState("");

  const canGeneratePlan = Boolean(routineForm.daily && routineForm.struggle && routineForm.sleep);

  const handleRoutinePlan = async () => {
    if (!canGeneratePlan || routineLoading) {
      return;
    }

    setRoutineLoading(true);
    setRoutineError("");
    setRoutinePlan(null);

    const apiBase = "https://habitnudge-api.onrender.com" || "http://localhost:8000";

    try {
      const response = await fetch(`${apiBase}/routine-plan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          routine_daily: routineForm.daily,
          biggest_struggle: routineForm.struggle,
          sleep_timing: routineForm.sleep
        })
      });

      if (!response.ok) {
        throw new Error("Routine plan request failed");
      }

      const data = await response.json();
      setRoutinePlan(data);
    } catch (error) {
      setRoutineError("We couldn’t generate a plan right now. Please try again in a moment.");
    } finally {
      setRoutineLoading(false);
    }
  };

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
            <h1>
              You know what to do…
              <br />
              but you still don’t do it.
            </h1>
            <p className="hero-text">
              It’s not laziness.
              <br />
              Your routine is broken — and I’ll help you fix it.
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
              ↓ See why you're stuck
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
          <div className="routine-card">
            <p className="eyebrow">Free routine check</p>
            <h2>Get Your Personalized Routine Fix in 2 Minutes</h2>
            <p className="section-text">
              Answer 3 quick questions and instantly see what’s holding you back.
            </p>
            <p className="routine-note">No signup. No pressure. Just clarity.</p>

            <form className="routine-form">
              <fieldset className="routine-field">
                <legend>Do you follow your routine daily?</legend>
                <div className="option-row">
                  <label className="option-pill">
                    <input
                      type="radio"
                      name="routine-daily"
                      value="most_days"
                      checked={routineForm.daily === "most_days"}
                      onChange={() => setRoutineForm((prev) => ({ ...prev, daily: "most_days" }))}
                    />
                    <span>Most days</span>
                  </label>
                  <label className="option-pill">
                    <input
                      type="radio"
                      name="routine-daily"
                      value="sometimes"
                      checked={routineForm.daily === "sometimes"}
                      onChange={() => setRoutineForm((prev) => ({ ...prev, daily: "sometimes" }))}
                    />
                    <span>Sometimes</span>
                  </label>
                  <label className="option-pill">
                    <input
                      type="radio"
                      name="routine-daily"
                      value="rarely"
                      checked={routineForm.daily === "rarely"}
                      onChange={() => setRoutineForm((prev) => ({ ...prev, daily: "rarely" }))}
                    />
                    <span>Rarely</span>
                  </label>
                </div>
              </fieldset>

              <fieldset className="routine-field">
                <legend>Biggest struggle right now?</legend>
                <div className="option-row">
                  <label className="option-pill">
                    <input
                      type="radio"
                      name="routine-struggle"
                      value="motivation"
                      checked={routineForm.struggle === "motivation"}
                      onChange={() => setRoutineForm((prev) => ({ ...prev, struggle: "motivation" }))}
                    />
                    <span>Motivation</span>
                  </label>
                  <label className="option-pill">
                    <input
                      type="radio"
                      name="routine-struggle"
                      value="overthinking"
                      checked={routineForm.struggle === "overthinking"}
                      onChange={() => setRoutineForm((prev) => ({ ...prev, struggle: "overthinking" }))}
                    />
                    <span>Overthinking</span>
                  </label>
                  <label className="option-pill">
                    <input
                      type="radio"
                      name="routine-struggle"
                      value="consistency"
                      checked={routineForm.struggle === "consistency"}
                      onChange={() => setRoutineForm((prev) => ({ ...prev, struggle: "consistency" }))}
                    />
                    <span>Consistency</span>
                  </label>
                </div>
              </fieldset>

              <fieldset className="routine-field">
                <legend>Sleep timing lately?</legend>
                <div className="option-row">
                  <label className="option-pill">
                    <input
                      type="radio"
                      name="routine-sleep"
                      value="on_time"
                      checked={routineForm.sleep === "on_time"}
                      onChange={() => setRoutineForm((prev) => ({ ...prev, sleep: "on_time" }))}
                    />
                    <span>Mostly on time</span>
                  </label>
                  <label className="option-pill">
                    <input
                      type="radio"
                      name="routine-sleep"
                      value="late"
                      checked={routineForm.sleep === "late"}
                      onChange={() => setRoutineForm((prev) => ({ ...prev, sleep: "late" }))}
                    />
                    <span>Too late</span>
                  </label>
                  <label className="option-pill">
                    <input
                      type="radio"
                      name="routine-sleep"
                      value="irregular"
                      checked={routineForm.sleep === "irregular"}
                      onChange={() => setRoutineForm((prev) => ({ ...prev, sleep: "irregular" }))}
                    />
                    <span>Irregular</span>
                  </label>
                </div>
              </fieldset>

              <button
                className="button routine-submit"
                type="button"
                onClick={handleRoutinePlan}
                disabled={!canGeneratePlan || routineLoading}
              >
                {routineLoading ? "Generating..." : "Generate My Plan Instantly"}
              </button>

              {routineError ? <p className="routine-error">{routineError}</p> : null}
              {routinePlan ? (
                <div className="routine-result">
                  <p className="routine-result-title">Your personalized plan</p>
                  <p className="routine-result-summary">{routinePlan.summary}</p>
                  <p className="routine-result-focus">{routinePlan.focus}</p>
                  <ul>
                    {routinePlan.steps?.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </form>
          </div>

          {/* <div className="cta-inline">
            <a className="button" href="#contact">
              Fix My Routine
            </a>
            <a className="button button-ghost" href="#contact">
              Book 15-min Call
            </a>
          </div> */}
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

          <p className="pain-close">It’s not laziness. It’s a broken system.</p>
          {/* <div className="cta-inline">
            <a className="button" href="#contact">
              Fix My Routine
            </a>
            <a className="button button-ghost" href="#contact">
              Book 15-min Call
            </a>
          </div> */}
        </section>

        <section className="content-section founder-section" id="founder">
          <SectionTitle
            eyebrow="Founder"
            title="Hi, I’m Kamakshi."
            text="I’ve been through the same cycle — planning, overthinking, not following through."
          />

          <div className="founder-card founder-profile">
            <div className="founder-avatar" aria-hidden="true">
              <span>K</span>
            </div>
            <div className="founder-story">
              <p className="founder-name">Kamakshi</p>
              <p>
                I wasn’t lazy. I just didn’t have a system that worked in real life.
                That’s why I built HabitNudge — to make routines feel doable, not heavy.
              </p>
              <p>
                I focus on clarity first, small steps next, and a routine that actually fits your day.
              </p>
            </div>
          </div>
          {/* <div className="cta-inline">
            <a className="button" href="#contact">
              Fix My Routine
            </a>
            <a className="button button-ghost" href="#contact">
              Book 15-min Call
            </a>
          </div> */}
        </section>

        <section className="content-section clarity-section" id="clarity-call">
          <div className="clarity-offer">
            <div className="clarity-card premium-card">
              <div className="clarity-header">
                <span className="clarity-badge">Limited Slots</span>
                <span className="clarity-price">₹199</span>
              </div>
              <h2>Fix Your Routine in 15 Minutes — Or Stay Stuck</h2>
              <p className="clarity-subtext">
                In this 1:1 clarity call, we identify exactly what’s not working and fix it with a simple plan you can actually follow.
              </p>

              <div className="clarity-points">
                <h3>What you get</h3>
                <ul>
                  <li>Clarity on what’s actually broken</li>
                  <li>Clear routine breakdown</li>
                  <li>Simple action plan you can start today</li>
                </ul>
              </div>

              <div className="clarity-warning">
                <span className="warning-icon">⚠</span>
                <p>I only take 5 people per day to keep it personal.</p>
              </div>

              <a className="button" href="#contact">
                Book My Call
              </a>
              <p className="clarity-note">
                If you’ve been stuck for weeks or months… this 15-minute call can change that.
              </p>
            </div>
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
            text="No pressure. No guilt. No complicated tracking. Just clarity + simple systems that actually work."
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
            text="Place the habit tracker UI on the hero right side, and the progress dashboard near the product section."
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

          <div className="product-split">
            <div className="product-card">
              <p>Habit tracking that feels calm and doable.</p>
              <p>Smart nudges that guide you back when you slip.</p>
              <p>A simple system built for real-life consistency.</p>
              <a className="button" href="#contact">
                Join Waitlist
              </a>
            </div>

            <div className="product-visuals">
              <div className="visual-card">
                <h3>Habit dashboard</h3>
                <p>Today’s habits, status chips, and a clear done state.</p>
                <div className="mini-list">
                  <span>Skincare • Done</span>
                  <span>Water • 2/3</span>
                  <span>Walk • Next</span>
                </div>
              </div>
              <div className="visual-card">
                <h3>Daily routine tracker</h3>
                <p>Morning to night flow with gentle nudges.</p>
                <div className="mini-bars">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="visual-card">
                <h3>Progress & streaks</h3>
                <p>Weekly streak ring and simple progress stats.</p>
                <div className="mini-ring" />
              </div>
            </div>
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
          <div className="cta-copy centered-cta">
            <p className="eyebrow">Final nudge</p>
            <h2>You don’t need to stay stuck anymore.</h2>
            <p className="section-text">You’re not broken — you just need the right system. Start now.</p>
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
