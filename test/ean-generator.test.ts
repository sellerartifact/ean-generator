import EanGenerator from "../src/ean-generator"

let ean = new EanGenerator(['931', '983'])

/**
 * Dummy test
 */
describe("create test", () => {
  it("return ean code is not empty", () => {
    expect(ean.create()).toBeTruthy()
  })

  it("return ean len is 13", () => {
    let code = ean.create()
    expect(code.length).toBe(13)
  })

  it('test ean isValid method', ()=>{
    let code = ean.create()
    let res = ean.isValid(code)
    expect(res).toBe(true)
  })

  it('input countryCode', ()=>{
    let code = ean.create({countryCode: "123", vendorEan: "456789"})
    expect(code.slice(0, 3)).toBe('123')
    expect(code.length).toBe(13)
  })

  it('check countryCode boundary error', ()=>{
     expect(()=>ean.create({countryCode: "1"})).toThrow(RangeError)
  })

  it('check vendorEan boundary error', ()=>{
    expect(()=>ean.create({vendorEan: "132"})).toThrow(RangeError)
  })
  it('check vendorEan boundary error', ()=>{
    expect(()=>{
      new EanGenerator([]).create()
    }).toThrow(RangeError)

    expect(()=>{
      new EanGenerator(['12']).create()
    }).toThrow(Error)
  })
})



