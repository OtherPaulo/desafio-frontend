import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroProdutoService {
  private apiUrl = 'http://localhost:80/cadastro-produto';

  constructor(private http: HttpClient) {}

  cadastrarProduto(produtoData: any): Observable<any> {
    return this.http.post(this.apiUrl, produtoData);
  }

  listarProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}