import EanGenerator from '../src/ean-generator'

let ean = new EanGenerator(['030', '031', '039'])

describe('create multiple', () => {
  it('return ean code is not empty', () => {
    let arr = ean.createMultiple({ size: 10 })
    console.log(arr)
    expect(arr).toBeTruthy()
    expect(arr.length).toBe(10)
    for (let i = 0; i < arr.length; i++) {
      expect(arr[i].length).toBe(13)
    }
  })
  it('test size params', ()=>{
    let arr = ean.createMultiple({size: 0})
    expect(arr.length).toBe(1)
  })
})

describe('create test', () => {
  it('return ean code is not empty', () => {
    expect(ean.create()).toBeTruthy()
  })

  it('return ean len is 13', () => {
    let code = ean.create()
    expect(code.length).toBe(13)
  })

  it('test ean isValid method', () => {
    let code = ean.create()
    let res = ean.isValid(code)
    expect(res).toBe(true)
    expect(ean.isValid('123')).toBe(false)
  })

  it('input countryCode', () => {
    let code = ean.create({ countryCode: '123', vendorEan: '456789' })
    expect(code.slice(0, 3)).toBe('123')
    expect(code.length).toBe(13)
  })

  it('check countryCode boundary error', () => {
    expect(() => ean.create({ countryCode: '1' })).toThrow(RangeError)
  })

  it('check vendorEan boundary error', () => {
    expect(() => ean.create({ vendorEan: '132' })).toThrow(RangeError)
  })
  it('check vendorEan boundary error', () => {
    expect(() => {
      new EanGenerator([]).create()
    }).toThrow(RangeError)

    expect(() => {
      new EanGenerator(['12']).create()
    }).toThrow(Error)
  })
})
