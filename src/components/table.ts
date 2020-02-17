import { Component, CustomElement, html, Prop } from 'ce-decorators';

import 'ag-grid-community'
import 'ag-grid-polymer'

@Component({
    tag: 'xura-table',
    style: ``,
})
export class Table extends CustomElement {

    @Prop({ type: Array<Object>() })
    data: Object[] = [];

    @Prop({ type: Array<Object>() })
    columns: Object[] = [];

    render() {
        debugger;
        return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ag-grid/22.1.1/styles/ag-grid.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/ag-grid@18.1.3-beta.1/dist/styles/ag-theme-material.css" />
        <ag-grid-polymer style="width: 100%; height: 350px;" 
            class="ag-theme-material"
            row-data='${JSON.stringify(this.data)}'
            column-defs='${JSON.stringify(this.columns)}'
        >
        </ag-grid-polymer>
        `;
    }
}
