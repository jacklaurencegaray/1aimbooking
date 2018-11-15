import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../../generic/Card'
import { Form, Input, InputNumber, Icon } from 'antd'
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Filter extends Component {
    setRoomNameFilter = e => {
        const { roomsStore } = this.props.store
        roomsStore.setRoomNameFilter(e.target.value)
    }

    setCapacityFilter = newCapacity => {
        const { roomsStore } = this.props.store
        roomsStore.setCapacityFilter(newCapacity)
    }

  render() {
    return (
      <div>
        <Card>
            <Title>Filters</Title>
            <StyledForm onSubmit={this.handleSubmit} className='login-form'>
                <Form.Item>
                    <Input prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Room Name' onChange={this.setRoomNameFilter} />
                </Form.Item>
                <Form.Item>
                    Capacity<br />
                    <InputNumber prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} />} min={1} max={10000} placeholder='Capacity' onChange={this.setCapacityFilter} />
                </Form.Item>
            </StyledForm>
        </Card>
      </div>
    )
  }
}

export default Filter

const StyledForm = styled(Form)`
    background: #fff;
    padding: 15px;
`

const Title = styled.h1`
    font-weight: bold;
`
