import React from 'react';

//IMPORTACAO DE TODOS STYLEDS DA HOME
import * as S from './styles';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

const title = 'TODO - Gerenciamento de tarefas';

function Header() {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt={title} title={title}/>
            </S.LeftSide>
            <S.RightSide>
                <a href="#">Início</a>
                <span className="dividir"></span>
                <a href="#">Nova Tarefa</a>
                <span className="dividir"></span>
                <a href="#">Sincronizar Celular</a>
                <span className="dividir"></span>
                <a href="#" id="notificacao">
                    <img src={bell} alt="Notificação"/>
                    <span>5</span>
                </a>
            </S.RightSide>
        </S.Container>
    );
}

export default Header;
