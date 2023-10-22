import {v4} from 'uuid'
export class DigitType {
    id: string
    value: number

    constructor(value: number, id = v4()) {
        this.id = id
        this.value = value
    }
}