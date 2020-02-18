const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// find the total of the double of even numbers
// imperative code
var imprtv = function (list) {
  var total = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      total += list[i] * 2
    }
  }

  return total
}
console.log(imprtv(list))
// declarative code
var declrtv = function (list) {
  return list.filter(function (e) { return e % 2 === 0 })
    .map(function (e) { return e * 2 })
    .reduce(function (total, e) { return total + e })
}
console.log(declrtv(list))
// concise code
var concise = (list) => {
  return list.filter((e) => e % 2 === 0)
    .map((e) => e * 2)
    .reduce((total, e) => total + e)
}
console.log(concise(list))
