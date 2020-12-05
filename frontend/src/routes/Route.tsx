import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import { useTheme } from '../hooks/theme';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <>
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="dark-switch"
            >
              {theme === 'dark'
                ? 'Switch to light mode'
                : 'switch to dark mode'}
            </button>
            <Component />
          </>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/app' : '/orphanages/create',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
