import { Light, TV, CeilingFan } from './receiver'

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

class CeilingFanHighCommand implements Command {
  ceilingFan: CeilingFan
  prevSpeed: number
  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }
  execute = (): void => {
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.setHigh()
  }
  undo = (): void => {
    if (this.prevSpeed === CeilingFan.HIGH) this.ceilingFan.setHigh()
    if (this.prevSpeed === CeilingFan.MEDIUM) this.ceilingFan.setMedium()
    if (this.prevSpeed === CeilingFan.LOW) this.ceilingFan.setLow()
  }
}
class CeilingFanMediumCommand implements Command {
  ceilingFan: CeilingFan
  prevSpeed: number
  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }
  execute = (): void => {
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.setMedium()
  }
  undo = (): void => {
    if (this.prevSpeed === CeilingFan.HIGH) this.ceilingFan.setHigh()
    if (this.prevSpeed === CeilingFan.MEDIUM) this.ceilingFan.setMedium()
    if (this.prevSpeed === CeilingFan.LOW) this.ceilingFan.setLow()
  }
}
class CeilingFanLowCommand implements Command {
  ceilingFan: CeilingFan
  prevSpeed: number
  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }
  execute = (): void => {
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.setLow()
  }
  undo = (): void => {
    if (this.prevSpeed === CeilingFan.HIGH) this.ceilingFan.setHigh()
    if (this.prevSpeed === CeilingFan.MEDIUM) this.ceilingFan.setMedium()
    if (this.prevSpeed === CeilingFan.LOW) this.ceilingFan.setLow()
  }
}
class CeilingFanOffCommand implements Command {
  ceilingFan: CeilingFan
  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }
  execute = (): void => {
    this.ceilingFan.off()
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
  MacroCommand,
  CeilingFanHighCommand,
  CeilingFanMediumCommand,
  CeilingFanLowCommand,
  CeilingFanOffCommand
}