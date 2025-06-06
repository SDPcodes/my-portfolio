import { Stack, ThemeProvider } from '@fluentui/react';
import { darkTheme } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import './App.css';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="wave-background">
          <BrowserRouter>
            <Stack tokens={{ childrenGap: 24 }} styles={{ root: { padding: 16 } }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Stack>
          </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
