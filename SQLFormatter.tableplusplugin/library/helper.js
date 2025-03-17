'use strict';

import { format as oldFormat } from "sql-formatter";
import { format as newFormat } from "./../formatter/sqlFormatter";

var formatSQL = function(context, string, language) {
    var error = null;
    try {
        var formatterStatement = newFormat(string, {language: language});
        return formatterStatement;
    } catch (ex) {
        error = ex.toString();
    }
    try {
        var result = oldFormat(string);
        return result;
    } catch (ex) {
        error = ex.toString();
    }
    if (error !== null) {
        context.alert("Error", error);
    }
    return string;
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

