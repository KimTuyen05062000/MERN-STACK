class ApiFeatures {
  constructor(query, queryStr){
    this.query = query;
    this.queryStr = queryStr;
  }
  search(){
    const keyword = this.queryStr.keyword 
    ? {
      name:{
        $regex: this.queryStr.keyword,
        $options: "i",
      },
    }
    : {};
    this.query = this.query.find({...keyword });
    return this;
  }
  filter(){
    const queryCopy = {...this.queryStr}

    // emoving some fields for category
    const removeFields = ["keyword","page", "limit"];

    removeFields.forEach(key => delete removeFields[key])
  }
}

module.exports = ApiFeatures;