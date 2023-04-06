/**
 * Clase Frase representa una frase y su clave asociada.
 */
export class Frase {
  key: string; // La clave asociada a la frase
  value: string; // La frase en sí

  /**
   * Crea una instancia de Frase.
   * @param key La clave asociada a la frase.
   * @param value La frase en sí.
   */
  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }

  /**
   * Devuelve la clave asociada a la frase.
   * @returns La clave asociada a la frase.
   */
  public getkey(): string {
    return this.key;
  }
}
