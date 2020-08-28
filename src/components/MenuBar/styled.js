import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  position: fixed;
  right: 0;

  height: 100vh;
  width: 3.75rem;
  padding: 0.8rem 0;

  background: #192734;
  border-left: 1px solid #38444d;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  display: block;
  position: relative;

  width: 3.75rem;
  height: 3.75rem;
  padding: 1.1rem;

  color: #8899a6;
  cursor: pointer;

  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`