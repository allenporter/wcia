// Strings component

import WebHarpString from "../string/string.js";

export default class WebHarpStrings extends HTMLElement {
    connectedCallback() {
        console.log('connectedCallback');
        let strings = '<div class="spacer"></div>';
        for (let c = 0; c < this.getAttribute("strings"); c++) {
            strings += '<webharp-string></webharp-string>';
        }
        strings += `
          <style>
            webharp-strings {
                height:100%;
                display: flex;
            }
            webharp-strings > webharp-string, div.spacer {
                flex: 1;
            }
          </style>
        `;
        this.innerHTML = strings;
        this.stringsElements = this.querySelectorAll('webharp-string');
    }

    set points(pts) {
        if (!this.stringsElements) {
            return;
        }
        if (!pts.last || !pts.current) {
            return;
        }
        const magnitude = Math.abs(pts.current.x - pts.last.x);
        const xMin = Math.min(pts.current.x, pts.last.x);
        const xMax = Math.max(pts.current.x, pts.last.x);
        for (let d = 0; d < this.stringsElements.length; d++) {
            if (xMin > this.stringsElements[d].offsetLeft || xMax < this.stringsElements[d].offsetLeft) {
                continue;
            }
            let strum = {
                power: magnitude,
                string: d,
            };
            this.stringsElements[d].strum(strum);
        }
    }
}

if (!customElements.get('webharp-strings')) {
    customElements.define('webharp-strings', WebHarpStrings);
}