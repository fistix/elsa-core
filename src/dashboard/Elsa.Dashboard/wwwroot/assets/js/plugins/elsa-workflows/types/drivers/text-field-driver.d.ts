import { FieldDriver } from "../services/field-driver";
import { Activity, ActivityPropertyDescriptor } from "../models";
export declare class TextFieldDriver implements FieldDriver {
    displayEditor: (activity: Activity, property: ActivityPropertyDescriptor) => any;
    updateEditor: (activity: Activity, property: ActivityPropertyDescriptor, formData: FormData) => void;
}
