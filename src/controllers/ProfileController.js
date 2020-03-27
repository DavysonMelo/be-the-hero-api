const connection = require('../database/connection');

module.exports= {
    async index(req, res) {
        const ngo_ig = req.headers.authorization;

        const incidents = await connection('incidents')
            .where('ngo_id', ngo_ig)
            .select('*');

        return res.json(incidents);
    }
}