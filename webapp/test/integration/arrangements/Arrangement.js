sap.ui.define([
	"sap/ui/test/Opa5"
], function(Opa5) {
	"use strict";

	function getFrameUrl (sHash, sUrlParameters) {
		var sUrl = jQuery.sap.getResourcePath("com/sap/ward/test_master_detial/test/flpSandboxMockServer.html");
		sHash = sHash || "";
		sUrlParameters = sUrlParameters ? "?" + sUrlParameters : "";

		if (sHash) {
			sHash = "#test_master_detial-display&/" + (sHash.indexOf("/") === 0 ? sHash.substring(1) : sHash);
		} else {
			sHash = "#test_master_detial-display";
		}

			return sUrl + sUrlParameters + sHash;
	}

	return Opa5.extend("com.sap.ward.test_master_detial.test.integration.arrangements.Arrangement", {

		iStartTheApp : function (oOptions) {
			oOptions = oOptions || {};
			// Start the app with a minimal delay to make tests run fast but still async to discover basic timing issues
			this.iStartMyAppInAFrame(getFrameUrl(oOptions.hash, "serverDelay=50"));
		},

		iStartTheAppWithDelay : function (sHash, iDelay) {
			this.iStartMyAppInAFrame(getFrameUrl(sHash, "serverDelay=" + iDelay));
		},

		iStartMyAppOnADesktopToTestErrorHandler : function (sParam) {
			this.iStartMyAppInAFrame(getFrameUrl("", sParam));
		}
	});
});
