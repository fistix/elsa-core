import { r as registerInstance, h, H as Host, d as getElement } from './chunk-25ccd4a5.js';
class RepeatField {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.renderItem = (item) => {
            const isGroup = !!item.options;
            return isGroup ? this.renderGroup(item) : this.renderOption(item);
        };

        this.renderWeeks = (week) => {
            var val = this.value ? JSON.parse(decodeURI(this.value)) : ''
            return h("option", { value: week, selected: week === val["value"]  }, week);
        };

        this.renderMonths= (month) => {
            var val = this.value ? JSON.parse(decodeURI(this.value)) : ''
            return h("option", { value: month, selected: month === val["value"] }, month);
        };

        this.renderGroup = (group) => {
            return (h("optgroup", { label: group.label }, group.options.map(this.renderOption)));
        };
    }

    setValues = (val) => {
        debugger
        //val.preventDefault();
        //if (val.target.value == "None") {
        //    document.getElementById("wmTime").disabled = true;
        //    document.getElementById("week").disabled = true;
        //    document.getElementById("month").disabled = true;
        //    Dictionary["type"] = "None";
        //    document.getElementById("repeatType").value = JSON.stringify(Dictionary);
        //}
        if (val.target.value == "Daily") {
            //KeyValuePair.Key = "Daily";
            document.getElementById("wmTime").disabled = false;
            document.getElementById("week").disabled = true;
            document.getElementById("month").disabled = true;
            Dictionary["type"] = "Daily";
            document.getElementById("repeatType").value = JSON.stringify(Dictionary);
            //document.getElementById("repeatType").value = JSON.stringify(KeyValuePair);
        }
        else if (val.target.value == "EWO") {
            //KeyValuePair.Key = "EWO";
            //KeyValuePair.Value = document.getElementById("week").value;
            document.getElementById("week").disabled = false;
            document.getElementById("month").disabled = true;
            document.getElementById("wmTime").disabled = false;
            //document.getElementById("repeatType").value = JSON.stringify(KeyValuePair);
        }
        else if (val.target.value == "EMO") {
            //KeyValuePair.Key = "EMO";
            //KeyValuePair.Value = document.getElementById("month").value;
            document.getElementById("month").disabled = false;
            document.getElementById("week").disabled = true;
            document.getElementById("wmTime").disabled = false;
            //document.getElementById("repeatType").value = JSON.stringify(KeyValuePair);
        }
        else {

        }
    };


    setWeekValue = (e) => {
        e.preventDefault();
        Dictionary["type"]= "EWO";
        Dictionary["value"] = e.target.value;
        document.getElementById("repeatType").value = JSON.stringify(Dictionary);
    }

    setMonthValue = (e) => {
        e.preventDefault();
        Dictionary["type"] = "EMO";
        Dictionary["value"] = e.target.value;
        document.getElementById("repeatType").value = JSON.stringify(Dictionary);
    }

    setTimeValue = (e) => {
        e.preventDefault();
        Dictionary["time"] = e.target.value;
        document.getElementById("repeatType").value = JSON.stringify(Dictionary);
    }

    componentWillLoad() {
        const state = this.value ? JSON.parse(decodeURI(this.value)) : new Object();
        if (state) {
            Dictionary = { ...state }
        }
    }
    render() {
        debugger
        const name = this.name;
        const label = this.label;
        let value = this.value ? JSON.parse(decodeURI(this.value)) : new Object();
        let parsedJson = JSON.stringify(value);
        const items = this.items || [];

        return (h(Host, null,
            h("label", { htmlFor: name }, label),
            h("input", { id: name, name: name, class: "form-control", type: "hidden", value: parsedJson }),
            h("div", { class: "border"},
               //h("div", { class: "form-check" },
               // h("input", { id: "none", name: "repeat", type: "radio", checked: value["type"] === "None", onclick: e => this.setValues(e), value: "None", class: "form-check-input" },),
               // h("label", { class: "form-check-label", htmlFor: "none"}, "None")),
               h("div", { class: "m-2 form-check"},
                h("input", { id: "daily", name: "repeat", type: "radio", checked: value["type"] === "Daily" ? true : true, onclick: e => this.setValues(e), value: "Daily", class: "form-check-input" },),
                h("label", { class: "form-check-label", htmlFor: "daily"}, "Daily")),
               h("div", { class: "m-2 form-check"},
                h("input", { id: "ewo", name: "repeat", type: "radio", checked: value["type"] === "EWO", onclick: e => this.setValues(e), value: "EWO", class: "form-check-input" },),
                   h("label", { class: "form-check-label", htmlFor: "ewo" }, "Every Week On"),
                   h("select", { id: "week", name: "week", class: "my-1 mr-2 custom-select", onchange: e => this.setWeekValue(e), disabled: value["type"] === "EWO" ? false : true }, Weeks.map(this.renderWeeks)),
                ),
               h("div", { class: "m-2 form-check"},
                h("input", { id: "emo", name: "repeat", type: "radio", checked: value["type"] === "EMO", onclick: e => this.setValues(e), value: "EMO", class: "form-check-input" },),
                h("label", { class: "my-1 mr-4 form-check-label", htmlFor: "emo"}, "Every Month On"),
                   h("select", { id: "month", name: "month", class: "my-1 mr-2 custom-select", onchange: e => this.setMonthValue(e), disabled: value["type"] === "EMO" ? false : true }, Months.map(this.renderMonths)),
                ),
                h("div", { class: "m-2 form-check" },
                 h("label", { htmlFor: "wmTime"}, "At"),
                 h("input", { id: "wmTime", name: "wmTime", class: "form-control", type: "time", value: value["time"], onchange: e => this.setTimeValue(e), disabled: value["type"] === "EMO" || value["type"] === "EWO" || value["type"] === "Daily" ? false :  true },)
                )
             )


            //h("select", { id: "optMsgs", name: "optMsgs", class: "custom-select", onchange: e => this.setValues(e) }, items.map(this.renderItem)),
            //h("small", { class: "form-text text-muted" }, this.hint),
            //h("br", {},),
            //h("label", {}, "To"),
            //h("input", { id: "to", name: "to", class: "form-control", readonly: true, value: MessagingState && MessagingState.to ? MessagingState.to : msgModel.to }, msgModel.to),
            //h("small", { class: "form-text text-muted" }, ""),
            //h("br", {},),
            //h("label", {}, "Subject"),
            //h("input", { id: "subject", name: "subject", class: "form-control", readonly: true, value: MessagingState && MessagingState.subject ? MessagingState.subject : msgModel.subject }, msgModel.subject),
            //h("small", { class: "form-text text-muted" }, ""),
            //h("br", {},),
            //h("label", {}, "Body"),
            //h("textarea", { id: "body", name: "body", class: "form-control", readonly: true, value: MessagingState && MessagingState.body ? MessagingState.body: msgModel.body }, msgModel.body),
            //h("small", { class: "form-text text-muted" }, ""),
            //h("br", {},),
            //h("label", {}, "Media"),
            //h("input", {
            //    id: "media", name: "media", class: "form-control", readonly: true,
            //    value: MessagingState && MessagingState.files && typeof (MessagingState.files) != 'string'
            //        && MessagingState.files.length > 0 ? MessagingState.files.join(', ')
            //        : typeof (MessagingState.files) == 'string' ? MessagingState.files : ""//msgModel.files.join(',')
            //}, msgModel.subject),
            //h("small", { class: "form-text text-muted" }, "file attachments."),
            //h("input", { id: name, name: name, class: "form-control", type: "hidden" }),

        ));
    }
    get element() { return getElement(this); }
    static get style() { return ""; }
}

const Weeks = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];
const Months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
let MessagingState = {to: "", body: "", subject: "", files: [], name: "", title: "", description: "", template: "", mediaUrl: "", message: ""}
let Dictionary = new Object();
export { RepeatField as wf_repeat_field };
