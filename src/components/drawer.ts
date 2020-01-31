import { Component, CustomElement, html, Prop } from 'ce-decorators';
import { createTypeStyle, style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';

import '@material/mwc-drawer';

@Component({
    tag: 'xura-drawer',
    style: ``,
})
export class Drawer extends CustomElement {

    @Prop({ type: style })
    styles: NestedCSSProperties;

    render() {
        const instance = createTypeStyle();
        const className = instance.style(this.styles)

        return html`
        <mwc-drawer open="true" hasHeader type="dismissible">
            <span slot="title">Drawer Title</span>
            <span slot="subtitle">subtitle</span>
            <div>
                <p>Drawer content!</p>
                <mwc-icon-button icon="gesture"></mwc-icon-button>
                <mwc-icon-button icon="gavel"></mwc-icon-button>
            </div>
            <div slot="appContent">
                <mwc-top-app-bar>
                    <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
                    <div slot="title">Title</div>
                </mwc-top-app-bar>
                <div>
                    <slot name="content"></slot>
                </div>
            </div>
        </mwc-drawer>
        `;
    }
}

