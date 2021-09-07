import { Component, OnInit } from '@angular/core';
import { UsuarioGitService } from 'src/app/services/usuario-git.service';
import { UsuarioGitDetalhe } from 'src/models/usuarioGitDetalhe.model';
import { UsuarioGitRepositorio } from 'src/models/usuarioGitRepositorio.model';

@Component({
  selector: 'app-usuario-git',
  templateUrl: './usuario-git.component.html',
  styleUrls: ['./usuario-git.component.css']
})
export class UsuarioGitComponent implements OnInit {
  usuarios: any;
  usuario: any;
  repositorios: any;
  erro : any;
  public mode = 'list';
  constructor(private usuarioGit: UsuarioGitService) {
    this.get();
   }
  ngOnInit(): void {  }

  get(){
    this.usuarioGit.getUsuarios().subscribe((data: UsuarioGitDetalhe) => {
      this.usuarios = data;
      console.log('O data que recebemos', data);
      console.log('Avarial que preenchemos',this.usuarios);

    }, (error : any) =>{
        this.erro = error;
        console.error('ERRO',error);
    });
  }

  getPorLogin(login:string){
    this.usuario = new  UsuarioGitDetalhe();
    this.usuarioGit.getPorLogin(login).subscribe((data: UsuarioGitDetalhe) => {
      this.usuario = data;
      console.log('O data que recebemos do usuario', data);
      console.log('Avarial que preenchemos do usuario',this.usuarios);
      this.getrepositorioPorLogin(login);
    }, (error : any) =>{
        this.erro = error;
        console.error('ERRO do usuario',error);
    });
    this.changeMode("add");
  }

  getrepositorioPorLogin(login:string){
      this.repositorios = new UsuarioGitRepositorio();  
      this.usuarioGit.getRepositoriosPorLogin(login).subscribe((data: UsuarioGitRepositorio) => {
      this.repositorios = data;
      console.log('O data que recebemos o repositorio', data);
      console.log('Avarial que preenchemos o repositorio',this.repositorios);

    }, (error : any) =>{
        this.erro = error;
        console.error('ERRO do usuario',error);
    });
  }

  fechar()
  {
    this.get();
    
    this.mode='list';
  }

  changeMode(mode: string)
  {
    this.mode = mode;
  }

}
