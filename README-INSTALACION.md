# 🏋️ GymFlow - Instrucciones de Instalación

## ✅ Archivos Creados

Ya tienes listos estos archivos:

1. ✅ `gymflow-personal.html` - App principal
2. ✅ `manifest.json` - Manifiesto PWA
3. ✅ `service-worker.js` - Service Worker para offline
4. ✅ `service-worker-registration.html` - Script de registro

---

## 📱 Paso 1: Añadir el Service Worker Registration

Abre `gymflow-personal.html` y copia el contenido de `service-worker-registration.html` **justo antes de `</body>`** (al final del archivo).

El archivo ya tiene esta línea cerca del final:
```javascript
console.log('🚀 GymFlow iniciado correctamente');
```

Añade el código del service worker **después de esa línea**, pero **antes de** `</body>`.

---

## 🎨 Paso 2: Crear los Iconos

Necesitas 2 iconos PNG con fondo de color sólido (el color principal: #6366f1 - azul índigo):

### Opción A: Usar herramienta online (RECOMENDADO)

1. Ve a **[Favicon.io](https://favicon.io/favicon-generator/)** o **[RealFaviconGenerator](https://realfavicongenerator.net/)**

2. Sube tu logo o crea uno con texto "💪 GF" (GymFlow)

3. Configura:
   - **Background color:** `#6366f1` (azul índigo)
   - **Text:** "GF" o "💪"
   - **Font:** Arial Bold
   - **Text color:** Blanco (#ffffff)

4. Descarga los iconos y renómbralos:
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)

### Opción B: Diseño personalizado en Figma/Canva

Crea un cuadrado con:
- **Tamaño:** 512x512 px
- **Background:** #6366f1
- **Icono:** Emoji 💪 o texto "GF" centrado en blanco
- **Border radius:** 20% (esquinas redondeadas)

Exporta en:
- 512x512 como `icon-512.png`
- 192x192 como `icon-192.png`

### Opción C: Usar emoji directamente (RÁPIDO para testing)

Si solo quieres probar rápido, usa esto:

1. Ve a [Emoji to PNG](https://emoji.aranja.com/)
2. Busca el emoji 💪
3. Descarga en:
   - 192x192 → renombra a `icon-192.png`
   - 512x512 → renombra a `icon-512.png`

---

## 📁 Paso 3: Estructura de Carpetas

Organiza tus archivos así:

```
tu-proyecto/
├── gymflow-personal.html
├── manifest.json
├── service-worker.js
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

**IMPORTANTE:** Los iconos deben estar en una carpeta llamada `icons/` en la raíz.

---

## 🚀 Paso 4: Desplegar la App

### Opción A: GitHub Pages (GRATIS)

1. **Crea un repositorio en GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial GymFlow PWA"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/gymflow.git
   git push -u origin main
   ```

2. **Activar GitHub Pages:**
   - Ve a Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/root`
   - Save

3. **Tu app estará en:**
   `https://TU-USUARIO.github.io/gymflow/gymflow-personal.html`

### Opción B: Netlify (GRATIS + más fácil)

1. Ve a [Netlify](https://www.netlify.com/)
2. Arrastra tu carpeta del proyecto a Netlify Drop
3. ¡Listo! Tu app estará online en `https://nombre-random.netlify.app`

**Tip:** Renombra `gymflow-personal.html` → `index.html` para que sea la página principal.

### Opción C: Vercel (GRATIS + ultra rápido)

```bash
npm install -g vercel
vercel deploy
```

---

## 📱 Paso 5: Instalar en tu Móvil

### En iOS (Safari):

1. Abre la URL de tu app en Safari
2. Toca el botón **Compartir** (cuadrado con flecha hacia arriba)
3. Scroll hacia abajo y toca **"Añadir a pantalla de inicio"**
4. Toca **"Añadir"**
5. ¡La app aparecerá en tu pantalla de inicio! 🎉

### En Android (Chrome):

1. Abre la URL de tu app en Chrome
2. Verás un banner automático: **"Instalar GymFlow"**
3. Toca **"Instalar"**
4. O usa el menú: **⋮ → Instalar aplicación**
5. ¡La app aparecerá en tu cajón de apps! 🎉

---

## ✅ Checklist de Verificación

Antes de ir al gym, verifica:

- [ ] Los iconos se ven correctamente (no broken image)
- [ ] El manifest.json carga sin errores (ver DevTools → Application → Manifest)
- [ ] El service worker se registró (DevTools → Application → Service Workers)
- [ ] La app funciona offline (DevTools → Network → Offline)
- [ ] Puedes instalar la app en tu móvil
- [ ] El timer de descanso funciona con sonido/vibración
- [ ] Los datos se guardan con auto-save

---

## 🧪 Testing en el Gym

**Primera prueba (30 min):**

1. Instala la app en tu móvil
2. Ve al gym
3. Activa **modo avión** (para probar offline)
4. Selecciona el día de hoy (ej: Día 1 - Pecho)
5. Empieza el primer ejercicio
6. Registra 2-3 series
7. Prueba el timer de descanso
8. Verifica que los datos se guardan

**Segunda prueba (workout completo):**

1. Haz tu entrenamiento completo usando la app
2. Toma notas de:
   - ¿Qué funciona bien?
   - ¿Qué es incómodo?
   - ¿Los inputs son suficientemente grandes?
   - ¿El timer ayuda o molesta?
   - ¿Necesitas cambiar algo?

---

## 🐛 Problemas Comunes

### "No puedo instalar la app"
- Verifica que estés en **HTTPS** (no http://)
- GitHub Pages y Netlify son HTTPS por defecto
- Si usas localhost, necesitas `https://` o cambiar a un hosting real

### "El service worker no se registra"
- Abre DevTools → Console
- Busca errores en rojo
- Verifica que `service-worker.js` esté en la raíz
- Refresca con Ctrl+Shift+R (hard reload)

### "Los iconos no cargan"
- Verifica la ruta: debe ser `/icons/icon-192.png`
- Revisa que los archivos PNG no estén corruptos
- Usa herramienta online para verificar el PNG

### "No funciona offline"
- Verifica que el service worker se haya instalado
- DevTools → Application → Service Workers → debe decir "activated"
- Prueba: Network tab → Offline checkbox → refresca

---

## 🎯 Próximos Pasos

Una vez que hayas probado la app en el gym durante 1-2 semanas:

### Si funciona bien:
✅ Migrar a React + TypeScript (siguiendo el plan técnico)
✅ Añadir videos cortos de ejercicios
✅ Implementar gráficas de progreso
✅ Añadir Supabase para sync en la nube

### Si necesita ajustes:
🔧 Hacer cambios en el HTML directamente
🔧 Iterar rápido basándote en tu experiencia real
🔧 No perder tiempo en features que no uses

---

## 💪 ¡Listo para Entrenar!

Tu app está **100% funcional** y lista para el gym.

**Siguiente paso inmediato:**
1. Genera los iconos (5 minutos)
2. Sube todo a Netlify (5 minutos)
3. Instala en tu móvil (2 minutos)
4. ¡Ve al gym y pruébala! 🏋️

---

**Contacto para dudas:**
- Revisa la consola del navegador (F12)
- Verifica DevTools → Application → Service Workers
- Comprueba que todos los archivos estén en HTTPS

¡Mucho éxito con tu app! 💪🔥
