class Apifeatures {
  constructor(query, queryStr){
    this.query = query;
    this.queryStr = queryStr;
  }
  search(){
    const keywords = this.queryStr.keyword;
  }
}

module.exports = Apifeatures;