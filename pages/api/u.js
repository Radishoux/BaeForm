export default function handler(req, res) {
    res.status(200).json(req.body)
        // res.status(200).json(req.query)
}