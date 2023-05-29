import {makeAutoObservable} from "mobx";


export default class AppointmentStore {
    constructor() {
        this._appointments = []

        makeAutoObservable(this)
    }
    setAppointments(appArr){
        this._appointments = appArr;
    }
    get appointments(){
        return this._appointments
    }
    get selectedState(){
        return this._selectedState;
    }
}