import React, { useState, useEffect } from 'react';

//useState gerenciador de estado
//useEffect é disparado toda vez que a tela é carregada


//IMPORTACAO DE TODOS STYLEDS DA HOME
import * as S from './styles';

//API
import api from '../../services/api';

//COMPONENTS
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';


function Home() {
  // useState = controle de estado, notifica todos envolvidos
  //filterActived = nome do estado 
  //setFilterActived = funcao que atualiza o estado
  const [filterActived, setFilterActived] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  async function loadTasks() {
    await api.get(`/task/filter/${filterActived}/123`)
      .then(response => {
        setTasks(response.data);
        //console.log(response.data);
      })
      .catch(error => {
        //console.log(error);
      })
  }

  async function lateVerify() {
    await api.get(`/task/filter/atrasada/123`)
      .then(response => {
        if(response.data.length > 0)
          setLateCount(response.data.length);
        else
          setLateCount(0);
      })
      .catch(error => {
        //console.log(error);
      })
  }

  //toda vez que carregar a tela chama a funcao de carregar os dados
  //[filterActived] toda vez que o filter mudar mesmo com a tela carregada, faz o load da funcao

  useEffect(() => {
    loadTasks();
    lateVerify();
  }, [filterActived]);

  function Notification(){
    setFilterActived('atrasada');
  }

  return (
    <S.Container>
      <Header lateCount={lateCount} clickNotification={Notification}/>
      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived('todos')}>
          <FilterCard title="Todos" actived={filterActived === 'todos'} />
        </button>
        <button type="button" onClick={() => setFilterActived('dia')}>
          <FilterCard title="Hoje" actived={filterActived === 'dia'} />
        </button>
        <button type="button" onClick={() => setFilterActived('semana')}>
          <FilterCard title="Semana" actived={filterActived === 'semana'} />
        </button>
        <button type="button" onClick={() => setFilterActived('mes')} >
          <FilterCard title="Mês" actived={filterActived === 'mes'} />
        </button>
        <button type="button" onClick={() => setFilterActived('ano')} >
          <FilterCard title="Ano" actived={filterActived === 'ano'} />
        </button>
      </S.FilterArea>

      <S.Title>
  <h3>TAREFAS {filterActived === 'atrasada' ? ' ATRASADAS':''}:</h3>
      </S.Title>

      <S.Content>
        {
          tasks.map((t, index) => (
            <TaskCard key={index} tipo={t.tipo} title={t.title} when={t.when} />
          ))
        }
      </S.Content>
      <Footer />
    </S.Container>
  );
}

export default Home;
