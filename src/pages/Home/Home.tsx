import Header from '../../components/Header';
import FadeInOnScroll from '../../components/FadeInOnScroll';
import ExperienceTimeline from './ExperienceTimeline';
import EducationSection from './EducationSection';

export default function Home() {
  return (
    <>
      <FadeInOnScroll direction="up">
        <Header />
      </FadeInOnScroll>

      <FadeInOnScroll direction="left" delay={0.3}>
        <div style={{ padding: '2rem', fontSize: '1.2rem' }}>
          I’m a dedicated engineer with a passion for solving complex problems and a strong desire to keep growing through hands-on experience. Known for my positive attitude and sharp focus, I thrive in team environments where collaboration drives success. I embrace challenges as opportunities to learn and am deeply motivated to explore and master areas that spark my interest. With a strong commitment to continuous improvement, I aim to build a fulfilling career by turning knowledge into impactful results.
        </div>
        <ExperienceTimeline />
        <EducationSection />
      </FadeInOnScroll>
    </>
  );
}