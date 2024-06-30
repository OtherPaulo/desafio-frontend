import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {
  private apiUrl = 'http://localhost:80/usuarios';

  constructor(private http: HttpClient) {}

  cadastrarUsuario(usuarioData: any): Observable<any> {
    return this.http.post(this.apiUrl, usuarioData);
  }
}
