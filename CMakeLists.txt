cmake_minimum_required(VERSION 2.6)
project(MASSACRE_DATA)

set(MODELS_ARENA
	DataArena/Models/Arena/_.png
	DataArena/Models/Arena/__.png
	DataArena/Models/Arena/arena.jpg
	DataArena/Models/Arena/arena.json
	DataArena/Models/Arena/arena.mesh
	DataArena/Models/Arena/arena.mtl
	DataArena/Models/Arena/arena.png
	DataArena/Models/Arena/border.jpg
	DataArena/Models/Arena/branch.mtl
	DataArena/Models/Arena/branch0.png
	DataArena/Models/Arena/branch1.png
	DataArena/Models/Arena/branch2.png
	DataArena/Models/Arena/branch3.png
	DataArena/Models/Arena/columns0.jpg
	DataArena/Models/Arena/columns1.jpg
	DataArena/Models/Arena/decor0.jpg
	DataArena/Models/Arena/decor1.jpg
	DataArena/Models/Arena/flag.png
	DataArena/Models/Arena/floor.jpg
	DataArena/Models/Arena/gates.jpg
	DataArena/Models/Arena/ground.jpg
	DataArena/Models/Arena/handrail.jpg
	DataArena/Models/Arena/leaves.mtl
	DataArena/Models/Arena/leaves.png
	DataArena/Models/Arena/roofs0.jpg
	DataArena/Models/Arena/roofs1.jpg
	DataArena/Models/Arena/trans.json
	DataArena/Models/Arena/trans.png
	DataArena/Models/Arena/tree.jpg
	DataArena/Models/Arena/walls0.jpg
	DataArena/Models/Arena/walls1.jpg)

set(MODELS_CUBE
	DataArena/Models/Cube/cube.mesh
	DataArena/Models/Cube/cube.png)

set(MODELS_SKY
	DataArena/Models/Sky/sky.mesh
	DataArena/Models/Sky/sky0.jpg
	DataArena/Models/Sky/sky1.jpg
	DataArena/Models/Sky/sky2.jpg
	DataArena/Models/Sky/sky3.jpg
	DataArena/Models/Sky/sky4.jpg)

set(SHADERS
	DataArena/Shaders/diffuse.frag
	DataArena/Shaders/mvp_t0.vert
	DataArena/Shaders/sky_t0.vert)

install(FILES ${SHADERS} 
	DESTINATION share/massacre/Shaders)

install(FILES ${MODELS_ARENA} 
	DESTINATION share/massacre/Models/Arena)

install(FILES ${MODELS_CUBE} 
	DESTINATION share/massacre/Models/Cube)

install(FILES ${MODELS_SKY} 
	DESTINATION share/massacre/Models/Sky)
