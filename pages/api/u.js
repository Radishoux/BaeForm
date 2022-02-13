import axios from "axios";

export default async function handler(req, res) {

    if (req.method === "PUT") {
        const respp = await axios.put('https://ovfdgc9m1k.execute-api.eu-west-3.amazonaws.com/items', req.body)
        res.status(200).json(respp.data)
    } else if (req.method === "POST") {
        const respp = await axios.post('https://ovfdgc9m1k.execute-api.eu-west-3.amazonaws.com/items', req.body)
        res.status(200).json(respp.data)
    } else {
        res.status(200).json("wrong method");
    }
    // console.log(req.body)
    // console.log(req.headers)
}