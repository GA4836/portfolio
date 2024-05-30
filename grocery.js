var bogo = Boolean = false;
var fifteenOff = Boolean = false;
var shipping = Boolean = false;
var grocery = {
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
  update: function (run) {
    document.getElementById("cheese").innerHTML = grocery.cheese;
    document.getElementById("chocolatemilk").innerHTML = grocery.chocolateMilk;
    document.getElementById("ham").innerHTML = grocery.ham;
    document.getElementById("strawberry").innerHTML = grocery.strawberry;
    document.getElementById("bread").innerHTML = grocery.bread;
    document.getElementById("tomato").innerHTML = grocery.tomato;
    if(run != 0){
    this.fix();
  }
  },
  fix: function(){
    if(this.cheese <1 ){
      this.cheese = 0;
    }
    if(this.chocolateMilk <1 ){
      this.chocolateMilk = 0;
    }
    if(this.ham <1 ){
      this.ham = 0;
    }
    if(this.strawberry <1 ){
      this.strawberry = 0;
    }
    if(this.bread <1 ){
      this.bread = 0;
    }
    if(this.tomato <1 ){
      this.tomato = 0;
    }
    grocery.update(1);
  }
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
  grocery.update();
}
