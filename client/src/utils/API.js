import axios from "axios";

export default {
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
