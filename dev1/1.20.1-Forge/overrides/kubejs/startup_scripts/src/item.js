let $Player = Java.loadClass("net.minecraft.world.entity.player.Player")
//let $SuperpositionHandler = Java.loadClass("com.aizistral.enigmaticlegacy.handlers.SuperpositionHandler")
StartupEvents.registry("item",event=>{
    event.create("heart_of_shulker").rarity("rare").tag("curios:body").tooltip('§7穿戴在胸饰槽位时减少 30% 伤害').maxStackSize(1)
     .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            
            .modifyAttribute("minecraft:generic.max_health", "max_health", 20, "addition")// 添加20点最大生命值
            
        )

}
)