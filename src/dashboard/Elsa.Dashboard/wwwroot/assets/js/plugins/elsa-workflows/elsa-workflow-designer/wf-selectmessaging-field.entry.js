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


        this.toggleModal = () => {
            $("#templateDetailsModal").modal('hide');
        }

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
                msgModel.body = res.Body && res.Body != undefined ? res.Body : "";//res.Message;
                msgModel.to = res.ToEmailAddress && res.ToEmailAddress != undefined ? res.ToEmailAddress : "";
                msgModel.files = res.Files && res.Files.length > 0 ? res.Files : "";//res.MediaUrl
                msgModel.template = document.getElementById("optMsgs").value
                this.refresh()
            })
    };  

    renderTemplateBody = (bodyContent) => {
        debugger
        if (bodyContent) {
            document.getElementById("txtBody").style = "height: 500px !important; overflow: scroll;",
                document.getElementById("txtBody").innerHTML = bodyContent
        }
        else {
        }
    }



    refresh() {
        document.getElementById(this.name).value = JSON.stringify(msgModel);
        this.renderTemplateBody(msgModel.body)
        this.element.forceUpdate();
        
    }

    isValidUrl(string) {
        try {
            new URL(string);
        } catch (_) {
            return false;
        }

        return true;
    }

    renderMediaThumbnails = (src) => {
        debugger
        let validMedia = ""
        if (msgModel && msgModel.files && this.isValidUrl(msgModel.files)) {
            validMedia = msgModel.files;
            return h("img", { src: msgModel.files, class: "img-rounded", alt: src, width: "50", height: "50" }, "")
        }
        else if (this.isValidUrl(src)) {
            validMedia = src;
            return h("img", { src, class: "img-rounded", alt: src, width: "50", height: "50" }, "")
        }

        return "";//h("img", { validMedia, class: "img-rounded", alt: src, width: "50", height: "50" }, "")
    }

    componentWillLoad() {
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

    componentDidLoad() {
        //debugger
        if (MessagingState && MessagingState.body) {
            this.renderTemplateBody(MessagingState.body)
        }
        else if (msgModel && msgModel.body) {
            this.renderTemplateBody(msgModel.body)
        }
    }

    render() {
        const name = this.name;
        const label = this.label;
        const items = this.items || [];
        return (h(Host, null,
            h("label", { htmlFor: name }, label),
            h("div", { class: "d-flex" }, 
            h("select", { id: "optMsgs", name: "optMsgs", class: "custom-select", onchange: e => this.setValues(e) }, items.sort().map(this.renderItem)),
            h("button", { type: "button", class: "btn btn-default", "data-toggle": "modal", "data-target": "#templateDetailsModal" }, "View Template Details"),
            ),

            h("div", { class: "modal fade", id: "templateDetailsModal", tabindex: "-1", role: "dialog", "aria-labelledby": "templateDetailsModalLabel", "aria-hidden": "true" },
                h("div", { class: "modal-dialog rounded border border-info", role: "document" },
                    h("div", { class: "modal-content" },
                        h("div", { class: "modal-header" },
                            h("h5", { class: "modal-title", id: "templateDetailsModalLabel" }, "Template Details"),
                            h("button", { type: "button", class: "close", onclick: this.toggleModal, "aria-label": "Close"}, 
                                h("i", { class: "fa fa-times" }))
                        ),
                        h("div", { class: "modal-body" },
                            h("label", {}, "Subject"),
                            h("input", { id: "subject", name: "subject", class: "form-control", readonly: true, value: MessagingState && MessagingState.subject ? MessagingState.subject : msgModel.subject }, msgModel.subject),
                            h("small", { class: "form-text text-muted" }, ""),
                            h("br", {},),
                            h("label", {}, "Body"),
                            h("div", {
                                id: "txtBody", name: "txtBody", class: "border p-2", readonly: true/*, value: MessagingState && MessagingState.body ? MessagingState.body: msgModel.body*/
                            }),
                            //(MessagingState && MessagingState.body ?
                            //    this.renderTemplateBody(MessagingState.body) :
                            //    msgModel && msgModel.body ?
                            //        this.renderTemplateBody(msgModel.body) : null),
                            //),
                            h("small", { class: "form-text text-muted" }, ""),
                            h("br", {},),
                            h("label", {}, "File Attachments"),
                            h("input", {
                                id: "media", name: "media", class: "form-control", readonly: true,
                                value: MessagingState && MessagingState.files && typeof (MessagingState.files) != 'string'
                                    ? MessagingState.files.length > 0 ? MessagingState.files.join(', ')
                                        : /*typeof (MessagingState.files) == 'string' ?*/ MessagingState.files : msgModel && typeof (msgModel.files) != 'string' ? msgModel.files.join(',') : msgModel.files
                            }, msgModel.subject),
                            h("small", { class: "form-text text-muted" }, "file attachments."),
                            h("div", { class: "d-inline" }, typeof (msgModel.files) != 'string' && msgModel.files.length > 0 ? msgModel.files.map(this.renderMediaThumbnails) : this.renderMediaThumbnails(msgModel.files))
                        ),
                        h("div", { class: "modal-footer" },
                            h("button", { type: "button", class: "btn btn-secondary", onclick: this.toggleModal }, "Close")
                        )
                )
            )
        ),


            //
            //h("label", {}, "Subject"),
            //h("input", { id: "subject", name: "subject", class: "form-control", readonly: true, value: MessagingState && MessagingState.subject ? MessagingState.subject : msgModel.subject }, msgModel.subject),
            //h("small", { class: "form-text text-muted" }, ""),
            //h("br", {},),
            //h("label", {}, "Body"),
            //h("div", {
            //    id: "txtBody", name: "txtBody", class: "border p-2", readonly: true/*, value: MessagingState && MessagingState.body ? MessagingState.body: msgModel.body*/
            //}),
            ////(MessagingState && MessagingState.body ?
            ////    this.renderTemplateBody(MessagingState.body) :
            ////    msgModel && msgModel.body ?
            ////        this.renderTemplateBody(msgModel.body) : null),
            ////),
            //h("small", { class: "form-text text-muted" }, ""),
            //h("br", {},),
            //h("label", {}, "File Attachments"),
            //h("input", {
            //    id: "media", name: "media", class: "form-control", readonly: true,
            //    value: MessagingState && MessagingState.files && typeof (MessagingState.files) != 'string'
            //        ? MessagingState.files.length > 0 ? MessagingState.files.join(', ')
            //            : /*typeof (MessagingState.files) == 'string' ?*/ MessagingState.files : msgModel && typeof (msgModel.files) != 'string' ? msgModel.files.join(',') : msgModel.files
            //}, msgModel.subject),
            //h("small", { class: "form-text text-muted" }, "file attachments."),
            //h("div", { class: "d-inline" }, typeof (msgModel.files) != 'string' && msgModel.files.length > 0 ? msgModel.files.map(this.renderMediaThumbnails) : this.renderMediaThumbnails(msgModel.files)),
            //

            h("input", { id: name, name: name, class: "form-control", type: "hidden" }),

        ));
    }
    get element() { return getElement(this); }
    static get style() { return ""; }
}

const msgModel = { to: "", subject: "", body: "", files: [], template: "" };
const optModel = { sourceApi: String, detailsApi: String };
let MessagingState = { to: "", body: "", subject: "", files: [], name: "", title: "", description: "", template: "", mediaUrl: "", message: "" }


export { SelectMessagingField as wf_selectmessaging_field };
