import styled from 'styled-components'

import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return <Wrapper {...this.props}>{this.props.children}</Wrapper>
  }
}

const Wrapper = styled.div`
    background: #FFFFFF;
    border-radius: 9px;
    padding: 25px 25px;
    border: 1px solid #ebedf0;

    &:first-child {
        margin-top: 5px;
    }
`
