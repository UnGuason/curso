import { Component, OnInit, Input, Output, EventEmitter , ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
 @Input() porcentaje: number = 50;
 @Input() leyenda: string = 'Leyenda';
 @Output()  cambiaPorcentaje: EventEmitter<number> = new EventEmitter();
 @ViewChild('txtProgress') txtProgress: ElementRef;
 constructor() {
            console.log('leyenda', this.leyenda);

      console.log('porcentaje', this.porcentaje);

     }

  ngOnInit() {
    console.log('leyenda', this.leyenda);

  }
  onChanges($event) {
    // let elementHtml : any = document.getElementsByName('porcentaje')[0];
    this.txtProgress.nativeElement.value = this.porcentaje;


    console.log('new avlaue', $event);


    if ( $event >= 100) {
      this.porcentaje = 100;
    } else if ( $event <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = $event;
    }
    // elementHtml.value = this.porcentaje;
    this.cambiaPorcentaje.emit(this.porcentaje);


  }
  incrementar() {
    this.porcentaje = this.porcentaje + 10;
    console.log(this.porcentaje);
    this.cambiaPorcentaje.emit(this.porcentaje);
}
decrementar() {
 if ( this.porcentaje <= 10  ) { return; }
 this.porcentaje = this.porcentaje - 10;
 console.log(this.porcentaje);
 this.cambiaPorcentaje.emit(this.porcentaje);

}

}
