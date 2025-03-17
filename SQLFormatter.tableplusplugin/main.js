'use strict';

import { formatSQL, languageFromDriver } from './library/helper';

var onRun = function(context) {
    // Get table in opening tab
    var queryEditor = context.currentQueryEditor();
    if (queryEditor == null) {
        context.alert('Error', 'No SQL Editor');
        return;
    }
    var driver = context.driver();
    var language = languageFromDriver(driver);
    var range = queryEditor.currentSelectedRange();
    var statement = queryEditor.currentSelectedString();
    var formattedStatement = formatSQL(context, statement, language);
    queryEditor.replaceStringInRange(formattedStatement, range);
};

global.onRun = onRun;