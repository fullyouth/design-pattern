/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/command-pattern/index.js ***!
  \**************************************/
/**
 * 需求
 * 一个遥控控制灯泡，电视
 */
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

// 遥控器 
class remoteControl {

}
/******/ })()
;
//# sourceMappingURL=bundle.js.map