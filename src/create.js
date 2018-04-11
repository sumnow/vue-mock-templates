
const fs = require('fs-extra')
const chalk = require('chalk')

const error = chalk.rgb(195,0,223)
const normal = chalk.rgb(149,253,71)

exports.run = function (pname) {

    var dir = './' + pname
    
    fs.pathExists(dir, (err, exists) => {
        if (exists) {
            console.log(error('this folder which named'+ pname +' has been created'))
        } else {
            fs.copy('/usr/local/lib/node_modules/vue-mock-templates/src/template', dir, err => {
                if (err) return console.log(error(err))
                
                console.log(normal(dir + '  has created'))
                console.log()
                console.log(normal('# Project initialization finished!'))
                console.log(normal('# ========================'))
                console.log()
                console.log(normal('To get started:'))
                console.log(normal('   cd ' + pname))
                console.log(normal('   npm install (or if using yarn: yarn)'))
                console.log(normal('   npm run dev (or if using yarn: yarn dev)'))
                console.log()
                console.log(normal('default port :8088'))
                console.log()
                console.log(normal('Documentation can be found at https://github.com/sumnow/vue-mock-templates'))
            })
        }
    });
};




