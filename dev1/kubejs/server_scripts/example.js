ServerEvents.recipes(event => {
    
    const congyu = Item.of('slashblade:slashblade', '{bladeState:{AttackAmplifier:0.0f,ComboRoot:"slashblade:standby",Damage:0,ModelName:"murasame:models/murasame/murasamemaru.obj",RepairCounter:0,SpecialAttackType:"slashblade:wave_edge",StandbyRenderType:1b,SummonedSwordColor:-16711866,SummonedSwordColorInverse:0b,TargetEntity:-1,TextureName:"murasame:models/murasame/murasamemaru.png",_onClick:0b,adjustXYZ:[0.0d,0.0d,0.0d],baseAttackModifier:18.0f,currentCombo:"slashblade:none",fallDecreaseRate:0.0f,isBroken:0b,isDefaultBewitched:1b,isSealed:0b,killCount:0,lastActionTime:0L,maxDamage:150,proudSoul:0,translationKey:"item.murasame.murasamemaru"}}').enchant('minecraft:sharpness', 5).enchant('minecraft:fire_aspect', 2).strongNBT()

    event.shaped(Item.of('slashblade:slashblade', '{bladeState:{AttackAmplifier:0.0f,ComboRoot:"slashblade:standby",Damage:0,ModelName:"murasame:models/murasame/murasamemaru_awakened.obj",RepairCounter:0,SpecialAttackType:"murasame:spatial_slash",SpecialEffects:["murasame:murasame_blessing","murasame:murasame_soul"],StandbyRenderType:1b,SummonedSwordColor:-16711866,SummonedSwordColorInverse:0b,TargetEntity:0,TextureName:"murasame:models/murasame/murasamemaru_awakened.png",_onClick:0b,adjustXYZ:[0.0d,0.0d,0.0d],baseAttackModifier:35.0f,currentCombo:"slashblade:none",fallDecreaseRate:0.0f,isBroken:0b,isDefaultBewitched:1b,isSealed:0b,killCount:0,lastActionTime:0L,maxDamage:300,proudSoul:0,translationKey:"item.murasame.murasamemaru_awakened"}}').enchant('minecraft:smite', 25).enchant('minecraft:sharpness', 10).enchant('minecraft:fire_aspect', 3).enchant('minecraft:unbreaking', 10),[
        ' s ',
        ' D ',
        's s'
    ],{
        s:'minecraft:nether_star',
        D:congyu
    }

    )


});


