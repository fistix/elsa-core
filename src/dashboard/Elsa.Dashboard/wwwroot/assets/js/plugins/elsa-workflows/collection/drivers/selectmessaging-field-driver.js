export class SelectMessagingFieldDriver {
    constructor() {
        this.displayEditor = (activity, property) => {
            const name = property.name;
            const label = property.label;
            const value = activity.state[name] || '';
            const items = property.options.items || [];
            debugger
            //setTimeout(()=> {
            const itemsJson = encodeURI(JSON.stringify(items)); //["Hello, World"]));
            return `<wf-selectmessaging-field name="${name}" label="${label}" hint="${property.hint}" data-items="${itemsJson}" value="${value}"></wf-selectmessaging-field>`;
            //},5000);
        };
        this.updateEditor = (activity, property, formData) => {
            const value = formData.get(property.name).toString();
            activity.state[property.name] = value.trim();
        };
    }
}