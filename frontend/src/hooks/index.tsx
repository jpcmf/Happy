import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default AppProvider;
