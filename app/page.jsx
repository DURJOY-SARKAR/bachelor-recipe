"use client"

import { useState, useEffect } from "react"
import { Login } from "@/components/login"
import { IngredientInput } from "@/components/ingredient-input"
import { RecipeMatch } from "@/components/recipe-match"
import { SavedRecipes } from "@/components/saved-recipes"

export default function Home() {


  const [currentView, setCurrentView] = useState("login")
  const [user, setUser] = useState(null)

  const [searchQuery, setSearchQuery] = useState(null)
  const [selectedIngredients, setSelectedIngredients] = useState([])


  // console.log(currentView ,searchQuery , selectedIngredients )
  useEffect(() => {
    const storedUser = localStorage.getItem("recipeGenieUser")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setCurrentView("ingredients")
    }
  }, [])

  const handleLogin = (name, email) => {
    const userData = { name, email }
    localStorage.setItem("recipeGenieUser", JSON.stringify(userData))
    setUser(userData)
    setCurrentView("ingredients")
  }

  const handleLogout = () => {
    localStorage.removeItem("recipeGenieUser")
    setUser(null)
    setCurrentView("login")
  }

  const handleFindRecipes = (query) => {
    if (query) {
      setSearchQuery(query)
      setSelectedIngredients([])
    } else {
      const stored = localStorage.getItem("recipeGenieIngredients")
      if (stored) {
        setSelectedIngredients(JSON.parse(stored))
      }
      setSearchQuery(null)
    }

    setCurrentView("recipes")
  }

  return (
    <div className="min-h-screen bg-background">
      {currentView === "login" && <Login onLogin={handleLogin} />}

      {currentView === "ingredients" && (
        <IngredientInput
          user={user}
          onLogout={handleLogout}
          onViewSaved={() => setCurrentView("saved")}
          onFindRecipes={handleFindRecipes}
        />
      )}

      {currentView === "recipes" && (
        <RecipeMatch
          query={searchQuery}
          ingredients={selectedIngredients}
          onBack={() => setCurrentView("ingredients")}
          onViewSaved={() => setCurrentView("saved")}
        />
      )}

      {currentView === "saved" && (
        <SavedRecipes onBack={() => setCurrentView("ingredients")} />
      )}
    </div>
  )
}