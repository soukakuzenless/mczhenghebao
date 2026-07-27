ServerEvents.recipes(event => {
    event.shaped('2x flame_chase_artifacts:law_curios',[
       ['','flame_chase_artifacts:law_curios',''],
       ['','minecraft:soul_torch',''],
       ['','minecraft:cake','']
    ]    
    )   
    event.shaped('forbidden_arcanus:xpetrified_orb',[
       ['','minecraft:experience_bottle',''],
       ['minecraft:experience_bottle','minecraft:snowball','minecraft:experience_bottle'],
       ['','minecraft:experience_bottle','']
    ]    
    )
    event.shaped('l2hostility:equipment_wand',[
       ['','minecraft:iron_ingot','l2hostility:curse_of_lust'],
       ['','minecraft:stick','minecraft:iron_ingot'],
       ['minecraft:stick','','']
    ]    
    )   
    event.shaped('2x forbidden_arcanus:darkstone_upgrade_smithing_template',[
       ['forbidden_arcanus:darkstone','forbidden_arcanus:darkstone_upgrade_smithing_template','forbidden_arcanus:darkstone'],
       ['forbidden_arcanus:darkstone','forbidden_arcanus:soul','forbidden_arcanus:darkstone'],
       ['forbidden_arcanus:darkstone','forbidden_arcanus:darkstone','forbidden_arcanus:darkstone']
    ]    
    )   
    event.shaped('kubejs:heart_of_shulker',[
       ['l2complements:shulkerate_ingot','legendary_monsters:large_shulker_shell','l2complements:shulkerate_ingot'],
       ['celestial_core:shulker_scrap','meetyourfight:caged_heart','celestial_core:shulker_scrap'],
       ['l2complements:shulkerate_ingot','celestial_core:shulker_scrap','l2complements:shulkerate_ingot']
    ]    
    ) 
    event.shapeless('forbidden_arcanus:eternal_stella',[
       'minecraft:diamond','forbidden_arcanus:xpetrified_orb','forbidden_arcanus:xpetrified_orb','forbidden_arcanus:xpetrified_orb','forbidden_arcanus:stellarite_piece'
    ]   
    )
    event.shapeless('tcc:core_fusion',[
       'binah:deca_shard'
    ]   
    )
    event.shapeless('4x forbidden_arcanus:stellarite_piece',[
       'ae2:smooth_sky_stone_block'
    ]   
    )
     event.shapeless('8x forbidden_arcanus:soul',[
       Item.of('forbidden_arcanus:soul_extractor'),'8x minecraft:soul_sand'
    ]  
    ).keepIngredient({item:'forbidden_arcanus:soul_extractor'})
    event.shapeless('8x minecraft:soul_sand',[
       'forbidden_arcanus:soul','8x minecraft:sand'
    ]   
    )
    event.shapeless('4x apotheosis:infused_breath',[
       'goety:unholy_blood','minecraft:milk_bucket','flame_chase_artifacts:strife_curios'
    ]
        
    );
});