const db = require("../db");

module.exports.handler = async (context, req) => {
    await db.client.connect();
    const result = await db.client.query(`SELECT * FROM public.users
    ORDER BY id ASC`);
    await db.client.clean();

    context.res = {
        status: 200,
        body: JSON.stringify(result.rows[0])
    };

    context.log("Database Handler hit " + JSON.stringify({message: result.rows[0]}));
};