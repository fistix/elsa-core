//export class RadioFieldDriver {
//    constructor() {
//        this.displayEditor = (activity, property) => {
//            const name = property.name;
//            const label = property.label;
//            const checked = activity.state[name] === 'true';
//            return `<wf-radio-field name="${name}" label="${label}" hint="${property.hint}" checked="${checked}"></wf-radio-field>`;
//        };
//        this.updateEditor = (activity, property, formData) => {
//            activity.state[property.name] = formData.get(property.name);
//        };
//    }
//}



export class RadioFieldDriver {
    constructor() {
        this.displayEditor = (activity, property) => {
            const name = property.name;
            const label = property.label;
            const value = activity.state[name] || '';
            const items = property.options.items || [];
            //debugger
            //setTimeout(()=> {
            const itemsJson = encodeURI(JSON.stringify(items)); //["Hello, World"]));
            return `<wf-radio-field name="${name}" label="${label}" hint="${property.hint}" value="${value}" data-items="${itemsJson}"></wf-radio-field>`;
            //},5000);
        };
        this.updateEditor = (activity, property, formData) => {
            
            const value = formData.get(property.name).toString();
            activity.state[property.name] = value.trim();
        };
    }
}
