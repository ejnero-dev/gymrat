# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**GymFlow PWA** - A Progressive Web App for gym workout tracking in Spanish. This is a single-file PWA designed to help users track their gym exercises, sets, reps, and weights across a 5-day routine.

**Key characteristics:**
- Zero backend - all data stored in browser localStorage
- User privacy guaranteed - data never leaves the device
- Works offline via Service Worker caching
- Installable as a native-like app on mobile and desktop
- Responsive design with mobile-first approach

## Architecture

### Single-Page Application Structure

The entire app is contained in `index.html` (~3600 lines) with embedded CSS and vanilla JavaScript. This monolithic approach was chosen for simplicity and portability.

**Core components:**
- **HTML structure** (lines 1-1850): Layout, modals, views, bottom navigation
- **CSS styling** (lines 19-870): Dark theme, responsive design, charts
- **JavaScript app logic** (lines 1900-3700): Data management, rendering, charts, timers

### Data Model

Data is stored in localStorage as a JSON object with this structure:

```javascript
{
  "2025-12-31": {  // Date key (YYYY-MM-DD)
    workouts: [    // Array allows multiple workouts per day
      {
        id: "w1735600000000",  // Unique workout ID
        routineType: "day1",   // Which routine (day1-day5)
        startTime: "2025-12-31T10:00:00.000Z",
        endTime: "2025-12-31T11:30:00.000Z",
        exercises: {
          "e1": {      // Exercise ID
            sets: [
              {
                weight: 20,
                reps: 12,
                timestamp: "2025-12-31T10:30:00.000Z"
              }
            ],
            customRestTimes: [60, 60, 90]  // Optional per-set rest times
          }
        }
      }
    ]
  }
}
```

**Key features:**
- Date-based storage allows historical tracking
- Multiple workouts per day supported (workouts array)
- Pending workout pattern: workouts only saved after first set completed
- Exercise IDs map to ROUTINE object
- Custom rest times per exercise

### Routine Structure (ROUTINE object)

Defined in JavaScript (lines 739-829), contains 5 days:

```javascript
const ROUTINE = {
  day1: {
    name: 'DÍA 1 - PECHO',
    emoji: '💪',
    exercises: [
      {
        id: 'e1',
        name: 'Contractor de Pecho',
        sets: 4,
        reps: 12,
        rest: 90,  // seconds
        video: 'https://www.youtube.com/results?search_query=...',
        tips: 'Mantén los codos...'
      },
      // ... more exercises
    ]
  },
  // day2 (PIERNAS), day3 (ESPALDA), day4 (BÍCEPS Y HOMBRO), day5 (BÍCEPS Y TRÍCEPS)
}
```

### Service Worker (service-worker.js)

Implements a "Cache First" strategy:
1. Try to serve from cache
2. Fall back to network if not cached
3. Cache successful network responses for future use

**Version management:** `CACHE_NAME` constant (line 4) must be incremented for updates. Old caches are automatically deleted on activation (lines 36-51).

**Cached resources:**
- /gymrat/ (base path)
- /gymrat/index.html
- /gymrat/manifest.json

**IMPORTANT:** All paths use `/gymrat/` prefix for GitHub Pages deployment.

### PWA Configuration (manifest.json)

- **App name:** "GymFlow - Tu Entrenamiento Personal" / "GymFlow"
- **Display mode:** standalone (no browser UI)
- **Theme color:** #6366f1 (blue-purple gradient)
- **Start URL:** /gymrat/ (GitHub Pages path)
- **Icons:** 192x192 and 512x512 PNG (both any + maskable)

## Development Workflow

### Local Testing

The app requires a web server (PWAs don't work with file:// protocol). Use any of these:

**Python:**
```bash
python -m http.server 8000
# Open http://localhost:8000
```

**Node.js:**
```bash
npx http-server
```

**VS Code Live Server:**
Right-click index.html → "Open with Live Server"

### Deployment (GitHub Pages)

The app is configured for GitHub Pages deployment at `/gymrat/` path.

**Update workflow:**
1. Make changes to code
2. **CRITICAL:** Increment version in `service-worker.js`:
   ```javascript
   const CACHE_NAME = 'gymflow-vX'; // Increment X
   ```
3. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Update: [description]"
   git push
   ```
4. GitHub Pages auto-deploys in 1-2 minutes

**Why version increment is critical:** Without it, users' browsers will continue serving stale cached content and won't see updates.

**Deployed URL:** https://ejnero-dev.github.io/gymrat/

### Icon Generation

Use `icon-generator.html` to create PWA icons:
1. Open in browser
2. Click download buttons
3. Saves icon-192.png and icon-512.png
4. Move to icons/ folder

Icons are already generated and in the repo.

## Key Features

### UI Design
- **Dark theme** with teal/coral/gold accent colors
- **Bottom navigation** with 4 tabs: Home, Workout, Progress, Settings
- **Mobile-first** responsive design

### Home View
- **Weekly calendar** with checkmarks for completed days (click to view details)
- **Progress ring** showing weekly goal completion (SVG animated)
- **Weekly goal modal** - tap to change goal (1-7 days)
- **Best streak** - consecutive weeks meeting goal
- **Recent workouts** - horizontal scrollable cards
- **Monthly progress** - last 6 months with click to view details

### 5-Day Routine
- Day 1: Pecho (Chest)
- Day 2: Piernas (Legs)
- Day 3: Espalda (Back)
- Day 4: Bíceps y Hombro (Biceps & Shoulders)
- Day 5: Bíceps y Tríceps (Biceps & Triceps)

### Workout Flow
- **Routine selector modal** - choose which day to train
- **Exercise list** with progress indicators (⚪ pending, ▶️ active, ✅ completed)
- **Exercise detail view** - weight/reps input, video links, tips
- **Rest timer** - configurable per exercise, vibration + notification
- **Workout summary** - volume, sets, duration stats

### Progress View
- **Exercise selector** dropdown with all exercises that have data
- **SVG line chart** showing max weight progression over time
- **Stats display** - current weight and total improvement
- **Workout history** list (clickable for details)

### Data Management
- **Pending workout pattern** - workouts only saved after first set
- **Auto-save** to localStorage on every change
- **Export/Import** JSON backup in Settings
- **Exercise notes** - personal notes per exercise

## Important Constraints

### No Build System
This is intentional for simplicity. All code is in a single HTML file with no bundling, transpiling, or dependencies.

### No External Libraries
Pure vanilla JavaScript - no frameworks or libraries. This:
- Ensures it works forever without dependency updates
- Minimizes attack surface
- Keeps it lightweight and fast

### GitHub Pages Path
All URLs must include `/gymrat/` prefix:
- Service Worker registration (index.html line 1270)
- Manifest start_url (manifest.json line 5)
- Manifest scope (manifest.json line 10)
- Service Worker urlsToCache (service-worker.js lines 6-8)

**If renaming the repository**, update these paths in all 3 files.

### LocalStorage Limitations
- ~5-10MB storage limit per domain (varies by browser)
- Synchronous API (can block main thread with huge datasets)
- Not suitable for thousands of workouts
- Data loss if user clears browser data
- Consider adding export/import feature for backups

## Code Style & Patterns

### Function Naming
- Verb-first: `startExercise()`, `completeSet()`, `finishWorkout()`
- Day management: `changeDay()`, `loadWorkoutView()`
- Rendering: `renderDaySelector()`, `renderCompletedSets()`
- Timer: `startRestTimer()`, `stopRestTimer()`, `skipRest()`

### Data Flow
1. User interaction triggers function
2. Function modifies workoutData structure
3. Calls `autoSave()` to persist to localStorage
4. Calls render function to update UI

Example: `completeSet()` → adds set → `autoSave()` → `renderCompletedSets()` (lines 1047-1098)

### State Management (lines 835-841)
Global state variables:
- `currentDay`: Which routine day is selected (day1-day5)
- `currentExerciseId`: Active exercise being worked
- `currentExerciseIndex`: Index in exercises array
- `currentSetNumber`: Which set is next (1-based)
- `workoutStartTime`: Timestamp for duration tracking
- `timerInterval`: setInterval ID for rest timer
- `workoutData`: All historical workout data

### Event Handling
- Inline event handlers in HTML generation: `onclick="changeDay('day1')"`
- Direct addEventListener for specific elements (timer, notifications)
- PWA events: addEventListener for beforeinstallprompt, beforeunload (lines 1256-1261)

## Testing the PWA

Checklist:
- [ ] Page loads correctly
- [ ] Can select days
- [ ] Can start exercise
- [ ] Can complete sets
- [ ] Rest timer works
- [ ] Data persists after refresh
- [ ] Works offline (disconnect WiFi, reload)
- [ ] Can install as app
- [ ] Service Worker registers
- [ ] Notifications work (if permitted)

**Chrome DevTools:**
- Application tab → Service Workers: Check registration status
- Application tab → Storage → Local Storage: View gymflow-data
- Application tab → Manifest: Validate manifest.json
- Network tab → Offline checkbox: Test offline mode

## Common Issues

**App doesn't update after deployment:**
- Did you increment CACHE_NAME in service-worker.js?
- Try: DevTools → Application → Service Workers → Unregister
- Clear browser cache (Ctrl+Shift+Delete)

**Can't install PWA:**
- Must be served over HTTPS (GitHub Pages handles this)
- Icons must exist in icons/ folder
- Check browser console for manifest errors
- Try different browser (Safari, Chrome)

**Data loss:**
- LocalStorage can be cleared by user or browser
- Educate users to avoid clearing browser data
- Use Export/Import feature in Settings for backups
- No automatic cloud sync (intentional for privacy)

**Service Worker not working:**
- Verify paths in index.html line 1270
- Verify paths in service-worker.js lines 6-8
- Check DevTools console for errors
- Ensure HTTPS (required for Service Workers)

**Timer not working:**
- Check browser notification permissions
- Verify vibration API support (mobile only)
- Console may show errors if blocked

## Security & Privacy

**Data privacy:** All workout data stays on device. No analytics, no tracking, no external requests (except YouTube video links). This is a key feature for privacy-conscious users.

**XSS prevention:** User input is inserted via `textContent` or `value` attributes, not `innerHTML`. Template literals in render functions use DOM APIs that auto-escape.

**No authentication:** The app is designed for single-user use on their personal device. Not suitable for multi-user scenarios without additional auth layer.

## Future Improvements

Potential features to add:
- 1RM calculator
- Routine templates (strength, hypertrophy, etc.)
- Custom exercises
- Rest day tracking
- Body measurements tracking
- Cloud sync (optional, with Supabase or similar)

**Already implemented:**
- ✅ Export/Import workout data (JSON backup)
- ✅ Progress charts (weight over time per exercise)
- ✅ Dark mode

## File Structure

```
gymrat/
├── index.html              # Main app (~3600 lines)
├── manifest.json           # PWA config
├── service-worker.js       # Service Worker (cache-first)
├── icons/
│   ├── icon-192.png       # PWA icon 192x192
│   └── icon-512.png       # PWA icon 512x512
├── README.md              # Main documentation
├── DEPLOY.md              # Deployment guide
├── CLAUDE.md              # This file
├── README-INSTALACION.md  # Installation instructions
├── GUIA-RAPIDA.md         # Quick user guide
├── RESUMEN-FINAL.md       # Project summary
├── LICENSE                # MIT License
├── .gitignore             # Git ignore rules
└── icon-generator.html    # Icon generator utility
```

## Version History

- **v1.0.0** (2025-11-12): Initial release
  - 5-day routine
  - Offline support
  - Rest timer
  - LocalStorage persistence
  - Deployed to GitHub Pages

## Contact

**Repository:** https://github.com/ejnero-dev/gymrat
**Live URL:** https://ejnero-dev.github.io/gymrat/
**Author:** Emilio Neva (ejnero.dev@gmail.com)

---

**For Claude Code:** When making changes, always increment CACHE_NAME in service-worker.js and test locally before pushing to GitHub.
