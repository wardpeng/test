sap.ui.define([
	"com/sap/ward/test_master_detial/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.sap.ward.test_master_detial.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);