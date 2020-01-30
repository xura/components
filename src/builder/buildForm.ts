import 'reflect-metadata';
import { reduce, forOwn } from 'lodash';
import { merge, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NestedCSSProperties } from 'typestyle/lib/types';

export const buildForm = (entity: any) =>
    // TODO instead of sending in inputStyles, we need to send in a dictionary of input tags and NestedCSSProperties so we can apply different styles to different inputs
    (container: string, inputStyles: NestedCSSProperties) => {
        let changes = {};

        const streams = reduce((new entity() as any), (acc: any, _value: any, key: any) => {
            const metadata = Reflect.getMetadata("metadata", new entity(), key);
            if (!metadata)
                return acc;

            var element = document.createElement(metadata.type);
            forOwn(metadata, (value, key) => element.setAttribute(key, value))
            element.setAttribute('styles', JSON.stringify(inputStyles));
            document.getElementById(container).appendChild(element);

            return merge(acc, element.stream().pipe(map(change => [key, change])))
        }, of())

        return streams.pipe(
            map((change: [string, string]) => {
                changes = {
                    ...changes,
                    ...{ [change[0]]: change[1] }
                }
                return changes
            })
        );
    };