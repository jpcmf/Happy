import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { Aside, MarkerWrapper } from './styles';

import { ReactComponent as MarkerImg } from '../../assets/marker.svg';

export default function Sidebar(): ReactElement {
  const { goBack } = useHistory();

  return (
    <Aside>
      <MarkerWrapper to="/app">
        <MarkerImg />
      </MarkerWrapper>

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Aside>
  );
}
