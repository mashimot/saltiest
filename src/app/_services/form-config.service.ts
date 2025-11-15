import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs";
interface Config {
  previewMode: boolean;
}
//Enviando parametros para componentes diferentes com Subject (Tópico, Assunto)
@Injectable({
  providedIn: "root",
})
export class FormConfigService {
  // Instância o objeto Subject
  newFormConfigSubject = new BehaviorSubject<any>([]);

  constructor() {}

  setConfig(config: Config) {
    console.log(config);
    //Armazena o parametro que foi enviado
    this.newFormConfigSubject.next(config);
  }

  getConfig() {
    //Fica "observando" por atualizações nos dados
    return this.newFormConfigSubject.asObservable();
  }
}
