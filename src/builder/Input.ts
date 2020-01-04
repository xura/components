import { Observable } from 'rxjs'

export abstract class Input<T> {
    getValue(): T {
        throw Error()
    };
    stream(): Observable<T> {
        throw Error()
    };
}