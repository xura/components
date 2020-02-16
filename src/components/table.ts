import { Component, CustomElement, html } from 'ce-decorators';

import 'ag-grid-community'
import 'ag-grid-polymer'

const columnDefs = JSON.stringify([
    { headerName: "Make", field: "make", sortable: true },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
]);

const rowData = JSON.stringify([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
]);

@Component({
    tag: 'xura-table',
    style: ``,
})
export class Table extends CustomElement {

    render() {
        return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ag-grid/22.1.1/styles/ag-grid.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/ag-grid@18.1.3-beta.1/dist/styles/ag-theme-material.css" />
        <ag-grid-polymer style="width: 100%; height: 350px;" 
            class="ag-theme-material"
            row-data='${rowData}'
            column-defs='${columnDefs}'
        >
        </ag-grid-polymer>
        `;
    }
}
