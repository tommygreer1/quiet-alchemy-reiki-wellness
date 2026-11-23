const services = [
  {
    title: "Sound Healing Journey",
    text: "Settle into deep relaxation through therapeutic sound and vibration, with crystal and Tibetan singing bowls, melodic handpans, and elemental chimes."
  },
  {
    title: "Reiki",
    text: "Gentle energy work designed to support relaxation, grounding, balance, and a deeper sense of connection with yourself."
  },
  {
    title: "Distance Reiki",
    text: "Receive Reiki from wherever you are. Distance sessions offer the same intentional, restorative space without needing to be physically present."
  },
  {
    title: "Intuitive Guidance",
    text: "Personalized support for reconnecting with your intuition, exploring what feels aligned, and moving forward with greater clarity."
  },
  {
    title: "Breathwork",
    text: "Intentional breathing practices that can help quiet mental noise, regulate the nervous system, and create room for presence and self-awareness."
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav shell">
          <a className="brand" href="#top">The Quiet Alchemy</a>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Book</a>
          </div>
        </nav>

        <div id="top" className="heroInner shell">
          <p className="eyebrow">Sound Healing & Reiki · Woodstock, Georgia</p>
          <h1>Sound Healing & Reiki</h1>
          <p className="heroCopy">
            Find your moment of stillness through restorative sound healing and Reiki
            in Woodstock, Georgia. Other offerings are available by inquiry.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#services">Explore sound healing</a>
            <a className="button ghost" href="#contact">Ask about a session</a>
          </div>
        </div>
      </section>

      <section id="about" className="section shell aboutGrid">
        <div>
          <p className="eyebrow dark">The Quiet Alchemy</p>
          <h2>Meet Michelle</h2>
        </div>
        <div className="bodyCopy">
          <p>I’m Michelle, the heart behind The Quiet Alchemy.</p>
          <p>
            As a sound healing practitioner, Reiki practitioner, and intuitive guide,
            I created The Quiet Alchemy to offer a peaceful moment to slow down,
            reconnect, and come back to yourself through sound.
          </p>
          <p>
            My approach is gentle, intuitive, and deeply personal. At The Quiet Alchemy,
            I hold space for you to release what no longer serves you, find balance,
            and reconnect with the quiet wisdom within.
          </p>
          <p>
            I believe healing doesn’t always begin with doing more. Sometimes it begins
            with becoming still enough to listen.
          </p>
          <p>
            Whether you’re seeking relaxation, energetic balance, deeper self-awareness,
            spiritual connection, or simply a moment to breathe, my intention is to meet
            you exactly where you are—with compassion, presence, and without judgment.
          </p>
          <p><strong>Come as you are. Leave feeling a little more like your true self.</strong></p>
        </div>
      </section>

      <section id="services" className="section servicesSection">
        <div className="shell">
          <p className="eyebrow dark">Featured offering · Sound healing</p>
          <div className="sectionHeading">
            <h2>Sound Healing & Reiki for rest, grounding, and reconnection.</h2>
            <p>
              Experience singing bowls, melodic handpans, and elemental chimes.
              Michelle’s other offerings are available by inquiry.
            </p>
          </div>

          <div className="serviceGrid">
            {services.map((service) => (
              <article
                className={`serviceCard ${service.title === "Sound Healing Journey" ? "featuredService" : ""}`}
                key={service.title}
              >
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section quoteSection">
        <div className="shell quoteCard">
          <p>“You do not have to force what is ready to unfold.”</p>
          <span>— The Quiet Alchemy</span>
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <div className="shell contactCard">
          <div>
            <p className="eyebrow">Booking & availability</p>
            <h2>Ready to begin?</h2>
          </div>
          <div>
            <p>
              Interested in a sound healing journey? Reach out to ask about availability
              or to learn which session may feel right for you. Other offerings are available by inquiry.
            </p>
            <div className="contactActions">
              <a className="button light" href="sms:+18155707804">Text Michelle</a>
              <a className="button outlineLight" href="tel:+18155707804">Call Michelle</a>
              <a className="button outlineLight" href="mailto:Michellebartrum25@gmail.com?subject=Booking%20Inquiry%20-%20The%20Quiet%20Alchemy">Email Michelle</a>
              <a
                className="button outlineLight"
                href="https://g.page/r/CebqAUYiUDIUEAI/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Google Review
              </a>
            </div>
            <div className="contactDetails">
              <a href="tel:+18155707804">(815) 570-7804</a>
              <a href="mailto:Michellebartrum25@gmail.com">Michellebartrum25@gmail.com</a>
              <a href="https://www.google.com/maps/search/?api=1&query=4463+Towne+Lake+Parkway+Suite+100+Woodstock+GA+30189" target="_blank" rel="noopener noreferrer">4463 Towne Lake Parkway, Suite 100, Woodstock, GA 30189</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <p>© {new Date().getFullYear()} The Quiet Alchemy</p>
        <p>Sound Healing & Reiki · Woodstock, GA</p>
      </footer>
    </main>
  );
}
