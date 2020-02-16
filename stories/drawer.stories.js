import '../src/components/drawer'
import uuid from 'uuid/v5';

export default {
    title: 'Drawer',
};

const items = JSON.stringify([...Array(500)].map(() => uuid(Math.random().toString(), '1b671a64-40d5-491e-99b0-da01ff1f3341')))

export const Default = () => `
<xura-drawer items=${items} title="Xura | Data">
<span slot='content'>
    <h1 style="font-family: Roboto;">Content would go here</h1>
</span>
</xura-drawer>
`;