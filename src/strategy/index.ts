
/**
 * 策略模式
 * 策略模式是一种行为设计模式， 它能让你定义一系列算法， 并将每种算法分别放入独立的类中， 以使算法的对象能够相互替换。
 * https://refactoringguru.cn/design-patterns/strategy
 */
class Context {
    private strategy: [Strategy]
    doSomeThing: () => void
    constructor() {

    }
    /**
     * setStrategy
     */
    public setStrategy(strategy: Strategy) {

    }
    public doSomeThing() {

    }
}

/**
 * 策略接口
 */
interface StrategyInterface {
    execute: (data: string) => void
}

/**
 * javascript中可以是一个策略类可以是一个函数，只要做到策略和上下文分开解耦即可，具体形式不限
 */
class Strategy implements StrategyInterface {
    execute(data: string) {

    }
}

function Client() {
    const ctx = new Context()

    const strategy1 = new Strategy()
    ctx.setStrategy(strategy1)
    ctx.doSomeThing()
}

Client()


/**
 * 优点
 * 可以使用组合来代替继承
 * 开闭原则。 你无需对上下文进行修改就能够引入新的策略。
 * 
 * 
 * 缺点
 * 如果你的算法极少发生改变， 那么没有任何理由引入新的类和接口。 使用该模式只会让程序过于复杂。
 * 许多现代编程语言支持函数类型功能， 允许你在一组匿名函数中实现不同版本的算法。 这样， 你使用这些函数的方式就和使用策略对象时完全相同， 无需借助额外的类和接口来保持代码简洁。
 * 
 */


/**
 * 以下是javascript中的实现
 * 策略类可以是一个函数，对象等只需要约定好即可，无需再额外新增加类  麻烦，增加理解成本
 */
const strategy1 = () => {}
const strategy2 = () => {}
const strategyMap = {
    strategy1,
    strategy2,
}
function mian2() {
    // 可以替换即可
    const str = 'strategy1'
    const strategyFn = strategyMap[str]

    const ret = strategyFn()
}