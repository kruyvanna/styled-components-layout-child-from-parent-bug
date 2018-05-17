import React from 'react'
import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  background: #ddd;
  padding-top: 50px;
  > ${Child1} {
    margin-bottom: 30px;
    background: red;
  }
`

const Child1 = styled.Text`
  width: 100%;
`

const Child2 = styled.Text`
  width: 80%;
`

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Child1>Child 1</Child1>
        <Child2>Child 2</Child2>
      </Container>
    )
  }
}
