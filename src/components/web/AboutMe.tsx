import ImageCarousel from "./ImageCarousel";

export default function AboutMe() {
  return (
    <section className="section" id="about">
      <div className="section-inner split">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I’m a Computer Science student at the University of Toronto
              specializing in Software Engineering, driven by a love for
              problem-solving and bringing ideas to life. On the technical side,
              I enjoy learning new technologies, working on projects I’m
              genuinely passionate about, and attending hackathons with friends
              to collaborate, experiment, and push myself. I’m especially
              interested in full-stack development, AI and machine learning, and
              mobile development. Outside of tech, you’ll usually find me at the
              gym, reading, or listening to a variety of different artists.
              Looking ahead, I hope to travel the world and create software that
              makes a meaningful, positive impact on people’s lives.
            </p>
          </div>
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
}
