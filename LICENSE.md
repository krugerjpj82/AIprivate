# 🛡️ Private AI Hub PRO
**A local-first, privacy-engineered AI dashboard for personal file management and secure chat.**

This Progressive Web App (PWA) turns your browser into a self-contained AI workstation. By leveraging **WebGPU** and **Transformers.js**, all processing happens on your own hardware. 

> **Privacy Guarantee**: No data, files, or chat histories are ever uploaded to a server. Once the models are cached, you can use this entire application in Airplane Mode.

---

## 🚀 Key Features

### 🧠 Dual-Model Intelligence
Choose your engine based on your task or hardware capability:
- **⚡ Fast Mode (SmolLM2-135M)**: Instantaneous responses, low RAM usage, ideal for mobile or quick summaries.
- **🧠 Smart Mode (Llama-3.2-1B)**: High-reasoning capabilities, better logic, and complex instruction following.

### 📂 MiXplorer-Inspired File Manager
- **Smart Sorting**: Automated categorization (Finance, Work, Media, Code) using a local `MobileBERT` classifier.
- **Zero-Cloud Processing**: Drag and drop sensitive documents for analysis without fear of data leaks.

### 💾 Pro Persistence
- **Encrypted Local Memory**: Uses `Dexie.js` (IndexedDB) to store your chat history and file registry locally.
- **Nuke Option**: A one-click "Wipe Data" button to clear all local databases and forensic traces.

---

## 🛠️ Technology Stack
- **AI Runtime**: [Transformers.js v2](https://huggingface.co/docs/transformers.js)
- **Database**: [Dexie.js](https://dexie.org/)
- **Compute**: WebGPU (Primary) / WASM (Fallback)
- **Architecture**: Service Worker (Offline PWA)

---

## 📦 Installation & Deployment

This is a **zero-install** application. 

1. **Host**: Upload `index.html`, `sw.js`, and `manifest.json` to GitHub Pages or any static host.
2. **Install**: Open the URL in a WebGPU-compatible browser (Chrome/Edge 113+).
3. **PWA**: Click **"Install App"** in the navigation bar to add it to your homescreen/desktop.

### Initial Setup
Upon first launch, you must click a download button to pull the AI models (~135MB - 700MB) from Hugging Face. These are then stored in your browser's persistent cache via the Service Worker.

---

## 🔒 Security Auditing
Because this is a public repository, you can verify the privacy:
- **Network Tab**: Check that no `POST` or `GET` requests are sent to any API during chat.
- **Application Tab**: Inspect `IndexedDB` to see your data stored locally under `AI_Personal_Pro`.

---

## 📄 License
This project is licensed under the **MIT License**.
*Note: The AI models used (SmolLM, Llama-3.2, MobileBERT) are subject to their respective licenses from Hugging Face and Meta.*
