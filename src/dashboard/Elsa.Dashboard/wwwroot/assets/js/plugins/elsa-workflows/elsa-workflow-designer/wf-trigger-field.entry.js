import { r as registerInstance, h, d as getElement } from './chunk-25ccd4a5.js';

class TriggerField {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }

    SetValue = (e) => {
        debugger
        //e.preventDefault();
        this.refresh(true);
    }

    DisableStartNow = (e) => {
        e.preventDefault();
        this.refresh(false);
    }

    refresh(mode) {
        if (mode && document.getElementById("startNow").checked) {
            document.getElementById(this.name).value = new Date().toLocaleString("sv-SE", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
            }).replace(" ", "T");//.toISOString();//("yyyy-MM-ddThh:mm:ss");//("MM/dd/yyyy hh:mm tt");
        }
        else if (mode && document.getElementById("startNow").checked == false)
        {
            document.getElementById(this.name).value = "";
        }
        else {
            document.getElementById("startNow").checked = false;
            document.getElementById("startNow").disabled = true;
            disabledTrigger = true;
        }

        this.element.forceUpdate();
    }


    componentWillLoad() {
        debugger
        if (this.value) {
            let existingDate = new Date(this.value);
            disabledTrigger = this.value !== "" /* && existingDate <= new Date()*/ ? true : false
        }
        else {
            //var now = new Date();
            CurrentDateTime.setHours(9);
            CurrentDateTime.setMinutes(0);
            this.value = CurrentDateTime;
        }
    }


    render() {
        debugger
        const name = this.name;
        const value = this.value ? new Date(this.value).toLocaleString("sv-SE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        }).replace(" ", "T") : "";

        return (h("host", null,
            h("label", { class: "m-1", htmlFor: name }, this.label),
            h("div", { class: "border" }, 
            h("div", { class: "form-check-inline" },
                h("small", { class: "m-2 form-text text-muted" }, "Now"),
                h("input", { id: "startNow", name: "startNow", type: "checkbox", onclick: e => this.SetValue(e), class: "form-check-input", disabled: this.value !== "" && this.value !== CurrentDateTime ? true : false, /*readonly: disabledTrigger*/ }),
                h("input", { id: name, name: name, type: "datetime-local", onchange: e => this.DisableStartNow(e), class: "m-4 form-control", value: value, readonly: disabledTrigger }),
            ),
                h("small", { class: "m-2 form-text text-muted" }, this.hint + " " + "(Select Only Once!)" )))
            );
    }

    get element() { return getElement(this); }
    static get style() { return ""; }
}


let disabledTrigger = false;
let CurrentDateTime = new Date()


export { TriggerField as wf_trigger_field };
