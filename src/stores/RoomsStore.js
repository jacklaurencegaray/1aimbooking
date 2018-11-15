
import { observable, action, computed } from 'mobx'
import axios from 'axios'
import moment from 'moment'

class RoomsStore {
    @observable targetDate
    @observable rooms = []
    @observable loading = false
    @observable filters = {
        roomName: null,
        capacity: null
    }

    @computed
    get filteredRooms() {
        let rooms = this.rooms.slice()
        
        if(this.filters.roomName) 
            rooms = rooms.filter(room => room.name.startsWith(this.filters.roomName))
        if(this.filters.capacity)
            rooms = rooms.filter(room => room.capacity >= this.filters.capacity)
        
        return rooms.length? rooms: []
    }

    @action
    setTargetDate(newDate) {
        this.targetDate = newDate
        this.setRooms()
    }

    @action 
    async setRooms() {
        this.loading = true
        let response = await axios.post('https://challenges.1aim.com/roombooking/getrooms', {
            date: moment(this.targetDate, process.env.REACT_APP_DATE_FORMAT).unix()
        })
        this.rooms = response.data
        this.loading = false        
    }

    @action
    setRoomNameFilter(roomName) {
        this.filters.roomName = roomName
    }

    @action
    setCapacityFilter(capacity) {
        console.log(capacity)
        this.filters.capacity = capacity
    }
    
}

export default RoomsStore
