import { h, Host } from "@stencil/core";
export class RadioField {
    constructor() {
        this.renderItem = (item) => {
            debugger
            const isGroup = !!item.options;
            return isGroup ? this.renderGroup(item) : this.renderOption(item);
        };
        this.renderOption = (option) => {
            //const type = typeof (option);
            //let label = null;
            //let value = null;
            //switch (type) {
            //    case 'string':
            //        label = option;
            //        value = option;
            //        break;
            //    case 'number':
            //        label = option.toString();
            //        value = option.toString();
            //        break;
            //    case 'object':
            //        const pair = option;
            //        label = pair.label;
            //        value = pair.value;
            //        break;
            //    default:
            //        throw Error(`Unsupported option type: ${type}.`);
            //}
            //const isSelected = value === this.value;
            //return h("option", { value: value, selected: isSelected }, label);
        };
        this.renderGroup = (group) => {
            //return (h("optgroup", { label: group.label }, group.options.map(this.renderOption)));
        };
    }
    componentWillLoad() {
        const encodedJson = this.element.getAttribute('data-items');
        if (!encodedJson)
            return;
        const json = decodeURI(encodedJson);
        this.items = JSON.parse(json);
        //debugger 
        //return fetch('https://localhost:44322/api/Trigger')
        //    .then(response => response.json())
        //    .then(data => {
        //        debugger
        //        this.items = data;
        //    });

    }
    render() {
        const name = this.name;
        const label = this.label;
        const items = this.items || [];

        return (
            //h(Host, null,
                h("div", { class: "form-group" },
                    h("div", { class: "form-check" },
                        items.map(this.renderOption))
                )
            //)

        //return (h(Host, null,
        //    h("label", { htmlFor: name }, label),
        //    h("input", { id: name, name: name, class: "", type: "radio" }, items.map(this.renderItem)),
        //    h("small", { class: "form-text text-muted" }, this.hint)));
    }
    static get is() { return "wf-radio-field"; }
    static get originalStyleUrls() {
        return {
            "$": ["radio-field.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["radio-field.css"]
        };
    }
    static get properties() {
        return {
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
                "reflect": false
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
                "reflect": false
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
                "reflect": false
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
                "reflect": false
            },
            "items": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "Array<SelectItem>",
                    "resolved": "SelectItem[]",
                    "references": {
                        "Array": {
                            "location": "global"
                        },
                        "SelectItem": {
                            "location": "import",
                            "path": "./models"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get elementRef() { return "element"; }
}