import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarios: any[] = [
    { correo: 'juan@example.com', nombre: 'Juan Pérez', cursosInscritos: ['Angular'] },
    { correo: 'maria@example.com', nombre: 'Maria García', cursosInscritos: ['React'] },
    { correo: 'pedro@example.com', nombre: 'Pedro López', cursosInscritos: ['Vue.js'] },
  ];

  getUsuarios(): any[] {
    return this.usuarios;
  }

  getUsuarioPorCorreo(correo: string): any {
    return this.usuarios.find(usuario => usuario.correo === correo);
  }
}
