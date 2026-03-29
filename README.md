# jersonrodas.dev

Página web profesional de Jerson Rodas - Especialista en Transformación Digital en Industrias Pesadas con IA y DataOps.

## 🚀 Descripción

Esta es una página web moderna y responsiva desarrollada con HTML5, CSS3 y JavaScript vanilla. Presenta un diseño elegante con animaciones suaves, gradientes modernos y una experiencia de usuario optimizada.

## ✨ Características

- **Diseño Moderno**: Interfaz limpia con gradientes y efectos visuales atractivos
- **Totalmente Responsivo**: Optimizada para todos los dispositivos
- **Animaciones Suaves**: Efectos de scroll y transiciones elegantes usando AOS
- **Navegación Intuitiva**: Menu sticky con indicador de sección activa
- **Formulario de Contacto**: Integración con cliente de correo local
- **Optimización SEO**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- HTML5 semántico
- CSS3 con Flexbox y Grid
- JavaScript ES6+
- AOS (Animate On Scroll) Library
- Font Awesome Icons
- Google Fonts (Inter)

## 📁 Estructura del Proyecto

```
/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentación
```

## 🌐 Configuración de GitHub Pages

### Paso 1: Configurar el Repositorio

1. Ve a la configuración de tu repositorio en GitHub
2. Scroll hasta la sección "Pages"
3. En "Source", selecciona "Deploy from a branch"
4. Selecciona la rama "main" y carpeta "/ (root)"
5. Haz clic en "Save"

### Paso 2: Configurar el Dominio Personalizado

1. En la misma sección "Pages", encuentra "Custom domain"
2. Ingresa tu dominio: `jersonrodas.dev`
3. Haz clic en "Save"
4. GitHub creará automáticamente un archivo `CNAME`

### Paso 3: Configurar DNS en Namecheap

En tu panel de Namecheap, configura los siguientes registros DNS:

**Registros A (para el dominio principal):**
```
Type: A Record
Host: @
Value: 185.199.108.153

Type: A Record
Host: @
Value: 185.199.109.153

Type: A Record
Host: @
Value: 185.199.110.153

Type: A Record
Host: @
Value: 185.199.111.153
```

**Registro CNAME (para www):**
```
Type: CNAME Record
Host: www
Value: tu-usuario.github.io
```

### Paso 4: Verificar la Configuración

1. Los cambios DNS pueden tardar hasta 24 horas en propagarse
2. Puedes verificar con herramientas como `dig` o sitios web de verificación DNS
3. Una vez propagado, tu sitio estará disponible en `https://jersonrodas.dev`

## 📱 Características Responsive

- **Desktop**: Experiencia completa con todas las animaciones
- **Tablet**: Layout adaptado con navegación optimizada
- **Mobile**: Menu hamburguesa y diseño vertical optimizado

## 🎨 Paleta de Colores

- **Primary Gradient**: `#667eea` → `#764ba2`
- **Background**: `#ffffff` y `#f8f9fa`
- **Text**: `#333333` y `#666666`
- **Accent**: `#667eea`

## 📊 Rendimiento

- Optimizado para velocidad de carga
- Imágenes optimizadas y lazy loading
- CSS y JS minificados en producción
- Compatibilidad con navegadores modernos

## 🔧 Desarrollo Local

Para desarrollo local, simplemente abre `index.html` en tu navegador o usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (si tienes live-server instalado)
npx live-server

# Con PHP
php -S localhost:8000
```

## 📬 Contacto

- **Email**: jerson@idatamind.io
- **WhatsApp**: +51 969 339 967
- **LinkedIn**: [linkedin.com/in/jrodas19](https://linkedin.com/in/jrodas19)

## 📄 Licencia

© 2025 Jerson Rodas. Todos los derechos reservados.

---

**Nota**: Asegúrate de que el repositorio sea público para que GitHub Pages funcione correctamente, o ten una suscripción GitHub Pro para repositorios privados.