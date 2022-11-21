import Template from './template.js';
import { render } from '../../../node_modules/lit-html/lit-html.js';

class BizCard extends HTMLElement {
    connectedCallback() {
        render(Template.render({
            first_name: 'Emmett',
            last_name: 'Brown',
            title: 'Student of all Sciences',
            phone: '555-4385',
            email: 'emmett@docbrown.flux',
            website: 'www.docbrown.flux',
            backgroundChoices: [
                { name: 'big dots', uri: './images/big-dot-pattern.png' },
                { name: 'little dots', uri: './images/tiny-dot-pattern.png' },
            ],
            logoChoices: [
                { name: 'mobius strip', uri: './images/mobius-logo.png' },
                { name: 'shopping bag', uri: './images/bag-logo.png' },
            ],
        }), this);
    }
}

if (!customElements.get('biz-card')) {
    customElements.define('biz-card', BizCard);
}