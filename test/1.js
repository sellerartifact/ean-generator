const Ean = require("../dist/ean-generator.umd.js")
let ean = new Ean((['030']))


console.log(ean.createMultiple({ size: 3}))