'use strict';

import { formatSQL, languageFromDriver } from './library/helper';

var onRun = function(context) {
    // Get table in opening tab
    var queryEditor = context.preferredEditor();
    if (queryEditor == null) {
        context.alert('Error', 'No SQL Editor');
        return;
    }
    var driver = context.driver();
    var language = languageFromDriver(driver);
    var range = queryEditor.currentSelectedRange();
    var statement = queryEditor.currentSelectedString();
    var tabWidth = context.formatTabWidth();
    var useTabs = context.formatUseTabs();
    var keywordCase = context.formatAutoUppercase() ? "upper" : "lower";
    var formattedStatement = formatSQL(context, statement, language, tabWidth, useTabs, keywordCase);
    if (formattedStatement !== null) {
        queryEditor.replaceStringInRange(formattedStatement, range);
    }
};

global.onRun = onRun;
