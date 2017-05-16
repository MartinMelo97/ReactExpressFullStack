
var React = require('react/addons');
console.log("Hola papu desde aca");

var GroseryitemList = require('./components/GroceryItemList.jsx');

var initial = [{
    name:"Ice Cream"
},{
    name:"Waffles"
},{
    name:"Candy",
    purchased:true
},{
    name:"Sharks"
}];

React.render(<GroseryitemList items={initial}/>,app)