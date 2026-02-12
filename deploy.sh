#!/bin/bash

# 🚀 Script de Deploy Automático para JobToday Test
# Este script automatiza todo el proceso de subida a GitHub

echo "╔════════════════════════════════════════════════╗"
echo "║  🚀 Deploy Automático - JobToday Test        ║"
echo "╚════════════════════════════════════════════════╝"
echo ""

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: No se encuentra package.json${NC}"
    echo "Por favor ejecuta este script desde la carpeta del proyecto"
    exit 1
fi

# Paso 1: Instalar dependencias
echo -e "${BLUE}📦 Paso 1/5: Instalando dependencias...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error instalando dependencias${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Dependencias instaladas${NC}"
echo ""

# Paso 2: Build local para verificar
echo -e "${BLUE}🔨 Paso 2/5: Verificando build local...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error en el build. Revisa los errores arriba.${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Build exitoso${NC}"
echo ""

# Paso 3: Inicializar Git
echo -e "${BLUE}🔧 Paso 3/5: Configurando Git...${NC}"
if [ ! -d ".git" ]; then
    git init
    echo -e "${GREEN}✅ Git inicializado${NC}"
else
    echo -e "${YELLOW}⚠️  Git ya estaba inicializado${NC}"
fi
echo ""

# Paso 4: Crear commit
echo -e "${BLUE}📝 Paso 4/5: Creando commit...${NC}"
git add .
git commit -m "Initial commit - JobToday compatibility test ready for deploy"
echo -e "${GREEN}✅ Commit creado${NC}"
echo ""

# Paso 5: Conectar y subir a GitHub
echo -e "${BLUE}🌐 Paso 5/5: Subiendo a GitHub...${NC}"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANTE: Necesitas crear el repositorio en GitHub primero${NC}"
echo "1. Ve a: https://github.com/new"
echo "2. Nombre: jobtoday-test"
echo "3. Visibilidad: Public"
echo "4. NO marques ninguna opción adicional"
echo "5. Click en 'Create repository'"
echo ""
read -p "¿Ya creaste el repositorio? (s/n): " respuesta

if [ "$respuesta" = "s" ] || [ "$respuesta" = "S" ]; then
    # Verificar si ya existe el remote
    if git remote | grep -q "origin"; then
        echo -e "${YELLOW}⚠️  Remote 'origin' ya existe, actualizando...${NC}"
        git remote set-url origin https://github.com/taniadeazevedo/jobtoday-test.git
    else
        git remote add origin https://github.com/taniadeazevedo/jobtoday-test.git
    fi
    
    git branch -M main
    
    echo ""
    echo -e "${BLUE}🚀 Subiendo a GitHub...${NC}"
    echo -e "${YELLOW}Se te pedirá tu usuario y token de GitHub${NC}"
    echo ""
    
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo -e "${GREEN}╔════════════════════════════════════════════════╗${NC}"
        echo -e "${GREEN}║  ✅ ¡DEPLOY EXITOSO!                          ║${NC}"
        echo -e "${GREEN}╚════════════════════════════════════════════════╝${NC}"
        echo ""
        echo -e "${BLUE}🌐 Próximos pasos:${NC}"
        echo "1. Ve a: https://app.netlify.com"
        echo "2. Click en 'Add new site' → 'Import from GitHub'"
        echo "3. Selecciona 'jobtoday-test'"
        echo "4. Click en 'Deploy'"
        echo ""
        echo -e "${GREEN}Tu repositorio:${NC} https://github.com/taniadeazevedo/jobtoday-test"
        echo ""
    else
        echo ""
        echo -e "${RED}❌ Error al hacer push${NC}"
        echo ""
        echo "Posibles soluciones:"
        echo "1. Verifica que el repositorio existe en GitHub"
        echo "2. Usa un Personal Access Token en lugar de tu contraseña"
        echo "3. Genera uno aquí: https://github.com/settings/tokens"
        exit 1
    fi
else
    echo ""
    echo -e "${YELLOW}👉 Cuando crees el repositorio, ejecuta:${NC}"
    echo "   git remote add origin https://github.com/taniadeazevedo/jobtoday-test.git"
    echo "   git push -u origin main"
fi
