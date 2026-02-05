
function List(){
    const fruits = [ {name: "apple", calories: 52},
                     {name: "banana", calories: 89},
                     {name: "orange", calories: 47},
                     {name: "grape", calories: 69},
                     {name: "kiwi", calories: 61} ];
    fruits.sort(); 
    const highCalFruits = fruits.filter(fruit => fruit.calories > 60);
    const fruitItems = highCalFruits.map(highCalFruits => <li>{highCalFruits.name}</li>)

    return(
        <ul>
            {fruitItems}
        </ul>
    );
}

export default List;