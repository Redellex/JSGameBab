var Player = class {
    x; y;
    PlayerModel;
    
    constructor(){
        this.x = 0;
        this.y = 0;
        this.PlayerModel = BABYLON.MeshBuilder.CreateBox("Player", {size:1}, scene);
        var PlayerMaterial = new BABYLON.StandardMaterial("Player", scene);
        PlayerMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0.5);
        PlayerMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
        PlayerMaterial.emissiveColor = new BABYLON.Color3(0.25, 0, 1);
        PlayerMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
        this.PlayerModel.material = PlayerMaterial


        this.Move(this.x, this.y)
    };

    Move(x, y){
        this.x = x;
        this.y = y;

        this.PlayerModel.position = new BABYLON.Vector3(this.x, this.y, 2);
    };


}