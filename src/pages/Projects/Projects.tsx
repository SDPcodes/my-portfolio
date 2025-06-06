import { Stack, Text } from '@fluentui/react';
import Header from '../../components/Header';
import FadeInOnScroll from '../../components/FadeInOnScroll';

export default function Projects() {
  return (
    <>
      <FadeInOnScroll direction="up">
        <Header />
      </FadeInOnScroll>
      <Stack tokens={{ childrenGap: 16 }}>
        <Text variant="xLarge">Projects</Text>
        <Text>Here are some cool things I've built.</Text>
        {/* Add real projects here later */}
      </Stack>
    </>
  );
}
