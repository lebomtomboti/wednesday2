const products = [ { Name: 'Dumbbells',Price: '15 000', Category: 'weights'}
    ,{Name: 'Mat For Fitness',Price: '5000', Category: 'Yoga'},
    {Name: 'Resistance Band',Price: '10 000', Category: 'Yoga'},
    {Name: 'Cast iron Kettlebell',Price: '700 000', Category: 'weights'},
    {Name: '  Treadmill',Price: '100 000', Category: 'Cardio'},
    {Name: 'Boxing Pear',Price: '50 000', Category: 'weights'}]

let tbody = document.querySelector('tbody')
let btn = document.querySelector('button')
let inp = document.querySelector('#Search')
products.map(addToTable)
function addToTable(item){
    tbody.innerHTML += `
                        <tr>
                            <td>${item.Name}</td>
                            <td>${item.Price}</td>
                            <td>${item.Category}</td>
                        </tr>
                        ` 
}
const search = searchedProducts('name','Dumbbells')
// localStorage.setItem('Products',JSON.stringify(products))
displayData(products)