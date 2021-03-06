const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async create( req, res ) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString('HEX').toUpperCase();

    await connection('ong').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  },

  async index( req, res ) {
    const ongs = await connection('ong').select('*');

    return res.json( ongs );
  },
};
