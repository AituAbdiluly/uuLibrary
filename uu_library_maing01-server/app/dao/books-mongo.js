"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class BooksMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
    //await super.createIndex({awid: 1, visibility: 1});
  }

  async create(book) {
    return await super.insertOne(book);
  }

  async list(awid, book) {
    return await super.find({
      awid,
      $or: [{ title: book.title }, { author: book.author }, {}]
    });
  }

  async getBook(awid, book) {
    return await super.findOne({ awid, id: book.id });
  }

  async update(awid, book) {
    console.log(awid, book);

    return await super.findOneAndUpdate({ awid, id: book.id }, book, "NONE");
  }

  async delete(awid, book) {
    let deletedBook = await super.findOne({ awid, id: book.id });
    await super.deleteOne({ awid, id: book.id });
    return deletedBook;
  }
}

module.exports = BooksMongo;