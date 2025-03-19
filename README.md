# challenge-amigo-secreto
<h1>¿Como se juega?</h1>

Para iniciar el juego, solo es necesario escribir los nombres de los amigos que desear sortear, y agregarlos, uno por uno, con el botón ```Añadir```; una vez termines de agregarlos, sólo debes dar clic en ```Sortear amigos``` y empezara el juego. ¡Mucho éxito!


<h1>Reglas</h1>
- No existe número limite para añadir a los participantes.
- Debes de añadir por lo menos a DOS participantes para poder iniciar el juego.
- Una vez acabado de sortear todos los nombres, se acaba el juego.
- Para volver a iniciar, el juego, debes de recargar la paguína.
- No se vale repetir los nombres de los jugadores.
- ¡Tampoco se vale hacer trampa!



<h1>Funcionalidades</h1>

- Variable para almacenar los amigos agregados

```let listaDeAmigos = [];```

- Funciones

```agregarAmigo()```
```renderizarLista()```
```sortearAmigo()```

- Dom

```document.getElementById("amigo")```
```document.getElementById("listaAmigos")```
```innerHTML = ""```
```document.createElement("li")```
```document.getElementById("resultado")```
```document.getElementById("listaAmigos")```

- Condicionalwes

 ```if (!nombreIngresado)```
 ```if (listaDeAmigos.includes(nombreIngresado))```
 ```if (listaDeAmigos.length === 0)```

- Arrays

 ```listaDeAmigos.push(nombreIngresado)```
