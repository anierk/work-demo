// 引入mockjs
const Mock = require('mockjs');
// 设置ip
const base = 'http://localhost:8080';
// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组可知数据量为10条的数据
const produceNewsData = function () {
  let articles = [];
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnailPicS: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      authorName: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };
    articles.push(newArticleObject);
  }

  return {
    articles: articles
  };
};
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(base + '/mock/index', 'post', produceNewsData);

// test
let obj = { 'aa': '11', 'bb': '22', 'cc': '33', 'dd': '44' };
Mock.mock(base + '/mock/test', 'get', function () {
  return Mock.mock({
    'code': 'OK',
    'msg': '操作成功',
    'result': {
      'user|1-3': [{ // 随机生成1到3个数组元素
        'name': '@cname', // 中文名称
        'id|+1': 88, // 属性值自动加 1，初始值为88
        'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
        'birthday': '@date("yyyy-MM-dd")', // 日期
        'city': '@city(true)', // 中国城市
        'color': '@color', // 16进制颜色
        'isMale|1': true, // 布尔值
        'isFat|1-2': true, // true的概率是1/3
        'fromObj|2': obj, // 从obj对象中随机获取2个属性
        'fromObj2|1-3': obj, // 从obj对象中随机获取1至3个属性
        'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
        'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
        'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
      }]
    }
  }
  );
});
// 如何定义数据

// 数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：
//
// 属性名   name
// 生成规则 rule
// 属性值   value
// 'name|rule': value
// 1.'name|min-max': string   通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max
// 例子：'lastName|2-5':'jiang', 重复jiang这个字符串 2-5 次
//
// 2.'name|count': string   通过重复 string 生成一个字符串，重复次数等于 count
// 例子：'firstName|3':'fei', 重复fei这个字符串 3 次，打印出来就是'feifeifei'。
//
// 3.'name|min-max': number   生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。
// 例子：'age|20-30':25, 生成一个大于等于 20、小于等于 30 的整数，属性值 25 只是用来确定类型
//
// 4.'name|+1': number   属性值自动加 1，初始值为 number
// 例子：'big|+1':0, 属性值自动加 1，初始值为 0，以后每次请求在前面的基础上+1
//
// 5.'name|min-max.dmin-dmax': number   生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位。
// 例子：'weight|100-120.2-5':110.24, 生成一个浮点数,整数部分大于等于 100、小于等于 120，小数部分保留 2 到 5 位
//
// 6.'name|1': boolean   随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2
// 例子：'likeMovie|1':Boolean, 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
//
// 7.属性值是对象：var obj={'host':'www.baidu','port':'12345','node':'selector'}
//
// 7-1.'name|count': object  从属性值 object 中随机选取 count 个属性。
// 例子：'life1|2':obj, 从属性值 obj 中随机选取 2 个属性
//
// 7-2.'name|min-max': object  从属性值 object 中随机选取 min 到 max 个属性
// 例子：'life1|1-2':obj, 从属性值 obj 中随机选取 1 到 2 个属性。
//
// 8.属性值是数组：var arr=['momo','yanzi','ziwei']
//
// 8-1.'name|1': array   从属性值 array 中随机选取 1 个元素，作为最终值
// 例子：'friend1|1':arr, 从数组 arr 中随机选取 1 个元素，作为最终值。
//
// 8-2.'name|+1': array   从属性值 array 中顺序选取 1 个元素，作为最终值。
// 例子：'friend2|+1':arr, 从属性值 arr 中顺序选取 1 个元素，作为最终值，第一次就是'momo',第二次请求就是'yanzi'
//
// 8-3.'name|count': array   通过重复属性值 array 生成一个新数组，重复次数为 count。
// 例子：'friend3|2':arr, 重复arr这个数字2次作为这个属性值，得到数据应该是['momo','yanzi','ziwei','momo','yanzi','ziwei']
//
// 8-4.'name|min-max': array   通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max
// 例子：'friend3|2-3':arr,//通过重复属性值 arr 生成一个新数组，重复次数大于等于 2，小于等于 3

/* 模拟删除数据的方式*/
// var arr=[
//   {name:'fei',age:20,id:1},
//   {name:'liang',age:30,id:2},
//   {name:'jun',age:40,id:3},
//   {name:'ming',age:50,id:4}
// ]
//
// Mock.mock(base + '/aaa/bbb','delete',function(options){
//   var id = parseInt(options.body.split("=")[1])//获取删除的id
//   var index;
//   for(var i in arr){
//     if(arr[i].id===id){//在数组arr里找到这个id
//       index=i
//       break;
//     }
//   }
//   arr.splice(index,1)//把这个id对应的对象从数组里删除
//   return arr;//返回这个数组,也就是返回处理后的假数据
// })
// mockjs api的调用方式与正常请求方式一致，在realapi开发完成后，替换baseurl即可
// requestMockTest().then(data =>{
//   let{ code, msg, result } = data;
//   if(code =='OK'){
//     console.log(data,'mock');
//   }else{
//     alert('还有问题')
//   }
// })
