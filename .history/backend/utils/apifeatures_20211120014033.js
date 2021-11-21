class Apifeatures {
  constructor(query, queryStr){
    this.query = query;
    this.queryStr = queryStr;
  }
  search(){
    const keywords = this.queryStr.keyword ? {
      name:{
        $regex: this.queryStr.keyword,
        $options: "i",
      },
    }:{};
    this.query = this.queryStr.find({...keyword});
    return this;
  }
}

module.exports = Apifeatures;