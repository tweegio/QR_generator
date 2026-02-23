# Generator QR — Generador de Códigos QR

Aplicación web para generar códigos QR a partir de cualquier texto o URL. Herramienta pensada para locales, oficinas, hoteles y emprendimientos que necesitan compartir información de forma rápida y sin fricción.

🔗 **Demo en vivo:** [tweegio.github.io/QR_generator](https://tweegio.github.io/QR_generator/)

---

## Vista previa

![Generator QR Preview](logoQr.png)

---

## ¿Qué problema resuelve?

Compartir información física — precios, ubicaciones, instrucciones, enlaces — requiere que el usuario la escriba manualmente o la recuerde. Un código QR elimina esa fricción: se imprime, se coloca donde sea necesario, y cualquier persona con un celular accede al instante. Esta app permite generar esos códigos sin registros, sin costo y sin pasos innecesarios.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript vanilla
- API externa de generación de QR

---

## Funcionalidades

- Campo de texto libre para ingresar cualquier **texto o URL**
- Botón **Generar código QR** — genera la imagen del QR al instante
- Botón **Borrar texto** — limpia el campo para una nueva generación
- Sección **¿Cómo funciona?** con casos de uso explicados
- Diseño responsivo, usable desde cualquier dispositivo

---

## Casos de uso documentados

- Generar un QR con un enlace para compartir
- Identificar el contenido de un estante o archivero
- Indicar la funcionalidad de un artefacto o electrodoméstico
- Señalizar la ubicación de un objeto o lugar
- Mostrar el valor o precio de un producto
- Brindar información a clientes, visitas u huéspedes en hoteles, locales u oficinas

---

## Estructura del proyecto

```
/
├── index.html
├── logoQr.png
├── css/
│   └── styles.css
└── js/
    └── script.js
```

---

## Decisiones técnicas

**Generación de QR del lado del cliente.** La imagen del QR se genera directamente en el navegador usando la librería `qrcodejs` (via CDN),
sin llamadas a servidores externos. Esto garantiza que la app funcione sin backend, sea instantánea y deployable como sitio estático en
GitHub Pages.**

**Interfaz minimalista con foco en la tarea.** El flujo es deliberadamente simple: escribís, generás, usás. Sin pasos intermedios ni registro requerido. El diseño está pensado para que cualquier usuario, sin experiencia técnica, pueda generar un QR en menos de 10 segundos.

**Sección de casos de uso integrada.** En lugar de asumir que el usuario sabe para qué sirve un código QR, el sitio incluye una sección explicativa orientada a los perfiles más comunes de usuarios finales: comerciantes, hoteles, oficinas.

**Sin backend.** La generación del QR se delega a una API externa, manteniendo el proyecto completamente estático y deployable en GitHub Pages sin ninguna configuración de servidor.

---

## Cómo correrlo localmente

```bash
git clone https://github.com/tweegio/QR_generator.git
cd QR_generator
# Abrí index.html en tu navegador o usá Live Server en VS Code
```

No requiere instalación de dependencias ni build process.

---

## Autor

**Sergio Pereira** — Desarrollador Front-End & Técnico Informático

- 🌐 [Portfolio](https://tweegio.github.io/portfolio)
- 💼 [LinkedIn](https://www.linkedin.com/in/sergio-pereira-development/)
- 🐙 [GitHub](https://github.com/tweegio)

---

*© 2024 Tweegio*
