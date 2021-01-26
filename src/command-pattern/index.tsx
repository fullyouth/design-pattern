/**
 * 需求
 * 一个遥控控制灯泡，电视
 * todo 2.undo
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
remote.setCommand('macroOnCommand', macroOnCommand)
remote.setCommand('macroOffCommand', macroOffCommand)

remote.onButtonWasPushed('tvOn')
remote.onButtonWasPushed('tvOff')
remote.onButtonWasPushed('lightOn')
remote.onButtonWasPushed('lightOff')

function RemoteControl(props: any) {
  const { remote } = props
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
        {buttons.map((button: any) => (
          <li key={button.name}>
            <Button command={() => remote.onButtonWasPushed(button.name)}>
              {button.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Button(props: any) {
  return <button onClick={props.command}>{props.children}</button>
}

ReactDom.render(
  <RemoteControl remote={remote} />,
  document.getElementById('app')
)