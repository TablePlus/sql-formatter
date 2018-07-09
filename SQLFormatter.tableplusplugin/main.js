'use strict';

import { formatSQL } from './library/helper';

var onRun = function(context) {
    // Get table in opening tab
    var queryEditor = context.currentQueryEditor();
    if (queryEditor == null) {
        context.alert('Error', 'No SQL Editor');
        return;
    }
    var range = queryEditor.currentSelectedRange();
    var statement = queryEditor.currentSelectedString();
    var formattedStatement = formatSQL(statement);
    queryEditor.replaceStringInRange(formattedStatement, range);
};

global.onRun = onRun;