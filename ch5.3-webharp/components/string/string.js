// String component

import MIDI from '../../midijs.wrapper.js';

export default class WebHarpString extends HTMLElement {
    connectedCallback() {
        this._ready = false
        this.innerHTML = `
            <div class="line"></div>
            <style>
                webharp-string > .line {
                    background-color: white;
                    height: 100%;
                    width: 2px;
                }
            </style>
        `;
        MIDI.loadPlugin({
            soundFountUrl: './',
            instument: 'acoustic_grand_piano',
            onsuccess: () => this.onLoaded(),
        })
    }

    onLoaded() {
        this._ready = true;
    }

    strum(params) {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        const dur = params.power * 10 + 250;
        this.classList.add('shake', 'shake-contant', 'shake-horizontal');
        if (dur < 500) {
            this.classList.add('shake-little');
        }
        this.timer = setTimeout( () => this.stopStrum(), 1000);
        this.playSound(params)
        console.log(params);
    }

    playSound(params) {
        if (!this._ready) {
            return;
        }
        let note = 50 + params.string * 4;
        console.log("Note: " + note);
        MIDI.setVolume(0, 127);
        MIDI.noteOn(0, note, params.power, 0);
        MIDI.noteOff(0, note, 0.75);
    }

    stopStrum() {
        console.log('stop strum')
        this.classList.remove('shake', 'shake-constant', 'shake-horizontal', 'shake-little');
    }
}

if (!customElements.get('webharp-string')) {
    customElements.define('webharp-string', WebHarpString);
}