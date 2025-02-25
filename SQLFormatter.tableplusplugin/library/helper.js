'use strict';

import { format } from "sql-formatter";

var formatSQL = function(context, string, language, tabWidth, useTabs, keywordCase) {
    try {
	    var formatterStatement = format(string, {language: language, tabWidth: tabWidth, useTabs: useTabs, keywordCase: keywordCase, expressionWidth: 200});
        return formatterStatement;
    }  catch (error) {
        context.fallBackOldJSFormat();
        return null;
    }
}

var languageFromDriver = function(driver) {
    if (driver === undefined || driver === null) {
        return "postgresql";
    }
    switch (driver.toLowerCase()) {
        case "bigquery":
            return "bigquery";
        case "mysql":
            return "mysql";
        case "mariadb":
            return "mariadb";
        case "duckdb":
        case "sqlite":
        case "libsql":
        case "cloudflared1":
            return "sqlite";
        case "redshift":
            return "redshift";
        case "snowflake":
            return "snowflake";
        case "microsoftsqlserver":
            return "transactsql";
        case "oracle":
            return "plsql"
        default:
            /** Fallback to default */
            return "postgresql";
    }
}

export { formatSQL, languageFromDriver };
