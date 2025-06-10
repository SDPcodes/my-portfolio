import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'H2O.AI',
    date: 'Feb 2025 - Present',
    description:
      'Leading a team to build scalable web apps using React, Typescript, GoLang, gRPC, Postgres, DynamoDB, Athena and AWS. Mentoring juniors and managing sprint planning. Practical experience in Github Workflows.',
  },
  {
    title: 'Software Engineer',
    company: 'H2O.AI',
    date: 'Mar 2022 - Feb 2025',
    description:
      'Worked on building scalable web apps using Python, H2O Wave, React, Typescript, GoLang, gRPC, Postgres, DynamoDB, Athena and AWS. Mentoring interns and managing sprint planning. Practical experience in Jenkins pipelines.',
  },
  {
    title: 'Research Engineer',
    company: 'Dialog – UoM Mobile Communications Research Laboratory',
    date: 'Jul 2020 - Mar 2022',
    description:
      'Worked on opensource 5G Cellular Network Implementation Project.',
  },
  {
    title: 'Software Engineer',
    company: 'Applova Inc.',
    date: 'Feb 2020 - Jul 2020',
    description:
      'Worked on restaurent based web store application using Java, Spring, JSP with CSS, MongoDB, MySQL, and Postgres.',
  },
  {
    title: 'Telecommunication Engineer (Intern)',
    company: 'Huawei Technologies Lanka (Pvt) Ltd',
    date: 'June 2018 - Dec 2018',
    description:
      'Worked on RF, Core Network and Data Communication areas.',
  },
];

export default function ExperienceTimeline() {
  return (
    <VerticalTimeline>
      {experiences.map((exp, index) => (
        <VerticalTimelineElement
          key={index}
          date={exp.date}
          icon={<Briefcase />}
          iconStyle={{ background: '#0a66c2', color: '#fff' }}
          contentStyle={{ background: '#1e1e2f', color: '#fff' }}
        >
          <h3>{exp.title}</h3>
          <h4 style={{ margin: 0 }}>{exp.company}</h4>
          <p>{exp.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
