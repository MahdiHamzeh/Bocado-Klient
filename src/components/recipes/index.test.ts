import {
    filterRecipesByIngredients
}
from "./index";

it('Filters recipes by ingredients', () => {

    const recipes = [
        {
            name: "Biryani",   
            
            image: "",
            
            title: "Biryani",
        
            description: "One of the moste delicious dishes Birayni",
        
            time: 60,
        
            date: new Date(2020, 0, 1),
        
            ingredients: [
                "ris",
                "kött",
                "youghourt"
            ]
        },
        
        {
            name: "kebab",   
            
            image: "",
            
            title: "Kebab",
        
            description: "Kebab the gem of middleeast",
        
            time: 60,
        
            date: new Date(2020, 0, 1),
        
            ingredients: [
                "kött"
            ]
        },
        
        {
            name: "schnitzel",   
            
            image: "",
            
            title: "schnitzel",
        
            description: "Beloved by germans",
        
            time: 60,
        
            date: new Date(2020, 0, 1),
        
            ingredients: [
                "kyckling"
            ]
        },
    
        {
            name: "pealla",   
            
            image: "",
            
            title: "pealla",
        
            description: "The spanish national dish",
        
            time: 20,
        
            date: new Date(2020, 0, 1),
        
            ingredients: [
                "ris"
            ]
        }
    ]

    expect(filterRecipesByIngredients(recipes, "ris"))
    .toEqual([
        {
            name: "Biryani",   
            
            image: "",
            
            title: "Biryani",
        
            description: "One of the moste delicious dishes Birayni",
        
            time: 60,
        
            date: new Date(2020, 0, 1),
        
            ingredients: [
                "ris",
                "kött",
                "youghourt"
            ]
        },
        {
            name: "pealla",   
            
            image: "",
            
            title: "pealla",
        
            description: "The spanish national dish",
        
            time: 20,
        
            date: new Date(2020, 0, 1),
        
            ingredients: [
                "ris"
            ]
        }
    ]);

    expect(filterRecipesByIngredients(recipes, "kyckling"))
    .toEqual([{
        name: "schnitzel",   
        
        image: "",
        
        title: "schnitzel",
    
        description: "Beloved by germans",
    
        time: 60,
    
        date: new Date(2020, 0, 1),
    
        ingredients: [
            "kyckling"
        ]
    }]);
});