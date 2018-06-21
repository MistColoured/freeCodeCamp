// cakes = (recipe, available) => Object.keys(recipe).reduce((max, current) => Math.min(available[current] / recipe[current] || 0, max), Infinity)

// cakes = (recipe, available) => Math.min(...Object.keys(recipe).map(key => available[key] / recipe[key] || 0))

const cakes = (recipe, available) => Object.entries(recipe).map(([key, value]) => available[key] / value || 0);;

const answer = cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });

answer;;
