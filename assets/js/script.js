// Implementar ES6 para toda la estructura del código.
// Crear una función asíncrona para obtener los datos de la URL.
const getUrlData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos'; 
    // bloque Try
    try {
        const response = await fetch(url); //método fetch mediante la instrucción await
        const data = await response.json(); 
        //método forEach) para mostrar solamente los primeros 20 títulos de los datos recibidos.
        data.forEach((element) => { 
            if (element.id > 0 && element.id < 21) { 
                console.log(element.title) } 
        }); 
    } catch (error) { // bloque Catch
        console.error('Error al obtener datos:', error);
        throw error; // Manejamos el error y lo propagamos
    }
}
//Crear una función que retorne una promesa después de tres (3) segundos utilizando setTimeout. 
//El mensaje a retornar debe ser un string que indique: “Información Enviada”.
const promise1 = () => {
    return new Promise((resolve) => {
    setTimeout(() => { resolve("Información Enviada") }, 3000);
})
};

//Crear una función asíncrona que permita recibir el mensaje de la promesa creada en el requerimiento cinco (5), 
//de forma directa con await, para ser mostrado en la consola del navegador, agregando el llamado a las dos funciones principales.
const reciveMessage = async () => {
    getUrlData();
    let resultado = await promise1(); 
    console.log(resultado);
}

reciveMessage();


