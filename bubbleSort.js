// let delay =
const spd = document.getElementById("changeSpeed");
let delay = (150-spd.value);
spd.addEventListener("input",function(){
    //let c = spd.value;
    delay = (150-spd.value);
    console.log(delay);
    // if( c > delay){
    //   delay =
    // }
});

var bub = document.getElementById("bubbleSort");
bub.addEventListener("click",bubble);
async function bubble(){
  //alert("hello");

  disableSlide();
  disableNewArray();
  disableBubble();
  disableMerge();
  disableQuick();
  disableHeap();
  disableInsertion();

  var bars = document.querySelectorAll(".bars-class");
  for(let i = 0 ; i < bars.length ; i+=1){
    //alert("hello");
    await waiting(delay);
    for(let j = 0 ; j < bars.length-1-i ; j +=1){
      let v1 = parseInt(bars[j].style.height);
      let v2 = parseInt(bars[j+1].style.height);
      // console.log(v1);
      // console.log(v2);
      bars[j].style.backgroundColor = "yellow";
      bars[j+1].style.backgroundColor = "red";
      await waiting(delay);
      if(v1 > v2){
        const temp=bars[j].style.height;
        //console.log("this is ");
        await waiting(delay);
        bars[j].style.height = bars[j+1].style.height;
        bars[j+1].style.height = temp;
        await waiting(delay);
      }
      bars[j].style.backgroundColor = "rgb(0, 183, 255)";
      bars[j+1].style.backgroundColor = "rgb(0, 183, 255)";
    }
    bars[bars.length-1-i].style.background = "green";
  }

  // for(let k = 0 ; k < bars.length ; k+=1){
  //   await waiting(delay);
  //   bars[k].style.backgroundColor = "green";
  //   await waiting(delay);
  // }

  enableSlide();
  enableNewArray();
  enableMerge();
  enableQuick();
  enableHeap();
  enableBubble();
  enableInsertion();
}
