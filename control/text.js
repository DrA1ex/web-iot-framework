import {Control} from "./base.js";

export class TextControl extends Control {
    #displayConverter = null;

    constructor(element) {
        super(element);
    }

    get text() {
        return this.element.innerText;
    }

    get html() {
        return this.element.innerHTML;
    }

    setDisplayConverter(fn) {
        this.#displayConverter = fn;
    }

    setText(value) {
        if (this.#displayConverter) value = this.#displayConverter(value);

        if (value instanceof Array && value.length === 2) {
            this.element.innerHTML = `<left>${value[0]}</left><right>${value[1]}</right>`;
        } else {
            this.element.innerText = value;
        }
    }
}