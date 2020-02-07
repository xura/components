import 'reflect-metadata';
import { reduce, forOwn } from 'lodash';
import { merge, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NestedCSSProperties } from 'typestyle/lib/types';

export const buildForm = (entity: any) => ({
    changes: elements => changes(elements),
    renderer: render(entity)
})

export const changes = (elements: any[]) => {
    let changes = {};

    const streams = elements.reduce((acc, { element, key }) =>
        merge(acc, element.stream().pipe(map(change => [key, change]))), of()
    )

    return streams.pipe(
        map((change: [string, string]) => {
            changes = {
                ...changes,
                ...{ [change[0]]: change[1] }
            }
            return changes
        })
    );
}

export const render = (entity: any) =>
    // TODO instead of sending in inputStyles, we need to send in a dictionary of input tags and NestedCSSProperties so we can apply different styles to different inputs
    (inputStyles: NestedCSSProperties) => {
        const container = document.createElement('div')

        const elements = reduce((new entity() as any), (acc: any, _value: any, key: any) => {
            const metadata = Reflect.getMetadata("metadata", new entity(), key);
            if (!metadata)
                return acc;

            var element = document.createElement(metadata.type);
            forOwn(metadata, (value, key) => element.setAttribute(key, value))
            element.setAttribute('styles', JSON.stringify(inputStyles));
            container.appendChild(element);

            return [
                ...acc,
                { element, key }
            ]
        }, [])

        return {
            container,
            elements
        }
    };