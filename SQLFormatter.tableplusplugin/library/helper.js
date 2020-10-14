'use strict';

import sqlFormatter from "sql-formatter-plus";

var formatSQL = function(string) {
	var formatterStatement = sqlFormatter.format(string);
    return formatterStatement;
}

export { formatSQL };