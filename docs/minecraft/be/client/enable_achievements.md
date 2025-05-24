# 开启成就

成就随存档变化。如果一个世界在原版提示不再能获得成就，那么需要修改它的level.dat文件。

level.dat中的以下nbt必须为指定值才能获得成就：
- hasBeenLoadedInCreative：0
- cheatsEnabled：0
- comandsEnabled：0

如果是服务器，还需要在server.properties里把allow-cheats改成false

随后有些受到作弊影响的gamerule（比如keepinventory）只有在服务器后台可以打开，需要在后台执行gamerule，也可以用nbt编辑器进行编辑，然而有些版本还会在开服读档时回退这些受限制的gamerule，所以需要在游戏内用命令方块循环执行，或者用插件或自动脚本在服务器后台执行
