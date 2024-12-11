//Datos de la Api
export interface Personajes{
    nombre: string;
    habilidades: string;
    vida: number;
    funcion: string;
    imagen: string;
    //descripcion no viene en la api por que se agregara la informacion manualmente
    descripcion?: string;//el signo de interrogacion hace saber que esta propiedad puede estar presente o no
}