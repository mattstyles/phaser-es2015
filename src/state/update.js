
const MOVE_SPEED = 10

function handleInput( input, game ) {
  if ( input.left.isDown ) {
    game.mace.position.x -= MOVE_SPEED
    return
  }

  if ( input.right.isDown ) {
    game.mace.position.x += MOVE_SPEED
    return
  }

  if ( input.up.isDown ) {
    game.mace.position.y -= MOVE_SPEED
    return
  }

  if ( input.down.isDown ) {
    game.mace.position.y += MOVE_SPEED
    return
  }
}


export default function update() {
  handleInput( this.game.cursors, this.game )
}
