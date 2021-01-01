import { r as registerInstance, h } from './chunk-25ccd4a5.js';

class DatetimeField {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }

    onDateSelect = (e) => {
        document.getElementById(this.name).value = document.getElementById(this.name).value.toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        }).replace(" ", "T");
    }

    render() {
        const value = this.value ? new Date(this.value).toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        }).replace(" ", "T") : "";

        const name = this.name;
        return (h("host", null,
            h("label", { htmlFor: name }, this.label),
            h("input", { id: name, name: name, type: "datetime-local", onchange: e => this.onDateSelect(e), class: "form-control", value: value }),
            h("small", { class: "form-text text-muted" }, this.hint)));
    }
    static get style() { return ""; }
}

export { DatetimeField as wf_datetime_field };
