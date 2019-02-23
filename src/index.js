import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import './styles.css'
import { createSlot } from './slot'
import { Router, Link } from '@reach/router'

const Header = createSlot()

const StyledHeader = styled(Header.Slot)`
  margin: 20px;
  padding: 20px;
  background-color: #eee;
  border-radius: 20px;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 20px #ccc;
`

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <StyledHeader multiple divider={<hr />} value="3">
        Здесь мог быть ваш заголовок...
      </StyledHeader>

      <button onClick={() => setShow(!show)}>
        {show ? 'Скрыть' : 'Показать'} компонент с заголовками
      </button>

      {show && <ComponentWithHeader />}
    </div>
  )
}

const ComponentWithHeader = ({ header }) => (
  <div>
    <Header.Portal order={1}>Заголовок 1</Header.Portal>

    <h2>1. Start editing to see some magic happen!</h2>

    <Header.Portal order={2} render={() => <div>Заголовок 2</div>} />

    <h2>2. Start editing to see some magic happen!</h2>

    <Header.Portal order={3}>
      {props => <div>Заголовок {props.value}</div>}
    </Header.Portal>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
