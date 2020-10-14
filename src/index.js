module.exports = function check (str, bracketsConfig) {
  let prevStr = str
  bracketsConfig = bracketsConfig.map(brackets => brackets[0] + brackets[1])
  let counter = 0

  do {
    bracketsConfig.forEach(pair => {
      const index = str.indexOf(pair)
      if ((str.indexOf(pair)) > -1) {
        counter = 0
        prevStr = str
        str = str.split('')
        str.splice(index, 2)
        str = str.join('')
      } else {
        if (prevStr === str) counter++
        prevStr = str
      }
    })
  } while ((counter < bracketsConfig.length) && (str.length !== 0))

  if (str.length !== 0) return false
  return true
}
