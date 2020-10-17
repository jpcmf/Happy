import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { Aside } from './styles';

import { ReactComponent as MarkerImg } from '../../assets/marker.svg';

export default function Sidebar() {
  const { goBack } = useHistory();

  return (
    <Aside>
      <MarkerImg />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Aside>
  );
}
