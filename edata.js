const json = require('../../edata.json');

// const obj = JSON.parse(json);

// console.log(json);

const arr = [];

for(let item of json.resources){
  let obj = {};
  if(item.url){
    if(item.body.text) item.body.text = JSON.parse(item.body.text);
    obj._id = item._id,
    obj.url = item.url,
    obj.name = item.name,
    obj.method = item.method,
    obj.body = item.body,
    obj.parameters = item.parameters,
    obj.headers = item.headers,
    obj.authentication = item.authentication,

    arr.push(obj)
  }
};

console.log(arr);
