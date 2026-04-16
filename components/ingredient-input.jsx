"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, X, Search, BookMarked, LogOut } from "lucide-react"
import { allIngredients, recipes } from "../lib/recipes"

export const IngredientInput = ({ user, onLogout, onViewSaved, onFindRecipes }) => {

  const [ingredients, setIngredients] = useState([])
  const [currentIngredient, setCurrentIngredient] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const [searchMode, setSearchMode] = useState("ingredient")

  const [recipeQuery, setRecipeQuery] = useState("")
  const [recipeSuggestions, setRecipeSuggestions] = useState([])

  // load saved ingredients
  useEffect(() => {
    const stored = localStorage.getItem("recipeGenieIngredients")
    if (stored) setIngredients(JSON.parse(stored))
  }, [])

  // add ingredient
  const addIngredient = (e) => {
    e.preventDefault()
    const value = currentIngredient.trim().toLowerCase()

    if (value && !ingredients.includes(value)) {
      const updated = [...ingredients, value]
      setIngredients(updated)
      localStorage.setItem("recipeGenieIngredients", JSON.stringify(updated))
    }

    setCurrentIngredient("")
    setSuggestions([])
  }

  // remove ingredient
  const removeIngredient = (item) => {
    const updated = ingredients.filter((i) => i !== item)
    setIngredients(updated)
    localStorage.setItem("recipeGenieIngredients", JSON.stringify(updated))
  }

  // ingredient suggestion
  const handleIngredientChange = (e) => {
    const value = e.target.value.toLowerCase()
    setCurrentIngredient(value)

    if (value.trim()) {
      const matches = allIngredients.filter(
        (item) =>
          item.toLowerCase().includes(value) &&
          !ingredients.includes(item.toLowerCase())
      )
      setSuggestions(matches.slice(0, 5))
    } else {
      setSuggestions([])
    }
  }

  const selectIngredient = (item) => {
    if (!ingredients.includes(item)) {
      const updated = [...ingredients, item]
      setIngredients(updated)
      localStorage.setItem("recipeGenieIngredients", JSON.stringify(updated))
    }
    setCurrentIngredient("")
    setSuggestions([])
  }

  // 🔍 recipe suggestion
  const handleRecipeChange = (e) => {
    const value = e.target.value.toLowerCase()
    setRecipeQuery(value)

    if (value.trim()) {
      const matches = recipes
        .filter((r) => r.name.toLowerCase().includes(value))
        .map((r) => r.name)

      setRecipeSuggestions(matches.slice(0, 5))
    } else {
      setRecipeSuggestions([])
    }
  }

  const selectRecipe = (name) => {
    setRecipeQuery(name)
    setRecipeSuggestions([])
    onFindRecipes(name)
  }

  return (
    <div className="min-h-screen">

      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <ChefHat />
            <h1 className="font-bold">Recipe Genie</h1>
          </div>

          <div className="flex gap-2">
            <Button onClick={onViewSaved}>
              <BookMarked className="w-4 h-4 mr-2" /> Saved
            </Button>
            <Button onClick={onLogout}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">

        {/* Mode Switch */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={searchMode === "ingredient" ? "default" : "outline"}
            onClick={() => setSearchMode("ingredient")}
          >
            Ingredient
          </Button>

          <Button
            variant={searchMode === "recipe" ? "default" : "outline"}
            onClick={() => setSearchMode("recipe")}
          >
            Recipe
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {searchMode === "ingredient"
                ? "Add Ingredients"
                : "Search Recipe"}
            </CardTitle>
          </CardHeader>

          <CardContent>

            {/* 🥕 Ingredient Mode */}
            {searchMode === "ingredient" && (
              <>
                <form onSubmit={addIngredient} className="relative">
                  <Input
                    value={currentIngredient}
                    onChange={handleIngredientChange}
                    placeholder="Add ingredient..."
                  />

                  {suggestions.length > 0 && (
                    <ul className="absolute bg-white border w-full mt-1 z-50">
                      {suggestions.map((s) => (
                        <li
                          key={s}
                          onClick={() => selectIngredient(s)}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Button type="submit" className="mt-2 w-full">
                    Add
                  </Button>
                </form>

                <div className="flex flex-wrap gap-2 mt-4">
                  {ingredients.map((item) => (
                    <Badge key={item}>
                      {item}
                      <X
                        className="ml-2 w-3 h-3 cursor-pointer"
                        onClick={() => removeIngredient(item)}
                      />
                    </Badge>
                  ))}
                </div>

                {ingredients.length >= 2 && (
                  <Button
                    className="mt-4 w-full"
                    onClick={() => onFindRecipes()}
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Find Recipes
                  </Button>
                )}
              </>
            )}

            {/* 🔍 Recipe Mode */}
            {searchMode === "recipe" && (
              <div className="flex flex-col gap-2 relative">

                <div className="flex gap-2">
                  <Input
                    value={recipeQuery}
                    onChange={handleRecipeChange}
                    placeholder="Search recipe..."
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        onFindRecipes(recipeQuery)
                      }
                    }}
                  />
                  <Button onClick={() => onFindRecipes(recipeQuery)}>
                    <Search />
                  </Button>
                </div>

                {recipeSuggestions.length > 0 && (
                  <ul className="absolute top-12 left-0 right-0 bg-white border rounded shadow z-50">
                    {recipeSuggestions.map((item) => (
                      <li
                        key={item}
                        onClick={() => selectRecipe(item)}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            )}

          </CardContent>
        </Card>

      </main>
    </div>
  )
}