# design-pattern
设计模式学习

## 设计模式的三大类型
**1. 创建型模式**  
创建型模式对类的实例化过程进行了抽象，能够将软件模块中**对象的创建**和**对象的使用**分离。  
为了是软件结构更加清晰，外接对于这些对象只需要知道他们**共同的接口**，而不需要知道其中的具体的实现细节，使得整个系统的设计更加符合**单一职责**的原则。

**2. 结构型模式**  
结构型模式描述如何将**类和对象**结合在一起形成更大的结构，通过简单的**组合**形成复杂的，功能更为强大的结构。

分为**类结构型模式**和**对象结构型模式**

- **类结构型**：关心类的组合，由多个类组成更大的系统，一般只存在**继承和实现**关系
- **对象结构型**：通过关联关系使得**一个类**中定义另一个类的**实例**，然后通过实例调用其方法。

根据**合成复用**原则，在系统中尽量**使用关联关系来替代继承关系**，因此大多数结构型都是对象结构型。

**3. 行为型模式**  
是在不同对象之间**划分责任和算法**的抽象化  
不仅关注类和对象的结构，而且重点关注他们之间的**相互作用**

分为类行为型和对象行为型
- **类行为型**：使用**继承**在几个类之间分配行为，主要**通过多态等方式来分配父类与子类的职责** 

- ****对象行为型**：使用对象的****聚合关联**关系来分配行为

根据**合成复用原则**，系统中要**尽量使用关联关系来取代继承关系**，因此大部分行为型设计模式都属于**对象行为型设计模式**

