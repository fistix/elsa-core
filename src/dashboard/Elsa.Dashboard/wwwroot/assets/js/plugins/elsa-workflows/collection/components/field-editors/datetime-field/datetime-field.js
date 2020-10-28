import { h, Host } from "@stencil/core";
export class DatetimeField {
    render() {
        const name = this.name;
        return (h("host", null,
            h("label", { htmlFor: name }, this.label),
            h("input", { id: name, name: name, type: "datetime-local", class: "form-control", value: this.value }),
            h("small", { class: "form-text text-muted" }, this.hint)));
    }
    static get is() { return "wf-datetime-field"; }
    static get originalStyleUrls() { return {
        "$": ["datetime-field.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["datetime-field.css"]
    }; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": true
        },
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": true
        },
        "value": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value",
            "reflect": true
        },
        "hint": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "hint",
            "reflect": true
        }
    }; }
}
