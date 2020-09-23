import { Component, Input, SimpleChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss'],
})
export class FishComponent {
  @Input() id: number;
  @Input() speed: number;
  @Input() depth: number;
  @Input() src: string;
  @Input() name: string;
  @Input() isSwimming: boolean;
  @Input() isL2R: boolean;

  @ViewChild("myImg") fishElm: ElementRef;
  @Output() viewUpdated = new EventEmitter<Object>();

  private swimming;
  left: number;

  constructor() {
    this.left = 0;
    this.depth = 0;
    this.swimming = null;
  }

  ngOnChanges( changes : SimpleChanges) {
    clearInterval(this.swimming);
    this.swim();
  }

  swim() {
    this.swimming =setTimeout(() => {
      if(this.isSwimming) {
        this.isL2R ? this.left++ : this.left--;
        this.swim();
      }
    }, this.speed);
  }

  ngAfterViewChecked() {
    this.viewUpdated.emit({
        id : this.id,
        elm : this.fishElm.nativeElement
      });
  }

  ngDestroy(){
    clearInterval(this.swimming);
  }

}
