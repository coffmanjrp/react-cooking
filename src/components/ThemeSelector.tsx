import { FC } from 'react';
import { useTheme } from 'hooks';
import './ThemeSelector.css';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

const ThemeSelector: FC = () => {
  const { changeColor } = useTheme();

  return (
    <div className="theme-selector">
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
