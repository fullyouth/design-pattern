import * as React from 'react'
import * as ReactDom from 'react-dom'
/**
 * 需求：星巴克咖啡厅
 * 饮料: 1.综合 2.深焙 3.低咖啡因 4.浓缩
 * 配料: 1.牛奶 2.摩卡 3.奶泡 4.红茶 
 */

// 饮料
abstract class Beverage {
  description: string

  getDescription(): string {
    return this.description
  }

  abstract cost(): number
}

// 调料
abstract class Condiment extends Beverage {
  abstract getDescription(): string
}

// 浓缩咖啡
class Espresso extends Beverage {
  description = 'espresso'

  cost() {
    return 1.99
  }
}

// 综合咖啡
class HouseBlend extends Beverage {
  description = 'houseBlend'

  cost() {
    return 0.89
  }
}

// 牛奶
class Milk extends Condiment {
  beverage: Beverage
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  getDescription(): string {
    return this.beverage.getDescription() + ' + milk'
  }

  cost() {
    return this.beverage.cost() + 0.1
  }
}

// 摩卡
class Mocha extends Condiment {
  beverage: Beverage
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  getDescription(): string {
    return this.beverage.getDescription() + ' + mocha'
  }

  cost() {
    return this.beverage.cost() + 0.2
  }
}

interface MenuItemPropsType {
  coffee: Beverage
}
function MenuItemComponent(props: MenuItemPropsType) {
  const name = props.coffee.getDescription()
  const price = props.coffee.cost()
  return (
    <span>
      {name} - {price}
    </span>
  )
}
const MenuItem = React.memo(MenuItemComponent)

const espresso = new Espresso()
const houseBlend = new HouseBlend()
const espressoAndMilk = new Milk(espresso)
const espressoAndMocha = new Mocha(espresso)
const houseBlendAndMilk = new Milk(houseBlend)
const houseBlendAndMocha = new Mocha(houseBlend)

interface State {
  selectedBeverage: Condiment[],
  price: number
}
interface Props {
}
class Menu extends React.Component<Props, State> {
  state: State = {
    selectedBeverage: [],
    price: 0
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>, item: Mocha | Milk) {
    const isSelect = e.target.checked
    let { selectedBeverage } = this.state
    if (isSelect) {
      selectedBeverage.push(item)
    }else {
      selectedBeverage = selectedBeverage.filter(v => v !== item)
    }
    const price = Number(selectedBeverage.reduce((memo, item) => memo += item.cost(), 0).toFixed(2))
    this.setState({
      selectedBeverage,
      price
    })
  }
  render() {
    const { price } = this.state
    return (
      <>
        咖啡
        <ul>
          <li>
            <MenuItem coffee={espressoAndMilk} />
            <input type="checkbox" onChange={e => this.handleChange(e, espressoAndMilk)} />
          </li>
          <li><MenuItem coffee={espressoAndMocha} />
            <input type="checkbox" onChange={e => this.handleChange(e, espressoAndMocha)} />
          </li>
          <li><MenuItem coffee={houseBlendAndMilk} />
            <input type="checkbox" onChange={e => this.handleChange(e, houseBlendAndMilk)} />
          </li>
          <li><MenuItem coffee={houseBlendAndMocha} />
            <input type="checkbox" onChange={e => this.handleChange(e, houseBlendAndMocha)} />
          </li>
        </ul>
        支付 {price} 美元
      </>
    )
  }
}
ReactDom.render(
  <Menu />,
  document.getElementById('app')
)



