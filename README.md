# 🚀 JobToday Test - Deploy Automático

Test de compatibilidad laboral listo para desplegar en Netlify.

## 📦 Contenido del Paquete

✅ Todo está en su lugar correcto:
- `src/App.jsx` - Componente principal
- `src/main.jsx` - Punto de entrada
- `index.html` - Con meta tags de Open Graph
- `package.json` - Con Vite 7.3.1
- `netlify.toml` - Configuración de Netlify
- `public/_redirects` - Para SPA routing
- `deploy.sh` - Script de deploy automático

## 🎯 Deploy en 2 Comandos

### Opción A: Deploy Automático (Recomendado)

```bash
cd jobtoday-test-completo
chmod +x deploy.sh && ./deploy.sh
```

El script hace TODO automáticamente:
1. ✅ Instala dependencias
2. ✅ Verifica que funcione localmente
3. ✅ Inicializa Git
4. ✅ Crea el commit
5. ✅ Sube a GitHub

Solo necesitas:
- Crear el repo en GitHub cuando te lo pida
- Ingresar tu usuario y token

---

### Opción B: Manual (3 comandos)

```bash
cd jobtoday-test-completo
npm install
./deploy.sh
```

---

## 🔑 Token de GitHub

Si no tienes un Personal Access Token:

1. Ve a: https://github.com/settings/tokens
2. Click en "Generate new token (classic)"
3. Marca: `repo` y `workflow`
4. Copia el token (empieza con `ghp_...`)
5. Úsalo como contraseña cuando Git te lo pida

---

## 🌐 Después del Push

1. Ve a: https://app.netlify.com
2. "Add new site" → "Import from GitHub"
3. Selecciona `jobtoday-test`
4. Click "Deploy"
5. ¡Listo! 🎉

Tu sitio estará en: `https://jobtoday-test.netlify.app`

---

## 📊 Verificación

Después del deploy, verifica:

✅ El sitio carga en menos de 2 segundos  
✅ Funciona en móvil y desktop  
✅ Los meta tags se ven bien (Facebook Debugger)  
✅ Los botones de JobToday funcionan  
✅ No hay errores en la consola  

---

## 🐛 Solución de Problemas

### Error: "Permission denied" en deploy.sh

```bash
chmod +x deploy.sh
./deploy.sh
```

### Error: "Command not found: npm"

Instala Node.js: https://nodejs.org

### Error al hacer git push

- Usa tu username: `taniadeazevedo`
- Usa tu Personal Access Token como contraseña (no tu contraseña de GitHub)

---

## 📞 Ayuda

Si algo falla:
1. Lee el mensaje de error completo
2. Verifica que Node.js esté instalado: `node --version`
3. Verifica que Git esté instalado: `git --version`

---

## 🎨 Créditos

Desarrollado por **Tania de Azevedo**  
https://taniadeazevedo.es
