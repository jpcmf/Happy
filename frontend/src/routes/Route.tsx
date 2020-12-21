import React, { useRef } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { BsMoon, BsSun } from 'react-icons/bs';
import { ToogleSwitch } from '../components';

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
  const formRef = useRef<FormHandles>(null);
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <>
            {/* <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="dark-switch"
            >
              {theme === 'dark'
                ? 'Switch to light mode'
                : 'switch to dark mode'}
            </button> */}

            <div className="dark-switch">
              <Form
                onSubmit={() => {
                  // do nothing.
                }}
                ref={formRef}
              >
                <ToogleSwitch
                  // checked={lalala}
                  id="toggle"
                  name="toggle"
                  value="dark"
                  onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  icons={{
                    checked: <BsSun />,
                    unchecked: <BsMoon />,
                  }}
                />
              </Form>
            </div>

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
