const url = new url('https://github.com/thuram')
url.searchParams.set('tab','repositores')

console.log(url.toString())


Output: https://github.com/thuram?tab=repositories