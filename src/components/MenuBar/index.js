import React from 'react';

import * as S from './styled'

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>

      <S.MenuBarLink to='/' title='Voltar para Home'>
        <S.MenuBarItem></S.MenuBarItem>
      </S.MenuBarLink>

      <S.MenuBarLink to='/search/' title='Pesquisar'>
        <S.MenuBarItem></S.MenuBarItem>
      </S.MenuBarLink>

    </S.MenuBarGroup>

    <S.MenuBarGroup>

      <S.MenuBarItem title="Mudar o tema"></S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização"></S.MenuBarItem>
      <S.MenuBarItem title="Voltar para o Topo"></S.MenuBarItem>

    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar