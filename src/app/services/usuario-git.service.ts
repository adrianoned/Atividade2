import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGitService {
  constructor(private http: HttpClient) { 
  }

  public getUsuarios():Observable<any>
  {
    
    return this.http.get(`${API_PATH}users`);
  }

  public getPorLogin(login:string):Observable<any>
  {
    return this.http.get(`${API_PATH}users/${login}`);
  }


  public getRepositoriosPorLogin(login:string):Observable<any>
  {
    return this.http.get(`${API_PATH}users/${login}/repos`);
  }
}