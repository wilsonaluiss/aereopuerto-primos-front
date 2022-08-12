import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo?: string;
  public tituloSubs$: Subscription;

  constructor(private router: Router) { 
    this.tituloSubs$ = this.getArgumentos().subscribe(({titulo}) => {
      this.titulo = titulo;
      document.title = `Los Primos - ${titulo}`;
    } );
  }

  ngOnDestroy(): void {
      this.tituloSubs$.unsubscribe();
  }

  getArgumentos() {
    return this.router.events.pipe(
      filter((evento: any) => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }
  

}
