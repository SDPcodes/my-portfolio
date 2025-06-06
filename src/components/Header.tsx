import { Stack, Text, Image, DefaultButton } from '@fluentui/react';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import mediumIcon from '../assets/medium.svg';
import youtubeIcon from '../assets/youtube.svg';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];
const socialLinks = [
  { src: linkedinIcon, url: 'https://www.linkedin.com/in/shamil-prematunga-139b51158', label: 'LinkedIn' },
  { src: githubIcon, url: 'https://github.com/SDPcodes', label: 'GitHub' },
  { src: mediumIcon, url: 'https://medium.com/@shamildilshan1', label: 'Medium' },
  { src: youtubeIcon, url: 'https://www.youtube.com/@tekcerpts', label: 'YouTube' },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      styles={{
        root: {
          paddingTop: '3rem',
          textAlign: 'center',
        },
      }}
      tokens={{ childrenGap: 20 }}
    >
      <Image
        src="/profile_pic.jpeg"
        width={160}
        height={160}
        alt="Shamil Prematunga"
        styles={{
          root: {
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 0 20px #2899f5',
          },
        }}
      />

      {/* Name */}
      <Text variant="xxLarge" styles={{ root: { fontWeight: 'bold', color: '#ffffff' } }}>
        Shamil Prematunga
      </Text>

      {/* Dynamic Job Title */}
      <Text variant="large" styles={{ root: { color: '#2899f5', fontWeight: 600 } }}>
        <Typewriter
          words={['Senior Software Engineer']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </Text>

      {/* Social Icons */}
      <Stack horizontal tokens={{ childrenGap: 12 }}>
        {socialLinks.map(({ src, url, label }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'brightness(0) saturate(100%) invert(100%)',
              width: 32,
              height: 32,
            }}
          >
            <Image src={src} width={20} height={20} alt={label} />
          </a>
        ))}
      </Stack>

      {/* Widget-style nav links */}
      <Stack horizontal tokens={{ childrenGap: 16 }}>
        {navItems.map((item) => (
          <DefaultButton
            key={item.label}
            text={item.label}
            onClick={() => navigate(item.path)}
            styles={{
              root: {
                borderRadius: '999px',
                backgroundColor: '#252423',
                color: '#ffffff',
                border: '1px solid #2899f5',
                padding: '0.5rem 1.2rem',
                fontWeight: 500,
                transition: '0.3s',
              },
              rootHovered: {
                backgroundColor: '#2899f5',
                color: '#1b1a19',
              },
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Header;
