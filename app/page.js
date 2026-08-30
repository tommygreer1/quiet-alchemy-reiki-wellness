const services = [
  {
    title: "Reiki",
    text: "Gentle energy work designed to support relaxation, grounding, balance, and a deeper sense of connection with yourself."
  },
  {
    title: "Distance Reiki",
    text: "Receive Reiki from wherever you are. Distance sessions offer the same intentional, restorative space without needing to be physically present."
  },
  {
    title: "Psychic Readings",
    text: "Intuitive sessions created to bring clarity, insight, and perspective around the questions, patterns, or transitions showing up in your life."
  },
  {
    title: "Mediumship & Channeling",
    text: "A compassionate, grounded space for intuitive channeling and mediumship work, approached with care, openness, and respect."
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
          <p className="eyebrow">Reiki · Intuition · Connection · Ellijay, Georgia</p>
          <h1>Come back to yourself.</h1>
          <p className="heroCopy">
            A calm, intentional space for Reiki, psychic readings, mediumship,
            channeling, intuitive guidance, and breathwork in Ellijay and North Georgia.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#services">Explore services</a>
            <a className="button ghost" href="#contact">Book a session</a>
          </div>
        </div>
      </section>

      <section id="about" className="section shell aboutGrid">
        <div>
          <p className="eyebrow dark">The Quiet Alchemy · Ellijay, GA</p>
          <h2>Meet Michelle</h2>
        </div>
        <div className="bodyCopy">
          <p>I’m Michelle, the heart behind The Quiet Alchemy.</p>
          <p>
            As a compassionate Reiki practitioner, breathwork and meditation guide,
            and intuitive healer, I’ve created The Quiet Alchemy as a peaceful space
            to slow down, reconnect, breathe, and come back to yourself.
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
          <p className="eyebrow dark">Offerings</p>
          <div className="sectionHeading">
            <h2>Reiki and intuitive services in Ellijay, Georgia.</h2>
            <p>
              Each offering is designed to create space for clarity, balance,
              reflection, and meaningful connection.
            </p>
          </div>

          <div className="serviceGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service.title}>
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
              Have a question or ready to schedule a Reiki, psychic reading,
              mediumship, channeling, or breathwork session in Ellijay or North Georgia?
              Reach out directly and Michelle will help you choose the session that feels right for you.
            </p>
            <div className="contactActions">
              <a className="button light" href="sms:+18155707804">Text Michelle</a>
              <a className="button outlineLight" href="tel:+18155707804">Call Michelle</a>
              <a className="button outlineLight" href="mailto:info@thequietalchemyreikiwellness.org?subject=Booking%20Inquiry%20-%20The%20Quiet%20Alchemy">Email Michelle</a>
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
              <a href="mailto:info@thequietalchemyreikiwellness.org">info@thequietalchemyreikiwellness.org</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <p>© {new Date().getFullYear()} The Quiet Alchemy</p>
        <p>Reiki · Psychic Readings · Mediumship · Ellijay & North Georgia</p>
      </footer>
    </main>
  );
}
