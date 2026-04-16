"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, ArrowLeft, BookMarked, Heart } from "lucide-react"
import { recipes } from "@/lib/recipes"

export const RecipeMatch = ({ query, ingredients: propIngredients, onBack, onViewSaved }) => {

  console.log(recipes , )

  const [ingredients, setIngredients] = useState([])
  const [matchedRecipes, setMatchedRecipes] = useState([])
  const [savedRecipes, setSavedRecipes] = useState([])

  useEffect(() => {
    let results = []

    // 🔍 Name search
    if (typeof query === "string" && query.trim()) {
      results = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      )
      console.log(results)
      setMatchedRecipes(results)
      setIngredients([])
    }

    // 🥕 Ingredient search
    else if (propIngredients && propIngredients.length > 0) {
      setIngredients(propIngredients)

      results = recipes.filter((recipe) => {
        const matchCount = recipe.ingredients.filter((ing) =>
          propIngredients.some((userIng) =>
            ing.toLowerCase().includes(userIng.toLowerCase())
          )
        ).length

        return matchCount >= 2
      })

      setMatchedRecipes(results)
    }

    // 💾 Load saved
    const saved = localStorage.getItem("recipeGenieSaved")
    if (saved) {
      setSavedRecipes(JSON.parse(saved))
    }

  }, [query, propIngredients])

  const toggleSave = (recipeId) => {
    let updated

    if (savedRecipes.includes(recipeId)) {
      updated = savedRecipes.filter((id) => id !== recipeId)
    } else {
      updated = [...savedRecipes, recipeId]
    }

    setSavedRecipes(updated)
    localStorage.setItem("recipeGenieSaved", JSON.stringify(updated))
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary p-2">
              <ChefHat className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">Recipe Genie</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={onViewSaved}>
              <BookMarked className="w-4 h-4 mr-2" />
              Saved ({savedRecipes.length})
            </Button>

            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">

        <div className="text-center space-y-2 mb-6">
          <h2 className="text-3xl font-bold">
            {query ? `Results for "${query}"` : "Recipe Matches"}
          </h2>

          <p className="text-muted-foreground">
            Found {matchedRecipes.length} recipe(s)
          </p>
        </div>

        {!query && ingredients.length > 0 && (
          <Card className="mb-6 bg-muted/50">
            <CardHeader>
              <CardTitle className="text-base">Your Ingredients</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {ingredients.map((ing) => (
                <Badge key={ing} variant="secondary">
                  {ing}
                </Badge>
              ))}
            </CardContent>
          </Card>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {matchedRecipes.map((recipe) => {
            const isSaved = savedRecipes.includes(recipe.id)

            return (
              <Card key={recipe.id} className="border-2 hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex justify-between items-start">

                    <div>
                      <CardTitle>{recipe.name}</CardTitle>
                      <CardDescription>
                        {recipe.ingredients.length} ingredients
                      </CardDescription>
                    </div>

                    <Button
                      variant={isSaved ? "default" : "outline"}
                      size="icon"
                      onClick={() => toggleSave(recipe.id)}
                    >
                      <Heart className={isSaved ? "fill-current w-4 h-4" : "w-4 h-4"} />
                    </Button>

                  </div>
                </CardHeader>

                <CardContent className="space-y-3">

                  <div>
                    <p className="text-sm font-medium mb-2">Ingredients</p>
                    <div className="flex flex-wrap gap-1.5">
                      {recipe.ingredients.map((ing, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {ing}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Steps</p>
                    <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                      {recipe.instructions.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>

                </CardContent>
              </Card>
            )
          })}
        </div>

        {matchedRecipes.length === 0 && (
          <Card className="mt-6">
            <CardContent className="py-10 text-center text-muted-foreground">
              No recipes found. Try another search.
              <div className="mt-4">
                <Button onClick={onBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

      </main>
    </div>
  )
}