import { Light, TV } from './receiver'

export interface Command {
  execute(): void;
  undo?(): void; 
}
class LightOnCommand implements Command {
  light: Light
  constructor(light: Light) {
    this.light = light
  }
  execute = (): void => {
    this.light.on()
  }
}
class LightOffCommand implements Command {
  light: Light
  constructor(light: Light) {
    this.light = light
  }
  execute = (): void => {
    this.light.off()
  }
}
class TVOnCommand implements Command {
  tv: TV
  constructor(tv: TV) {
    this.tv = tv
  }
  execute = (): void => {
    this.tv.on()
  }
}
class TVOffCommand implements Command {
  tv: TV
  constructor(tv: TV) {
    this.tv = tv
  }
  execute = (): void => {
    this.tv.off()
  }
}

class MacroCommand implements Command{
  commands: Command[]
  setMacroCommand(commands: Command[]) {
    this.commands = commands
  }
  execute = (): void => {
    this.commands.forEach(command => command && command.execute())
  }
}

export {
  LightOnCommand,
  LightOffCommand,
  TVOnCommand,
  TVOffCommand,
  MacroCommand
}