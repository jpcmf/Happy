import React, { createContext, useState, useEffect, useContext } from 'react';
import colors from '../styles/colors';

const themeColours = {
  light: {
    color: `${colors.white}`,
    backgroundColor: `${colors.gray}`,
    backgroundGradientLP: `${colors.gradientLandingPage}`,
  },
  dark: {
    color: `${colors.brand}`,
    backgroundColor: `${colors.primary}`,
    backgroundGradientLP: `${colors.danger}`,
  },
};

type ThemeName = 'light' | 'dark';
type ThemeContextType = {
  theme: ThemeName;
  setTheme: (name: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType>(undefined!);

// type Props = {
//   children: React.ReactNode;
// };

export const ThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>('light');

  useEffect(() => {
    const darkOS = window.matchMedia('(prefers-color-schema: dark)').matches;
    setTheme(darkOS ? 'dark' : 'light');
  }, []);

  const setTheme = (name: ThemeName) => {
    document.body.style.setProperty('--color', themeColours[name].color);
    document.body.style.setProperty(
      '--background-color',
      themeColours[name].backgroundColor,
    );
    document.body.style.setProperty(
      '--gradient-landing-page',
      themeColours[name].backgroundGradientLP,
    );
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
