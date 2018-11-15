import React, { Component } from 'react'
import { DatePicker, Icon } from 'antd'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import moment from 'moment';

@inject('store')
@observer
class Header extends Component {
  setTargetDate = momentNewDate => {
    this.props.store.roomsStore.setTargetDate(
      momentNewDate.format(process.env.REACT_APP_DATE_FORMAT)
    )
  }
  
  goYesterday = () => {
    this.setTargetDate(moment(this.props.store.roomsStore.targetDate, process.env.REACT_APP_DATE_FORMAT).add(-1, 'days'))
  }

  goTomorrow = () => {
    this.setTargetDate(moment(this.props.store.roomsStore.targetDate, process.env.REACT_APP_DATE_FORMAT).add(1, 'days'))
  }

  render() {
    return (
        <Layout>
          <GoDirection>
            <Icon type="left" onClick={this.goYesterday} />
          </GoDirection>
          <DatePicker value={moment(this.props.store.roomsStore.targetDate, process.env.REACT_APP_DATE_FORMAT)} onChange={this.setTargetDate} defaultValue={moment()} />
          <GoDirection>
            <Icon type="right" onClick={this.goTomorrow} />
          </GoDirection>
        </Layout>
    )
  }
}

export default Header 

const GoDirection = styled.div`
  text-align: center;
  font-size: 18px;
  cursor: pointer;
`

const Layout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: minmax(80px, 1fr) 10fr minmax(80px, 1fr);
  background-color: #f2f4f5;
  align-items: center;
  justify-content: center;
  color: #314659;
  position: fixed;
  height: 70px;
  z-index: 1;
  border-bottom: 1px solid #ebedf0;
`
