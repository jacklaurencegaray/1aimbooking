import React, { Component } from 'react'
import Header from '../components/pages/rooms/Header'
import Filter from '../components/pages/rooms/Filter'
import RoomCardContent from '../components/pages/rooms/RoomCardContent'
import styled, { css } from 'styled-components'
import { inject, observer } from 'mobx-react'
import { Icon } from 'antd'
import moment from 'moment'
import ScrollToTop from 'react-scroll-up'

@inject('store')
@observer
class Rooms extends Component {

    componentDidMount() {
        this.props.store.roomsStore.setTargetDate(
            moment().format(process.env.REACT_APP_DATE_FORMAT)
        )
    }

    render() {
        const roomsStore = this.props.store.roomsStore
        const rooms = roomsStore.filteredRooms || roomsStore.rooms
        let loading = roomsStore.loading
        return (
            <Layout>
                <Header />
                { loading? <Loading><Icon type="loading" style={ {fontSize: '50px'} }/></Loading>
                    :<ContentLayout>
                        <Sidebar>
                            <Filter></Filter>
                        </Sidebar>
                        <MainContent>
                            <h1>Available Rooms:</h1>
                            <RoomsListWrapper>
                                { rooms.length? rooms.map((room, ndx) => (
                                    <RoomsList key={ndx}>
                                        { room.images && room.images.length? (
                                            <RoomCardWithImage>
                                                <RoomImage imageUrl={`${process.env.REACT_APP_ROOMBOOKING_BASE}/${room.images[0]}`}></RoomImage>
                                                <RoomCardContent {...room} />
                                            </RoomCardWithImage>
                                            ): (
                                                <RoomCard>
                                                    <RoomCardContent {...room} />
                                                </RoomCard>
                                            )
                                        }
                                    </RoomsList>
                                    )): <Notice>There are no rooms available.</Notice>
                                }
                            </RoomsListWrapper> 
                        </MainContent>
                    </ContentLayout>
                }
                <ScrollToTop showUnder={10}>
                    <Icon type="up-circle" theme="filled" style={{ fontSize: '35px' }}/>
                </ScrollToTop>
            </Layout>
        )
    }
}

export default Rooms

const Sidebar = styled.div`
    margin-top: 90px;
`

const MainContent = styled.div`
    margin-top: 90px;

    h1 {
        font-weight: bold;
    }

    @media (max-width: 600px) {
        margin-top: 20px;
    }
`

const ContentLayout = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: minmax(300px, 1fr) 10fr;
    grid-column-gap: 30px;
    margin: 0px 5vw;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

const RoomsList = styled.div`
    max-width: 400px;

    :last-child {
        margin-bottom: 50px;
    }
`
const Loading = styled.div`
    margin-top: 70px;
    height: 80vh;
    display: grid;
    align-items: center;
    justify-content: center;

`

const RoomsListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 35px;
    margin-bottom: 30px;
`

const RoomImage = styled.div`
    background-position: center center;
    background-size: cover;
    width: minmax(150px, 1fr);
    min-height: 200px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    ${
        props => css`background-image: url(${props.imageUrl});`
    }
`

const RoomCardWithImage = styled.div`
    display: grid;
    grid-template-columns: minmax(100px 1fr) 5fr;
    background: #FFFFFF;
    border-radius: 9px;
    border: 1px solid #ebedf0;
`

const RoomCard = styled.div`
    background: #FFFFFF;
    border-radius: 9px;
    padding: 25px 15px;
    margin: 15px 25px;
    border: 1px solid #ebedf0;
`

const Layout = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-rows: 70px 1fr;
    background-color: #f2f4f5;
`

const Notice = styled.div`
    font-size: 18px;
    padding: 20px;
`

