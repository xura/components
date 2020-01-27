import 'reflect-metadata';
import { reduce } from 'lodash';

export const buildForm = (entity: any) => (container: string) => {
    return reduce((new entity() as any), (acc: any, _value: any, key: any) => {
        const metadata = Reflect.getMetadata("metadata", new entity(), key);

        if (!metadata)
            return;


        const { label, type } = metadata;
        var newDiv = document.createElement(type);
        newDiv.setAttribute('label', label)
        newDiv.setAttribute('title', label)

        var currentDiv = document.getElementById(container);
        currentDiv.appendChild(newDiv);

        // return {
        //     ...acc,
        //     [key]: Reflect.getMetadata("metadata", new entity(), key)
        // }
    }, {})
}