function test() {
  const a = 1
  const arr = [1, 2, 3]
  const obj = {
    name: 'lianglihao'
  }

  let b = 2

  let c = 3

  // for(let i = 0; i < arr.length; i += 1) {
  //   console.log(arr[i])
  // }
  // arr.forEach(item => {
  //   console.log(item)
  // })
  if(a === 1) {
    b = a
    c = arr[0]

    return b, c, obj
  }
}


test()
// 这里是注释
