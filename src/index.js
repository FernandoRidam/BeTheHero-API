const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar/listar uma informação do back-end.
 * POST: Criar uma informação do back-end.
 * PUT: Alterar uma informação do back-end.
 * DELETE: Deletar uma informação do back-end.
 */

/**
 * Tipos de parâmetros:
 *
 * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação).
 * Route: Parâmetros utilizados para identificar recursos.
 * Request Body:
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */

app.use(routes);

app.listen(3333);
