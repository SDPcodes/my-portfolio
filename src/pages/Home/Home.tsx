import Header from '../../components/Header';
import FadeInOnScroll from '../../components/FadeInOnScroll';

export default function Home() {
  return (
    <>
      <FadeInOnScroll direction="up">
        <Header />
      </FadeInOnScroll>

      <FadeInOnScroll direction="left" delay={0.3}>
        <div style={{ padding: '2rem', fontSize: '1.2rem' }}>
          I'm a passionate front-end developer focused on creating clean, accessible, and responsive UI experiences.
        </div>
      </FadeInOnScroll>
    </>
  );
}