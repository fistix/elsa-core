export class FileFieldDriver {
    constructor() {
        this.displayEditor = (activity, property) => {
            const name = property.name;
            const label = property.label;
            const value = activity.state[name] || '';
            return `<wf-file-field name="${name}" label="${label}" hint="${property.hint}" value="${value}"></wf-file-field>`;
        };
        this.updateEditor = (activity, property, formData) => {
            activity.state[property.name] = new Date(formData.get(property.name).toString().trim());
        };
    }
}

