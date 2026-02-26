import ImageCarousel from "../web/ImageCarousel";

export default function MobileAbout() {
  return (
    <section className="mobile-about" id="about">
      <p className="mobile-section-kicker">About Me</p>
      <h2>Who I Am</h2>
      <div className="mobile-about-panel">
        <p>
          I’m a UofT Computer Science student who enjoys solving real problems
          through software and loves to learn about anything tech-related.
        </p>
        <p>
          I learn fastest by building with others, which is why I spend a lot of
          time at hackathons, side projects, and collaborative work. Outside of
          tech, I’m usually at the gym, reading, or exploring new music.
        </p>
      </div>
      <div className="mobile-about-focuses" aria-label="Current focus areas">
        <article>
          <h3>My Goals</h3>
          <p>
            - Create software that I'm passionate about that could benefit
            humanity
          </p>
          <p>- Travel the World</p>
        </article>
      </div>
      <div className="mobile-about-carousel">
        <ImageCarousel />
      </div>
    </section>
  );
}
