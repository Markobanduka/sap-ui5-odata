sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("restwithui5.controller.Initial", {
        onInit() {
            var DataRepository = this.getOwnerComponent().DataRepository;
            DataRepository.readUsers();
        }
    });
});