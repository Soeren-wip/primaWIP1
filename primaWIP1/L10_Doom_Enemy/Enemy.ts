namespace L10_Doom_Enemy {
  import ƒ = FudgeCore;

  export class Enemy extends GameObject {
    private static readonly meshQuad: ƒ.MeshQuad = new ƒ.MeshQuad();

    public constructor(_name: string, _size: ƒ.Vector2, _position: ƒ.Vector3, _rotation: ƒ.Vector3) {
      super(_name);
      this.addComponent(new ƒ.ComponentTransform(ƒ.Matrix4x4.TRANSLATION(_position)));
      this.mtxLocal.rotation = _rotation;

      let cmpQuad: ƒ.ComponentMesh = new ƒ.ComponentMesh(GameObject.meshQuad);
      this.addComponent(cmpQuad);
      cmpQuad.pivot.scale(_size.toVector3(1));


      //showto in richtung spieler schauen
      //ray vom avatar zum gegner
      //wenn ray auf wand trifft  (zwischen spieler und gegner) sieht er den spieler nicht
    }
  }
}