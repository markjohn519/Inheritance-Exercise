function Player(name) {
  this.name = name
}

Player.prototype.attack = (target) => console.log(`${target.name} takes damage`)

Player.prototype.heal = (target) => console.log(`${target.name} heal himself`)

Player.prototype.changeName = (newName) => {
  this.name = Player.name
  console.log(`${this.name} name has been change to ${newName}`)
  this.name = newName
}

const p1 = new Player('Athur')
const p2 = new Player('Lancelot')

p1.attack(p2)
p2.heal(p2)
p2.changeName('Mark')
p2.attack(p1)
