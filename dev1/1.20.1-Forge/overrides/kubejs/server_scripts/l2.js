// 使用净化瓶和诅咒瓶
ItemEvents.entityInteracted("l2hostility:bottle_of_sanity",event => {
    let _target = event.target
    if (_target && _target.type != "minecraft:player") {
        event.server.runCommandSilent(`hostility mobs ${_target.getUuid()} level setAndRerollTrait 0`)
        if (!event.player.isCreative()) {
            event.item.count--
        }
        event.cancel()
    }
})
ItemEvents.entityInteracted("l2hostility:hostility_essence",event => {
    let _target = event.target
    if (_target && _target.type != "minecraft:player") {
        event.server.runCommandSilent(`hostility mobs ${_target.getUuid()} level add 100`)
        if (!event.player.isCreative()) {
            event.item.count--
        }
        event.cancel()
    }
})