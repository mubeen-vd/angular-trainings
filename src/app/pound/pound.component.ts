import { Component, ElementRef, ViewChild } from '@angular/core';

interface IFish {
  id: number;
  name: string;
  swimming: boolean;
  src: string;
  depth: number;
  speed: number;
  l2r: boolean;
}

@Component({
  selector: 'app-pound',
  templateUrl: './pound.component.html',
  styleUrls: ['./pound.component.scss', './table.scss'],
})
export class PoundComponent {
  @ViewChild("pound") poundElm: ElementRef;
  fishes: IFish[];
  constructor() {
    this.fishes = [
      {
        id: 1,
        name: 'Fish 1',
        swimming: false,
        src: 'fish1.gif',
        depth: 0,
        speed: 500,
        l2r: true,
      },
      {
        id: 2,
        name: 'Fish 2',
        swimming: false,
        src: 'fish2.gif',
        depth: 7,
        speed: 500,
        l2r: true,
      },
      {
        id: 3,
        name: 'Turtle',
        swimming: false,
        src: 'turtle.gif',
        depth: 16,
        speed: 500,
        l2r: true,
      },
    ];
  }

  start(index: number): void {
    this.fishes[index].swimming = true;
  }

  stop(index: number): void {
    this.fishes[index].swimming = false;
  }

  incSpeed(index: number): void {
    const fish = this.fishes[index];
    if(fish.speed > 50) {
      fish.speed-=50;
    }
  }

  decSpeed(index: number): void {
    this.fishes[index].speed+=50;
  }

  catchFish(i: number): void {
    this.fishes.splice(i, 1);
  }

  fishViewUpdated(fishDetails : Object) {
    const fishRect = fishDetails["elm"].getBoundingClientRect();
    const poundBoudary = this.poundElm.nativeElement.getBoundingClientRect().width - fishRect.width;
    let currentFish;
    if(this.poundElm) {
      for(var i=0; i<this.fishes.length; i++) {
        if(this.fishes[i].id == fishDetails["id"]){
          currentFish = this.fishes[i];
          break;
        }
      }

      if(currentFish) {
        if(fishRect.left >= poundBoudary) {
            fishDetails["elm"].classList.add("r2l");
            currentFish.l2r = false;
        } else if (fishRect.left < 0) {
            fishDetails["elm"].classList.remove("r2l");
            currentFish.l2r = true;
        }
      }
    }
  }
}
