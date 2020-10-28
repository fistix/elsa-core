//import { r as registerInstance, h } from './chunk-25ccd4a5.js';

//class FileField {
//    constructor(hostRef) {
//        registerInstance(this, hostRef);
//    }


//    handleFileChange = (e) => {
//        debugger
//        var file = e.target.files[0];
//        var blob = file.slice(0, file.size, file.type);
//        var formData = new FormData();
//        formData.append("image", blob, file.name);
//        document.getElementById(this.name).value = "Hello"; //formData;//new File(blob, file.name, { type: file.type });
//    }

//    render() {
//        const name = this.name;
//        return (h("host", null,
//            h("label", { htmlFor: name }, this.label),
//            h("input", { id: "formFile", name: "formFile", type: "file", class: "form-control", value: this.value, onchange: e => this.handleFileChange(e) }),
//            h("input", { id: name, name: name, class: "form-control", type: "hidden" }),
//            h("small", { class: "form-text text-muted" }, this.hint)));
//    }
//    static get style() { return ""; }
//}

//export { FileField as wf_file_field };



import { r as registerInstance, h } from './chunk-25ccd4a5.js';

class FileField {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }

    fileToBase64 = (file) => {
    return new Promise(resolve => {
            var reader = new FileReader();
            // Read file content on file loaded event
            reader.onloadend = (event) => {
                console.log(event.target.result)
                resolve(reader.result);
            };
            // Convert data to base64 
            reader.readAsDataURL(file);
        });
    };

    handleOnSubChange = async (e) => {
        debugger
        let files = e.target.files
        if (files?.length > 0)
        {
            for (let element of files) {
                debugger
                FileModel.FileName = element.name;
                FileModel.Content = await this.fileToBase64(element);
                let tempFile = { ...FileModel }
                listFile.push(tempFile);
            }

        }
        
        document.getElementById(this.name).value = JSON.stringify(listFile);
    }

    render() {
        debugger
        const name = this.name;
        const value = JSON.parse(decodeURI(this.value));
        if (value) {
            value.forEach(element => {
                FileModel.FileName = element.FileName;
                FileModel.Content = element.Content;
                //PrevSelectedFile = PrevSelectedFile + ", " + element.FileName;
            });

            PrevSelectedFile = value.map(v => v.FileName).join(", ");
        }

        return (h("host", null,
            h("label", { htmlFor: name }, this.label),
            h("input", { id: name, name: name, type: "hidden", class: "form-control" }),
            h("input", { id: "frmFile", name: "frmFile", type: "file", class: "form-control", multiple: true, onchange: e => this.handleOnSubChange(e) }),
            
                h("small", { class: "form-text text-muted" }, this.hint),
                h("small", { class: "form-text text-muted" }, "Previously Selected Files: " + PrevSelectedFile )
            

        ));
    }
    static get style() { return ""; }
}

let PrevSelectedFile = "";
const FileModel = { FileName: "", Content: "" };
const listFile = [];

export { FileField as wf_file_field };

