enum ActionKind {
    Walking,
    Idle,
    Jumping
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile16, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile15, function (sprite, location) {
    壞人.destroy()
})
function changep () {
    tiles.placeOnRandomTile(小朋友, sprites.dungeon.stairLarge)
    overorcon()
}
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadVertical, function (sprite, location) {
    pause(600)
    changep()
    game.splash("請勿穿越分隔島。", "請走行人穿越道")
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile17, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadHorizontal, function (sprite, location) {
    pause(600)
    changep()
    game.splash("請勿穿越分隔島。", "請走行人穿越道")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    pause(600)
    game.splash("穿越行人道時，", "請注意來車")
    changep()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 36), myTiles.tile20)) {
        pause(600)
        game.splash("穿越行人道，", "勿闖紅燈")
        changep()
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 36), myTiles.tile19)) {
        判斷重疊()
    }
})
function 判斷重疊 () {
    if (持續重疊 == 0) {
        info.changeScoreBy(1)
        持續重疊 = 1
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile18, function (sprite, location) {
    game.over(true)
})
function overorcon () {
    壞人.setFlag(SpriteFlag.Invisible, false)
    info.changeLifeBy(-1)
    if (info.life() == 0) {
        game.over(false)
    }
}
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    壞人 = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(壞人, tiles.getTileLocation(20, 20))
    壞人.follow(小朋友, 15)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 36), myTiles.tile20)) {
        pause(600)
        game.splash("穿越行人道，", "勿闖紅燈")
        changep()
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 36), myTiles.tile19)) {
        判斷重疊()
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(小朋友, ActionKind.Walking)
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(小朋友, ActionKind.Idle)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    pause(600)
    game.splash("放學回家要遠離陌生人")
    changep()
    tiles.placeOnTile(壞人, tiles.getTileLocation(randint(3, 35), randint(3, 35)))
})
let car9: Sprite = null
let car8: Sprite = null
let car7: Sprite = null
let car6: Sprite = null
let car5: Sprite = null
let car4: Sprite = null
let car3: Sprite = null
let car2: Sprite = null
let car1: Sprite = null
let 壞人: Sprite = null
let 持續重疊 = 0
let 小朋友: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`280028000202020202020202020202020202020202020202020202020202020202020202020202020202020202070707070707070b0b0b0b0b0b0b08090718181818181818181818181818181818181816161602020b0b0b0b0b0b0b0c0303030314140809071818181818181818181818181818181818071b1c1d02020303030303030303080c0d0d0d0c080907070707181818010a0809181818181818180707080902020d0d0d0d0d0d0d0d0d0f0707070a080c0b0b0b0b181818070a080918070707070707070a08090202070707070707070707071818180a081414030303181818070a080918070c0b0b0b0b0b0c080c0202181818181818181818181818070a080c0d0d0d0d181818070a080918070a03030303031403030202070707070707070707070707070a111907070707181818070a080918070a150c0d0c081e0d0d02020b0b0b0b0b0b0b0b1e0b0b170b0c111e07181818181818070a080918070a1509070a0809071a02020303030303101003101003031010080907181818180b0b0b0c080918070a0809180a0809071a02020d0d0d0d0d0d1e110c0d0d0d0d1e1109071818181803031414080918070a0809180a0809071a02020707070707070a1109070707070a110c0b0b0b18180d0d0d0c080918070a0809180a0809071a02021818181818070a0809071a1a070a081414080918181818070a08091818181818180a0809071a02021818181818070a0809071a1a070d0d0d0c080918181818070a08091818181818180a0817071a02020707070707070a0809071a1a070707070a080918181818070a08091818181818180a0809071a02020b0b0b0b0b0b0a0809071a1a1a1a1a070a080907070707070a15090707070707010a0809071a0202030303030809071a1a1a1a1a1a1a1a070a080c0b0b170b0b0c150c0b1e0b0b0b0b0c0809071a02020d0d0d0c0809071a1a1a1a1a1a1a1a070a08141403030314140303101003101003030809071a02021818070a0809071a1a1a1a1a1a1a1a070a080c0d0d0d0d0d0d0c0d0d0c111e0d0d0d0d0d071a02021818070a0809071a1a1a0a08091a1a070a0809071a1a1a1a1a1a1a070a11070707070707071a02021818070a0809071a1a1a0a08091a1a070a0809071a1a0a08091a1a070a08071a1a1a1a1a1a1a02021818070a0809071a1a1a0a08091a1a070a0809071a1a0a08091a1a070a08071a1a1a1a1a1a1a02021818070a0809070707070a15091a1a070a11090707070a08090707070a11070707070707070702021818070a081e190b0b0b0c150c0b0b0b19111e0b0b0b0c080c0b0b0b1e110b0b0b0b0b0b0b0b02021818070a0810100303030303030303101008101003030303030303101008101003030303030302020707070c150c0d0d0d0d0d0d170d0d0d1e110c0d0c150c0d0d170d0d19111e0d0d0d0d0d0d0d02020c0c0c0c1509070707070707070707070a1109070a150907070707070a110c070707070707070202030303030809071818181818181818070a0809180a080918181818070a08090718181818181802020707070a080c0b0b0b0b0b0b181818070a0809180a080918181818070a080c0b0b0b0b18181802021818070a0814140303030303181818070a0809180a080918181818070a08141403030318181802021818070a080c0d0d0d0d0d0d181818070a0809180a080901181818070a080c0d0d0d0d18181802021818070a0809070707070707181818070a08091818181818181818070a08090707070118181802021818070a0809071818181818181818070a08091818181818181818070a08090718181818181802020707070a0809070707070707070707070a11090707070707070707070a08090707070707070702020b0b170c081e0b0b0b0b0b0b0b0b170b19111e0b0b0b0b0b0b0b0b0b0c080c0b0b0b0b0b0b0b0202030310100310100303030303030303101003101003030303030303030303030303030303030302020d0d0d1e110c0d0d0d0d0d0d0d0d0d0d1e0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d02020707070e0c090612130707070707070707070707070707070707070707070707070707070707020207070707070504050707070707070707070707070707070707070707070707070707070707070202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
    2222222222222222222222222222222222222222
    2..............2..222222222222222222...2
    2.................22222222222222222....2
    2....................222..2.2222222....2
    2....................222....2..........2
    2..........222.......222....2..........2
    2222222222222........222....2..2.......2
    2....................222....2..........2
    2.................222222....2.........22
    22..........2.....2222......2.........22
    2....................2......2.........22
    2....................2......2.........22
    222222.....22..2.....222....22222.....22
    222222.....22........222....22222.....22
    2..........22........222....22222.....22
    2..........22222......................22
    2....2..22222222......................22
    2.......22222222..2................2..22
    222.....22222222..........2...........22
    222.....222...22.....2222222..........22
    222.....222...22.....22...22....22222222
    222.....222...22.....22...22....22222222
    222...........22.......................2
    222....................................2
    222................................2...2
    2......................................2
    2......................................2
    2.......22222222....2...2222.....2222222
    2............222....2...2222........2222
    222..........222....2...2222........2222
    222..........222....2...2222........2222
    222..........222....22222222........2222
    222.....22222222....22222222.....2222222
    2......................................2
    2......................................2
    2.................2..................2.2
    2......................................2
    2......................................2
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    `, [myTiles.transparency16,myTiles.tile1,sprites.builtin.brick,sprites.vehicle.roadHorizontal,myTiles.tile2,myTiles.tile3,myTiles.tile4,sprites.castle.tileGrass2,sprites.vehicle.roadVertical,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath9,myTiles.tile5,myTiles.tile6,myTiles.tile8,myTiles.tile9,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,sprites.builtin.forestTiles2,sprites.dungeon.stairLarge,sprites.castle.shrub,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile20], TileScale.Sixteen))
game.setDialogCursor(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `)
game.splash("放學回家要注意行人號誌並", "遠離陌生人，或躲至便利商店")
小朋友 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(小朋友, tiles.getTileLocation(6, 37))
controller.moveSprite(小朋友)
scene.cameraFollowSprite(小朋友)
小朋友.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
info.setLife(5)
持續重疊 = 0
壞人 = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(壞人, tiles.getTileLocation(20, 20))
壞人.follow(小朋友, 15)
let anim = animation.createAnimation(ActionKind.Walking, 200)
let ani = animation.createAnimation(ActionKind.Idle, 200)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . 
    . . . . . f f f f . . . . 
    . . . f f f f f f f f . . 
    . . f f f f f f c f f f . 
    f f f f f f f c c f f f c 
    f f f f c f f f f f f f c 
    . c c c f f f e e f f c c 
    . f f f f f e e f f c c f 
    . f f f b f e e f b f f f 
    . f f 4 1 f 4 4 f 1 4 f f 
    . . f e 4 4 4 4 4 e e f e 
    . f e f b 7 7 7 e 4 4 4 e 
    . e 4 f 7 7 7 7 e 4 4 e . 
    . . . f 6 6 6 6 6 e e . . 
    . . . f f f f f f f . . . 
    . . . f f f . . . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . 
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f c f f f f f f . . 
    c f f f c c f f f f f f f 
    c f f f f f f f c f f f f 
    c c f f e e f f f c c c . 
    f c c f f e e f f f f f . 
    f f f b f e e f b f f f . 
    f f 4 1 f 4 4 f 1 4 f f . 
    e f e e 4 4 4 4 4 e f . . 
    e 4 4 4 e 7 7 7 b f e f . 
    . e 4 4 e 7 7 7 7 f 4 e . 
    . . e e 6 6 6 6 6 f . . . 
    . . . f f f f f f f . . . 
    . . . . . . . f f f . . . 
    `)
ani.addAnimationFrame(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `)
animation.attachAnimation(小朋友, anim)
animation.attachAnimation(小朋友, ani)
game.onUpdate(function () {
    if (小朋友.x - 壞人.x < 20) {
        壞人.say("小朋友跟我走，我們一起去玩？")
    }
})
game.onUpdateInterval(5000, function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 36), myTiles.tile20)) {
        tiles.setTileAt(tiles.getTileLocation(4, 36), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(6, 34), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(17, 36), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(6, 23), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(17, 25), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(19, 23), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(29, 23), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(31, 25), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(29, 16), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(31, 18), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(7, 10), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(9, 8), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(14, 10), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(16, 8), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(9, 8), myTiles.tile19)
        tiles.setTileAt(tiles.getTileLocation(19, 34), myTiles.tile19)
    } else {
        tiles.setTileAt(tiles.getTileLocation(4, 36), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(6, 34), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(17, 36), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(19, 34), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(6, 23), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(17, 25), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(19, 23), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(29, 23), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(31, 25), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(29, 16), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(31, 18), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(7, 10), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(9, 8), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(14, 10), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(16, 8), myTiles.tile20)
        tiles.setTileAt(tiles.getTileLocation(36, 7), myTiles.tile20)
    }
})
game.onUpdateInterval(6000, function () {
    car1 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 9 6 6 6 6 6 6 c 6 . . . 
        . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
        . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
        . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
        . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
        . 6 8 b b b 8 b b b b 8 6 6 6 6 
        . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
        . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
        . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
        . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
        . 8 f f f f 8 8 8 8 f f f 8 8 8 
        . . f f f f f 8 8 f f f f f 8 . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 0)
    tiles.placeOnTile(car1, tiles.getTileLocation(1, 35))
    car1.setFlag(SpriteFlag.DestroyOnWall, true)
    car2 = sprites.createProjectileFromSide(img`
        . . . . . . 8 8 c c 8 8 . . . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        . . . . 6 c 6 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 6 9 6 6 6 6 6 c 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 c 6 9 9 6 6 6 c 6 f . 
        . . . 8 6 c 8 c c c c 8 c 6 8 . 
        . . . 8 6 8 c b b b b c 8 6 8 . 
        . . . 8 6 8 b b b b b b 8 6 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . f 8 d 8 8 8 8 8 8 d 8 f . 
        . . . f 8 6 d 8 8 8 8 d 6 8 f . 
        . . . f f 8 8 8 8 8 8 8 8 f f . 
        . . . . f f . . . . . . f f . . 
        `, 0, 50)
    tiles.placeOnTile(car2, tiles.getTileLocation(5, 17))
    car2.setFlag(SpriteFlag.DestroyOnWall, true)
    car3 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
        . 3 c c d d d d d d 3 c c d 3 d 
        . 3 c 3 a a a a a a a b c d 3 3 
        . 3 3 a b b a b b b a a b d 3 3 
        . 3 a b b b a b b b b a 3 3 3 3 
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
        . a a a a a a f a a a f a 3 d d 
        . a a a a a a f a a f a a a 3 d 
        . a a a a a a f f f a a a a a a 
        . a f f f f a a a a f f f a a a 
        . . f f f f f a a f f f f f a . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 0)
    tiles.placeOnTile(car3, tiles.getTileLocation(2, 9))
    car3.setFlag(SpriteFlag.DestroyOnWall, true)
    car4 = sprites.createProjectileFromSide(img`
        . . . . . . a a c c a a . . . . 
        . . . . . a 3 3 3 3 3 3 a . . . 
        . . . . 3 c 3 3 3 3 3 3 c 3 . . 
        . . . a 3 c d 3 3 3 3 3 c 3 a . 
        . . . f 3 3 d 3 3 3 3 3 c 3 f . 
        . . . f 3 3 d 3 3 3 3 3 3 3 f . 
        . . . f 3 3 d 3 3 3 3 3 3 3 f . 
        . . . f 3 c 3 d d 3 3 3 c 3 f . 
        . . . a 3 c a c c c c a c 3 a . 
        . . . a 3 a c b b b b c a 3 a . 
        . . . a 3 a b b b b b b a 3 a . 
        . . . a a a a a a a a a a a a . 
        . . . f a d a a a a a a d a f . 
        . . . f a 3 d a a a a d 3 a f . 
        . . . f f a a a a a a a a f f . 
        . . . . f f . . . . . . f f . . 
        `, 0, 50)
    tiles.placeOnTile(car4, tiles.getTileLocation(15, 2))
    car4.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(6000, function () {
    car5 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 6 6 6 6 . . 
        . . . . . 6 c 6 6 6 6 6 6 9 6 . 
        . . . . 6 c c 6 6 6 6 6 6 9 c 6 
        . . d 6 9 c c 6 9 9 9 9 9 9 c c 
        . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
        . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
        . 6 6 6 6 6 8 b b b b 8 b b b 8 
        . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
        . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
        . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
        . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
        . 8 8 8 8 f f f 8 8 8 8 f f f f 
        . . . 8 f f f f f 8 8 f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `, -50, 0)
    tiles.placeOnTile(car5, tiles.getTileLocation(34, 17))
    car5.setFlag(SpriteFlag.DestroyOnWall, true)
    car6 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 3 3 . . 
        . . . . . 3 c 3 3 3 3 3 3 d 3 . 
        . . . . 3 c c 3 3 3 3 3 3 d c 3 
        . . d 3 d c c 3 d d d d d d c c 
        . d 3 3 d c b a a a a a a a 3 c 
        . 3 3 3 d b a a b b b a b b a 3 
        . 3 3 3 3 3 a b b b b a b b b a 
        . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
        . 3 d d 3 a f a a a f a a a a a 
        . d d 3 a a a f a a f a a a a a 
        . a a a a a a a f f f a a a a a 
        . a a a a f f f a a a a f f f f 
        . . . a f f f f f a a f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `, -50, 0)
    tiles.placeOnTile(car6, tiles.getTileLocation(34, 24))
    car6.setFlag(SpriteFlag.DestroyOnWall, true)
    car7 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
        . 3 c c d d d d d d 3 c c d 3 d 
        . 3 c 3 a a a a a a a b c d 3 3 
        . 3 3 a b b a b b b a a b d 3 3 
        . 3 a b b b a b b b b a 3 3 3 3 
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
        . a a a a a a f a a a f a 3 d d 
        . a a a a a a f a a f a a a 3 d 
        . a a a a a a f f f a a a a a a 
        . a f f f f a a a a f f f a a a 
        . . f f f f f a a f f f f f a . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 0)
    tiles.placeOnTile(car7, tiles.getTileLocation(32, 6))
    car7.setFlag(SpriteFlag.DestroyOnWall, true)
    car8 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 6 6 . . . . 
        . . . . . 6 6 9 9 6 6 6 6 . . . 
        . . . . . c 9 6 6 6 6 6 c . . . 
        . . . . 6 c 9 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 c 9 6 6 6 6 6 c 6 f . 
        . . . f 8 c 6 6 6 6 6 6 c 8 f . 
        . . . f 6 c 6 b b b b 6 c 6 f . 
        . . . 8 6 6 b c c c c b 6 6 8 . 
        . . . 8 8 b c c c c c c b 8 8 . 
        . . . f 8 9 9 9 9 9 9 9 9 8 f . 
        . . . f 8 d 6 6 6 6 6 6 d 8 f . 
        . . . . 6 d d 6 6 6 6 d d 6 f . 
        . . . . f 6 d 6 6 6 6 d 6 f . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        `, 0, 50)
    tiles.placeOnTile(car8, tiles.getTileLocation(26, 4))
    car8.setFlag(SpriteFlag.DestroyOnWall, true)
    car9 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 . . . . 
        . . . . . 3 3 d d 3 3 3 3 . . . 
        . . . . . c d 3 3 3 3 3 c . . . 
        . . . . 3 c d 3 3 3 3 3 c 3 . . 
        . . . a 3 c d 3 3 3 3 3 c 3 a . 
        . . . f 3 c d 3 3 3 3 3 c 3 f . 
        . . . f a c 3 3 3 3 3 3 c a f . 
        . . . f 3 c 3 b b b b 3 c 3 f . 
        . . . a 3 3 b c c c c b 3 3 a . 
        . . . a a b c c c c c c b a a . 
        . . . f a d d d d d d d d a f . 
        . . . f a d 3 3 3 3 3 3 d a f . 
        . . . . 3 d d 3 3 3 3 d d 3 f . 
        . . . . f 3 d 3 3 3 3 d 3 f . . 
        . . . . . a 3 3 3 3 3 3 a . . . 
        `, 0, 50)
    tiles.placeOnTile(car9, tiles.getTileLocation(18, 18))
    car9.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(3000, function () {
    持續重疊 = 0
})
