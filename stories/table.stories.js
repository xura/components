import '../src/components/table'

export default {
    title: 'Table',
};

const columns = JSON.stringify([
    { headerName: "Make", field: "make", sortable: true },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
]);

const data = JSON.stringify([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
]);

export const Default = () => `<xura-table data='${data}' columns='${columns}'></xura-table`;