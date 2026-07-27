const ybdl = new RegExp('Item.kubejs.yongbudiaoling')
let $LivingHurtEvent = Java.loadClass("net.minecraftforge.event.entity.living.LivingHurtEvent")//反射生物伤害事件
let $Registries = Java.loadClass('net.minecraft.core.registries.Registries')//反射注册表总表
let $ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')//反射资源标识符

EntityEvents.hurt(event=>{
    let {entity , source , damage} = event;
    let player1 = source.actual;
    if(player1 != null){
        let mainh = player1.getMainHandItem();
        let damageType = event.source.getType().toString()//获取伤害类型
        if (damageType == 'player') {

    if(mainh.getId() == "kubejs:yongbudiaoling"){
        
        let da = entity.getHealth() - damage/2;
        entity.setHealth(da);
        player1.displayClientMessage(Component.of(`造成伤害: ${damage}+${damage/2}点真实伤害`), true);
    }
    }}
}
)
