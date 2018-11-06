function fpb (a=2,b=3) {
    return (b == 0 ) ? (a):(fpb(b, a % b))
}
function kpk(a=2,b=3) { 
    return ( a / fpb(a,b) ) * b; 
}

// a()
// var x = kpk(a)
// var y = fpb()
// console.log(fpb())
// console.log(kpk())
// console.log('FPB ' + a '\&' + b + '\=')
// console.log('KPK ' + a '\&' + b + '\=')
// console.log(fpb(100,22))
// console.log(kpk(100,22))
console.log(fpb(25,12))
console.log(kpk(25,12))
