import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderService } from '../Services/loader.service';

@Component({
  selector: 'app-home', // Nombre del selector que se usará para agregar el componente a la página HTML
  templateUrl: 'home.page.html', // Ruta de la plantilla HTML asociada al componente
  styleUrls: ['home.page.scss'], // Ruta de los estilos CSS asociados al componente
  standalone: true, // Define si el componente es autónomo o no
  imports: [IonicModule,FormsModule,ReactiveFormsModule], // Importación de los módulos necesarios para el componente
})
export class HomePage {
  
  public alertButtons = ['OK'];

  receivetext:string; // Variable para almacenar el texto recibido desde el input
  recovertext:string; // Variable para almacenar el texto recuperado del almacenamiento local
  /**Esta parte del código es el constructor de una clase que utiliza el servicio LoaderService en Angular. 
   * El constructor tiene dos variables privadas, "loader" y "this". "loader" es una instancia del servicio LoaderService, 
   * mientras que "this" se refiere a la instancia actual de la clase.
     Dentro del constructor, se inicializan dos variables de clase, 
     "receivetext" y "recovertext", ambas asignadas a una cadena vacía. 
     Estas variables se utilizan probablemente para almacenar datos que se reciben y recuperan en la aplicación, 
     respectivamente.
     En resumen, el constructor de esta clase inicializa las variables de clase "receivetext" y "recovertext" y utiliza el servicio LoaderService.
   */
  constructor(private loader:LoaderService) {
    this.receivetext="";
    this.recovertext="";
  }

  async ngOnInit() {
    this.recovertext = await this.loader.load("test"); // Recupera el texto guardado con la clave "test" del almacenamiento local y lo asigna a la variable recovertext
  }

  async print(){
    if(this.receivetext){ // Si hay texto en la variable receivetext
      this.loader.save("test",this.receivetext); // Guarda el texto en el almacenamiento local con la clave "test"
      this.recovertext = this.receivetext; // Asigna el valor de la variable receivetext a la variable recovertext
      this.receivetext=""; // Limpia la variable receivetext
    }
  }
}

