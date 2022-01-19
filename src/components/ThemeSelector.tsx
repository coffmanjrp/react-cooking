import { FC } from 'react';
import { useTheme } from 'hooks';
import './ThemeSelector.css';
import modeIcon from 'assets/mode-icon.svg';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

const ThemeSelector: FC = () => {
  const { mode, changeColor, changeMode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
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
            onClick={() => changeColor(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
