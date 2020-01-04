import 'reflect-metadata';
import { Input } from './Input';

export function FormComponent<T>(serializer: { type: Input<T> }): (target: any, propertyKey: string) => void {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata("metadata", serializer, target, propertyKey);
    }
}