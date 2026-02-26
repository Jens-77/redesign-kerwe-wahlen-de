# Redesign-Spezifikation: kerwe-wahlen.de

## 1. Projektübersicht
- **Kurzbeschreibung des Unternehmens/der Organisation**: Die Wählemer Kerwe ist ein jährliches traditionelles Fest in Wählen (Grasellenbach), das vom 04.09. bis 07.09.2026 stattfindet. Die Webseite präsentiert das Programm mit Events, Musik und lokalen Traditionen.
- **Zielgruppe**: Lokale Besucher, Familien, Jugendliche und Touristen aus der Region Odenwald/Hessen, die an Volksfesten, Live-Musik und traditionellen Veranstaltungen interessiert sind (Alter 18–60 Jahre, mobilnutzend).
- **Hauptziele des Redesigns**: Modernisierung des Designs unter Erhalt **aller bestehenden Inhalte**, Verbesserung der Nutzerfreundlichkeit (Mobile-First), DSGVO-Konformität, schnellere Ladezeiten und höhere Conversion zu Event-Besuchen (z. B. via CTAs wie "Zum Festplan").
- **Bestehende Stärken die erhalten bleiben sollen**: Vollständiger Inhalt (Titel, Programmübersicht, Events), responsives Design-Grundlage, WordPress-Struktur als Basis für Inhalte, Fokus auf das Kerwe-Event 2026.

## 2. Design-Vorgaben
- **Farbschema** (festlich-traditionell, passend zu Volksfesten mit moderner Note):
  | Farbe | Hex-Code | Verwendung |
  |-------|----------|------------|
  | Primär (Festrot) | #D32F2F | Hero-Hintergrund, CTAs, Überschriften |
  | Sekundär (Goldgelb) | #FBC02D | Akzente, Buttons, Icons |
  | Akzent (Dunkelgrün, Odenwald-Natur) | #388E3C | Navigation, Links |
  | Neutral (Weiß) | #FFFFFF | Hintergründe |
  | Dunkel (Nachtblau) | #1A237E | Footer, Dark-Mode-Option |
  | Grau | #757575 | Text, Borders |
- **Typografie** (Google Fonts: Expressive und lesbar für Feststimmung):
  - Überschriften: **"Playfair Display"** (serif, fett, für festliche Hierarchie).
  - Fließtext: **"Inter"** (sans-serif, modern-neutral, gut lesbar auf Mobil).
- **Design-Prinzipien**: **Mobile-First** (Start bei 320px), großzügiger **Whitespace** für Übersichtlichkeit, hoher **Kontrast** (WCAG AA-konform), subtile **Motion-Feedback** (Hover-Effekte, Fade-Ins per Framer Motion).
- **Stil-Richtung**: **Modern-minimalistisch mit festlicher Wärme** – Clean Layouts, runde Ecken, organische Shapes (leichte Kurven in Sections), Snug-Simple-Elemente (weiche Pastelltöne, Playful-Icons) für einladende, vertrauensvolle Atmosphäre[1][2][4].

## 3. Seitenstruktur & Navigation
- **Navigationsstruktur** (einfach, da 1 Hauptseite + Feed/Comments):
  - Home (Hauptseite: /)
  - Programm (Dropdown: Events, Musik)
  - Kontakt/Impressum (Footer-Link)
  - RSS-Feed (/feed/)
- **Hero-Bereich Beschreibung**: Vollbild-Hintergrund mit Kerwe-Motiv (Bierzelte, Feuerwerk), zentrierter **H1: "Wählemer Kerwe – 04.09. – 07.09.2026"**, darunter CTA-Button **"Zum Programm"** (scrollt zu Events), mit Parallax-Fade-In.
- **Wichtigste Sektionen pro Seite** (Home als Single-Page-Scroller):
  1. Hero (Event-Überblick).
  2. Programmübersicht (Timeline oder Cards mit Events/Musik).
  3. Traditionen (Text + Bilder aus Original).
  4. Karte/Standort (integriert via Embed).
  5. CTA-Sektion (Tickets/Newsletter).
  6. Footer (Impressum, DSGVO-Banner).

## 4. Komponenten-Bibliothek
- **Hero**: Vollbild-Section mit Titel, Datum, CTA-Button.
- **Navigation**: Sticky Top-Nav mit Logo, Links, Mobile-Hamburger.
- **EventCard**: Karte pro Event (Datum, Beschreibung, Icon).
- **Timeline**: Horizontale/vertikale Event-Liste (04.09.–07.09.).
- **CTA Button**: Animierter Button mit Hover-Fade (Framer Motion).
- **Footer**: Links, Copyright, DSGVO-Cookie-Banner.
- **Modal**: Für Impressum/Kontakt (Lucide-Icons).
- **Loader**: Skeleton-Loading für Performance.

## 5. Technische Vorgaben
- **Framework**: React 18 + Vite + TypeScript.
- **Styling**: Tailwind CSS v3 (Konfig: custom colors, breakpoints).
- **Icons**: Lucide React (z. B. Calendar, Music, Map).
- **Animationen**: Framer Motion (einfache Fade-Ins, Slide-ups beim Scroll, Button-Hover).
- **Ordnerstruktur**:
  ```
  src/
  ├── components/ (Hero.tsx, Nav.tsx, EventCard.tsx, etc.)
  ├── pages/ (Home.tsx)
  ├── assets/ (images/, fonts/)
  ├── styles/ (globals.css mit Tailwind)
  ├── utils/ (types.ts, constants.ts)
  └── App.tsx
  ```
- **Responsive Breakpoints** (Tailwind-Standard + Custom):
  | Breakpoint | Min-Width | Beschreibung |
  |------------|-----------|--------------|
  | sm | 640px | Mobile |
  | md | 768px | Tablet |
  | lg | 1024px | Desktop |
  | xl | 1280px | Large Desktop |

## 6. SEO & Performance
- **Meta-Tags Vorgaben**:
  ```html
  <title>Wählemer Kerwe – 04.09. – 07.09.2026</title>
  <meta name="description" content="Jährliches Fest in Wählen mit Events, Musik und Traditionen.">
  <meta name="keywords" content="Wählemer Kerwe, Kerwe Wählen, Fest Grasellenbach, Odenwald Fest">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="canonical" href="https://kerwe-wahlen.de">
  ```
- **Wichtige Keywords**: Wählemer Kerwe, Kerwe 2026, Wählen Grasellenbach, Festprogramm, Odenwald Events, Volksfest Hessen.
- **Performance-Anforderungen**: Lighthouse-Score >90 (Core Web Vitals), Lazy-Loading für Bilder, <2s Ladezeit, Next-Gen-Images (WebP), GZIP, No-JS-Fallback.

## 7. Coding-Agent-Prompt
```
Du bist ein experter React-Entwickler. Implementiere eine komplette Neugestaltung der Webseite https://kerwe-wahlen.de (Wählemer Kerwe, Fest 04.09.–07.09.2026).

**Anforderungen:**
- Übernimm **ALLE Inhalte** exakt von der Original-URL (Titel, Texte, Programme, Meta, RSS-Feeds). Kein Inhaltsverlust!
- Modernisiere **nur das Design**: Mobile-First, minimalistisch-festlich.
- Tech-Stack: React 18 + Vite + TypeScript + Tailwind CSS v3 + Lucide React Icons + Framer Motion (Fade/Slide-Ins).
- Farben: Primär #D32F2F, Sekundär #FBC02D, Akzent #388E3C, Neutral #FFFFFF/#757575.
- Fonts: Google Fonts "Playfair Display" (H1–H3), "Inter" (Text).
- Struktur: Single-Page (Home) mit Sections: Hero (Titel+CTA), Programm (Timeline/Cards), Traditionen, CTA, Footer.
- Navigation: Sticky Top-Nav (Home, Programm, Impressum).
- Responsiv: Tailwind Breakpoints (sm/md/lg/xl).
- SEO: Meta-Tags wie oben, Keywords: Wählemer Kerwe, Kerwe 2026.
- DSGVO: Cookie-Banner (einfach, opt-in).
- Performance: Lazy-Images, Skeleton-Loader.
- Ordnerstruktur: src/components/, src/pages/, src/assets/.

**Schritte:**
1. Erstelle Vite-Projekt: `npm create vite@latest kerwe-wahlen -- --template react-ts`.
2. Installiere: `npm i tailwindcss postcss autoprefixer lucide-react framer-motion @types/node`.
3. Konfiguriere Tailwind (custom colors), globals.css.
4. Baue Komponenten: Hero, Nav, EventCard, Timeline, Footer.
5. Hole Inhalte manuell von https://kerwe-wahlen.de und integriere (kein Scraping, copy-paste).
6. Füge Animationen hinzu (motion.div mit initial={{opacity:0}} animate={{opacity:1}}).
7. Teste responsiv, Lighthouse >90.
8. Erstelle GitHub-Repo "kerwe-wahlen-redesign", pushe Code, deploye auf GitHub Pages/Vercel.

Generiere **vollständigen, lauffähigen Code** mit allen Dateien (package.json, vite.config.ts, App.tsx, etc.). Mach es kopierfertig für GitHub.
```

## 8. Deployment-Anleitung
- **GitHub Pages**:
  1. Erstelle Repo `kerwe-wahlen-redesign` auf GitHub.
  2. `git init`, `git add .`, `git commit -m "Initial Redesign"`, `git push`.
  3. Settings > Pages > Source: `gh-pages` Branch > Deploy.
  4. Live: `https://username.github.io/kerwe-wahlen-redesign`.
- **Vercel** (empfohlen für React):
  1. Installiere Vercel CLI: `npm i -g vercel`.
  2. Im Projekt: `vercel login`, `vercel --prod`.
  3. Custom Domain: `vercel --domains kerwe-wahlen.de` (DNS anpassen).
  4. Auto-Deploys bei Git-Push.