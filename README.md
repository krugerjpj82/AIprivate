# 🛡️ Private AI Hub PRO
A high-performance, privacy-first AI dashboard running entirely in your browser using **WebGPU**. 

## 🚀 Key Features
- **100% Local Inference**: Powered by `Transformers.js`. Your data never leaves your device.
- **AI Chat (Chronos)**: Persistent local chat history using `SmolLM-360M`.
- **Smart Explorer**: Automated file categorization using `MobileBERT`.
- **Zero Server Costs**: No API keys, no subscriptions, and works offline after the first load.
- **PWA Ready**: Installable to your homescreen/desktop for a native app experience.

## 🛠️ Tech Stack
- **AI Engine**: [Transformers.js](https://huggingface.co/docs/transformers.js)
- **Database**: [Dexie.js](https://dexie.org/) (IndexedDB wrapper)
- **Acceleration**: WebGPU (with WASM fallback)
- **PWA**: Service Workers & Web App Manifest

## 📦 Setup & Deployment
1. Clone this repository.
2. Host it on any static server (GitHub Pages, Vercel, or `npx serve`).
3. Open in a WebGPU-compatible browser (Chrome, Edge, or Opera).
4. Wait for the initial model download (~400MB). 

## 🔒 Privacy Guarantee
This application has no backend. Every "Send" button and "Analyze" task happens on your hardware. You can verify this by checking the 'Network' tab in your developer tools or by turning off your internet after the models are cached.
