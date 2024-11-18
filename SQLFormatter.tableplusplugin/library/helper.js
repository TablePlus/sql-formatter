'use strict';

import { format as oldFormat } from "./../formatter/sqlFormatter";

var formatSQL = function(string, language) {
    try {
        var formatterStatement = oldFormat(string, {language: language});
        return formatterStatement;
    } catch {}
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

