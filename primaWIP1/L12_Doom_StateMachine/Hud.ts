namespace L12_Doom_StateMachine{
    export class Hud{
      public static displayPosition(_position: ƒ.Vector3):void {
          let divPosition: HTMLDivElement = document.querySelector("div#position");
          divPosition.innerHTML = _position.toString();
      }

      public static displayCrosshair(_active: boolean):void {
        let divCrosshair: HTMLDivElement = document.querySelector("div#crosshair");
          if (_active)
            divCrosshair.innerHTML = "X";
          else
          divCrosshair.innerHTML = "x";
      }

      public static updateAmmoDisplay(_ammo: Number){
        let divAmmo: HTMLDivElement = document.querySelector("div#ammo");
        divAmmo.innerHTML = _ammo.toString();
      }
    }
}