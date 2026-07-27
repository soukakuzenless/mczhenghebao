ServerEvents.recipes(event=>{
    event.custom(
        {
        "type": "confluence:workshop",
        "ingredients": [
            {
             "item": "wizard_terra_cuiros:ichor"
            },
            {
             "item": "minecraft:amethyst_shard"
            }
        ],
         "result": {
         "item": "enigmaticaddons:ichor_droplet"
          }
        }
        
    ),
    event.custom(
        {
    "type": "confluence:workshop",
    "ingredients": [
        {
            "item": "minecraft:chain"
        },
        {
            "item": "enigmaticlegacy:iron_ring"
        }
    ],
    "result": {
        "item": "confluence:shackle"
    }
    }
        
    ),
    event.custom(
        {
    "type": "confluence:workshop",
    "ingredients": [
        {
            "item": "flame_chase_artifacts:law_curios"
        },
        {
            "item": "minecraft:echo_shard"
        }
    ],
    "result": {
        "item": "wizard_terra_cuiros:garden_gnome"
    }
    }
        
    )
})