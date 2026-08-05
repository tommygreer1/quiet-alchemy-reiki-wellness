import { ArrowRight, Heart, MoonStar, Sparkles, Waves, Wind, MapPin, Phone, Clock3 } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Usui Reiki", text: "A gentle, non-invasive energy healing experience designed to encourage deep relaxation, balance, and connection." },
  { icon: Waves, title: "Sound Healing", text: "Immersive sound and vibration create space to slow down, release tension, and return to a calmer inner rhythm." },
  { icon: Wind, title: "Breathwork & Meditation", text: "Guided practices that support mindfulness, nervous-system regulation, focus, and emotional well-being." },
  { icon: MoonStar, title: "Psychic Readings", text: "Intuitive sessions offering compassionate insight, clarity, and guidance for the path ahead." },
  { icon: Heart, title: "Channeling & Mediumship", text: "A grounded, respectful space for spiritual connection and meaningful messages." },
  { icon: Sparkles, title: "Distance Reiki", text: "Receive a personalized Reiki session from the comfort and privacy of your own space." },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="The Quiet Alchemy home">
          <span className="brand-mark">QA</span>
          <span><strong>The Quiet Alchemy</strong><small>Reiki & Wellness</small></span>
        </a>
        <nav>
          <a href="#about">About</a><a href="#services">Services</a><a href="#space">The Space</a><a href="#contact">Contact</a>
        </nav>
        <a className="button small" href="tel:18155707804">Book a Session</a>
      </header>

      <section id="top" className="hero">
        <div className="hero-art" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Reiki · Sound Healing · Intuitive Wellness</p>
          <h1>Reconnect.<br/>Restore. <em>Realign.</em></h1>
          <p className="lede">A peaceful, personalized space to slow down, release what no longer serves you, and reconnect with your true self.</p>
          <div className="actions">
            <a className="button" href="tel:18155707804">Begin Your Journey <ArrowRight size={18}/></a>
            <a className="text-link" href="#services">Explore services</a>
          </div>
        </div>
        <div className="hero-note"><span>Located in Ellijay, Georgia</span><span>By appointment</span></div>
      </section>

      <section className="intro">
        <p className="eyebrow">A sanctuary for becoming still</p>
        <h2>Healing begins when you give yourself permission to pause.</h2>
        <p>The Quiet Alchemy offers thoughtful wellness experiences that support relaxation, clarity, emotional balance, and your body’s natural healing process.</p>
      </section>

      <section id="about" className="about section">
        <div className="portrait placeholder-photo"><span>Michelle’s portrait</span></div>
        <div className="about-copy">
          <p className="eyebrow">Meet your practitioner</p>
          <h2>Michelle Bartrum</h2>
          <p className="credentials">Usui Reiki Master · RYT-200 · Breathwork & Meditation Guide</p>
          <p>My approach blends Usui Reiki, breathwork, meditation, sound, and intuitive guidance to create a peaceful space where you can slow down, reconnect, and support your body’s natural healing process.</p>
          <p>Every session is personalized, offering a gentle and grounding experience designed to meet you exactly where you are.</p>
          <a className="text-link" href="#contact">Plan your session <ArrowRight size={16}/></a>
        </div>
      </section>

      <section id="services" className="services section">
        <div className="section-heading">
          <div><p className="eyebrow">Ways to work together</p><h2>Services created around you.</h2></div>
          <p>Each session is offered with care, intention, and room for your unique needs.</p>
        </div>
        <div className="service-grid">
          {services.map(({icon: Icon,title,text}) => <article className="service-card" key={title}><Icon/><span>0{services.findIndex(s=>s.title===title)+1}</span><h3>{title}</h3><p>{text}</p><a href="tel:18155707804">Ask about this service <ArrowRight size={15}/></a></article>)}
        </div>
      </section>

      <section id="space" className="space section">
        <div className="space-photo placeholder-photo"><span>Treatment room photography</span></div>
        <div className="space-copy">
          <p className="eyebrow">Step into stillness</p>
          <h2>A calm, private setting designed for deep rest.</h2>
          <p>Relax fully clothed on a comfortable treatment table while gentle energy work, sound, and thoughtful details help create a sense of peace and safety.</p>
          <div className="mini-grid"><div><Clock3/><strong>Unhurried care</strong><small>Time to settle in and reconnect</small></div><div><Heart/><strong>Personalized</strong><small>Every experience meets you where you are</small></div></div>
        </div>
      </section>

      <section className="quote"><MoonStar/><blockquote>“Find stillness, restore balance, and release what no longer serves you.”</blockquote></section>

      <section id="contact" className="contact section">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>Begin your journey back to yourself.</h2>
          <p>Call or text for current session pricing, availability, and help choosing the right experience.</p>
          <a className="button light" href="tel:18155707804">Call or text 815-570-7804 <ArrowRight size={18}/></a>
        </div>
        <aside>
          <div><MapPin/><p><strong>Inside Mountain Remedies Apothecary & Bodyworks</strong><br/>64 Sailors Dr., Suite 110<br/>Ellijay, GA 30540</p></div>
          <div><Phone/><p><strong>Appointments & questions</strong><br/><a href="tel:18155707804">815-570-7804</a></p></div>
        </aside>
      </section>

      <footer><div className="brand"><span className="brand-mark">QA</span><span><strong>The Quiet Alchemy</strong><small>Reiki & Wellness</small></span></div><p>© 2026 The Quiet Alchemy. Wellness services are complementary and are not a substitute for medical care.</p></footer>
    </main>
  );
}
