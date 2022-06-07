let ingredientArray = ["masa", "tomate", "queso", "huevo", "orégano", "jamón", "palmitos", "rúcula", "anchoas", "cebolla"];
let pairsArray = [];
let oddArray = [];

pairOrOddArray(ingredientArray);

function pairOrOddArray(array) {

    for (let i = 0; i < array.length; i++){

        if((ingredientArray[i].length) % 2 == 0){
            pairsArray.push(ingredientArray[i]);           
        }else {
            oddArray.push(ingredientArray[i]);    
        }  
    }
    console.log(`Los ingredientes pares son: ${pairsArray} y los ingredientes impares son: ${oddArray}.`);
}