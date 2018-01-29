import { Component, OnInit , OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-rxjs.component',
  templateUrl: './rxjs.component.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription : Subscription;
  
  constructor() {
   
 this.subscription = this.llamarObserver()
  .subscribe(
      numero => console.log('subs', numero),
      error =>  console.error('error en el obs', error),
      () =>     console.log('el observador termino')
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('destroy');
    
    
  }

  llamarObserver(): Observable<any> {
    return new Observable(observer => {
     
      let contador = 0;

      let intervalo = setInterval( () => {
        contador += 1;
        let salida = { 
          valor: contador
        };

        observer.next(salida);

        // if (contador === 10) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // } 
        // if (contador === 2 ) {
        //   observer.error('auxilio');
        // }
      }, 1000);
    }).retry(5)
    .map((res: any) => {
        return res.valor;
    }).filter( (aux, index ) => {
      if ( aux % 2 === 1) {
          return true;
      } else {
        return false;
      }
      
      
    });

  }
}
