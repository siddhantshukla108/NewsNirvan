import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");

  // Dynamically update the page title based on category
  useEffect(() => {
    const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
    document.title = `NewsNirvan - ${capitalized} News`;
  }, [category]);

  return (
    <div className="container-fluid p-0">
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      
      {/* Optional Footer */}
      <footer className="text-center mt-5 mb-3 text-muted">
        &copy; {new Date().getFullYear()} NewsNirvan. All rights reserved by DeVyne Group.
      </footer>
    </div>
  );
};

export default App;
// This is the main App component that renders the Navbar and NewsBoard components.