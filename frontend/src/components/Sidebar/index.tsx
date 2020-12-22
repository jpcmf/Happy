import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { FiPower } from 'react-icons/fi';
import { Aside, MarkerWrapper, LogoutButton } from './styles';

import { ReactComponent as MarkerImg } from '../../assets/marker-v2.svg';

import { useAuth } from '../../hooks/auth';

export default function Sidebar(): ReactElement {
  const history = useHistory();
  const { signOut } = useAuth();

  const token = localStorage.getItem('@HappyHappy:token');

  function handleGoBack() {
    if (token) {
      history.push('/private/app');
    } else {
      history.push('/app');
    }
  }

  return (
    <Aside>
      <MarkerWrapper to={token ? `/private/app` : `/app`}>
        <MarkerImg />
      </MarkerWrapper>

      <footer>
        <button className="button" type="button" onClick={handleGoBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>

        {token ? (
          <LogoutButton onClick={signOut} type="button">
            <FiPower size={23} />
          </LogoutButton>
        ) : (
          ''
        )}
      </footer>
    </Aside>
  );
}
