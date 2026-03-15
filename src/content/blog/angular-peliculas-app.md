---
title: 'Angular Películas App'
description: 'Aplicación Web de Peliculas con Angular y ASP.NET Core'
pubDate: 'Mar 10 2025'
heroImage: '/AngularPeliculas.png'
tags: ['Angular', 'ASP.NET Core', 'TypeScript', 'SQL Server', 'JWT']
githubUrl: 'https://github.com/retak1ng/peliculas-angular-app'
demoUrl: 'https://peliculas-angular-app.vercel.app'
---

# 🎥 

Aplicación web para la gestión de películas, desarrollada con **Angular** en el frontend y **ASP.NET Core** en el backend. Este proyecto incluye funcionalidades avanzadas como autenticación, paginación, manejo de imágenes y más.

---

## 🚀 Características Principales

### Frontend (Angular)
- **Interpolación**: Uso de `{{ element }}` para mostrar variables y resultados de funciones en la interfaz de usuario.
- **Directivas estructurales modernas**: Uso de `@For` y `@If` para manipular el DOM dinámicamente.
- **Componentes reutilizables**: Comunicación entre componentes mediante `@Input` y `@Output`.
- **Angular Material**: Implementación de iconos y componentes visuales modernos.
- **Ruteo avanzado**: Configuración de navegación con parámetros de ruta y manejo de rutas inexistentes mediante `Wildcard`.
- **Paginación**: Mejora de la experiencia del usuario al dividir grandes volúmenes de datos.
- **Variables de ambiente**: Configuración separada para entornos de desarrollo y producción.
- **Interceptores HTTP**: Inclusión automática de tokens de autenticación en cada solicitud HTTP.
- **Claims**: Gestión de roles y permisos para usuarios (administradores, usuarios regulares, etc.).

### Backend (ASP.NET Core)
- **Web API**: Creación de endpoints RESTful para la comunicación con el frontend.
- **Entity Framework Core**: Uso de ORM para la creación y gestión de la base de datos.
- **Autenticación e identidad**: Sistema de usuarios con **Identity** para facilitar el registro, inicio de sesión y autorización.
- **Almacenamiento de imágenes**: Soporte para guardar imágenes tanto en **Azure Storage** como localmente.

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Angular**: Framework para aplicaciones web SPA.
- **TypeScript**: Lenguaje tipado para un desarrollo más robusto.
- **Angular Material**: Biblioteca de componentes UI.
- **SweetAlert2**: Para notificaciones y alertas visualmente atractivas.

### Backend
- **ASP.NET Core**: Framework para la creación de APIs robustas y escalables.
- **Entity Framework Core**: ORM para la interacción con bases de datos.
- **SQL Server**: Base de datos relacional.

### Otros
- **Azure Storage**: Almacenamiento en la nube para imágenes.
- **JWT (JSON Web Tokens)**: Para autenticación segura.

---

## 📖 Funcionalidades Detalladas

1. **Gestión de Películas**:
   - Crear, editar y eliminar películas.
   - Listar películas con paginación.
   - Subida y visualización de imágenes asociadas.

2. **Autenticación y Autorización**:
   - Registro e inicio de sesión de usuarios.
   - Roles y permisos basados en **Claims**.

3. **Conexión Frontend-Backend**:
   - Comunicación fluida entre Angular y la Web API de .NET.

4. **Manejo de Errores**:
   - Control de errores en solicitudes HTTP.
   - Mensajes de error amigables para el usuario.

5. **Optimización para Producción**:
   - Configuración de variables de entorno.
   - Compilación optimizada con Angular CLI.

---
