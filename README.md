# 📱 Calculadora App - Documentación

## 📋 Descripción del Proyecto

Esta es una aplicación de calculadora desarrollada con **React Native** y **Expo**, que simula la funcionalidad de una calculadora moderna con interfaz similar a la de iOS. La aplicación está construida usando TypeScript y sigue las mejores prácticas de desarrollo móvil.

## 🚀 Características Principales

### ✨ Funcionalidades de la Calculadora

- **Operaciones básicas**: Suma (+), Resta (-), Multiplicación (x), División (/)
- **Funciones especiales**:
  - `C`: Limpiar toda la calculadora
  - `+/-`: Cambiar el signo del número actual
  - `del`: Eliminar el último dígito ingresado
  - `.`: Agregar punto decimal
  - `=`: Calcular el resultado final

### 🎨 Diseño y UX

- **Interfaz moderna**: Diseño limpio inspirado en la calculadora de iOS
- **Tema adaptable**: Soporte para modo claro y oscuro
- **Botones responsivos**: Feedback visual al presionar botones
- **Tipografía personalizada**: Uso de fuentes optimizadas para legibilidad

### 🛠️ Tecnologías Utilizadas

- **React Native 0.79.4**: Framework principal para desarrollo móvil
- **Expo SDK 53**: Plataforma de desarrollo y herramientas
- **TypeScript**: Tipado estático para mayor robustez
- **Expo Router**: Sistema de navegación basado en archivos
- **React Hooks**: Gestión de estado y efectos secundarios

## 📁 Estructura del Proyecto

```
04-calculator-app/
├── app/                    # Páginas principales (Expo Router)
│   ├── _layout.tsx        # Layout principal de la app
│   └── index.tsx          # Pantalla principal de la calculadora
├── components/            # Componentes reutilizables
│   ├── CalculatorButton.tsx  # Botón personalizado de la calculadora
│   └── ThemeText.tsx      # Componente de texto con tema
├── constants/             # Constantes de la aplicación
│   └── Colors.ts          # Definición de colores
├── hooks/                 # Hooks personalizados
│   └── useCalculator.tsx  # Lógica principal de la calculadora
├── styles/                # Estilos globales
│   └── global-styles.ts   # Estilos compartidos
└── assets/                # Recursos estáticos
    └── fonts/             # Fuentes personalizadas
```

## 🚀 Comandos para Ejecutar la Aplicación

### 📋 Prerrequisitos

Antes de ejecutar la aplicación, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Expo CLI** (se instala automáticamente con las dependencias)

### 🖥️ Configuración de Emuladores (Opcional)

Si planeas ejecutar la aplicación en emuladores, necesitas configurarlos previamente:

- **Android Studio**: Configura un emulador de Android
- **Xcode** (solo macOS): Configura un simulador de iOS

**Nota**: Consulta la documentación oficial de cada plataforma para los pasos de configuración detallados.

### 🔧 Instalación de Dependencias

```bash
# Instalar todas las dependencias del proyecto
npm install
```

### 🎯 Comandos de Ejecución

#### 1. Iniciar el Servidor de Desarrollo

```bash
# Iniciar el servidor de desarrollo de Expo
npm start
# o
npx expo start
```

#### 2. Ejecutar en Dispositivos Específicos

```bash
# Ejecutar en Android (emulador o dispositivo físico)
npm run android
# o
npx expo start --android

# Ejecutar en iOS (simulador o dispositivo físico)
npm run ios
# o
npx expo start --ios

# Ejecutar en navegador web
npm run web
# o
npx expo start --web
```

#### 3. Otros Comandos Útiles

```bash
# Ejecutar linter para verificar código
npm run lint

# Verificar errores de TypeScript
npx tsc --noEmit
```

## 📱 Opciones de Ejecución

Una vez que ejecutes `npm start`, tendrás las siguientes opciones:

### 🔄 Desarrollo Local

- **Presiona `w`**: Abrir en navegador web
- **Presiona `a`**: Abrir en emulador de Android
- **Presiona `i`**: Abrir en simulador de iOS
- **Presiona `r`**: Recargar la aplicación
- **Presiona `m`**: Alternar menú de desarrollador

### 📱 Dispositivos Físicos

1. **Instala Expo Go** en tu dispositivo móvil
2. **Escanea el código QR** que aparece en la terminal
3. La aplicación se cargará automáticamente en tu dispositivo

### 🖥️ Emuladores

**⚠️ Importante**: Los emuladores deben estar configurados y ejecutándose antes de usar estos comandos.

- **Android Studio**:
  - Asegúrate de tener un dispositivo virtual creado y ejecutándose
  - El emulador debe estar completamente iniciado antes de ejecutar `npm run android`
- **Xcode** (solo macOS):
  - Verifica que el simulador esté configurado y ejecutándose
  - El simulador debe estar completamente cargado antes de ejecutar `npm run ios`

## 🎯 Funcionalidades de la Calculadora

### 🔢 Operaciones Básicas

La calculadora soporta todas las operaciones matemáticas básicas:

- **Suma**: `5 + 3 = 8`
- **Resta**: `10 - 4 = 6`
- **Multiplicación**: `6 x 7 = 42`
- **División**: `15 / 3 = 5`

### 🔧 Funciones Especiales

- **Limpiar (C)**: Reinicia toda la calculadora
- **Cambiar Signo (+/-)**: Convierte números positivos a negativos y viceversa
- **Eliminar (del)**: Borra el último dígito ingresado
- **Punto Decimal (.)**: Permite ingresar números decimales
- **Igual (=)**: Calcula y muestra el resultado final

### 💡 Características Avanzadas

- **Cálculo en tiempo real**: Muestra el resultado parcial mientras escribes
- **Historial visual**: Muestra la operación anterior en pantalla
- **Validación de entrada**: Previene errores como múltiples puntos decimales
- **Manejo de errores**: Gestión robusta de casos edge

## 🔄 Desarrollo y Modificación

### 📝 Personalización

- **Colores**: Modifica `constants/Colors.ts`
- **Estilos**: Edita `styles/global-styles.ts`
- **Lógica**: Actualiza `hooks/useCalculator.tsx`
- **Interfaz**: Modifica `components/CalculatorButton.tsx`

## 📚 Recursos Adicionales

- [Documentación de Expo](https://docs.expo.dev/)
- [Guía de React Native](https://reactnative.dev/docs/getting-started)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
