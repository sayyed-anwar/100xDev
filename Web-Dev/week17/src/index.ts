import { Client } from "pg";

const pgClient = new Client(
  "postgresql://100xdev_owner:npg_oUgPbM7Y0nGL@ep-damp-bush-a5geiqui-pooler.us-east-2.aws.neon.tech/100xdev?sslmode=require"
);

async function main() {
  await pgClient.connect();
}
main();
