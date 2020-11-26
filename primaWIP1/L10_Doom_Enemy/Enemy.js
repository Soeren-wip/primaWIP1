"use strict";
var L10_Doom_Enemy;
(function (L10_Doom_Enemy) {
    var ƒ = FudgeCore;
    class Enemy extends L10_Doom_Enemy.GameObject {
        constructor(_name, _size, _position, _rotation) {
            super(_name);
            this.addComponent(new ƒ.ComponentTransform(ƒ.Matrix4x4.TRANSLATION(_position)));
            this.mtxLocal.rotation = _rotation;
            let cmpQuad = new ƒ.ComponentMesh(L10_Doom_Enemy.GameObject.meshQuad);
            this.addComponent(cmpQuad);
            cmpQuad.pivot.scale(_size.toVector3(1));
            //showto in richtung spieler schauen
            //ray vom avatar zum gegner
            //wenn ray auf wand trifft  (zwischen spieler und gegner) sieht er den spieler nicht
        }
    }
    Enemy.meshQuad = new ƒ.MeshQuad();
    L10_Doom_Enemy.Enemy = Enemy;
})(L10_Doom_Enemy || (L10_Doom_Enemy = {}));
//# sourceMappingURL=Enemy.js.map