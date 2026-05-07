# Akash Kumar — Portfolio

Personal developer portfolio built with React + Vite. Features a 3D hero scene, interactive floating models, slide-in About panel, scroll-triggered animations, enhanced globe with city labels and pulsing rings, and a fully responsive layout.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS |
| 3D / WebGL | Three.js, @react-three/fiber, @react-three/drei |
| Animations | GSAP, @gsap/react |
| Routing | React Router DOM v7 |
| Typewriter | react-simple-typewriter |
| Globe | react-globe.gl |
| 3D Carousel | react-spring-3d-carousel |
| Contact Form | Web3Forms (no backend needed) |
| Resume | Google Drive direct download link |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── AboutPanel.jsx       # Slide-in About panel (desktop)
│   ├── Button.jsx           # Reusable beam button
│   ├── CanvasLoader.jsx     # 3D canvas loading spinner
│   ├── Computer.jsx         # Floating computer 3D model
│   ├── Crousel.jsx          # 3D carousel with custom arrows (desktop)
│   ├── EnhancedGlobe.jsx    # Globe with rings, city labels, expand modal
│   ├── FloatingModels.jsx   # Floating 3D models with physics & collisions
│   ├── HackerRoom.jsx       # Main 3D hero model
│   ├── HeroCamera.jsx       # Camera controller for hero
│   ├── HeroP.jsx            # Typewriter text component
│   ├── ScrollProgress.jsx   # Top scroll progress bar (cyan gradient)
│   └── Slider.jsx           # Responsive image slider (3D on desktop, arrows on mobile)
├── context/
│   └── AboutContext.jsx     # Shared state for About panel open/close
├── hooks/
│   ├── useFadeIn.js         # Scroll-triggered fade-in hook
│   └── useAlerts.jsx        # Alert state hook
├── sections/
│   ├── About.jsx            # About section (mobile/tablet only, lg:hidden)
│   ├── Contact.jsx          # Contact form via Web3Forms
│   ├── Education.jsx        # Horizontal timeline journey (vertical on mobile)
│   ├── Experience.jsx       # Work experience featured card
│   ├── Footer.jsx           # Footer with social links + back to top button
│   ├── Hero.jsx             # Hero section with 3D scene + WhoAmICard
│   ├── Navbar.jsx           # Fixed navbar with active section + scroll progress
│   ├── NotFound.jsx         # 404 page
│   ├── Project.jsx          # Projects section with GitHub links
│   └── Skills.jsx           # Skills & technologies grid (7 categories)
├── constants/
│   └── index.js             # All data: projects, skills, experience, education, profiles
├── App.jsx                  # Root component with routing + ScrollProgress + AboutPanel
├── main.jsx                 # Entry point with BrowserRouter
└── index.css                # Global styles + Tailwind + fade-in + head-text accent
```

---

## Key Configuration

### Contact Form — Web3Forms

The contact form uses **Web3Forms** (no backend, no environment variables needed).

- **Service:** https://web3forms.com
- **Access Key:** `33dd85e7-811e-4eb6-90e5-ecc9a9712e6f`
- **Location:** `src/sections/Contact.jsx` — line with `const WEB3FORMS_KEY`
- **To change:** Replace the key value with your new Web3Forms access key
- **Emails go to:** The email address linked to your Web3Forms account

```js
// src/sections/Contact.jsx
const WEB3FORMS_KEY = '33dd85e7-811e-4eb6-90e5-ecc9a9712e6f';
```

---

### Resume — Google Drive

The resume button links to a Google Drive direct download.

- **Location:** `src/sections/Hero.jsx` — the `<a href=...>` wrapping the Resume button
- **Current File ID:** `1OevkIJiK2QPqNSfzViKoj5Yej2dG-J_5`
- **Direct download URL format:** `https://drive.google.com/uc?export=download&id=FILE_ID`
- **Download filename:** `Akash_Resume` (set via `download="Akash_Resume"` attribute)

**To update resume without redeploying:**
1. Go to Google Drive
2. Right-click the existing resume file
3. Click **Manage versions** → **Upload new version**
4. The file ID stays the same — no code change needed

**To replace with a new file (ID will change):**
1. Upload new PDF to Google Drive, get the new file ID
2. Update the `href` in `src/sections/Hero.jsx`

```jsx
// src/sections/Hero.jsx
<a href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID" download="Akash_Resume">
```

> Note: The `download` attribute filename hint doesn't work for cross-origin URLs like Google Drive. The browser will use its own filename. To fix this, upload to Cloudinary with `public_id=Akash_Resume` instead.

---

### 3D Models

All models are stored in `public/models/`:

| File | Used In |
|---|---|
| `hacker-room.glb` | Hero section main model |
| `react.glb` | Floating React logo |
| `cube.glb` | Floating cube (cyan colour) |
| `computer.glb` | Floating computer |
| `animations/developer.glb` | Available, not currently used |

Textures are in `public/textures/`.

---

### Enhanced Globe

The globe appears in both `About.jsx` (mobile) and `AboutPanel.jsx` (desktop panel).

- **Component:** `src/components/EnhancedGlobe.jsx`
- **Texture:** `earth-blue-marble.jpg` from three-globe CDN
- **Atmosphere:** Cyan (`#00d4ff`) to match portfolio theme
- **Pulsing ring:** At Noida coordinates, repeats every 1.2s
- **City labels:** Noida (cyan), San Francisco, London, Singapore, Berlin
- **Click to expand:** Clicking the globe opens a fullscreen modal with zoom enabled
- **Close modal:** Click outside, X button, or press Escape

**To add/remove cities:**
```js
// src/components/EnhancedGlobe.jsx
const cities = [
  { lat: 28.6124, lng: 77.3566, label: 'Noida, India', isHome: true },
  // add more here
];
```

---

### About Panel (Desktop)

The slide-in About panel is triggered by:
1. The **"Who am I?"** card in the Hero section (desktop only, vertically centered right side)
2. Clicking **"About"** in the navbar on desktop

- **Component:** `src/components/AboutPanel.jsx`
- **State:** Managed via `src/context/AboutContext.jsx`
- **Visible on:** Desktop only (`lg:hidden` hides the About section on desktop)
- **Mobile/Tablet:** Shows the full `About.jsx` section instead

---

### Navigation

Nav links are defined in `src/constants/index.js` under `navLinks`.

Shortened display names are mapped in `src/sections/Navbar.jsx`:

```js
const shortNames = {
  'Experience': 'Exp',
  'Education': 'Journey',
  'Project': 'Work',
  // add more here
};
```

Active section is tracked via scroll position. The active link shows an animated cyan underline.

---

### Scroll Progress Bar

A thin cyan-to-blue gradient bar at the very top of the page fills as you scroll.

- **Component:** `src/components/ScrollProgress.jsx`
- **z-index:** 60 (above navbar)
- **Mounted in:** `src/App.jsx` above `<Navbar />`

---

### Adding a New Project

In `src/constants/index.js`, add an entry to `myProjects`:

```js
{
  title: 'Project Name',
  desc: 'Short description.',
  subdesc: 'Tech details.',
  href: 'https://github.com/...',          // GitHub frontend link
  githubBackend: 'https://github.com/...', // GitHub backend link (leave '' if none)
  hosted: false,                           // set true if live, add live URL to href
  logo: '/assets/your-logo.png',
  logoStyle: {
    backgroundColor: '#hex',
    border: '0.2px solid #hex',
    boxShadow: '0px 0px 60px 0px #hex',
  },
  spotlight: '/assets/spotlight1.png',     // use spotlight1-5
  images: [
    { id: 1, name: 'Screen1', path: '/textures/project/yourproject/1.png' },
    // add up to 6 images
  ],
  tags: [
    { id: 1, name: 'React.js', path: '/assets/react.svg' },
  ],
},
```

---

### Adding a New Experience Entry

In `src/constants/index.js`, add to `experiences`:

```js
{
  id: 2,
  role: 'Your Role',
  company: 'Company Name',
  logo: '/assets/logo.png',
  duration: 'Jan 2024 - Present',
  current: true,
  points: [
    'What you did...',
  ],
},
```

When there are multiple entries, consider switching `src/sections/Experience.jsx` back to the vertical timeline layout.

---

### Adding a New Education Milestone

In `src/constants/index.js`, add to `education`:

```js
{
  id: 5,
  year: '2026',
  degree: 'Your Degree or Achievement',
  institution: 'Institution Name',
  location: 'City, Country',
  grade: 'Completed',
  isCurrent: false,  // set true to show cyan highlight + pulsing dot
},
```

---

### Updating Skills

In `src/sections/Skills.jsx`, edit the `skillCategories` array:

```js
{
  title: 'Category Name',
  icon: '⚙️',
  color: '#hex',       // accent colour for border, label, pill background
  skills: ['Skill 1', 'Skill 2'],
},
```

---

### SEO / Meta Tags

Located in `index.html`. Update these when you have a custom domain:

```html
<meta property="og:url" content="https://your-domain.com" />
<meta property="og:image" content="https://your-domain.com/preview.png" />
```

Also update the title and description if your role changes:

```html
<title>Akash Kumar | Backend Developer</title>
<meta name="description" content="..." />
```

> For best LinkedIn/WhatsApp preview, `og:image` should be a real hosted URL (not a relative path). Upload a 1200×630px screenshot of your portfolio and use its URL.

---

### Scroll Animations

All sections use the `useFadeIn` hook from `src/hooks/useFadeIn.js`.

```js
const ref = useFadeIn();
// attach ref to the wrapper div, add className="fade-in"
```

CSS classes `fade-in` and `fade-in-visible` are in `src/index.css`.

---

### Section Heading Accent

All `head-text` elements automatically get a short cyan-to-blue underline via CSS `::after`:

```css
/* src/index.css */
.head-text::after {
  content: '';
  display: block;
  width: 3rem;
  height: 3px;
  background: linear-gradient(to right, #00d4ff, #3b82f6);
}
```

No changes needed in individual sections.

---

### Floating Models Physics

`src/components/FloatingModels.jsx` handles:
- Each model floats within a corner zone (`CORNER_RANGE = 3.5` units)
- Bounces off the HackerRoom center (`BOUNCE_RADIUS = 7`)
- Elastic collision between models (`COLLISION_RADIUS = 3`)
- Hidden on mobile (`!isMobile` check in Hero.jsx)
- Cube colour: `#00d4ff` (cyan)

To adjust bounce zones, edit the constants at the top of `FloatingModels.jsx`.

---

## Environment Variables

This project intentionally uses **no environment variables**. Web3Forms access key is safe to be public by design.

If you ever switch back to EmailJS, create a `.env` file (already in `.gitignore`):

```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Deployment

Standard Vite build — works on Vercel, Netlify, or any static host.

```bash
npm run build
# output is in /dist
```

For Netlify/Vercel, add a redirect rule so React Router works on direct URL access:

**Netlify** — create `public/_redirects`:
```
/* /index.html 200
```

**Vercel** — create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
