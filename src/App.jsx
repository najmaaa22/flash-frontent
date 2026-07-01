import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CategoryListPage from "./pages/CategoryListPage";
import FlashcardStudyPage from "./pages/FlashcardStudyPage";
import "./index.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>
            Flashcard Learning App
          </h1>
        </header>
        <main className="main-content">
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