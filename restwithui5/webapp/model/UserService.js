sap.ui.define([], function () {
  "use strict";
  return {
    readUsers: function () {
      jQuery.get({
        url: this._baseURL + "/users",
        headers: {
          Authorization: "Bearer " + this._accessToken,
        },
        success: function (aUsers) {
          var oModel = this.getDataModel(),
            oData = {};
          aUsers.map(function (oUser) {
            oData[oUser.id] = oUser;
            oData[oUser.id]["isSaved"] = true;
          });
          oModel.setProperty("/users", oData);
        }.bind(this),
      });
    },
    readSingleUser: function (sUserId) {
      jQuery.get({
        url: this._baseURL + "/users/" + sUserId,
        headers: {
          Authorization: "Bearer " + this._accessToken,
        },
        success: function (oUser) {
          var oModel = this.getDataModel(),
            oData = oModel.getData();
          oData[oUser.id] = oUser;
          oData[oUser.id]["isSaved"] = true;
          oModel.setProperty("/users", oData);
        }.bind(this),
      });
    },
    deleteUser: function (sUserId) {},
    updateUser: function (oUser) {},
    createUser: function (oData) {},
  };
});
