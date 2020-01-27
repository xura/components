import '../src/components/list'
import uuid from 'uuid/v5'

export default {
    title: 'List',
};

export const Default = () => '<xura-list></xura-list>'

const items = JSON.stringify([...Array(500)].map(() => uuid(Math.random().toString(), '1b671a64-40d5-491e-99b0-da01ff1f3341')))
export const WithManyItems = () => `<xura-list items=${items}></xura-list>`