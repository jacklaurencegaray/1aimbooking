import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'

export default class RoomCardContent extends Component {

  render() {
    return (
      <Layout>
        <MainInfo>
            <Name>{ this.props.name }</Name>
            <Location>
                <div><Icon type="environment" /> { this.props.location }</div>
                <div><Icon type="arrows-alt" /> {this.props.size}</div>
            </Location>
        </MainInfo>
        <Details>
            <Capacity><Icon type="team" /> { this.props.capacity }</Capacity>
        </Details>
      </ Layout>
    )
  }
}

const MainInfo = styled.div`
    display: grid;
    grid-template-columns: 5fr 80px;
    align-items: center;
    margin-bottom: 15px;
`

const Name = styled.div`
    font-size: 35px;
    font-weight: bold;
`

const Location = styled.div`
    font-size: 15px;
    display: grid;
    color: rgba(0, 0, 0, .4);
    line-height: 30px;
`

const Capacity = styled.div`
    font-size: 16px;
`

const Details = styled.div``

const Layout = styled.div`
    padding: 25px;
`
