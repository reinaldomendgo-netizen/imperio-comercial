# Imperio Comercial · motor isométrico (prototipo funcional)

Aplicación Node.js sin dependencias externas. Ejecutar con Node 20+.

```bash
git clone https://github.com/reinaldomendgo-netizen/imperio-comercial.git
cd imperio-comercial
npm start
```

Abrir http://localhost:3030

## Funcional
- Escenario isométrico dibujado en Canvas con casillas y profundidad.
- Cinco personajes pixel-art independientes, seleccionables, movimiento por clic y rutas que evitan muebles.
- Navegación horizontal: Oficina, Mi Panel, Pipeline, Tareas, Agentes, Biblioteca, Telegram.
- API local para registrar tareas, cambiar estados y consultar agentes.
- Chat con OpenAI Responses API si existe OPENAI_API_KEY en el entorno. Sin clave indica modo local.
- No usa librerías ni necesita npm install.

## Pendiente para cumplir el diseño definitivo
- Sustituir escenario de prueba por la **sala original aprobada** reconstruida en capas, sin incrustar personajes.
- Sprites de 4/8 direcciones, animaciones de sentarse/trabajar/hablar y editor de apariencia.
- Oficinas independientes por país.
- Persistencia de tareas (ahora se pierden al reiniciar servidor).
- Telegram real, integraciones Odoo/Mercately/Meta y delegación autónoma entre agentes.

**Este commit es una primera base jugable, no la versión visual final.** No subir claves al repositorio.

## Desarrollo
Para ejecutar desde un proyecto local existente que usa el puerto 3030, detener primero el servidor con Ctrl+C.
