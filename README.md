# 🗓️ LifeTracker

> A beautiful, feature-rich personal productivity tracker — **zero dependencies, single HTML file.**

![LifeTracker Preview](./screenshots/preview.png)

## ✨ Features

| Feature | Description |
|---|---|
| 📅 **Week / Month / Year Views** | Switch between detailed weekly grid, monthly calendar, and yearly heatmap |
| ✅ **Task Management** | Add, complete, delete, and **drag-to-reorder** tasks per day |
| 🔴 **Priority Levels** | Tag tasks as High / Medium / Low with color-coded borders and badges |
| 📝 **Daily Notes** | Write freeform notes or reflections for any day |
| ⏱️ **Pomodoro Focus Timer** | Built-in 25/5 min focus timer with session counter & browser notifications |
| 🔥 **Habit Streaks** | Track daily habits with consecutive streak counters |
| 🌙 **Dark Mode** | Full dark/light theme toggle with improved contrast in both modes |
| 🎉 **Confetti Celebration** | Confetti burst when you complete 100% of your daily tasks |
| 💾 **LocalStorage Persistence** | All data is saved locally in your browser — no server needed |

## 🚀 Getting Started

### Option A — Open directly in browser
1. Download or clone this repository
2. Open `index.html` in any modern browser
3. Start tracking!

```bash
git clone https://github.com/YOUR_USERNAME/lifetracker.git
cd lifetracker
# Open index.html in your browser
```

### Option B — Serve locally (optional)
```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```
Then visit `http://localhost:8000`

## 📁 Project Structure

```
lifetracker/
├── index.html        # Entire app — HTML + CSS + JS in one file
├── README.md         # This file
├── LICENSE           # MIT License
├── .gitignore        # Git ignore rules
└── screenshots/
    └── preview.png   # App preview screenshot
```

## 🛠️ How to Use

### Tasks
- Navigate to any day in **Week** or **Month** view
- Select a priority level (🔴 High / 🟡 Med / 🟢 Low)
- Type a task and press **Enter** or click **+**
- Drag tasks up/down to reorder them
- Check off tasks — hit 100% and enjoy the confetti! 🎉

### Habits
- Scroll down to the **Habits This Week** table
- Check off habits for each day
- Individual habit streaks are shown as 🔥N next to the habit name
- Add new habits with the input at the bottom

### Focus Timer
- Click **▶ Start** to begin a 25-minute focus session
- Timer auto-switches to a 5-minute break when done
- Browser notifications alert you when sessions switch (requires permission)
- Use **↺ Reset** to start fresh

### Notes
- Each day has a **📝 Note** text area
- Notes are auto-saved as you type

### Dark Mode
- Click the **🌙 / ☀️** button in the top-right corner

## 💾 Data Storage

All data is stored in your browser's `localStorage` under the key `lt_v3`. No data is sent to any server.

To back up your data:
1. Open browser DevTools → Application → Local Storage
2. Copy the value of `lt_v3`

## 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge | ✅ Full support |
| Firefox | ✅ Full support |
| Safari | ✅ Full support |
| Mobile browsers | ✅ Responsive layout |

## 📜 License

MIT © [Your Name](https://github.com/YOUR_USERNAME)

---

> Built with ❤️ — pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools, no dependencies.
