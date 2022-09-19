import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Планшеты'},
            {id: 5, name: 'Стиральные машины'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-mpic/4932805/img_id320032172410367143.png/orig'},
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-mpic/4932805/img_id320032172410367143.png/orig'},
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-mpic/4932805/img_id320032172410367143.png/orig'},
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-mpic/4932805/img_id320032172410367143.png/orig'},
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
            this._selectedType = type
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
}
}