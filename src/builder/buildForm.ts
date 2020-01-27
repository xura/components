import 'reflect-metadata';
import { reduce, forOwn } from 'lodash';
import { merge, of } from 'rxjs';
import { map } from 'rxjs/operators';

export const buildForm = (entity: any) => (container: string) => {
    let changes = {};

    const streams = reduce((new entity() as any), (acc: any, _value: any, key: any) => {
        const metadata = Reflect.getMetadata("metadata", new entity(), key);
        if (!metadata)
            return acc;

        var element = document.createElement(metadata.type);
        forOwn(metadata, (value, key) => element.setAttribute(key, value))
        document.getElementById(container).appendChild(element);

        return merge(acc, element.stream().pipe(map(change => [key, change])))
    }, of())

    return streams.pipe(
        map((change: [string, string]) => {
            if (!Boolean(change[0]))
                return changes;

            changes = {
                ...changes,
                ...{ [change[0]]: change[1] }
            }
            return changes
        })
    );
};