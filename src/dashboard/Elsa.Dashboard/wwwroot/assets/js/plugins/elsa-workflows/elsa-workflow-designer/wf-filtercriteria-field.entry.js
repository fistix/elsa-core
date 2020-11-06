import { r as registerInstance, h, H as Host, d as getElement } from './chunk-25ccd4a5.js';

class FilterCriteriaField {
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

        this.toggleModal = () => {
            debugger
            $("#filterModal").modal('hide');
            //document.getElementById("filterModal").style.display = "none";
        }

    }
    componentWillLoad() {
        const encodedJson = this.element.getAttribute('data-items');
        //if (!encodedJson)
        //    return;
        const json = decodeURI(encodedJson);
        this.items = JSON.parse(json);
        //debugger
        console.log(this.items);

        if (this.items && this.items.length > 0 && this.items[0].sourceApi) {
            optModel.sourceApi = this.items[0].sourceApi;
            optModel.detailsApi = this.items[0].detailsApi;
        }


        debugger
        return fetch(this.items[0].sourceApi, {
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
                this.items.splice(0, 0, "");
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


    setValues = (e) => {
        debugger
        e.preventDefault();
        return fetch(optModel.detailsApi + e.target.value, {})
            .then(response => response.json())
            .then(data => {
                let res = { ...data }
                console.log("Data OnSelect", res);
                filterDetails = res;
                this.refresh()
            })

    }  



    renderFilterDetails = (key) => {
        debugger
        //let spans;
        //var divSpan = document.getElementById("filterDetailsBody");
        //const lineBreak = document.createElement('br');

        //Object.keys(filterDetails).sort().forEach(function (key) {

            var value = filterDetails[key];

        //    const span = document.createElement('span');

        //    span.className = 'badge badge-secondary';

        //    span.innerHTML = key + ": " + value

        //    divSpan.append(span);
        //    divSpan.append(lineBreak);
            //divSpan.insertAdjacentHTML("afterend", "<span class='badge badge-secondary'>"+key+": " + value + "</span>")
        //});

        return h("h2", {}, h("span", { class: "m-1 badge badge-primary" }, key + ": " + value))
        
    }

    refresh() {
        this.element.forceUpdate();

    }


    render() {
        const name = this.name;
        const label = this.label;
        const items = this.items || [];
        return (h(Host, null,
            h("label", { htmlFor: name }, label),
            h("div", { class: "d-flex"}, 
            h("select", { id: name, name: name, class: "custom-select", onchange: e => this.setValues(e) }, items.map(this.renderItem)),
            h("button", { id: 'btnfilter', onclick: this.renderFilterDetails, name: 'btnfilter', type: "button", class: "btn btn-default", "data-toggle": "modal", "data-target": "#filterModal" }, "Show Filter Criteria"),
            ),
            h("div", {
                class: "modal fade",
                id: "filterModal", tabindex: "-1", role: "dialog", "aria-labelledby": "filterModal", "aria-hidden": "true"
            },

                h("div", { class: "modal-dialog" },
                    h("div", { class: "modal-content" },
                        h("div", { class: "modal-header" },
                            h("h5", { class: "modal-title", id: "filterModalTitle" }, "Selected Filter Criteria"),
                            h("button", { type: "button", class: "close", "data-dismiss": "modal", "aria-hidden": "true" },
                                h("i", { class: "fa fa-times"})
                            )
                        ),
                        h("div", { id: "filterDetailsBody", class: "modal-body d-flex flex-wrap" }, Object.keys(filterDetails).sort().map(this.renderFilterDetails)),
                        h("div", { class: "modal-footer" },
                            h("button", { onclick: this.toggleModal, type: "button", id:"btnClose", class: "btn btn-secondary" }, "Close")
                        )
                    )
                )


            ),

            h("small", { class: "form-text text-muted" }, this.hint)));
    }
    get element() { return getElement(this); }
    static get style() { return ""; }
}

let filterDetails = new Object();
const optModel = { sourceApi: String, detailsApi: String };

export { FilterCriteriaField as wf_filtercriteria_field };
