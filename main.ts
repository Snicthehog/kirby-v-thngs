controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, kirby, 200, 0)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 500)
    info.changeScoreBy(1)
    Hammer.destroy(effects.trail, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Hammer: Sprite = null
let projectile: Sprite = null
let kirby: Sprite = null
kirby = sprites.create(assets.image`kirbyfly1`, SpriteKind.Player)
controller.moveSprite(kirby, 200, 200)
kirby.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    Hammer = sprites.create(assets.image`INAVDOR`, SpriteKind.Enemy)
    Hammer.setVelocity(-100, 0)
    Hammer.setPosition(160, randint(5, 115))
    Hammer.setFlag(SpriteFlag.AutoDestroy, true)
})
