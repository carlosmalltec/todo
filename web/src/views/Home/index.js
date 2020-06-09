import React from 'react';

//IMPORTACAO DE TODOS STYLEDS DA HOME
import * as S from './styles';

//COMPONENTS
import Header from '../../components/Header';

function Home() {

  return (
    <S.Container>
      <Header />
    </S.Container>
  );
}

export default Home;
