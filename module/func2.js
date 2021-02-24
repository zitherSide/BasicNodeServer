let Hoge = function(){}

Hoge.prototype.add = function(val1, val2){
    return val1 + val2
}

Hoge.prototype.sub = function(val1, val2){
    return val1 - val2
}

let hoge = new Hoge()

module.exports = hoge   
//exports.hoge = Hoge   //exportsにクラス(prototype)は入れられない？
//exports = module.exports = {} が最初から定義されている