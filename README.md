
# Phaser ES2015 Example

> Simple example to add some ES2015/2016 stuff to a Phaser project

To get started clone the repository, install and run the start script

```
npm i
npm start -- --open
```

## Browserify

Phaser and Browserify do not play well together which makes it difficult to add Phaser as a direct dependency. The solution is to add Phaser as a dependency and include the Phaser distributable build directly into your project, then configure browserify to accept it as a global. For brevity this project just includes it via a cdn and sets browserify to know about it as a global.

There are a few hacks around to include it in the bundle but it’s not worth the fight.

## Build

```
npm run build
```

Outputs to `dist`. Just serve up `dist` and it’ll be good to go.
