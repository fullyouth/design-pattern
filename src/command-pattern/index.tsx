/**
 * 需求
 * 一个遥控控制灯泡，电视
 * todo 1.party功能 2.undo 3. 加入页面
 * 1. 日志请求
 * 2. 队列请求
 */
import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Light, TV } from './receiver'
import {
  LightOnCommand,
  LightOffCommand,
  TVOnCommand,
  TVOffCommand,
  MacroCommand,
  Command
} from './command'
import { remoteControl } from './invoker'

// reciver
const tv = new TV()
const light = new Light()
// command
const lightOnCommand = new LightOnCommand(light)
const lightOffCommand = new LightOffCommand(light)
const tvOnCommand = new TVOnCommand(tv)
const tvOffCommand = new TVOffCommand(tv)
const macroOnCommand = new MacroCommand()
const macroOffCommand = new MacroCommand()
macroOnCommand.setMacroCommand([lightOnCommand, tvOnCommand])
macroOffCommand.setMacroCommand([lightOffCommand, tvOffCommand])
// invoker
const remote = new remoteControl()
remote.setCommand('tvOn', tvOnCommand)
remote.setCommand('tvOff', tvOffCommand)
remote.setCommand('lightOn', lightOnCommand)
remote.setCommand('lightOff', lightOffCommand)

remote.onButtonWasPushed('tvOn')
remote.onButtonWasPushed('tvOff')
remote.onButtonWasPushed('lightOn')
remote.onButtonWasPushed('lightOff')

function RemoteControl(props: any) {
  return (
    <div>
      {
        props.buttons.map((button: any) => <Button key={button.name} name={button.name} command={button.command} />)
      }
    </div>
  )
}

function Button(props: any) {
  return <button onClick={props.command.execute}>{props.name}</button>
}
const App = (props: any) => {
  let buttonsRes = Object.keys(props.buttons)
  let buttons = buttonsRes.map(name => {
    return {
      name,
      command: props.buttons[name]
    }
  })
  return <RemoteControl buttons={buttons}/>
};

ReactDom.render(
  <App buttons={remote.buttons} />,
  document.getElementById('app')
)