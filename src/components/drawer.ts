import { Component, CustomElement, html, Prop, Watch, EventEmitter, Event } from 'ce-decorators';
import { style } from 'typestyle';
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

    @Prop({ type: Boolean })
    isDrawerOpen?: boolean = false;

    @Prop({ type: Array<String>() })
    items: string[] = [];

    toggleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
    }

    @Watch('isDrawerOpen')
    isDrawerOpenWatcher(_oldValue: boolean, isDrawerOpen: boolean) {
        const drawer = this.shadowRoot?.getElementById('drawer');
        if (isDrawerOpen) {
            drawer.setAttribute('open', 'open');
        } else {
            drawer?.removeAttribute('open');
        }
    }

    @Event()
    navigate: EventEmitter<string>

    render() {
        // const instance = createTypeStyle();
        // const className = instance.style(this.styles)
        const items = JSON.stringify(this.items)

        return html`
        <mwc-drawer id="drawer" type="modal" @MDCDrawer:closed=${_ => this.toggleDrawer()}>
            <xura-list @itemClick="${evt => this.navigate.emit(evt.detail)}" items="${items}"></xura-list>
            <div slot="appContent">
                <xura-navigation title="${this.title}" @toggleDrawer="${_ => this.toggleDrawer()}"></xura-navigation>
                <slot name="content"></slot>
            </div>
        </mwc-drawer>
        `;
    }
}

