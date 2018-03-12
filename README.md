# 集成localMock的vue-template

集成了 [localMock](https://github.com/sumnow/localMock) 功能的 `vue-cli` ，

    npm install

    cd vue-templates & npm run dev

打开 `localhost:8080` 查看效果，点击文字发起Mock请求，主要关注请求为services目录下，

    // index.js
    // 请求的配置
    const obj = {
        apiIn: id => {return {url: `/wechat/${id}`, method: 'post'}},
        apiIn2: {url: '/wechat/asd', method:'post'},
        apiIn3: {url: '/wechat/es', method:'post'},
        apiNot: {url: '/wechat/config', method:'post'},
    }

    export default filterAPIinTest(obj)

属性值可以为函数或者对象，同 `$.ajax` 的参数方式，包括 `url` , `method` 等，如果配置项为可变属性，则输入函数即可。

    // testAPI.js
    export {
        "apiIn": `$m.obj({name: cstr(2,3)})`
    }

testAPI里配置每个接口的mock返回值，按照 `locaMock` 的语法，只有再testAPI里的接口才会被Mock，其他的接口都不会，可以渐进式地替换Mock数据。
    








