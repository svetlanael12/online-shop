import { makeAutoObservable } from 'mobx';

export default class BasketStore {
    constructor() {
        this._basket = []
        
        makeAutoObservable(this)
    }

    setBasket(count) {
        this._basket = count
    }

    get basket() {
        return this._basket;
    }
}