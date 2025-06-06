# Proyecto React: Plataforma de Venta de Vehículos

Este proyecto es una plataforma web desarrollada en React para la visualización y compra de vehículos. Incluye autenticación, navegación entre páginas, listado de autos en venta y detalle de cada vehículo.

---

## Estructura de Carpetas

```
src/
│
├── components/
│   ├── Nav/
│   ├── banner/
│   ├── Brandstrip/
│   └── Cart/
│
├── pages/
│   ├── Home/
│   ├── Login/
│   └── details/
│       └── BuyCar.jsx
│
├── styles/
│   └── global/
│       └── base.scss
│
├── app.jsx
└── main.jsx
```

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd <nombre-del-repo>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## Principales Características

- **Login y Registro:**  
  Formulario de autenticación con navegación automática a la página principal tras el login.

- **Navegación:**  
  Uso de `react-router-dom` para rutas:
  - `/` → Login
  - `/home` → Página principal con listado de vehículos
  - `/buycar/:id` → Detalle de vehículo

- **Listado de Vehículos:**  
  Componente `Cart` que muestra autos en venta. Cada tarjeta tiene un botón para ver detalles.

- **Detalle de Vehículo:**  
  Página `BuyCar` que muestra información dinámica del auto seleccionado.

- **Navbar y Banner:**  
  Componentes reutilizables para navegación y presentación.

---

## Notas Técnicas

- **React Router:**  
  Solo hay un `<BrowserRouter>` en `main.jsx`.  
  Las rutas se definen en `app.jsx` usando `<Routes>` y `<Route>`.

- **Props y Estado:**  
  Se usan hooks (`useState`, `useEffect`, `useRef`, `useNavigate`, `useParams`) para manejar datos y navegación.

- **Estilos:**  
  Usa SCSS modularizado en la carpeta `styles/global`.

- **Buenas Prácticas:**  
  - Usa `className` en vez de `class` en JSX.
  - No hay rutas anidadas de routers.
  - Los datos de vehículos pueden simularse o venir de una API.

---

## Dependencias principales

- react
- react-dom
- react-router-dom
- react-icons
- sass

---

## Personalización

- Puedes modificar los datos de los autos en el componente `Cart.jsx`.
- Para conectar con una API real, reemplaza la simulación de datos en `BuyCar.jsx` por un fetch real.

---

## Recomendaciones

- Usa [React DevTools](https://reactjs.org/link/react-devtools) para depuración.
- Si ves advertencias sobre `class`, revisa que todos los atributos sean `className`.
- Si agregas nuevas rutas, recuerda definirlas en `app.jsx`.

---

## Autor

- **GitHub:** [JuanJoseBastoGonzalez](https://github.com/JuanJoseBastoGonzalez)
- **LinkedIn:** [Juan Jose Basto Gonzalez](https://www.linkedin.com/in/juan-jose-basto-gonzalez-49945023a/)


## Despliegue

El proyecto está desplegado y disponible en:  
👉 [https://juanjose.ddsr.pro/](https://juanjose.ddsr.pro/)

---

Proyecto base para prácticas de React y cloud computing.