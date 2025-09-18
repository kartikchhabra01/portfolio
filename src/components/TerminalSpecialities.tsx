import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const codeLines = [
  '# KartikSpecialities.js',
  "import {C, Cpp, Java, Python} from './Web/Languages';",
  "import {Web, Mobile, Backend, Frontend} from './Roles/FullStack';",
  "import {React, Vue, Alpine, Livewire, ReactNative, Ionic} from './Frameworks/Frontend';",
  "import {Laravel, Adonis, Next, Nuxt} from './Frameworks/Backend';",
  "import {MySQL, Postgres, Redis, MongoDB, Solr} from './Database/Engines';",
  'export default const YourProject = createStack("Everything your project requires")',
];

const TerminalSpecialities: React.FC = () => {
  const [currentLine, setCurrentLine] = React.useState(0);
  const [showLine, setShowLine] = React.useState(Array(codeLines.length).fill(false));

  React.useEffect(() => {
    if (currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        setShowLine((prev) => {
          const updated = [...prev];
          updated[currentLine] = true;
          return updated;
        });
        setCurrentLine((prev) => prev + 1);
      }, 700 + codeLines[currentLine].length * 30);
      return () => clearTimeout(timer);
    } else {
      // Reset after 2 seconds when all lines are shown
      const resetTimer = setTimeout(() => {
        setCurrentLine(0);
        setShowLine(Array(codeLines.length).fill(false));
      }, 2000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentLine]);

  return (
    <div style={{
      background: '#19202b',
      borderRadius: '14px',
      boxShadow: '0 6px 24px rgba(0,0,0,0.18)',
      maxWidth: 900,
      width: 900,
      margin: '2rem auto',
      padding: '0',
      overflow: 'hidden',
      height: 400,
      maxHeight: 400,
      minHeight: 400,
    }}>
      <div style={{ background: '#232946', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', borderTopLeftRadius: 14, borderTopRightRadius: 14 }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56', display: 'inline-block', marginRight: 6 }}></span>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block', marginRight: 6 }}></span>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
      </div>
      <pre style={{
        background: '#19202b',
        color: '#fff',
        margin: 0,
        padding: '2rem 2rem 1.5rem 2rem',
        fontSize: '1.1rem',
        height: 320,
        maxHeight: 320,
        minHeight: 320,
        fontFamily: 'Fira Mono, monospace',
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        overflowX: 'auto',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        lineHeight: '1.5',
        whiteSpace: 'nowrap',
      }}>
        {codeLines.map((line, idx) => (
          <div key={idx} style={{ minHeight: '1.5em' }}>
            {showLine[idx] ? (
              <Typewriter
                words={[line]}
                loop={1}
                cursor={false}
                typeSpeed={30}
                deleteSpeed={0}
                delaySpeed={0}
              />
            ) : null}
          </div>
        ))}
      </pre>
    </div>
  );
};

export default TerminalSpecialities;
