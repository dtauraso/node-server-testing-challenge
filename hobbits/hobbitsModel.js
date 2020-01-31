const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  return db('hobbits').insert(hobbit);
  // return null;
}

async function update(id, changes) {
  return db('hobbits')
    .where('id', id)
    .update(changes)
  // return null;
}

function remove(id) {
  return db('hobbits')
    .where('id', '=', id)
    .del()
  // return null;
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return db('hobbits')
    .where('id', id)
  // return null;
}
