# 💪 GymFlow - PWA

Aplicación Progressive Web App para tracking de entrenamientos de gimnasio con rutina personalizada de 5 días

**Desarrollado por:** Emilio Neva

## 🚀 Cómo desplegar en GitHub Pages

### Paso 1: Generar los iconos

Necesitas crear 2 iconos para la app. Usa cualquiera de estas opciones:

**Opción A: Generador incluido (Más rápido)**
1. Abre `icon-generator.html` en tu navegador
2. Haz clic en los 2 botones de descarga
3. Se descargarán `icon-192.png` y `icon-512.png` automáticamente
4. Mueve los archivos descargados a la carpeta `icons/`

**Opción B: PWA Asset Generator**
1. Ve a: https://www.pwabuilder.com/imageGenerator
2. Sube una imagen cuadrada (mínimo 512x512px) - emoji 💪 o diseño personalizado
3. Descarga los iconos generados
4. Copia `icon-192.png` e `icon-512.png` a la carpeta `icons/`

**Opción C: Herramienta online simple**
1. Ve a: https://www.favicon-generator.org/
2. Sube una imagen con tema fitness/gym
3. Descarga los iconos de 192x192 y 512x512
4. Renómbralos a `icon-192.png` e `icon-512.png`
5. Cópialos a la carpeta `icons/`

### Paso 2: Crear repositorio en GitHub

1. Ve a: https://github.com/new
2. Click en "New repository" (botón verde)
3. Nombre: `gymrat` (o el nombre que prefieras)
4. Descripción: "PWA para tracking de entrenamientos de gimnasio"
5. Público (para GitHub Pages gratis)
6. NO marques "Add a README file"
7. Click "Create repository"

### Paso 3: Subir archivos

**Opción A: Usando línea de comandos**
```bash
cd gymrat
git init
git add .
git commit -m "Initial commit - GymFlow PWA"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/gymrat.git
git push -u origin main
```

**Opción B: Usando GitHub Desktop (Fácil)**
1. Descarga GitHub Desktop: https://desktop.github.com/
2. Instala y loguéate con tu cuenta
3. File → Add Local Repository
4. Selecciona la carpeta `gymrat`
5. Click "Publish repository"
6. Desmarca "Keep this code private"
7. Click "Publish repository"

**Opción C: Usando la interfaz web de GitHub**
1. Ve al repositorio recién creado
2. Click "uploading an existing file"
3. Arrastra todos los archivos de la carpeta `gymrat`
4. Commit changes

### Paso 4: Activar GitHub Pages

1. Ve a tu repositorio: https://github.com/TU-USUARIO/gymrat
2. Click en "Settings" (arriba a la derecha)
3. En el menú izquierdo, click "Pages"
4. En "Source", selecciona "main" branch
5. Carpeta: / (root)
6. Click "Save"
7. Espera 1-2 minutos

### Paso 5: Acceder a tu app

Tu app estará disponible en:
```
https://TU-USUARIO.github.io/gymrat/
```

**⚠️ IMPORTANTE:** Si cambias el nombre del repositorio, actualiza también:
- `manifest.json` → líneas 5 y 10 (start_url y scope)
- `service-worker.js` → líneas 6-8 (urlsToCache)
- `index.html` → línea 1270 (registro del service worker)

## 📱 Instalar en tu móvil

### iOS (Safari)
1. Abre la URL en Safari
2. Toca el botón Compartir (cuadrado con flecha hacia arriba)
3. Scroll hacia abajo → "Añadir a pantalla de inicio"
4. Toca "Añadir"

### Android (Chrome)
1. Abre la URL en Chrome
2. Aparecerá un banner automático: "Instalar GymFlow"
3. Toca "Instalar"
4. O usa el menú: ⋮ → "Instalar aplicación"

## 💪 Características

- ✅ **Rutina de 5 días personalizable**
  - Día 1: Pecho
  - Día 2: Piernas
  - Día 3: Espalda
  - Día 4: Bíceps y Hombro
  - Día 5: Bíceps y Tríceps

- ✅ **Tracking completo**
  - Registro de peso y repeticiones
  - Historial de series completadas
  - Referencia a último workout
  - Resumen de volumen total

- ✅ **Timer de descanso**
  - Automático después de cada serie
  - Configurable por ejercicio
  - Notificaciones y vibración

- ✅ **Enlaces a videos de técnica**
  - Link directo a YouTube para cada ejercicio
  - Búsquedas específicas de técnica

- ✅ **Funciona 100% offline**
  - Service Worker con cache
  - Datos guardados en localStorage
  - No requiere conexión para entrenar

- ✅ **Instalable como app nativa**
  - PWA completa
  - Funciona en iOS y Android
  - Sin necesidad de App Store

## 🏗️ Estructura del proyecto

```
gymrat/
├── index.html              # App principal (HTML + CSS + JS)
├── manifest.json           # Configuración PWA
├── service-worker.js       # Service Worker para offline
├── icon-generator.html     # Generador de iconos
├── icons/                  # Iconos de la app
│   ├── icon-192.png
│   └── icon-512.png
├── .gitignore
├── README.md              # Este archivo
├── README-INSTALACION.md  # Guía de instalación detallada
├── GUIA-RAPIDA.md         # Guía rápida de uso
└── RESUMEN-FINAL.md       # Resumen del proyecto
```

## 🔄 Actualizar la app

Cuando hagas cambios:

1. **IMPORTANTE:** Incrementa la versión en `service-worker.js`:
   ```javascript
   const CACHE_NAME = 'gymflow-v2'; // Cambia v1 → v2, v3, etc.
   ```

2. Sube los cambios a GitHub:
   ```bash
   git add .
   git commit -m "Actualización: [descripción del cambio]"
   git push
   ```

3. GitHub Pages se actualizará automáticamente en 1-2 minutos

4. Los usuarios verán la nueva versión al recargar la app

**💡 Tip:** Sin incrementar la versión, los usuarios seguirán viendo la versión en caché.

## 🧪 Testing local

Para probar la app localmente antes de desplegar:

**Python:**
```bash
cd gymrat
python -m http.server 8000
# Abre http://localhost:8000
```

**Node.js:**
```bash
npx http-server
```

**VS Code:**
- Instala la extensión "Live Server"
- Click derecho en `index.html` → "Open with Live Server"

## 🐛 Troubleshooting

### "No puedo instalar la app"
- Verifica que estés en HTTPS (GitHub Pages lo tiene por defecto)
- Asegúrate de que los iconos existan en `icons/`

### "El service worker no funciona"
- Abre DevTools (F12) → Console
- Busca errores en rojo
- Verifica que `service-worker.js` esté en la raíz del repo

### "Los datos no se guardan"
- Los datos se guardan en localStorage del navegador
- Si limpias los datos del navegador, se perderán
- Considera implementar export/import de datos en el futuro

### "Los iconos no se ven"
- Verifica que los archivos PNG no estén corruptos
- Asegúrate de que estén en la carpeta `icons/`
- Los nombres deben ser exactos: `icon-192.png` y `icon-512.png`

## 📚 Documentación adicional

- `README-INSTALACION.md` - Instrucciones paso a paso para instalar
- `GUIA-RAPIDA.md` - Guía rápida de uso en el gym
- `RESUMEN-FINAL.md` - Resumen completo del proyecto

## 🔒 Privacidad

- **100% local:** Todos los datos se guardan en tu dispositivo
- **Sin servidor:** No hay backend, todo funciona en el navegador
- **Sin analytics:** No se envía ningún dato a terceros
- **Sin cookies:** Solo localStorage para guardar tus entrenamientos

## 🚀 Próximas mejoras

- [ ] Gráficas de progreso por ejercicio
- [ ] Export/Import de datos (backup)
- [ ] Calculadora de 1RM
- [ ] Plantillas de rutinas predefinidas
- [ ] Modo oscuro
- [ ] Sincronización en la nube (opcional con Supabase)

## 📝 Licencia

MIT License - Ver archivo `LICENSE`

## 👨‍💻 Autor

**Emilio Neva**
- GitHub: [@ejnero-dev](https://github.com/ejnero-dev)

---

**¡A entrenar! 💪🔥**
