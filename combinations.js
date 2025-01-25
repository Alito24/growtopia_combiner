const combinations = {
    "Dirt+Water": "Mud",
    "Lava+Water": "Obsidian",
    "Sand+Stone": "Stone Wall",
    "Grass+Mud": "Bush",
    "Bush+Dirt": "Tree",
    "Bush+Lava": "Rose",
    "Stone+Tree": "Wood Block",
    "Rose+Sand": "Cactus",
    "Grass+Rose": "Sunflower",
    "Stone Wall+Water": "Well",
    "Rose+Wood Block": "Red Block",
    "Cactus+Wood Block": "Green Block",
    "Water+Wood Block": "Blue Block",
    "Marble+Wood Block": "White Block",
    "Obsidian+Wood Block": "Black Block",
    "Sunflower+Wood Block": "Yellow Block",
    "Red Block+Yellow Block": "Orange Block",
    "Lava+Well": "Forge",
    "Bush+Mud": "Mushroom",
    "Mud+Stone": "Clay",
    "Clay+Forge": "Bricks",
    "Forge+Sand": "Glass Block",
    "Mushroom+Yellow Block": "Pinball Sproinger",
    "Well+White Block": "Toilet",
    "Toilet+Wood Block": "Wooden Chair",
    "Mushroom+Wooden Chair": "Bed",
    "Marble+Stone": "Andesite",
    "Andesite+Orange Block": "Granite",
    "Well+Wood Block": "Door",
    "Door+Stone Wall": "Dungeon Door",
    "Stone+Wood Block": "Sign",
    "Lava+Sign": "Danger Sign",
    "Danger Sign+Stone": "Death Spikes",
    "Death Spikes+Dungeon Door": "Portcullis",
    "Andesite+Portcullis": "Steel Block",
    "Bed+Steel Block": "Bedrock",
    "Water+White Wallpaper": "Clouds",
    "Clouds+Steel Block": "Industrial Fan",
    "Industrial Fan+Wood Block": "Ceiling Fan",
    "Glass Block+White Block": "White Wallpaper",
    "Black Block+Glass Block": "Black Wallpaper",
    "Glass Block+Red Block": "Red Wallpaper",
    "Blue Block+Glass Block": "Blue Wallpaper",
    "Glass Block+Green Block": "Green Wallpaper",
    "Glass Block+Yellow Block": "Yellow Wallpaper",
    "Glass Block+Orange Block": "Orange Wallpaper",
    "Orange Wallpaper+Red Wallpaper": "Carnival Wallpaper",
    "Carnival Wallpaper+Death Spikes": "Carnival Spikeball",
    "Carnival Wallpaper+Ceiling Fan": "Carnival Pinwheel",
    "Steel Block+Yellow Block": "Golden Block",
    "Green Wallpaper+Tree": "Broccoli",
    "Broccoli+Orange Block": "Carrot Block",
    "Carrot Block+Red Block": "Strawberry Block",
    "Strawberry Block+White Block": "Polka Dot Block",
    "Grass+Sand": "Wheat",
    "Ceiling Fan+Wheat": "Straw Hat",
    "White Block+White Wallpaper": "Egg",
    "Egg+Wheat": "Dough",
    "Dough+Stove": "Bread",
    "Bush+Red Block": "Tomato",
    "Bread+Tomato": "Cheeseburger",
    "Glass Block+Wood Block": "Wooden Background",
    "Wood Block+Wooden Background": "Lattice Background",
    "Lattice Background+White Block": "Picket Fence",
    "Lava+Steel Block": "Stove",
    "Picket Fence+Stove": "Spatula",
    "Stove+Straw Hat": "Chef Hat",
    "Checker Wallpaper+Stove": "Apron",
    "Black Wallpaper+White Wallpaper": "Checker Wallpaper",
    "Picket Fence+Polka Dot Block": "Traffic Barricade",
    "Sign+Traffic Barricade": "Street Sign",
    "Checker Wallpaper+Street Sign": "Open Sign",
    "Clouds+Open Sign": "Holographic Sign",
    "Lava+Portcullis": "Laser Grid",
    "Glass Block+White Block": "Window",
    "Clouds+Window": "Glasses",
    "Glasses+Laser Grid": "Cyclopean Visor",
    "Checker Wallpaper+Cyclopean Visor": "Matrix Visor",
    "Checker Wallpaper+Industrial Fan": "Computer Panel",
    "Computer Panel+Matrix Visor": "Techno Visor",
    "Black Wallpaper+Computer Panel": "Flatscreen TV",
    "Danger Sign+Flatscreen TV": "Military Radio",
    "Bush+Water": "Seaweed",
    "Cactus+Seaweed": "Coral",
    "Computer Panel+Door": "Time-Space Rupture",
    "Flatscreen TV+Wooden Chair": "Theater Seat",
    "Bed+Flatscreen TV": "Couch",
    "Couch+Clouds": "Beanbag",
    "Sand+Theater Seat": "Deck Chair",
    "Beanbag+Wheat": "Hay Chair",
    "Coral+Stone": "Igneous Rock",
};
