var GameArea = class {
    CreateGameArea() {
        for(var row = -12; row < 12; row++){
            for(var column = -8; column < 8; column++){
            const box = BABYLON.MeshBuilder.CreateBox("Box" + row +"x" + column, {size:1}, scene);
            box.position = new BABYLON.Vector3(row *1.2, column*1.2, 0);
            }
        }
    }
};
