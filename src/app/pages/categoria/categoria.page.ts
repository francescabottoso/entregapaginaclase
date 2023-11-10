import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIA } from 'src/app/core/constants/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute
    ) {
      activatedRoute.params.subscribe(params => {
        const categoriaEncontrada = CATEGORIA.find(categoria=> categoria.id == params['id']); //=== iguala/compara estrictamente, == iguala y lo analiza aunque sea distinto, = asignacion
        if(categoriaEncontrada) {
          this.categoriaActual = categoriaEncontrada;
        }
      })
     }

  ngOnInit() {
  }

  categoriaActual = CATEGORIA [0];

}
