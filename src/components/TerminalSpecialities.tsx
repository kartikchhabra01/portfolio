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
    <div className="terminal-specialities">
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red"></span>
        <span className="terminal-dot terminal-dot-yellow"></span>
        <span className="terminal-dot terminal-dot-green"></span>
      </div>
      <pre className="terminal-content">
        {codeLines.map((line, idx) => (
          <div key={idx} className="terminal-line">
            {showLine[idx] ? (
              <Typewriter
                words={[line]}
                loop={1}
                cursor={false}
                typeSpeed={30}
                deleteSpeed={0}
                delaySpeed={0}
              />
            ) : (
              <span aria-hidden="true">&nbsp;</span>
            )}
          </div>
        ))}
      </pre>
    </div>
  );
};

export default TerminalSpecialities;
