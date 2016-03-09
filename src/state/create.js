
export default function create() {
  this.game.mace = this.game.add.sprite( 0, 0, 'mace' )
  this.game.cursors = this.game.input.keyboard.createCursorKeys()
}
