import FoodRecipesContextProvider from './contexts/FoodRecipesContext';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RecipeList from './components/FoodRecipis/RecipeList'
function App() {
  return (
    <div className="App">
      <Header />
      <FoodRecipesContextProvider>
        <RecipeList />
      </FoodRecipesContextProvider>
      <Footer />
    </div>
  );
}

export default App;
