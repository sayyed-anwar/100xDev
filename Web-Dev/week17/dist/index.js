"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgClient = new pg_1.Client("postgresql://100xdev_owner:npg_oUgPbM7Y0nGL@ep-damp-bush-a5geiqui-pooler.us-east-2.aws.neon.tech/100xdev?sslmode=require");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        console.log("connected to db");
        const res = yield pgClient.query("SELECT * FROM users");
        console.log(res.rows); // Output: rows from the query
    });
}
main();
