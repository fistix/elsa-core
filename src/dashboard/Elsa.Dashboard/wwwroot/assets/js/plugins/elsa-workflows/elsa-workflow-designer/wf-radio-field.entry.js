import { r as registerInstance, h, H as Host, d as getElement } from './chunk-25ccd4a5.js';

class RadioField {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.renderItem = (item) => {
            debugger
            const isGroup = !!item.options;
            return isGroup ? this.renderGroup(item) : this.renderOption(item);
        };
        this.renderOption = (option) => {
            debugger
            //check if option has api
            //let label = null;
            //let value = null;
            //let isSelected = false
            //debugger
            //if (option){
            //    console.log(option);

                //const type = typeof (option);

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

                //isSelected = value === this.value;
            return h("div", { class: "m-2 form-check" },
                h("input", { id: option, name: this.name, class: "form-check-input", type: "radio", value: option, checked: this.value === option ? true : option === "EveryTime" }),
                    h("label", { class: "form-check-label", htmlFor: option }, option)
                )
            }


            //return h();//"option", { value: value, selected: isSelected }, label);
        };
        //this.renderGroup = (group) => {
        //    return (h("optgroup", { label: group.label }, group.options.map(this.renderOption)));
        //};
    
    componentWillLoad() {
        const encodedJson = this.element.getAttribute('data-items');
        //if (!encodedJson)
        //    return;
        const json = decodeURI(encodedJson);
        this.items = JSON.parse(json);
        debugger
        console.log(this.items);

        //return fetch(this.items, {
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
        debugger
        const name = this.name;
        const label = this.label;
        const items = this.items || [];
        //this.renderItem
        console.log("Radio Items", items);
        return (
            h(Host, null, 
                h("label", { htmlFor: name }, label),
                h("div", { class: "border form-group" },
                        items.map(this.renderOption))
            )

            //<div class="form-group">
            //    {
            //        items.map((item) => {
            //            <div class="form-check">
            //                <input id={name} name={name} class="form-check-input" value={item} type="radio" />
            //                <label class="form-check-label" for={name}>{item}</label>
            //            </div>
            //        })
            //    }
            //</div>
            
         );
    }
    get element() { return getElement(this); }
    static get style() { return ""; }
}

export { RadioField as wf_radio_field };
