let $Player = Java.loadClass("net.minecraft.world.entity.player.Player")
//let $SuperpositionHandler = Java.loadClass("com.aizistral.enigmaticlegacy.handlers.SuperpositionHandler")
StartupEvents.registry("item",event=>{
    event.create("heart_of_shulker").rarity("rare").tag("curios:body").tooltip('§7穿戴在胸饰槽位时减少 30% 伤害').maxStackSize(1)
     .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            
            .modifyAttribute("minecraft:generic.max_health", "max_health", 20, "addition")// 添加20点最大生命值
            
        )
    event.create("lucky_joker").rarity("rare").tag("curios:body").tooltip(["§7有30%的概率免疫伤害","§7并不能免疫大多数亚波伦尾杀的伤害"]).maxStackSize(1)
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            
            .modifyAttribute("minecraft:generic.luck", "luck", 20, "addition")// 添加20点幸运值
            
        )
    event.create("meiguizhici").rarity("rare").tag("curios:hands").tooltip(["§7额外造成50%由玩家造成的伤害","§7对部分非玩家伤害不生效"]).maxStackSize(1)
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            
            .modifyAttribute("minecraft:generic.attack_damage", "attack_damage", 4, "addition")// 添加4点攻击伤害
            
        )
    event.create("yongbudiaoling","sword")
    .maxDamage(3000).attackDamageBaseline(20).attackDamageBonus(20).unstackable().fireResistant(true).speed(-2).glow(true).rarity("epic")
    .tooltip(["§7造成等同于攻击伤害一半的真实伤害","撕裂防御的一击"])  
    
}
)



