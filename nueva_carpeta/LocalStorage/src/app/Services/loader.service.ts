import { Storage } from '@ionic/storage-angular'; // Importa la librería de Ionic para almacenamiento
import { Injectable } from '@angular/core'; // Importa la clase Injectable de Angular

@Injectable({ // Define la clase como inyectable
  providedIn: 'root',
})
export class LoaderService {

  constructor(private storage:Storage) { // Constructor de la clase, recibe la variable de almacenamiento
    this.initstorage(); // Inicializa el almacenamiento
  }

  // Función privada para inicializar el almacenamiento
  private async initstorage(){
      await this.storage.create(); // Crea el almacenamiento
  }

  // Función pública para guardar un valor en el almacenamiento
  public save(key:string, value:string){
    return this.storage.set(key,value) // Almacena el valor y devuelve la promesa
  }

  // Función pública para cargar un valor del almacenamiento
  public async load(key:string):Promise<string>{
    return new Promise<string>((resolve,reject)=>{ // Devuelve una promesa que resuelve el valor cargado
      this.storage.get(key).then((text)=>{
        resolve(text);
      })
    })
  }
}
