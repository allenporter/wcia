import { html } from "../../../node_modules/lit-html/lit-html.js";
import { repeat } from "../../../node_modules/lit-html/directives/repeat.js";

export default {
    render(props) {
        return html`
        <div class="logo-picker">Logo:
            <select>
                ${repeat(
                    props.logoChoices,
                    (i) => i.id, (i, index) => html`
                        <option value="${i.uri}">${i.name}</option>`)}
            </select>
        </div>
        <div class="background-picker">Background:
            <select>
                ${repeat(
                    props.backgroundChoices,
                    (i) => i.id, (i, index) => html`
                        <option value="${i.uri}">${i.name}</option>`)}
            </select>
        </div>
            ${this.html(props)}
            ${this.css(props)}
        `;
    },
    html(p) { return html`<div class="biz-card">
    <div class="logo"></div>
    <div class="top-text">
        <h1>${p.first_name} ${p.last_name}</h1>
        <h3>${p.title}</h3>
    </div>
    <div class="bottom-text">
        <h3>phone: ${p.phone}</h3>
        <h3>${p.email} / ${p.website}</h3>
    </div>
</div>`; },
    css(p) { return html`<style>
    .biz-card {
        font-size: 16px;
        font-family: sans-serif;
        color: white;
        width: 700px;
        height: 400px;
        display: inline-block;
        border-color: #9a9a9a;
        background-color: gray;
        background-size: 5%;
        background-image: url("background-pattern.png");
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .biz-card .logo {
        height: 100px;
        margin-top: 10%;
        text-align: center;
        background-image: url("biz-card-logo.png");
        background-size: contain;
        background-position-x: center;
        background-repeat: no-repeat;
    }
    .biz-card .top-text {
        text-align: center;
    }
    .biz-card .top-text h1 {
        font-size: 2.5em;
        margin-bottom: 0;
    }
    .biz-card .top-text h1 {
        margin: 0;
    }
    .biz-card .bottom-text {
        text-align: center;
        margin-top: 10%;
    }
    .biz-card .bottom-text {
        text-align: center;
        margin-top: 10%;
    }
    .biz-card .bottom-text h3 {
        margin: 0;
    }
</style>`; },
}