import { Component, CustomElement, html, Prop } from 'ce-decorators';
import '@material/mwc-button';
import { createTypeStyle, style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';

@Component({
    tag: 'xura-button',
    style: ``,
})
export class Button extends CustomElement {

    @Prop({ type: style })
    styles: NestedCSSProperties;

    render() {
        const instance = createTypeStyle();
        const className = instance.style(this.styles)

        return html`<style>${instance.getStyles()}</style><mwc-button outlined class=${className} label="${this.innerHTML}"></mwc-button>`;
    }
}