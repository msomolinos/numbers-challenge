import {v4} from 'uuid'
export class Statement {
    id: string
    value: string

    constructor(value: string, id = v4()) {
        this.id = id
        this.value = value
    }
}