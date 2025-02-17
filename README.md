This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# API REST de Países - Versión de Next.js
#### 1. **Descripción del Proyecto**

Este proyecto es una API REST para acceder a datos de países, construida con Next.js y Redux Toolkit Query. Simplifica la manera en que los usuarios pueden buscar y explorar información sobre países de todo el mundo.

#### 2. **Descripción de la Arquitectura**

El proyecto utiliza [Next.js Documentation](https://nextjs.org/docs) para el renderizado del lado del servidor y la gestión de rutas, mejorando el rendimiento y las capacidades SEO. - [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview) se emplea para la obtención de datos y la gestión del estado, permitiendo llamadas a la API eficientes y minimizando la complejidad del código.

Las principales decisiones arquitectónicas incluyen:
- Componentes reutilizables: Se diseñaron componentes como la tarjeta de país, el cuadro de búsqueda y el filtro de regiones para mejorar la   mantenibilidad.
- Diseño responsivo: Se garantiza una buena experiencia en diferentes dispositivos.
- Redux Toolkit Query: Maneja las solicitudes a la API y la gestión del estado global de los datos.

#### 3. **Características**

La funcionalidad principal incluye:
- Un cuadro de búsqueda para que los usuarios busquen países específicos.
- Un menú desplegable para filtrar países según las regiones.
- Modo oscuro/claro para mejorar la experiencia de usuario.
- Información detallada de cada país, incluyendo información relevante y la posibilidad de navegar a países limítrofes.

#### 4. **Permisos del Usuario**

Los usuarios deberían poder:
- Ver una lista completa de los países en la página principal.
- Filtrar países por región y realizar búsquedas por texto.
- Hacer clic en una tarjeta de un país para acceder a una página de información detallada.
- Navegar a los países limítrofes desde la página de detalles de un país.
- Alternar entre esquemas de color claro y oscuro.

#### 5. **Instrucciones de Instalación**
## Instalación

Para configurar este proyecto localmente, sigue estos pasos:
1. Clona el repositorio:
git clone git@github.com:
2. Navega al directorio del proyecto:
cd countries-api
3. Instala las dependencias:
npm install
4. Ejecuta la aplicación:
npm run dev
yarn dev

Open [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

#### 6. **Aprendizajes Clave**
### Lo Que Aprendí

- **Directorio de Aplicaciones en Next.js**: El directorio de aplicaciones en Next.js ayuda a organizar rutas y rutas anidadas de manera intuitiva.

- **Redux Toolkit Query**: RTK Query gestiona de manera eficiente el proceso de obtención de datos, simplificando el código al eliminar la necesidad de `useEffect` para llamadas a la API. Al proporcionar una URL base y definir puntos finales específicos, pude obtener de manera eficiente datos de todos los países y detalles de un país en particular.

- **Optimización**: Rendimiento con carga diferida de datos y diseño de esqueleto.