import { Component, CustomElement, html, Prop, State } from 'ce-decorators';
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

    @Prop({ type: String })
    title: string = 'Title';

    @State()
    private isDrawerOpen?: boolean;

    toggleDrawer() {
        debugger;
        document.getElementById('drawer').setAttribute('open', 'open')
    }

    render() {
        const instance = createTypeStyle();
        const className = instance.style(this.styles)

        return html`
        <mwc-drawer id="drawer" hasHeader type="dismissible">
            <span slot="title">Drawer Title</span>
            <span slot="subtitle">subtitle</span>
            <div>
                <p>Drawer content!</p>
                <mwc-icon-button icon="gesture"></mwc-icon-button>
                <mwc-icon-button icon="gavel"></mwc-icon-button>
            </div>
            <div slot="appContent">
                <xura-navigation title="${this.title}" @toggle="${_ => this.toggleDrawer()}"></xura-navigation>
                <slot name="content"></slot>
            </div>
        </mwc-drawer>
        `;
    }
}

