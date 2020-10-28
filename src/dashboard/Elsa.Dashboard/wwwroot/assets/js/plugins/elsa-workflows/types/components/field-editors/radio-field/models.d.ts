export declare type SelectOptionPair = {
    label: string;
    value: string | number;
};

export declare type SelectOptionAny = {
    api: string;
};

export declare type SelectOption = string | number | SelectOptionPair | SelectOptionAny;
export declare type SelectGroup = {
    label: string;
    options: Array<SelectOption>;
};
export declare type SelectItem = SelectOption | SelectGroup;
