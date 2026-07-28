---
name: Ezequiel Serer Portfolio
description: Portafolio profesional de desarrollador web — diseño dark, limpio y tecnológico
colors:
  background: "#030712"
  foreground: "#ffffff"
  primary: "#171717"
  primary-foreground: "#fafafa"
  secondary: "#f5f5f5"
  secondary-foreground: "#171717"
  muted: "#f5f5f5"
  muted-foreground: "#737373"
  accent: "#f5f5f5"
  accent-foreground: "#171717"
  destructive: "#ef4444"
  destructive-foreground: "#fafafa"
  border: "#e5e5e5"
  input: "#e5e5e5"
  ring: "#171717"
  card: "#ffffff"
  card-foreground: "#0a0a0a"
  emerald-accent: "#34d399"
  emerald-deep: "#10b981"
typography:
  display:
    fontFamily: "Geist Sans, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2rem, 8vw, 7rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Geist Sans, Arial, Helvetica, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Geist Sans, Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Sans, Arial, Helvetica, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  sm: "0.625rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  full: "9999px"
spacing:
  section: "5rem"
  container: "1.5rem"
  card: "1.5rem"
  gap: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
    rounded: "{rounded.full}"
    padding: "0.875rem 2rem"
  button-primary-hover:
    backgroundColor: "#f5f5f5"
  button-nav:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
    rounded: "{rounded.full}"
    padding: "0.5rem 1.25rem"
  card-service:
    backgroundColor: "#111827"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
    padding: "1.5rem"
  card-testimonial:
    backgroundColor: "#111827"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
    padding: "1.5rem"
  input-field:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
    padding: "0.75rem 1rem"
---

# Design System: Ezequiel Serer Portfolio

## Overview

**Creative North Star: "El Taller Digital"**

Un espacio que se siente como el estudio de un artesano tecnológico: limpio, preciso, sin ruido. El fondo oscuro casi negro (#030712) funciona como un lienzo vacío donde cada elemento tiene intención. La paleta es mayormente monocromática —negros, grises, blancos— con un único acento esmeralda que aparece solo cuando hay algo que destacar: el estado "disponible", el botón de WhatsApp, los iconos de servicios.

La densidad es baja: cada sección respira con `py-20` y los márgenes son generosos. Las animaciones de entrada son sutiles —fade-in-up con opacidad— y nunca compiten con el contenido. El scroll suave y el parallax ligero del hero refuerzan la sensación de un espacio construido con cuidado.

**Key Characteristics:**
- Fondo oscuro profundo con superficies en capas de gris
- Acento esmeralda mínimo y estratégico
- Tipografía Geist Sans limpia y legible
- Componentes con bordes sutiles, sin sombras pesadas
- Animaciones de scroll suaves y directionales
- Efecto glass morphism en el botón principal del hero
- Texto de acento en color sólido (emerald-400), sin gradientes

## Colors

La paleta es intencionalmente austera: un sistema de grises con un solo color de acento que aparece menos del 10% de la pantalla.

**Nota de implementación:** Los componentes usan clases Tailwind del sistema de grises por defecto (`gray-950`, `gray-900`, `gray-800`) directamente, no los tokens CSS personalizados de `globals.css`. Las variables CSS existen en `:root` pero no se referencian en los componentes.

### Primary
- **Near-Black Background** (`#030712` / `bg-gray-950`): El color dominante. Fondo de todas las secciones principales y el hero. Casi negro con tinte frío sutil.
- **Dark Surface** (`#111827` / `bg-gray-900`): Superficies elevadas —cards de servicios, testimonios, formulario de contacto. Diferencia sutil del fondo principal.

### Secondary
- **Off-White** (`#fafafa` / `text-white`): Texto principal, botones primarios sobre fondo oscuro. Alto contraste.
- **Light Gray** (`#f5f5f5` / `bg-gray-100`): Botones secundarios, badges, elementos de interfaz que necesitan presencia sin peso.

### Neutral
- **Medium Gray** (`#9ca3af` / `text-gray-400`): Texto secundario, descripciones, labels. Legible pero no compite con el headline.
- **Subtle Gray** (`#6b7280` / `text-gray-500`): Metadata, texto del footer, roles de testimonios.
- **Border Gray** (`#1f2937` / `border-gray-800`): Bordes de cards, separadores, líneas decorativas del hero.
- **Dark Gray** (`#171717` / `bg-gray-900`): Elementos de interfaz, hover states.

### Accent
- **Emerald Green** (`#34d399` / `text-emerald-400`): Estado "disponible", iconos de servicios, texto "Vende." en hero. Aparece solo en indicadores de actividad y llamadas a la acción secundarias.
- **WhatsApp Green** (`#22c55e` / `bg-green-500`): Botón flotante de WhatsApp. Funcional, no decorativo.

### Named Rules
**The 10% Emerald Rule.** El verde esmeralda nunca supera el 10% de cualquier pantalla. Su escasez es lo que le da poder; cuando aparece, significa algo.

## Typography

**Display Font:** Geist Sans (with Arial, Helvetica, sans-serif fallback)
**Body Font:** Geist Sans (with Arial, Helvetica, sans-serif fallback)
**Mono Font:** Geist Mono (for code or technical labels if needed)

**Character:** Geist Sans es una tipografía geométrica, limpia y moderna. Su uso uniforme en todos los tamaños crea coherencia visual. El peso extreme (black) en el hero genera impacto sin necesidad de serif ni decoración.

### Hierarchy
- **Display** (900 weight, clamp(2rem, 8vw, 7rem), line-height 1): Hero headline. Aparece una vez por página, es la pieza visual más pesada.
- **Headline** (700 weight, 1.875rem, line-height 1.2): Títulos de sección (Servicios, Proyectos, Testimonios, Contacto).
- **Body** (400 weight, 1rem, line-height 1.6): Descripciones, párrafos, texto de testimonios. Máximo 2-3 líneas por bloque.
- **Label** (500 weight, 0.75rem, letter-spacing 0.02em): Badges, chips de tecnología, metadata, texto pequeño del footer.

### Named Rules
**The One-Weight Rule.** Todo el sitio usa Geist Sans. La jerarquía se logra solo con peso y tamaño, nunca cambiando de familia tipográfica.

## Layout

El layout es unidireccional y centrado: una columna de contenido con `max-w-6xl` (1152px) como contenedor principal. El hero usa `max-w-4xl` (896px) para mayor concentración. El contacto se ajusta a `max-w-2xl` (672px) para optimizar la lectura del formulario.

La cuadrícula responsive pasa de 1 columna (mobile) a 2 columnas (md) y 4 columnas (lg) en servicios y testimonios. El about usa 2 columnas con el grid de tech stack como pieza visual.

El ritmo vertical es consistente: cada sección tiene `py-20` (5rem) de padding vertical, y los títulos llevan `mb-4` + `mb-12` de separación con el contenido. El container principal tiene `px-6` de padding horizontal.

## Elevation & Depth

El sistema es plano por defecto. La profundidad se comunica exclusivamente a través de capas de gris (tonal layering): el fondo más oscuro (#030712) → superficies de cards (#111827 / gray-900) → bordes sutiles (#e5e5e5) → contenido en primer plano.

Las sombras aparecen solo como respuesta a estado: el botón de WhatsApp tiene `shadow-lg` que escala a `shadow-xl` en hover. El botón del hero usa un sistema de sombras inset complejo (glass morphism) que es puramente decorativo y no se replica en otros componentes.

### Shadow Vocabulary
- **WhatsApp Elevation** (`shadow-lg → shadow-xl`): Botón flotante fijo. Aparece en reposo y se eleva en hover.
- **Glass Inset** (complex inset shadow system): Solo en LiquidButton del hero. Efecto de vidrio esmerilado.

### Named Rules
**The Flat-By-Default Rule.** Las superficies son planas en reposo. Las sombras aparecen solo como respuesta a estado (hover, elevation, focus). Las cards usan borde, no sombra.

## Shapes

El lenguaje de formas es suave y consistente. Todos los elementos interactivos y contenedores usan `border-radius` generoso:

- **Pills** (`rounded-full`): Botones principales, badges, chips de tecnología, avatar del hero. Forma完全amente redondeada.
- **Large Radius** (`rounded-2xl` / 1rem): Cards de servicios, testimonios, proyectos. Esquinas redondeadas pero no circulares.
- **Medium Radius** (`rounded-xl` / 0.75rem): Inputs del formulario, contenedores del tech stack.
- **Small Radius** (`rounded-md` / 0.375rem): Botones de navegación, elementos compactos.

Los bordes son sutiles: `border-gray-800` o `border-white/10` (hero). No hay bordes gruesos ni decorativos. El hero usa doble borde como elemento compositivo (un marco dentro del marco).

## Components

### Buttons
- **Shape:** Pills completamente redondeadas (`rounded-full`)
- **Primary:** Fondo `bg-white`, texto `text-gray-900`, padding `px-8 py-3.5`. Transición en hover a `bg-gray-100`.
- **Hero LiquidButton:** Glass morphism con backdrop-filter, sombras inset complejas. Variante premium solo para la CTA principal.
- **Nav CTA:** Versión compacta del primary (`px-5 py-2`), mismo estilo pill. Focus ring `focus-visible:ring-2 focus-visible:ring-white`.

### Cards
- **Corner Style:** `rounded-2xl` (1rem)
- **Background:** `bg-gray-900` (servicios, testimonios) o `bg-gray-950` (proyectos)
- **Border:** `border border-gray-800`, cambia a `border-gray-700` en hover (servicios) o `border-gray-600` en hover (proyectos)
- **Internal Padding:** 1.5rem (`p-6`)
- **Shadow Strategy:** Sin sombras. Profundidad por tonal layering + borde.

### Inputs / Fields
- **Style:** `bg-gray-950`, `border border-gray-800`, `text-white`, `placeholder-gray-500`
- **Focus:** `focus:ring-2 focus:ring-white focus:border-transparent`
- **Border Radius:** `rounded-xl` (0.75rem)

### Navigation
- **Style:** Fijo arriba (`fixed top-0`), fondo `bg-gray-950/80 backdrop-blur-md`, `z-50`
- **Typography:** Links `text-sm text-gray-400`, hover `text-white`. Focus `focus-visible:ring-2 focus-visible:ring-white rounded px-1`
- **Mobile:** Menú hamburguesa con dropdown `bg-gray-950 border-t border-gray-800`

### Chips / Tags
- **Style:** `bg-gray-800 text-gray-300 text-xs px-2.5 py-1 rounded-full`
- **Purpose:** Tech stack en proyectos, badges informativos

### WhatsApp Button
- **Shape:** `rounded-full`, fijo `fixed bottom-6 right-6`, `z-50`
- **Color:** `bg-green-500 hover:bg-green-600 text-white`
- **Shadow:** `shadow-lg hover:shadow-xl`
- **Scale:** `hover:scale-110` para feedback táctil

## Do's and Don'ts

### Do:
- **Do** mantener el acento esmeralda bajo el 10% de cualquier pantalla
- **Do** usar bordes sutiles (`border-gray-800`) en lugar de sombras para definir superficies
- **Do** animar solo con `fade-in` direccional (up, left, right) en scroll
- **Do** usar `max-w-6xl` como contenedor estándar para secciones
- **Do** mantener Geist Sans como única familia tipográfica

### Don't:
- **Don't** agregar sombras a cards o contenedores —usar borde
- **Don't** usar más de un color de acento además del esmeralda
- **Don't** romper la consistencia de `rounded-full` en botones pill
- **Don't** usar tipografía serif o decorativa
- **Don't** animar elementos con bounce, elastic o spring
- **Don't** nesting de cards dentro de cards
