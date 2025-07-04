import styled from 'styled-components'

export const VagasContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;
  padding: 0;
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ListaContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`
