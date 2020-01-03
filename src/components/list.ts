import { Component, CustomElement, html, Prop } from 'ce-decorators';
import uuid from 'uuid/v5';

@Component({
    tag: 'xura-list',
    style: ``,
})
export class List extends CustomElement {

    private _identifier = uuid('material-list', '1b671a64-40d5-491e-99b0-da01ff1f3341')

    @Prop({ type: Array<string>() })
    items: string[] = ['No items to show']

    render() {
        return html`
        <link href="https://unpkg.com/material-components-web@4.0.0/dist/material-components-web.min.css" rel="stylesheet" type="text/css">
        <div class='mdc-card'>
        <ul id="${this._identifier}" class="mdc-list" style="max-height: 100%;">
            ${this.items.map(item => (html`
                <li class="mdc-list-item" tabindex="0">
                    <span class="mdc-list-item__text">${item}</span>
                </li>
                <li class="mdc-list-divider" role="separator"></li>
            `))}
        </ul>
        </div>`;
    }
}