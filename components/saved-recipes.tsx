"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, ArrowLeft, Heart } from "lucide-react"
import { recipes } from "@/lib/recipes"

interface SavedRecipesProps {
  onBack: () => void
}

export function SavedRecipes({ onBack }: SavedRecipesProps) {
  const [savedRecipeIds, setSavedRecipeIds] = useState<string[]>([])
  const [savedRecipesList, setSavedRecipesList] = useState<typeof recipes>([])

  useEffect(() => {
    // Load saved recipes
    const saved = localStorage.getItem("recipeGenieSaved")
    if (saved) {
      const ids = JSON.parse(saved)
      setSavedRecipeIds(ids)
      const savedRecipes = recipes.filter((recipe) => ids.includes(recipe.id))
      setSavedRecipesList(savedRecipes)
    }
  }, [])

  const removeSaved = (recipeId: string) => {
    const updated = savedRecipeIds.filter((id) => id !== recipeId)
    setSavedRecipeIds(updated)
    localStorage.setItem("recipeGenieSaved", JSON.stringify(updated))
    setSavedRecipesList(recipes.filter((recipe) => updated.includes(recipe.id)))
  }

  return (
    <div className="min-h-screen">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary p-2">
                <ChefHat className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">Recipe Genie</h1>
            </div>
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-balance">Saved Recipes</h2>
            <p className="text-muted-foreground text-balance">Your favorite recipes collection</p>
          </div>

          {savedRecipesList.length === 0 && (
            <Card className="border-2">
              <CardContent className="py-12 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground text-balance mb-4">
                  {"You haven't saved any recipes yet. Start exploring recipes to build your collection!"}
                </p>
                <Button onClick={onBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Ingredients
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            {savedRecipesList.map((recipe) => (
              <Card key={recipe.id} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{recipe.name}</CardTitle>
                      <CardDescription className="mt-1">{recipe.ingredients.length} ingredients</CardDescription>
                    </div>
                    <Button variant="default" size="icon" onClick={() => removeSaved(recipe.id)}>
                      <Heart className="w-4 h-4 fill-current" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Ingredients:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {recipe.ingredients.map((ing, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {ing}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Instructions:</p>
                    <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                      {recipe.instructions.map((step, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
