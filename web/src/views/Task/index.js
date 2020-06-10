import React, { useState, useEffect } from 'react';
import * as S from './styles';

//API
import api from '../../services/api';

//COMPONENTS
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Task() {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/atrasada/123`)
      .then(response => {
        if (response.data.length > 0)
          setLateCount(response.data.length);
        else
          setLateCount(0);
      })
      .catch(error => {
        //console.log(error);
      })
  }

  useEffect(() => {
    lateVerify();
  }, []);


  return (
    <S.Container>
      <Header lateCount={lateCount}/>
      <Footer />
    </S.Container>
  );
}

export default Task;
