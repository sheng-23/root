let ar = [
  { title: '123', },
  { title: '456', },
  {
    title: '789',
    child: [
      {
        title2: 'zxc',
      },
      {
        title2: 'asd',
      },
      {
        title2: 'qwe',
      },
    ]
  }
]

function fun(ar, br) {
  return ar.map((item, index) => {
    if(Object.prototype.toString.call(item.child).includes('Array')){
      return fun(item.child, item.title)
    }else{
      return item.title ? item.title: br + '-' + item.title2
    }
  })
}
let cr = fun(ar)
console.log(cr.flat(Infinity))