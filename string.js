const { client } = require("./client");

const __init = async() => {
    await client.set("message:5", "Hwo Are You biru..?");
    const res = await client.get("message:5");
    console.log(res);

}
__init();