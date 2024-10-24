
import { useState } from 'react'
import './App.css'
import Banner from './Compontent/Banner/Banner'
import Navber from './Compontent/Navber/Navber'
import Recipes from './Compontent/Recipes/Recipes'
import Sitbar from './Compontent/Sitbar/Sitbar'

function App() {
  const [recipesQueue, setRecipesQueue] = useState([]);
  const [preperRecipe, setPrePerRecipe] = useState([]);
  const [totleTime, setTotleTime] = useState(0);
  const [totleCalure, setTotleCalure] = useState(0);
  const addRecipesToQueue = (recipe) => {
    const isExiten = recipesQueue.find(priviousRecipes => priviousRecipes.recipe_id === recipe.recipe_id)
    if (!isExiten) {
      setRecipesQueue([...recipesQueue, recipe])
    }
    else {
      alert('Add a cart')
    }

  }
  const recipeRemove = id => {
    const deleteRecipes = recipesQueue.find(recipe => recipe.recipe_id === id);

    const updetsQueue = recipesQueue.filter(recipe => recipe.recipe_id !== id);
    setRecipesQueue(updetsQueue);
    setPrePerRecipe([...preperRecipe, deleteRecipes])

  }
  const calculaterTimeAndCalories = (time, calorie) => {
    setTotleTime(totleTime + time);
    setTotleCalure(totleCalure + calorie)
  }

  return (
    <>
      <div className='w-10/12 mx-auto'>
        <Navber></Navber>
        <Banner></Banner>
        <section className='flex flex-col lg:flex-row gap-6'>
          <Recipes addRecipesToQueue={addRecipesToQueue}></Recipes>

          <Sitbar recipeRemove={recipeRemove} recipesQueue={recipesQueue} preperRecipe={preperRecipe}
          calculaterTimeAndCalories={calculaterTimeAndCalories}
          totleTime={totleTime}
          totleCalure={totleCalure}
          ></Sitbar>
        </section>
      </div>
    </>
  )
}

export default App
