function setProp(prop, value){
  document.documentElement.style.setProperty('--'+prop, Number(value))
}

var inputs =document.querySelectorAll('input[type="range"]');
var inputsArr= Array.prototype.slice.call(inputs)

inputsArr.forEach(function(input){
  input.addEventListener('input', function(e){
    setProp(e.target.name, e.target.value);
  })
  
  setProp(input.name, input.value)
})




// new Vue({
//   el: "#app",
//   data:{
//     r_value: 0,
//     g_value: 0,
//     b_value: 0
//   },
//   computed:{
//     rgb: function(){
//       function setProp(prop, value){
//   document.documentElement.style.setProperty('--'+prop, Number(value))
// }

// var inputs =document.querySelectorAll('input[type="range"]');
// var inputsArr= Array.prototype.slice.call(inputs)

// inputsArr.forEach(function(input){
//   input.addEventListener('input', function(e){
//     setProp(e.target.name, e.target.value);
//   })
  
//   setProp(input.name, input.value)
// })
//     }
//   }
// })
