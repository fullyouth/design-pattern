## 命令模式(CommandPattern)

### OO原则
- 封装变化
- 多用组合，少用继承
- 针对接口编程，不针对实现编程
- 为交互对象之间的松和耦合而努力
- 类应该对拓展开放，对修改关闭
- 依赖抽象，不依赖具体类
### 概念
定义： 将请求和封装成对象，以便使用不同的请求、队列或者日志来参数话化其他对象。也可支持从撤销。

当需要将发出请求的对象和执行请求的对象 解耦的时候，使用命令模式。

### 总结
- 命令模式将发出请求的对象和执行请求的对象解耦
- 被解耦的两者之间使用命令对象进行沟通的。命令对象封装了接受者和一个或者一组动作。
- 调用着调用命令对象的execute方法发出请求，这会使接收者的动作被调用
- 调用着可以接受命令当做参数，甚至在运行时动态的进行
- 命令可以支持撤销，undo方法回到execute执行之前的状态
- 宏命令是简单命令的延伸，允许调用多个简单命令
- 实际操作中，我们经常使用“聪明”命令对象，也就是直接实现了请求，而不是将工作任务委托给接受者
- 命令模式也可以实现日志和事务系统