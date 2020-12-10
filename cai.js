let ar = [
  { title: '1234', },
  { title: '5678', },
  {
    title: '9012',
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

function fun(ar) {
  let str = ''
  ar.forEach((item, index) => {
    if(Object.prototype.toString.call(item.child).includes('Array')){
      fun(item.child)
    }else{
      str += (item.title || item.title2)
    }
  })
  return str
}
let cr = fun(ar)
console.log(cr)