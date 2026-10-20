# Imperio Comercial — Contrato visual y técnico

Referencia aprobada: captura adjunta por el usuario (1536×1024), 2026-10-19. **No sustituir por salas genéricas.**

## Criterios de aceptación de la primera entrega
- Escena principal: salón del alto mando con **múltiples niveles**, escaleras, balcones, barandales, columnas de mármol, ornamentos dorados, banderas navy/carmesí, vitrales y luz cálida.
- Composición: Director Regional en escritorio central superior; analista Cornell a la izquierda; estratega de cierres al centro; coach y Meta Ads a la derecha; globo imperial en plataforma inferior central.
- Avatares: sprites independientes, sin personajes pintados en el escenario; 4 direcciones mínimas, idle/walk/sit/work; uniformes inspirados en Britannia; orden de profundidad por coordenada del pie.
- Interfaces: barra horizontal superior; mapa/salones a la izquierda; personalización abajo izquierda; chat/tareas/actividad a la derecha; accesos Panamá, Colombia, Venezuela abajo.
- Requisitos de jugabilidad: colisión contra mobiliario, rutas por escaleras y entre plataformas, hotspots en escritorios, cambio de sala.
- Integraciones: nunca presentar tareas ficticias como trabajo real. Persistencia centralizada, permisos, bitácora de auditoría y credenciales en servidor.

## Arquitectura artística
1. Escenario **sin personajes** pintado por capas: suelo, muros, columnas, escaleras, muebles de fondo, muebles de primer plano y luces.
2. Cada capa como atlas de sprites con transparencia y coordenadas de mundo. No utilizar captura completa como fondo.
3. Agentes como spritesheets con frames consistentes y pivote en los pies; todos comparten escala y sombreado.
4. Mapa de navegación separado de ilustración, con tiles transitables, obstáculos, alturas y enlaces de escaleras.
5. Herramienta de validación: superponer captura del render con la referencia a igual resolución y comparar visualmente, región por región.

## Restricciones
- No usar el arte de Habbo ni de Code Geass extraído de juegos/anime; crear assets originales inspirados en sus lenguajes visuales.
- La referencia contiene personajes, globos y texto: NO recortar personajes y dejarlos duplicados en el escenario.
- No declarar completada una fase sin capturas reales del resultado y verificación de interacción.

## Hitos
A. Producción de atlas original de arquitectura, muebles y suelo del Alto Mando.
B. Integración en Phaser y navegación por niveles.
C. Sprite sheets de los cinco agentes y editor de apariencia.
D. Chat, tareas persistentes y flujos IA.
E. Países y servicios externos.

**Estado actual:** prototipo Canvas publicado; fidelidad visual NO aprobada. Este documento fija el alcance, no constituye entrega artística.
