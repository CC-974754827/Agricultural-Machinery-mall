import Mock from 'mockjs'; 

let Random = Mock.Random;
let productData = function req(){
    //存放信息
    let productList = [];     
    for(let i=0; i < 20; i++){
        let product = {
            name: Random.ctitle(5,10),
            img: Random.dataImage('125x125','朱一龙'+Random.integer(1,100)),
            price: Random.integer(1000,10000),
            owner: Random.cname(),
        };
        productList.push(product);
    }
    return productList;
};

Mock.mock('http://www.long.com/getVarietyItem',productData);