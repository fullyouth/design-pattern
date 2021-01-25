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

export {
  Light,
  TV
}