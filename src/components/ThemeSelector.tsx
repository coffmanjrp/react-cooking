import { FC, useEffect } from 'react';
import { useTheme } from 'hooks';
import { Mode } from 'utils/types';
import './ThemeSelector.css';
import modeIcon from 'assets/mode-icon.svg';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

const ThemeSelector: FC = () => {
  const { mode, changeColor, changeMode } = useTheme();

  useEffect(() => {
    const initialMode = localStorage.getItem('mode') as Mode;
    const initialTheme = localStorage.getItem('theme');

    if (initialMode) {
      changeMode(initialMode);
    }

    if (initialTheme) {
      changeColor(initialTheme);
    }
    // eslint-disable-next-line
  }, [mode]);

  const toggleMode = () => {
    const modeCondition = mode === 'light' ? 'dark' : 'light';

    localStorage.setItem('mode', modeCondition);
    changeMode(modeCondition);
  };

  const toggleTheme = (color: string) => {
    localStorage.setItem('theme', color);
    changeColor(color);
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="Toggle Mode"
          style={{ filter: mode === 'dark' ? 'invert(90%)' : 'invert(20%)' }}
          onClick={toggleMode}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            style={{ background: color }}
            onClick={() => toggleTheme(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
