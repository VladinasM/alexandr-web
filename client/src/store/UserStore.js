import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._userList = [];
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool;
    }
    setUser(user){
        this._user = user;
    }
    setUserList(list){
        this._userList = list;
    }
    get isAuth(){
        return this._isAuth;
    }
    get user(){
        return this._user;
    }
    get userList(){
        return this._userList
    }
}