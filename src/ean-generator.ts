interface createProps {
  countryCode?:string | number
  vendorEan?:string|number
  size?:number
}

export default class EanGenerator {
  private countryCodeArr: string[] = []

  constructor(countryCodeArr: string[]) {
    this.setCountryCode(countryCodeArr)
  }
  public create(prop:createProps = {size: 1}): string{
    return this._create(prop)
  }
  public createMultiple(prop:createProps = {size: 1}): string[] {
    let {size} = prop
    let arr:string [] = new Array(size)
    if(!size || Number(size) <= 0 || isNaN(Number(size))){
      size = 1
    }
    for(let i=0; i< size; i++){
      arr[i]=this._create(prop)
    }
    return arr
  }

  private _create(prop: createProps){
    let {countryCode, vendorEan} = prop
    if (this.countryCodeArr.length === 0) {
      throw new RangeError('please set countryCode before call create!')
    }
    if(countryCode && countryCode.toString().length != 3){
      throw new RangeError('the length of countryCode must be 6')
    }
    if(vendorEan && vendorEan.toString().length!=6){
      throw new RangeError('the length of vendorEan must be 6')
    }
    if(!countryCode){
      countryCode = this.pickCountryCode()
    }
    if(!vendorEan){
      vendorEan = this.fillNumber(6, Math.floor(Math.random() * 100000))
    }
    let eanCode = countryCode.toString()
      + vendorEan.toString()
      + this.fillNumber(3, Math.floor(Math.random() * 999))
    let lastestNum  = this.computedEanLastNum(eanCode)
    return eanCode+lastestNum
  }

  public isValid(num: string): boolean {
    if (num.length != 13) {
      return false
    }
    let computedLastNum = this.computedEanLastNum(num)
    let lastNum = num.toString().charAt(12)
    return lastNum === computedLastNum
  }

  public setCountryCode(countryCodeArr: string[]){
    if(countryCodeArr.length === 0){
       throw new RangeError('the length of countryCodeArr must be >=1')
    }
    for(let i=0; i< countryCodeArr.length; i++){
      if(countryCodeArr[i].length != 3){
        throw new Error(`the length of ${countryCodeArr[i]} must be 3`)
      }
    }
    this.countryCodeArr = countryCodeArr
  }

  private computedEanLastNum(num: string): string {
    let subNum = num.substr(0, 12)
    let odd = 0
    let even = 0
    let bOdd = true
    for (let i = 0; i < subNum.length; i++) {
      if (bOdd) {
        odd += Number(subNum[i]);
      } else {
        even += Number(subNum[i]);
      }
      bOdd = !bOdd
    }
    let sum: string | number = odd + even * 3;
    sum = sum.toString();
    let lastestNum = (10 - Number(sum[sum.length - 1])) % 10;
    return lastestNum.toString()
  }

  private pickCountryCode(): string {
    let randomNum: number = Math.floor(Math.random() * this.countryCodeArr.length)
    return this.countryCodeArr[randomNum]
  }

  private fillNumber(len: number, num: number): string {
    num = Math.floor(Number(num));
    let sub = num.toString().length;
    let randomNum = Math.floor(Math.random() * 10).toString()
    let fillStr = new Array(Math.abs(len - sub)).fill(randomNum).join("")
    return fillStr.toString() + num.toString()
  }


}
