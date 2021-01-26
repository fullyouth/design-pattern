class Light{
  on() {
    console.log('灯泡打开')
  }
  off() {
    console.log('灯泡关闭')
  }
}

class TV {
  on() {
    console.log('电视打开')
  }
  off() {
    console.log('电视关闭')
  }
}

class CeilingFan {
  static HIGH = 3
  static MEDIUM = 2
  static LOW = 1
  speed: number
  setHigh = () => {
    this.speed = CeilingFan.HIGH
    console.log(`风扇速度：${this.speed}`)
  }
  setMedium = () => {
    this.speed = CeilingFan.MEDIUM
    console.log(`风扇速度：${this.speed}`)
  }
  setLow = () => {
    this.speed = CeilingFan.LOW
    console.log(`风扇速度：${this.speed}`)
  }
  off() {
    this.speed = 0
    console.log('关闭吊扇')
  }
  getSpeed = () => {
    return this.speed
  }
}

export {
  Light,
  TV,
  CeilingFan
}