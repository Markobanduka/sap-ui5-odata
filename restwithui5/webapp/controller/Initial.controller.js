sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("restwithui5.controller.Initial", {
        onInit() {
            var DataRepository = this.getOwnerComponent().DataRepository;
            DataRepository.readUsers();
        },
        navigateToDetails: function (oEvt){
            var oSource = oEvt.getSource(),
                oRouter = this.getOwnerComponent().getRouter(),
                oContext = oSource.getBindingContext(),
                sId = oContext.getProperty("id");
                oRouter.navTo("Details", {user_id: sId});
        },
        createNew: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Create");
        }
    });
});