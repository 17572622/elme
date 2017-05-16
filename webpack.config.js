var path = require('path');

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'build.js',
        publicPath:'/dist'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader'
            },
            {
                test:/.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }

}