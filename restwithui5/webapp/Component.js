sap.ui.define([
    "sap/ui/core/UIComponent",
    "restwithui5/model/models",
    "restwithui5/model/DataRepository"
], (UIComponent, models, DataRepository) => {
    "use strict";

    return UIComponent.extend("restwithui5.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
            this.DataRepository = new DataRepository(this);
            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();


        }
    });
});