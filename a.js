const micromatch = require('micromatch');
const fs = require('fs')

const pats = fs.readdirSync("./")

const a = async () => {
  const dsa = micromatch(pats, [""])
  console.log(dsa)
}
a()