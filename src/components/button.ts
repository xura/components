import { Component, CustomElement, html } from 'ce-decorators';
import '@material/mwc-button';

@Component({
    tag: 'xura-button',
    style: ``,
})
export class Button extends CustomElement {

    render() {
        return html`<mwc-button outlined label="${this.innerHTML}"></mwc-button>`;
    }
}