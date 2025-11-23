# AI Synth Preset Generator – MVP

Goal:  
A web app where a user describes a sound in text (e.g. “warm pad with slow attack”) and the system generates a **Vital synth preset** that matches that description.

## MVP Scope (First Version)

- Frontend: Next.js + TypeScript + Tailwind
- Backend: Python (FastAPI) – later
- Synth: Vital (free, uses JSON-based presets)
- Flow:
  1. User enters text prompt
  2. System maps text → parameter config (rule-based/ML)
  3. App generates a `.vital` preset file for download
  4. User loads the preset into Vital inside their DAW

## Long-Term Vision

- Support other synths (Serum, etc.)
- Better AI model: text/audio → preset
- Audio preview in browser
- DAW integration via a small plugin
