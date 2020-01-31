import { Component, CustomElement, Prop, html } from 'ce-decorators';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';

@Component({
    tag: 'xura-navigation',
    style: ``,
})
export class Navigation extends CustomElement {

    @Prop({ type: String })
    title: string = 'Xura | Navigation Bar';

    render() {

        return html`<mwc-top-app-bar>
            <mwc-icon-button icon="menu" onclick=${this.openDrawer} slot="navigationIcon"></mwc-icon-button>
            <div slot="title">${this.title}</div>
            <mwc-icon-button icon="file_download" slot="actionItems"></mwc-icon-button>
            <mwc-icon-button icon="print" slot="actionItems"></mwc-icon-button>
            <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button>
            <div><!-- content --></div>
        </mwc-top-app-bar>`;
    }
}