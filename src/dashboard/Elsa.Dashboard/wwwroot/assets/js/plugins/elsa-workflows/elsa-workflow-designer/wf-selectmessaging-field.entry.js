import { r as registerInstance, h, H as Host, d as getElement } from './chunk-25ccd4a5.js';
class SelectMessagingField {
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

                isSelected = value === MessagingState.template;
            }


            return h("option", { value: value, selected: isSelected }, label);
        };
        this.renderGroup = (group) => {
            return (h("optgroup", { label: group.label }, group.options.map(this.renderOption)));
        };
    }

    setValues = (e) => {
        debugger
        e.preventDefault();
        return fetch(optModel.detailsApi  + e.target.value, {})
            .then(response => response.json())
            .then(data => {
                let res = { ...data }
                console.log("Data OnSelect", res);
                msgModel.subject = res.Subject;
                msgModel.body = res.Body && res.Body != undefined ? res.Body : res.Message;
                msgModel.to = res.ToEmailAddress && res.ToEmailAddress != undefined ? res.ToEmailAddress : "";
                msgModel.files = res.Files && res.Files.length > 0 ? res.Files : res.MediaUrl
                msgModel.template = document.getElementById("optMsgs").value
                this.refresh()
            })
    };  

    refresh() {
        document.getElementById(this.name).value = JSON.stringify(msgModel);
        this.element.forceUpdate();
        
    }

    componentWillLoad() {
        debugger
        const encodedJson = this.element.getAttribute('data-items');
        const json = decodeURI(encodedJson);


        const encodedStateJson = this.element.getAttribute('stateVals');
        const stateJson = decodeURI(encodedStateJson);
        MessagingState = JSON.parse(stateJson)
        console.log("Saved State of Activity", stateJson)

        this.items = JSON.parse(json);
        console.log(this.items);

        if (this.items && this.items.length > 0 && this.items[0].sourceApi) {
            optModel.sourceApi = this.items[0].sourceApi;
            optModel.detailsApi = this.items[0].detailsApi;

            return fetch(this.items[0].sourceApi, {
                //headers: {
                //    'Access-Control-Allow-Origin': 'https://localhost:44322',
                //    'Access-Control-Allow-Methods': 'POST, GET'
                //}
                //crossDomain: true
            })
                .then(response => response.json())
                .then(data => {
                    debugger
                    data.unshift("");
                    console.log("CheckOptions", data);
                    this.items = data
                })
        }

    }
    render() {
        const name = this.name;
        const label = this.label;
        const items = this.items || [];
        return (h(Host, null,
            h("label", { htmlFor: name }, label),
            h("select", { id: "optMsgs", name: "optMsgs", class: "custom-select", onchange: e => this.setValues(e) }, items.map(this.renderItem)),
            h("small", { class: "form-text text-muted" }, this.hint),
            h("br", {},),
            h("label", {}, "To"),
            h("input", { id: "to", name: "to", class: "form-control", readonly: true, value: MessagingState && MessagingState.to ? MessagingState.to : msgModel.to }, msgModel.to),
            h("small", { class: "form-text text-muted" }, ""),
            h("br", {},),
            h("label", {}, "Subject"),
            h("input", { id: "subject", name: "subject", class: "form-control", readonly: true, value: MessagingState && MessagingState.subject ? MessagingState.subject : msgModel.subject }, msgModel.subject),
            h("small", { class: "form-text text-muted" }, ""),
            h("br", {},),
            h("label", {}, "Body"),
            h("textarea", { id: "body", name: "body", class: "form-control", readonly: true, value: MessagingState && MessagingState.body ? MessagingState.body: msgModel.body }, msgModel.body),
            h("small", { class: "form-text text-muted" }, ""),
            h("br", {},),
            h("label", {}, "Media"),
            h("input", {
                id: "media", name: "media", class: "form-control", readonly: true,
                value: MessagingState && MessagingState.files && typeof (MessagingState.files) != 'string'
                    && MessagingState.files.length > 0 ? MessagingState.files.join(', ')
                    : typeof (MessagingState.files) == 'string' ? MessagingState.files : ""//msgModel.files.join(',')
            }, msgModel.subject),
            h("small", { class: "form-text text-muted" }, "file attachments."),
            h("input", { id: name, name: name, class: "form-control", type: "hidden" }),

        ));
    }
    get element() { return getElement(this); }
    static get style() { return ""; }
}

const msgModel = { to: "", subject: "", body: "", files: [], template: "" };
const optModel = { sourceApi: String, detailsApi: String };
let MessagingState = {to: "", body: "", subject: "", files: [], name: "", title: "", description: "", template: "", mediaUrl: "", message: ""}

export { SelectMessagingField as wf_selectmessaging_field };
