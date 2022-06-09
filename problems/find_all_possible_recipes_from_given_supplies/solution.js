const findAllRecipes = (recipes, ingredients, supplies) => {
    let answer = [], i = 0
    while(i < recipes.length){
        if(ingredients[i].every((ingredient) => supplies.includes(ingredient)) && supplies.indexOf(recipes[i]) < 0){
            supplies.push(recipes[i])
            answer.push(recipes[i])
            i = 0
        }else{
            i++
        }  
    }  
    return answer
}

