# 🚀 Guía Rápida de Despliegue

## ✅ Estado del Despliegue

**✅ DESPLEGADO Y FUNCIONANDO**

- **URL de la app:** https://ejnero-dev.github.io/gymrat/
- **Repositorio:** https://github.com/ejnero-dev/gymrat
- **GitHub Pages:** Activado y funcionando
- **Service Worker:** Configurado para `/gymrat/`

---

## 📱 Acceder a la App

Tu app ya está online y disponible en:

```
https://ejnero-dev.github.io/gymrat/
```

### Instalar en móvil:

**iOS (Safari):**
1. Abre la URL en Safari
2. Toca Compartir → "Añadir a pantalla de inicio"
3. Toca "Añadir"

**Android (Chrome):**
1. Abre la URL en Chrome
2. Toca el banner "Instalar GymFlow"
3. O: Menú ⋮ → "Instalar aplicación"

---

## 🔄 Para Actualizaciones Futuras

Cuando hagas cambios en la app:

### 1. Actualiza la versión del Service Worker

**CRÍTICO:** Abre `service-worker.js` y cambia la versión:

```javascript
const CACHE_NAME = 'gymflow-v2'; // v1 → v2, v3, etc.
```

### 2. Sube los cambios a GitHub

```bash
cd /home/emilio/gymrat
git add .
git commit -m "Actualización: [descripción de cambios]

🤖 Generated with Claude Code"
git push
```

### 3. Espera 1-2 minutos

GitHub Pages procesará automáticamente los cambios.

---

## 🧪 Probar Localmente Antes de Subir

Para probar cambios antes de desplegar:

**Opción 1: Python**
```bash
cd /home/emilio/gymrat
python -m http.server 8000
```
Abre: http://localhost:8000

**Opción 2: Node.js**
```bash
npx http-server
```

**Opción 3: VS Code Live Server**
- Instala extensión "Live Server"
- Click derecho en `index.html` → "Open with Live Server"

**IMPORTANTE:** Las PWAs requieren un servidor local. No funcionan abriendo `index.html` directamente.

---

## 📊 Verificar Estado del Despliegue

### Opción A: GitHub Web

1. Ve a: https://github.com/ejnero-dev/gymrat
2. Click "Settings" → "Pages"
3. Verás el estado del despliegue

### Opción B: Línea de comandos

```bash
curl -s -H "Authorization: token TU_TOKEN" \
  https://api.github.com/repos/ejnero-dev/gymrat/pages | grep status
```

Estados posibles:
- `"status": "built"` → ✅ Desplegado correctamente
- `"status": "building"` → ⏳ Construyendo...
- `"status": null` → ⚠️ Error o pendiente

---

## 🐛 Troubleshooting

### "La app no se actualiza después de hacer push"

1. Espera 2-3 minutos (GitHub Pages tarda en procesar)
2. Verifica que incrementaste la versión en `service-worker.js`
3. En tu navegador:
   - F12 → Application → Service Workers
   - Click "Unregister"
   - Recarga la página (Ctrl+Shift+R)
4. Limpia caché del navegador (Ctrl+Shift+Delete)

### "Los cambios no aparecen en móvil"

1. Desinstala la app del móvil
2. Limpia caché de Safari/Chrome
3. Vuelve a abrir la URL e instala de nuevo

### "Service Worker no funciona"

1. Verifica que la ruta en `index.html` línea 1270 sea correcta:
   ```javascript
   navigator.serviceWorker.register('/gymrat/service-worker.js')
   ```
2. Verifica que las URLs en `service-worker.js` líneas 6-8 sean correctas:
   ```javascript
   const urlsToCache = [
     '/gymrat/',
     '/gymrat/index.html',
     '/gymrat/manifest.json'
   ];
   ```

### "Los iconos no se ven"

1. Verifica que existan en la carpeta `icons/`
2. Nombres exactos: `icon-192.png` y `icon-512.png`
3. Verifica que se hayan subido a GitHub:
   ```bash
   git ls-files icons/
   ```

---

## 🔒 Configuración de Seguridad

### Token de GitHub

El token usado para el despliegue tiene permisos de:
- `repo` (lectura/escritura de repositorios)
- `workflow` (acceso a GitHub Actions)

**IMPORTANTE:** No compartas este token. Si se filtra, revócalo en:
https://github.com/settings/tokens

### Regenerar Token

Si necesitas regenerar el token:

1. Ve a: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Selecciona permisos: `repo`, `workflow`
4. Actualiza el remote:
   ```bash
   git remote set-url origin https://NUEVO_TOKEN@github.com/ejnero-dev/gymrat.git
   ```

---

## 📱 Compartir con Usuarios

### Opción A: URL directa

Comparte simplemente:
```
https://ejnero-dev.github.io/gymrat/
```

### Opción B: QR Code

1. Ve a: https://www.qr-code-generator.com/
2. Pega la URL
3. Descarga el QR
4. Compártelo por WhatsApp o imprímelo

### Opción C: Dominio personalizado (Opcional)

Para usar un dominio propio (ej: `gymflow.tudominio.com`):

1. Compra un dominio en Namecheap/GoDaddy
2. En Settings → Pages → Custom domain
3. Configura los DNS según las instrucciones

---

## 🎯 Próximas Mejoras

Ideas para futuras versiones:

- [ ] Gráficas de progreso por ejercicio
- [ ] Export/Import de datos (backup en JSON)
- [ ] Calculadora de 1RM
- [ ] Templates de rutinas predefinidas
- [ ] Modo oscuro
- [ ] PWA shortcuts (atajos en icono)
- [ ] Sincronización en la nube (opcional con Supabase)

---

## 📚 Archivos de Configuración PWA

### `manifest.json`
- Define nombre, iconos, colores de la app
- `start_url` y `scope` configurados para `/gymrat/`

### `service-worker.js`
- Cachea archivos para funcionamiento offline
- `CACHE_NAME` debe incrementarse en cada actualización
- URLs configuradas para `/gymrat/`

### `index.html`
- Registra el service worker en línea 1270
- Ruta configurada para `/gymrat/service-worker.js`

---

## ✅ Checklist de Verificación

Antes de considerar el despliegue completo:

- [x] Iconos generados y en `icons/`
- [x] Service Worker configurado correctamente
- [x] Rutas en manifest.json apuntan a `/gymrat/`
- [x] Rutas en service-worker.js apuntan a `/gymrat/`
- [x] Repositorio creado en GitHub
- [x] Código subido a main branch
- [x] GitHub Pages activado
- [x] Sitio desplegado y accesible
- [ ] Probado en móvil iOS
- [ ] Probado en móvil Android
- [ ] Instalado como PWA y verificado offline
- [ ] Compartido con usuarios de prueba

---

## 🎉 ¡Tu App Está Online!

**URL:** https://ejnero-dev.github.io/gymrat/

¡A entrenar! 💪🔥
