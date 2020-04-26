import { Component, CustomElement, Prop, html, EventEmitter, Event } from 'ce-decorators';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';

@Component({
    tag: 'xura-navigation',
    style: ``,
})
export class Navigation extends CustomElement {

    @Prop({ type: String })
    title: string = 'Xura | Navigation Bar';

    isDrawerOpen: Boolean = false;

    @Event()
    toggleDrawer: EventEmitter<any>;

    render() {

        return html`<mwc-top-app-bar>
            <mwc-icon-button icon="menu" onClick="this.getRootNode().host.toggleDrawer.emit()" slot="navigationIcon"></mwc-icon-button>
            <div slot="title">${this.title}</div>
            <mwc-icon-button icon="file_download" slot="actionItems"></mwc-icon-button>
            <mwc-icon-button icon="print" slot="actionItems"></mwc-icon-button>
            <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button>
            <div><!-- content a change for poly --></div>
        </mwc-top-app-bar>`;
    }
}