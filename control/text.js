import {Control} from "./base.js";

export class TextControl extends Control {
    constructor(element) {
        super(element);
    }

    get text() {
        return this.element.innerText;
    }

    get html() {
        return this.element.innerHTML;
    }
    setText(value) {
        if (value instanceof Array && value.length === 2) {
            this.element.innerHTML = `<left>${value[0]}</left><right>${value[1]}</right>`;
        } else {
            this.element.innerText = value;
        }
    }
}