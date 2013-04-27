cmake_minimum_required(VERSION 2.6)
project(MASSACRE_DATA)

set(MODELS_ARENA
    DataArena/Models/Arena/arena.jpg
    DataArena/Models/Arena/arena.json
    DataArena/Models/Arena/arena.mesh
    DataArena/Models/Arena/arena.mtl
    DataArena/Models/Arena/branch.mtl
    DataArena/Models/Arena/flag.png
    DataArena/Models/Arena/leaves.mtl
    DataArena/Models/Arena/trans.json
    DataArena/Models/Arena/trans.png)

set(MODELS_SKY
    DataArena/Models/Sky/sky.mesh
    DataArena/Models/Sky/sky0.jpg
    DataArena/Models/Sky/sky1.jpg
    DataArena/Models/Sky/sky2.jpg
    DataArena/Models/Sky/sky3.jpg
    DataArena/Models/Sky/sky4.jpg)

set(SHADERS
    DataArena/Shaders/diffuse.frag
    DataArena/Shaders/quasicrystal.frag
    DataArena/Shaders/mvp_t0.vert
    DataArena/Shaders/sky_t0.vert)

install(FILES ${SHADERS} 
        DESTINATION share/massacre/Shaders)

install(FILES ${MODELS_ARENA} 
        DESTINATION share/massacre/Models/Arena)

install(FILES ${MODELS_SKY} 
        DESTINATION share/massacre/Models/Sky)
