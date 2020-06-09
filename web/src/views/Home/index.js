import React from 'react';

//IMPORTACAO DE TODOS STYLEDS DA HOME
import * as S from './styles';

//COMPONENTS
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {

  return (
    <S.Container>
      <Header />
      <Footer />
    </S.Container>
  );
}

export default Home;