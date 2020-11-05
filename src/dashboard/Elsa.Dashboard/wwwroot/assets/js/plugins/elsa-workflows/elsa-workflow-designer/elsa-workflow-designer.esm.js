import { p as patchBrowser, g as globals, b as bootstrapLazy } from './chunk-25ccd4a5.js';

patchBrowser().then(options => {
  globals();
    return bootstrapLazy([
        ["wf-boolean-field", [[0, "wf-boolean-field", { "name": [513], "label": [513], "checked": [516], "hint": [513] }]]],
        ["wf-export-button", [[0, "wf-export-button", { "designerHostId": [1, "workflow-designer-host"], "workflowFormats": [16] }]]],
        ["wf-expression-field", [[0, "wf-expression-field", { "name": [513], "label": [513], "hint": [513], "value": [513], "multiline": [516], "syntax": [1537] }]]],
        ["wf-list-field", [[0, "wf-list-field", { "name": [1], "label": [1], "items": [1], "hint": [1] }]]],
        ["wf-select-field", [[0, "wf-select-field", { "name": [1], "label": [1], "value": [1], "hint": [1], "items": [1040] }]]],

        ["wf-selectdynamic-field", [[0, "wf-selectdynamic-field", { "name": [1], "label": [1], "value": [1], "hint": [1], "items": [1040] }]]],

        ["wf-filtercriteria-field", [[0, "wf-filtercriteria-field", { "name": [1], "label": [1], "value": [1], "hint": [1], "items": [1040] }]]],

        ["wf-selectmessaging-field", [[0, "wf-selectmessaging-field", { "name": [1], "label": [1], "value": [1], "hint": [1], "items": [1040] }]]],

        ["wf-repeat-field", [[0, "wf-repeat-field", { "name": [1], "label": [1], "value": [1], "hint": [1], "items": [1040] }]]],


        ["wf-radio-field", [[0, "wf-radio-field", { "name": [513], "label": [513], "value": [513], "hint": [513] }]]],

        ["wf-datetime-field", [[0, "wf-datetime-field", { "name": [513], "label": [513], "value": [513], "hint": [513] }]]],

        ["wf-trigger-field", [[0, "wf-trigger-field", { "name": [513], "label": [513], "value": [513], "hint": [513] }]]],

        ["wf-file-field", [[0, "wf-file-field", { "name": [513], "label": [513], "value": [513], "hint": [513] }]]],

        ["wf-text-field", [[0, "wf-text-field", { "name": [513], "label": [513], "value": [513], "hint": [513] }]]],
        ["wf-designer", [[0, "wf-designer", { "canvasHeight": [513, "canvas-height"], "activityDefinitions": [16], "readonly": [516], "workflow": [1040], "newWorkflow": [64], "getWorkflow": [64], "addActivity": [64], "updateActivity": [64] }]]],
        ["wf-activity-editor", [[0, "wf-activity-editor", { "activityDefinitions": [16], "activity": [16], "show": [1028] }]]],
        ["wf-activity-picker", [[0, "wf-activity-picker", { "activityDefinitions": [16], "isVisible": [32], "filterText": [32], "selectedCategory": [32], "show": [64], "hide": [64] }]]],
        ["wf-import-export", [[0, "wf-import-export", { "export": [64], "import": [64] }]]],
        ["wf-context-menu", [[4, "wf-context-menu", { "target": [16], "targetSelector": [513, "target"], "isHidden": [32], "position": [32], "handleContextMenuEvent": [64] }, [[32, "click", "handleBodyClick"], [32, "context-menu", "handleContextMenu"]]]]],
        ["wf-context-menu-item", [[0, "wf-context-menu-item", { "text": [520] }]]],
        ["wf-activity-renderer", [[0, "wf-activity-renderer", { "activityDefinition": [16], "activity": [16], "displayMode": [1, "display-mode"], "updateEditor": [64] }]]],
        ["wf-designer-host", [[0, "wf-designer-host", { "workflow": [16], "canvasHeight": [513, "canvas-height"], "activityDefinitionsData": [1, "data-activity-definitions"], "workflowData": [1, "data-workflow"], "readonly": [4], "pluginsData": [1, "plugins"], "activityDefinitions": [32], "newWorkflow": [64], "getWorkflow": [64], "showActivityPicker": [64], "export": [64], "import": [64] }, [[0, "activity-picked", "onActivityPicked"], [0, "edit-activity", "onEditActivity"], [0, "add-activity", "onAddActivity"], [0, "update-activity", "onUpdateActivity"], [0, "export-workflow", "onExportWorkflow"], [0, "import-workflow", "onImportWorkflow"]]]]]
    ], options);
});
