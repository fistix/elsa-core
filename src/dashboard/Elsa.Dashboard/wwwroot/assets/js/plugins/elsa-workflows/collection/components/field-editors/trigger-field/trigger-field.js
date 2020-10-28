import { h, Host } from "@stencil/core";
export class TriggerField {
    constructor() {

    }

    SetValue = (e) => {
        e.preventDefault();
        document.getElementById(this.name).value = new Date(); //Date.now.toString("MM/dd/yyyy hh:mm tt");
    }

    DisableStartNow = (e) => {
        e.preventDefault();
        document.getElementById("startNow").checked = false;
    }

    componentWillLoad() {
        
    }


    render() {
        const name = this.name;
        return (h("host", null,
            h("label", { htmlFor: name }, this.label),
            h("div", { class: "form-check-inline" }, 

                h("input", { id: "startNow", name: "startNow", type: "checkbox", onclick: e => this.SetValue(e), class: "form-check", value: this.value }),
                h("input", { id: name, name: name, type: "datetime-local", onchange: e => this.DisableStartNow(e), class: "form-control", value: this.value }),
            ),
            h("small", { class: "form-text text-muted" }, this.hint)));
    }

    static get is() { return "wf-trigger-field"; }
    static get originalStyleUrls() { return {
        "$": ["trigger-field.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["trigger-field.css"]
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
