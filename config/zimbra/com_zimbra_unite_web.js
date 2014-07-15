/*
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Zimlets
 * Copyright (C) 2005, 2006, 2007, 2008, 2009, 2010 Zimbra, Inc.
 *
 * The contents of this file are subject to the Zimbra Public License
 * Version 1.3 ("License"); you may not use this file except in
 * compliance with the License.  You may obtain a copy of the License at
 * http://www.zimbra.com/license.
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied.
 * ***** END LICENSE BLOCK *****
 */


com_zimbra_unite_web_HandlerObject = function() {
};
com_zimbra_unite_web_HandlerObject.prototype = new ZmZimletBase;
com_zimbra_unite_web_HandlerObject.prototype.constructor = com_zimbra_unite_web_HandlerObject;

/**
 * This method gets called by the Zimlet framework when the zimlet loads.
 *
 */
com_zimbra_unite_web_HandlerObject.prototype.init =
function() {

	this._simpleAppName = this.createApp("Unite Web", "zimbraIcon", "eZuce Unite Web");

};
/**
 * This method gets called by the Zimlet framework each time the application is opened or closed.
 *
 * @param	{String}	appName		the application name
 * @param	{Boolean}	active		if true, the application status is open; otherwise, false
 */

com_zimbra_unite_web_HandlerObject.prototype.appActive =
function(appName, active) {

	switch (appName) {
		case this._simpleAppName: {

			var app = appCtxt.getApp(appName); // get access to ZmZimletApp

			break;
		}
	}

	// do something
};
/**
 * This method gets called by the Zimlet framework when the application is opened for the first time.
 *
 * @param	{String}	appName		the application name
 */
com_zimbra_unite_web_HandlerObject.prototype.appLaunch =
function(appName) {

	switch (appName) {
		case this._simpleAppName: {
			// do something

			var app = appCtxt.getApp(appName); // get access to ZmZimletApp

			var content = this._createTabView();

			app.setContent(content); // write HTML to app

			break;
		}
	}
};
/**
 * Creates the tab view using the template.
 *
 * @return	{String}	the tab HTML content
 */
com_zimbra_unite_web_HandlerObject.prototype._createTabView =
function() {

  var unitexmppbind     = appCtxt.getZimletMgr().getZimletByName('com_zimbra_unite_config').getConfig("unitexmppbind");
  var unitexmppdomain   = appCtxt.getZimletMgr().getZimletByName('com_zimbra_unite_config').getConfig("unitexmppdomain");
  var uniterestbase     = appCtxt.getZimletMgr().getZimletByName('com_zimbra_unite_config').getConfig("uniterestbase");

  var UniteUsername     = appCtxt.getZimletMgr().getZimletByName('com_zimbra_unite_config').getPropValue("UniteUsername");
  var UnitePassword     = appCtxt.getZimletMgr().getZimletByName('com_zimbra_unite_config').getPropValue("UnitePassword");


	var aa = "<iframe id=\"tabiframe-app\" name=\"tabiframe-app\" src=\"https://mail.zimbra.ezuce.com/service/zimlet/com_zimbra_unite_web/#/login?unitexmppbind=" + unitexmppbind+
	 "&unitexmppdomain=" +unitexmppdomain+
	 "&uniterestbase=" +uniterestbase+
	 "&uniteusername=" +UniteUsername+
	 "&unitepassword=" +UnitePassword+
	 "\" width=\"100%\" height=\"100%\" style=\"border:none\" /></iframe>";
	return aa;
};

