import { Component } from '@angular/core';
import { UsuarioService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private usuariosService: UsuarioService) {

    this.usuariosService.obtenerUsuario()
        .subscribe( resp => {

          console.log( resp );

        }, (err) => {
          console.log('Error en el AppComponent');
        });
  }
}
