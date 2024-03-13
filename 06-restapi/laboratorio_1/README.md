# Usage

Para ejecutar el Ejercicio 1:

```sh
npm run start:lab1
```

- El endpoint apunta a la API pública de Rick & Morty.
- No se ejecuta el json server.
- Tenemos un radio button en la toolbar para cambiar entre REST API y GraphQL

Para ejecutar el Ejercicio 2:

```sh
npm run start:lab2
```

- Ahora el endpoint apunta a nuestro server json que si se esta ejecutando.
- Es posible crear y borrar el campo "bestSentences" en la vista de detalle de un personaje.
- Los personajes estan limitados a los primeros 20 de la API pública.
- GraphQL no implementado

## Enunciado

### Intro

Vamos a consumir una API pública para mostrar datos de la serie Rick & Morty

Para simular escrituras vamos a utilizar un servidor local json-server

Cómo punto de entrada vamos a partir del Boilerplate

Tendrás que:

- Cambiar las escenas, rutas y pods a character-collection y character
- Actualizar el json-server

### Ejercicio 1

- Crear un proyecto en el que vamos a obtener una lista de actores de la API Rest de Rick & Morty, utilizando Axios o Fetch

- Navegando a la página de un character vamos a mostrar el detalle del mismo (segunda llamada a la API Rest).

### Ejercicio 2

- Montamos un json-server local (borramos la colección de hotels previa)

- Añadimos una colección de characters (puedes coger la información del ejercicio anterior)

- Además de los campos que ya teníamos, añadimos uno nuevo donde guardar las mejores frases de cada personaje

  - El campo se puede llamar bestSentences.
  - Podéis inicializar este nuevo campo a vacío para cada personaje.

- Reemplazar los endpoints para que apunten al json-server

- El usuario puede editar y guardar el campos bestSentences

### Opcional

- Implementar la misma aplicación (del ejercicio 1) pero tirando de la API de GraphQL

### Challenge

- Implementar paginación
- Implementar busqueda de actores
- Implementar componente para recuperar:
  - Actores
  - Lugares
  - Episodios

#### Recursos

- [Boilerplate Rest API](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/06-rest-api/01-concepts/00-boilerplate)
- [json-server](https://github.com/typicode/json-server)
- [Rick And Morty API](https://rickandmortyapi.com/)
- [Rick And Morty REST docs](https://rickandmortyapi.com/documentation/#rest)
- [Rick And Morty GraphQL Docs](https://rickandmortyapi.com/documentation/#graphql)
- [Rick And Morty GraphQL Playground](https://rickandmortyapi.com/graphql/)
