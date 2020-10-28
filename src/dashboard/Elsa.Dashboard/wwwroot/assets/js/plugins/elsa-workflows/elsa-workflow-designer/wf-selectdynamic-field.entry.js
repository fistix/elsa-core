import { r as registerInstance, h, H as Host, d as getElement } from './chunk-25ccd4a5.js';

class SelectDynamicField {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.renderItem = (item) => {
            const isGroup = !!item.options;
            return isGroup ? this.renderGroup(item) : this.renderOption(item);
        };
        this.renderOption = (option) => {
            //check if option has api
            let label = null;
            let value = null;
            let isSelected = false
            //debugger
            if (option && option.api) { console.log(option.api); }
            else {
                console.log(option);

                const type = typeof (option);
                
                switch (type) {
                    case 'string':
                        label = option;
                        value = option;
                        break;
                    case 'number':
                        label = option.toString();
                        value = option.toString();
                        break;
                    case 'object':
                        const pair = option;
                        label = pair.label;
                        value = pair.value;
                        break;
                    default:
                        throw Error(`Unsupported option type: ${type}.`);
                }

                isSelected = value === this.value;
            }


            return h("option", { value: value, selected: isSelected }, label);
        };
        this.renderGroup = (group) => {
            return (h("optgroup", { label: group.label }, group.options.map(this.renderOption)));
        };
    }
    componentWillLoad() {
        const encodedJson = this.element.getAttribute('data-items');
        //if (!encodedJson)
        //    return;
        const json = decodeURI(encodedJson);
        this.items = JSON.parse(json);
        //debugger
        console.log(this.items);
        debugger
        return fetch(this.items, {
            //headers: {
            //    'Access-Control-Allow-Origin': 'https://localhost:44322',
            //    'Access-Control-Allow-Methods': 'POST, GET'
            //}
            //crossDomain: true
        })
            .then(response => response.json())
            .then(data => {
                console.log("CheckOptions", data);
                this.items = data;
            });

        //debugger
        //this.renderOption = (option) => {

        //    if (option && option.api) { console.log(option.api); }
        //    else {
        //        console.log(option);

        //        return fetch(option, {
        //    //headers: {
        //    //    'Access-Control-Allow-Origin': 'https://localhost:44322',
        //    //    'Access-Control-Allow-Methods': 'POST, GET'
        //    //}
        //    //crossDomain: true
        //})
        //    .then(response => response.json())
        //    .then(data => {
        //        console.log("CheckOptions", data);
        //        this.items = data;
        //    });

        //    }
        //}

        //return fetch('https://localhost:44322/api/Trigger', {
        //    //headers: {
        //    //    'Access-Control-Allow-Origin': 'https://localhost:44322',
        //    //    'Access-Control-Allow-Methods': 'POST, GET'
        //    //}
        //    //crossDomain: true
        //})
        //    .then(response => response.json())
        //    .then(data => {
        //        console.log("CheckOptions", data);
        //        this.items = data;
        //    });

    }
    render() {
        const name = this.name;
        const label = this.label;
        const items = this.items || [];
        return (h(Host, null,
            h("label", { htmlFor: name }, label),
            h("select", { id: name, name: name, class: "custom-select" }, items.map(this.renderItem)),
            h("small", { class: "form-text text-muted" }, this.hint)));
    }
    get element() { return getElement(this); }
    static get style() { return ""; }
}

export { SelectDynamicField as wf_selectdynamic_field };
