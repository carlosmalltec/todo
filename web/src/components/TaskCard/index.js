import React, {useMemo} from 'react';
import {format} from 'date-fns';
import * as S from './styles';

import typeIcons from '../../utils/typeIcons';

//useMemo mais performatico do useStates
// entra em acao toda vez que o componente for carregado, ou seja para cada lista

// created: "2020-06-10T05:06:37.433Z"
// description: "Manutenção do elevador do bloco 3B"
// done: false
// macaddress: "123"
// tipo: 1
// title: "Tarefa #02"
// when: "2020-06-10T13:10:50.000Z"
// __v: 0
// _id: "5ee06d094469990a099b069e"
function TaskCard({tipo, title, when}) {
    // converte a data de string para data e formata para a mascara d/m/y
    const date = useMemo(()=>format(new Date(when),'dd/MM/yyyy'));
    const hora = useMemo(()=>format(new Date(when),'HH:mm'));

    return (
        <S.Container>
            <S.TopCard>
                <img src={typeIcons[tipo]} alt="Icon da tarefa."/>
                <h3>{title}</h3>
            </S.TopCard>
            <S.BottomCard>
            <strong>{date}</strong>
            <span>{hora}</span>
            </S.BottomCard>
        </S.Container>
    );
}

export default TaskCard;
