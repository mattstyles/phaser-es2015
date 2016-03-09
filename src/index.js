
import preload from './state/preload'
import create from './state/create'
import update from './state/update'


var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', {
  preload, create, update
})
