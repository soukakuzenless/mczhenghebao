const $CuriosApi = Java.loadClass(`top.theillusivec4.curios.api.CuriosApi`)
var $LivingEntityHurt = Java.loadClass('net.minecraftforge.event.entity.living.LivingHurtEvent')
const chuliid = new Set()
function isEquipped(player,itemid){
    let inventory = $CuriosApi.getCuriosInventory(player).orElse(null)
    if(!inventory) return false
    let slots = inventory["isEquipped(net.minecraft.world.item.Item)"](itemid)
    if(slots)return true
    return false
}
EntityEvents.hurt( event => {
    let {entity , source , damage} = event;
    let eid = entity.getId()
    // 伤害对象是玩家
    if(chuliid.has(eid)) return    
    if (entity.isPlayer()){  
    if(isEquipped(entity,'kubejs:heart_of_shulker')){
    // 应用30%减伤
            let reducedDamage = damage * 0.7;
        chuliid.add(eid);
       // 设置新的伤害值
         entity.attack(source,reducedDamage);
         chuliid.delete(eid);
    entity.displayClientMessage(Component.of(`目标造成伤害: ${reducedDamage}, 已减免`), true);
    event.cancel();
    }
}})
EntityEvents.hurt( event => {
    let {entity , source , damage} = event;
    // 伤害对象是玩家  
    if (entity.isPlayer()){  
    if(isEquipped(entity,'kubejs:lucky_joker') && Math.random() < 0.3){

    entity.displayClientMessage(Component.of(`目标造成伤害: ${damage}, 已闪避`), true);
    event.cancel();
    }
}})
EntityEvents.hurt(event=>{
    let {entity , source , damage} = event;
    let eid2 = entity.getId();
    let dsource = source.getActual();
    if(chuliid.has(eid2)) return 
    if(dsource.isPlayer() ){
        if(isEquipped(dsource,'kubejs:meiguizhici')){
            chuliid.add(eid2);
            let damage2 = damage*1.5;
            entity.attack(source,damage2);
            chuliid.delete(eid2);
        }
    }

}
)
//static "getPlayerSlots(net.minecraft.world.entity.player.Player)"(arg0: Internal.Player_): Internal.Map<string, Internal.ISlotType>;
       //    //entity.runCommandSilent(`damage @s ${reducedDamage} minecraft:mob_attack`);