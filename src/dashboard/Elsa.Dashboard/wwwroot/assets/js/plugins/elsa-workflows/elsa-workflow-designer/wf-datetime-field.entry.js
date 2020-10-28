import { r as registerInstance, h } from './chunk-25ccd4a5.js';

class DatetimeField {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const name = this.name;
        return (h("host", null,
            h("label", { htmlFor: name }, this.label),
            h("input", { id: name, name: name, type: "datetime-local", class: "form-control", value: this.value }),
            h("small", { class: "form-text text-muted" }, this.hint)));
    }
    static get style() { return ""; }
}

export { DatetimeField as wf_datetime_field };
