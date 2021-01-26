/**
 * 需求
 * 一个遥控控制灯泡，电视
 * todo 1.undo
 * 1. 日志请求
 * 2. 队列请求
 */
import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Light, TV, CeilingFan } from './receiver'
import {
  LightOnCommand,
  LightOffCommand,
  TVOnCommand,
  TVOffCommand,
  MacroCommand,
  Command,
  CeilingFanHighCommand,
  CeilingFanMediumCommand,
  CeilingFanLowCommand,
  CeilingFanOffCommand
} from './command'
import { remoteControl } from './invoker'

// reciver
const tv = new TV()
const light = new Light()
const ceilingFan = new CeilingFan()
// command
const lightOnCommand = new LightOnCommand(light)
const lightOffCommand = new LightOffCommand(light)
const tvOnCommand = new TVOnCommand(tv)
const tvOffCommand = new TVOffCommand(tv)

const macroOnCommand = new MacroCommand()
const macroOffCommand = new MacroCommand()
macroOnCommand.setMacroCommand([lightOnCommand, tvOnCommand])
macroOffCommand.setMacroCommand([lightOffCommand, tvOffCommand])

const ceilingFanHighCommand = new CeilingFanHighCommand(ceilingFan)
const ceilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan)
const cceilingFanLowCommand = new CeilingFanLowCommand(ceilingFan)
const ceilingFanOffCommand = new CeilingFanOffCommand(ceilingFan)
// invoker
function RemoteControl() {
  const remote = new remoteControl()
  remote.setCommand('tvOn', tvOnCommand)
  remote.setCommand('tvOff', tvOffCommand)
  remote.setCommand('lightOn', lightOnCommand)
  remote.setCommand('lightOff', lightOffCommand)
  remote.setCommand('ceilingFanHigh', ceilingFanHighCommand)
  remote.setCommand('ceilingFanMedium', ceilingFanMediumCommand)
  remote.setCommand('ceilingFanLow', cceilingFanLowCommand)
  remote.setCommand('ceilingFanOff', ceilingFanOffCommand)

  remote.setCommand('macroOnCommand', macroOnCommand)
  remote.setCommand('macroOffCommand', macroOffCommand)
  let buttonsRes = Object.keys(remote.buttons)
  let buttons = buttonsRes.map(name => {
    return {
      name,
      command: remote.buttons[name]
    }
  })
  return (
    <div>
      <p>遥控器</p>
      <ul>
        <li>
          电视机
          <Button command={() => remote.onButtonWasPushed('tvOn')}>开</Button>
          <Button command={() => remote.onButtonWasPushed('tvOff')}>关</Button>
        </li>
        <li>
          灯
          <Button command={() => remote.onButtonWasPushed('lightOn')}>开</Button>
          <Button command={() => remote.onButtonWasPushed('lightOff')}>关</Button>
        </li>
        <li>
          宏命令
          <Button command={() => remote.onButtonWasPushed('macroOnCommand')}>全部打开</Button>
          <Button command={() => remote.onButtonWasPushed('macroOffCommand')}>全部关闭</Button>
        </li>
        <li>
          吊扇
          <Button command={() => remote.onButtonWasPushed('ceilingFanHigh')}>高</Button>
          <Button command={() => remote.undoButtonWasPushed('ceilingFanHigh')}>撤回</Button>
        </li>
        <li>
          吊扇
          <Button command={() => remote.onButtonWasPushed('ceilingFanMedium')}>中</Button>
          <Button command={() => remote.undoButtonWasPushed('ceilingFanMedium')}>撤回</Button>
        </li>
        <li>
          吊扇
          <Button command={() => remote.onButtonWasPushed('ceilingFanLow')}>低</Button>
          <Button command={() => remote.undoButtonWasPushed('ceilingFanHigh')}>撤回</Button>
        </li>
        <li>
          吊扇
          <Button command={() => remote.onButtonWasPushed('ceilingFanOff')}>关</Button>
        </li>
      </ul>
    </div>
  )
}
const Remote = React.memo(RemoteControl)

function Button(props: any) {
  return <button style={{ marginRight: '20px' }} onClick={props.command}>{props.children}</button>
}

ReactDom.render(
  <RemoteControl />,
  document.getElementById('app')
)