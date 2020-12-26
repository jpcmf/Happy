import React, { createContext, useState, useEffect, useContext } from 'react';
import colors from '../styles/colors';

const themeColours = {
  light: {
    color: `${colors.white}`,
    backgroundColor: `${colors.gray}`,
    backgroundGradientLP: `${colors.gradientLandingPage}`,
    buttonColorLP: `${colors.yellow}`,
    buttonIconColorLP: `${colors.marrom}`,
    buttonColorActions: `${colors.blueSkyLighter}`,
    buttonHoverColorActions: `${colors.blueSkyMid}`,
    cardBackgroundColor: `${colors.white}`,
    formLegendText: `${colors.grayMid}`,
    formInputBackground: `${colors.grayLightest}`,
  },
  dark: {
    color: `${colors.greenLightest}`,
    backgroundColor: `${colors.blueDark}`,
    backgroundGradientLP: `${colors.gradientLandingPageDark}`,
    buttonColorLP: `${colors.blueDark}`,
    buttonIconColorLP: `${colors.blueSkyMid}`,
    buttonColorActions: `${colors.blue}`,
    buttonHoverColorActions: `${colors.blueDark}`,
    cardBackgroundColor: `${colors.blueMid}`,
    formLegendText: `${colors.white}`,
    formInputBackground: `${colors.blueDark}`,
  },
};

type ThemeName = 'light' | 'dark';
type ThemeContextType = {
  theme: ThemeName;
  setTheme: (name: ThemeName) => void;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
    document.body.style.setProperty(
      '--button-color-landing-page',
      themeColours[name].buttonColorLP,
    );
    document.body.style.setProperty(
      '--button-icon-color-landing-page',
      themeColours[name].buttonIconColorLP,
    );
    document.body.style.setProperty(
      '--button-color-actions',
      themeColours[name].buttonColorActions,
    );
    document.body.style.setProperty(
      '--button-hover-color-actions',
      themeColours[name].buttonHoverColorActions,
    );
    document.body.style.setProperty(
      '--card-background-color',
      themeColours[name].cardBackgroundColor,
    );
    document.body.style.setProperty(
      '--form-legend-text-color',
      themeColours[name].formLegendText,
    );
    document.body.style.setProperty(
      '--form-input-background-color',
      themeColours[name].formInputBackground,
    );

    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
