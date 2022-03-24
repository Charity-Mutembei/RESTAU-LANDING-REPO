//get all the items
let totalOrder;
let totalOrders = 0;
let crust_price;
let size_price;
let topping_price;
let total = 0;

let getTotals = () => {};
let totalToppingsArray = [];

//Pizza function constructor

function GetPizza (name, size, crust, topping, quantity){
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.quantity = quantity;
}
$('#add-item').click((e)=>{
    e.preventDefault();

    //getting DOM Values

    let pName = $("input[name='flavor']:checked").val();
    let pSize = $("input[name='size']:checked").val();
    let pCrust = $("#cr option:selected").val();
    let pQuantity = $("#qt").val();
    let pToppings = [];

    console.log("${pName}${pSize}${pCrust}${pQuantity}")

    $.each($("input[name='toppings']:checked"), function (){
        pToppings.push($(this).val());
    })

    console.log(pToppings)

    //price per toppings
    if(pSize == "large"){
        topping_price = 300;
    }
    else if(pSize == "medium"){
        topping_price = 200;
    }
    else{topping_price = 100;
    }

    let orderPizza = new
    GetPizza(pName, pSize, pCrust, pQuantity, pToppings.join(","));

    GetPizza.prototype.CalculaterOrder = function(size, crust, topping, quantity){


        //price per size

        switch(size){
            case'large':
            size_price = 1200;
            break;

            case 'medium':
                size_price = 900;

                break;

                case 'small':
                    size_price = 600;

                    // default:
                        // console.log("error");
        }

        //price per crust

        switch(crust){
            case'Crispy':
            crust_price = 400;
            break;
            case'Stuffed':
            crust_price = 600;

            break;
            // default:
                // console.log("error");
        }

        total = (crust_price + size_price + (topping.length*topping_price)*quantity)

        return total;
    }

    console.log(orderPizza.CalculaterOrder(pSize, pCrust,pToppings,pQuantity));

    //Array containing all orders totals

    totalToppingsArray.push(orderPizza.CalculaterOrder(pSize,pCrust,pToppings,pQuantity))

    console.log(orderPizza);
    console.log(totalToppingsArray);


    getTotals = ()=>{
        for(let i = 0; i< totalToppingsArray.length; i++){
            totalOrders += totalToppingsArray [i];
        }

        return totalOrders;
    }

    console.log(getTotals());


    // $("#tbod").append('
    // <tr>
    // <td id="p-flavor">${orderPizza.name}</td>
    // <td id="p-size">${orderPizza.size}</td>
    // <td id="p-crust">${orderPizza.crust}</td>
    // <td id="p-toppings">${pToppings.join(" ")}</td>
    // <td id="p-qt">${orderPizza.quantity}</td>
    // <td id="p-total">${orderPizza.CalculaterOrder(pSize,pCrust,pToppings,pQuantity)}</td>
    // </tr>
    // ');

    $("#tbod").append(`
<tr>
<td id="p-flavor">${orderPizza.name}</td>
<td id="p-size">${orderPizza.size}</td>
<td id="p-crust">${orderPizza.crust}</td>
<td id="p-toppings">${pToppings.join(" ")}</td>
<td id="p-qt">${orderPizza.quantity}</td>
<td
id="p-total">${orderPizza.CalculaterOrder(pSize,pCrust,pToppings,pQuantity)}</td>
</tr>
`);
});

$("#checkout").click(()=>{
    console.log(getTotals());
})