ServerEvents.recipes(event=>{
    event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "forbidden_arcanus:carved_edelwood_log"
    }
  ],
  "result": [
    {
      "item": "forbidden_arcanus:growing_edelwood"
    },
    {
      "item": "forbidden_arcanus:edelwood_stick"
    }
  ],
  "sound": "minecraft:item.axe.strip",
  "tool": [
    {
      "type": "farmersdelight:tool_action",
      "action": "axe_strip"
    },
    {
      "tag": "minecraft:axes"
    }
  ]
}
    )
    event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "forbidden_arcanus:edelwood_log"
    }
  ],
  "result": [
    {
      "item": "2x forbidden_arcanus:edelwood_stick"
    }
  ],
  "sound": "minecraft:item.axe.strip",
  "tool": [
    {
      "type": "farmersdelight:tool_action",
      "action": "axe_strip"
    },
    {
      "tag": "minecraft:axes"
    }
  ]
}
    )
})