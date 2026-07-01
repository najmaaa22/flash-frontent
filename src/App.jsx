import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CategoryListPage from "./pages/CategoryListPage";
import FlashcardStudyPage from "./pages/FlashcardStudyPage";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <header className="px-6 py-3 sm:px-10">
          <h1 className="flex items-center gap-3 font-display text-xl font-extrabold text-brand-text sm:text-2xl">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-accent text-base font-extrabold text-white">
              F
            </span>
            Flashcard Learning App
          </h1>
        </header>
        <main className="flex-1 px-4 pb-8 sm:px-6">
          <Routes>
            <Route
              path="/"
              element={<CategoryListPage />}
            />
            <Route
              path="/study/:categoryId"
              element={<FlashcardStudyPage />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;