import {makeAutoObservable} from "mobx";


export default class ParkingStore {
    constructor() {
        this._parkingPlaces = []
        this._selectedState = {}

        makeAutoObservable(this)
    }
    setParkingPlaces(placesArr){
        this._parkingPlaces = placesArr;
    }
    setSelectedState(state){
        this._selectedState = state;
    }
    get places(){
        return this._parkingPlaces
    }
    get selectedState(){
        return this._selectedState;
    }
}