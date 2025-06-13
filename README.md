# 🛠️ Skip Size Selection Page Redesign

This project is a frontend redesign of the **"Choose Your Skip Size"** page for [WeWantWaste.co.uk](https://wewantwaste.co.uk), built as part of a coding challenge. The redesign enhances the UI and UX while preserving all original functionality.

---

## 🚀 Features

- Responsive, modern skip size cards with gradient headers  
- Truck icon or skip image for visual appeal  
- Clear display of skip size, price, hire period, dimensions, and suitable materials  
- Interactive modal for confirming skip selection  
  - "Select This Skip" button highlights with gradient green on selection  
  - Resets state on modal close or cancel  
- Custom progress stepper with icons:  
  - Green tick for completed steps  
  - Blue-colored current step icon  
  - Gray icons for upcoming steps  
  - Color-coded connecting lines  
  - Clickable step icons for improved UX (no action assigned)  
- Scrollbar hidden for a clean vertical scroll experience  

---

## 📦 Tech Stack

- React (functional components, hooks)  
- Custom CSS for styling and responsive design  
- `lucide-react` icons for crisp SVG icons  
- Bootstrap utility classes for layout and spacing  

---

## 📂 Folder Structure

src/
├── components/
│ ├── ProgressStepper.js
│ ├── ProgressStepper.css
│ ├── SkipCard.js
│ └── SkipModal.js
├── hooks/
│ └── useSkips.js
├── pages/
│ ├── App.js
│ ├── App.css
│ └── index.js

## 🔧 Setup & Running Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/skip-size-selection.git
   cd skip-size-selection

2. Install dependencies:
   npm install
   
3. Start the development server:
   npm start

4. Open http://localhost:3000 in your browser.

📡 API Data Source
Fetches skip data from:
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

Displays real data like skip size, price, dimensions, hire period, and suitable waste types.

Change query parameters in src/hooks/useSkips.js to customize location.

✨ Design Notes
Gradient backgrounds and clean typography for modern look

Consistent icon usage with lucide-react

Stepper icons and lines dynamically styled based on progress state

Accessible colors and font sizes

Clickable but non-functional step icons for improved user experience

Vertical scroll bar hidden for neat UI without losing scroll functionality

🧪 Future Enhancements
Add interactive navigation on clicking stepper icons

Unit and integration tests

Enhanced accessibility features (keyboard navigation, ARIA attributes)

Deployment scripts and continuous integration setup

👩‍💻 Author
Najiya
Frontend Developer | UX/UI Enthusiast

📄 License
This project is created for a coding challenge and not licensed for commercial use.

Appendix: Create React App Information
This project was bootstrapped with Create React App. For details on available scripts, deployment, and advanced configuration, see the official documentation.

Available Scripts
npm start — runs the app in development mode

npm test — runs test watcher

npm run build — builds production optimized app

npm run eject — ejects build config (irreversible)

(Refer to Create React App docs for full info.)











