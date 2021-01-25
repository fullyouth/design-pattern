import { Command } from './command'
// 遥控器 Invoker
class remoteControl {
  buttons: any
  constructor() {
    this.buttons = {}
  }
  setCommand(slot: string, command: Command) {
    if (typeof slot === 'string') {
      this.buttons[slot] = command
    }
  }
  onButtonWasPushed(slot: string) {
    const command = this.buttons[slot]
    if (command) {
      command.execute()
    }
  }
}

export {
  remoteControl
}