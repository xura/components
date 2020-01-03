import { Observable } from 'rxjs'

export interface Input<T> {
    getValue(): T;
    stream(): Observable<T>
}