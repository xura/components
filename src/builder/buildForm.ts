import 'reflect-metadata';
import { reduce } from 'lodash';

export function buildForm(entity: Object) {
    debugger;
    return reduce((entity as any).prototype, (acc: any, _value: any, key: any) => {
        debugger;
        return {
            ...acc,
            [key]: Reflect.getMetadata("metadata", entity, key)
        }
    }, {})
}