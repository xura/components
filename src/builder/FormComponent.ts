import 'reflect-metadata';

export function FormComponent(serializer: { [key: string]: string }): (target: any, propertyKey: string) => void {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata("metadata", serializer, target, propertyKey);
    }
}