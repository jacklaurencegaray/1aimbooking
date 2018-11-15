import RoomsStore from './RoomsStore'

class RootStore {
    constructor() {
        this.roomsStore = new RoomsStore()
    }
}

export default new RootStore()
