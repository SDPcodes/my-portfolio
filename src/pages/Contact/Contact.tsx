import { Stack, Text, TextField, PrimaryButton } from '@fluentui/react';
import Header from '../../components/Header';
import FadeInOnScroll from '../../components/FadeInOnScroll';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <FadeInOnScroll direction="up">
        <Header />
      </FadeInOnScroll>
      <Stack tokens={{ childrenGap: 16 }} className="contact-container">
        <Text variant="xLarge">Contact Me</Text>
        <TextField label="Name" />
        <TextField label="Email" />
        <TextField label="Message" multiline rows={4} />
        <PrimaryButton text="Send Message" />
      </Stack>
    </>
  );
}
