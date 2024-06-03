if(localStorage.getItem("Checkpoint")!=undefined){
  
} 
bogo = (Boolean = false);
fifteenOff = (Boolean = false);
shipping = (Boolean = false);
var pretax;
var grocery = {
  bogo: (Boolean = false),
  fifteenOff: (Boolean = false),
  shipping: (Boolean = false),
  cheese: 0,
  chocolateMilk: 0,
  ham: 0,
  strawberry: 0,
  bread: 0,
  tomato: 0,
  chicken: 0,
  cupcake: 0,
  soda: 0,
  chips: 0,
  treats: 0,
  rice: 0,
  update: function (run) {
    pretax = (grocery.cheese*2.99)+(grocery.chocolateMilk*1.99)+(grocery.ham*7.99)+(grocery.strawberry*0.99)+(grocery.bread*4.99)+(grocery.tomato*1.99)+(grocery.chicken*8.99)+(grocery.chips*1.99)+(grocery.cupcake*0.99)+(grocery.soda*2.99)+(grocery.treats*4.99)+(grocery.rice*19.99)
    if(document.getElementById("cheese")){
      localStorage.setItem("total",pretax)
      document.getElementById("cheese").innerHTML = grocery.cheese;
      document.getElementById("chocolatemilk").innerHTML = grocery.chocolateMilk;
      document.getElementById("ham").innerHTML = grocery.ham;
      document.getElementById("strawberry").innerHTML = grocery.strawberry;
      document.getElementById("bread").innerHTML = grocery.bread;
      document.getElementById("tomato").innerHTML = grocery.tomato;
    }
    if(document.getElementById("chicken")){
      localStorage.setItem("total2",pretax)
      document.getElementById("chicken").innerHTML = grocery.chicken;
      document.getElementById("cupcake").innerHTML = grocery.cupcake;
      document.getElementById("soda").innerHTML = grocery.soda;
      document.getElementById("chips").innerHTML = grocery.chips;
      document.getElementById("dogTreats").innerHTML = grocery.treats;
      document.getElementById("rice").innerHTML = grocery.rice;
    }
    if (run != 0) {
      this.fix();
    }
  },
  fix: function () {
    if (this.cheese < 1) {
      this.cheese = 0;
    }
    if (this.chocolateMilk < 1) {
      this.chocolateMilk = 0;
    }
    if (this.ham < 1) {
      this.ham = 0;
    }
    if (this.strawberry < 1) {
      this.strawberry = 0;
    }
    if (this.bread < 1) {
      this.bread = 0;
    }
    if (this.tomato < 1) {
      this.tomato = 0;
    }
    if (this.chicken < 1) {
      this.chicken = 0;
    }
    if (this.cupcake < 1) {
      this.cupcake = 0;
    }
    if (this.soda < 1) {
      this.soda = 0;
    }
    if (this.treats < 1) {
      this.treats = 0;
    }
    if (this.rice < 1) {
      this.rice = 0;
    }
    if (this.chips < 1) {
      this.chips = 0;
    }
    grocery.update(1)
  },
};
function change(item, value) {
  if (item == "cheese") {
    grocery.cheese = grocery.cheese + value;
  }
  if (item == "chocolatemilk") {
    grocery.chocolateMilk = grocery.chocolateMilk + value;
  }
  if (item == "ham") {
    grocery.ham = grocery.ham + value;
  }
  if (item == "strawberry") {
    grocery.strawberry = grocery.strawberry + value;
  }
  if (item == "bread") {
    grocery.bread = grocery.bread + value;
  }
  if (item == "tomato") {
    grocery.tomato = grocery.tomato + value;
  }
  if (item == "cupcake") {
    grocery.cupcake = grocery.cupcake + value;
  }
  if (item == "soda") {
    grocery.soda = grocery.soda + value;
  }
  if (item == "treats") {
    grocery.treats = grocery.treats + value;
  }
  if (item == "chips") {
    grocery.chips = grocery.chips + value;
  }
  if (item == "chicken") {
    grocery.chicken = grocery.chicken + value;
  }
  if (item == "rice") {
    grocery.rice = grocery.rice + value;
  }
  grocery.update();
}
function discounts(){
if(grocery.bogo=true){
  if(grocery.strawberry>=2){
    var discount=-1
  }
}
if(grocery.fifteenOff=true){
  localStorage.setItem("fifOff",grocery.fifteenOff)
}
if(grocery.shipping=true){
  var discount= discount-20
}
localStorage.getItem("discount",discount)
}
var total

