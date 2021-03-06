export class DisplayManager {
    constructor() {
        this.addDriver = (fieldType, driver) => {
            this.drivers[fieldType] = Object.assign({}, driver);
        };
        this.displayEditor = (activity, property) => {
            const driver = this.drivers[property.type];
            if (!driver)
                return null;
            return driver.displayEditor(activity, property);
        };
        this.updateEditor = (activity, property, formData) => {
            const driver = this.drivers[property.type];
            if (!driver)
                return;
            driver.updateEditor(activity, property, formData);
        };
        this.drivers = {};
    }
}
export default new DisplayManager();
