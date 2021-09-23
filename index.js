// Tomorrow add disable funtion to disable the button


// this is for getting a New Array;
const ele = document.getElementById("newArray");
  function reload(){
    reload = location.reload();
    }
  ele.addEventListener("click",reload,false);

// Now i want to add div (means bars);

function waiting(mili){
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve('');
    },mili);
  });
}

const addBars = document.getElementById("addTheBars");
const finds = document.getElementById("size_of");
let vl = finds.value;
console.log(vl);
for(let i = 0 ; i < vl ; i+=1){
  let val =  Math.floor(Math.random()*vl)+1;
  //console.log(val);
  //console.log(val);
  if(val <= 3){
    val += 4;
  }
  let newEle = document.createElement("div");
  newEle.classList.add("bars-class");
  newEle.style.height = `${val*5}px`;
  newEle.style.width = "8px";
  newEle.innerHTML = val;
//  newEle.style.backgroundColor = "red";
  addBars.appendChild(newEle);
}
finds.addEventListener("input",function(){
  var foo = document.getElementsByClassName('bars-class');
  console.log("this is the foo length");
  console.log(foo.length);
  // for(let k1 = 0 ; k1 < foo.length ; k1+=1){
  //   foo[k1].remove();
  // }
  let k1 = 0 ;
  while(k1 < foo.length){
    foo[0].remove();
    //k1++;
  }
  //foo.remove();
  console.log("this is the remove");
  console.log(foo.length);
  vl = finds.value;
  console.log(vl);
  for(let i = 0 ; i < vl ; i+=1){
    let val =  Math.floor(Math.random()*vl)+1;
    //console.log(val);
  //  console.log("this is for bars");
  //  console.log(i);
    //console.log(val);
    if(val <= 5){
      val += 5;
    }
    // if()
    let newEle = document.createElement("div");
    newEle.classList.add("bars-class");
    if(vl>110){
      if(val <= 5){
        val += 7;
      }
      newEle.style.height = `${val*3}px`;
    }
    else{
      newEle.style.height = `${val*5}px`;
    }
    if(vl > 110){
      newEle.style.width = "5px";
    }
    else{
      newEle.style.width = "8px";
    }
    addBars.appendChild(newEle);
  }
});





function disableSlide(){
  const ff = document.getElementById("size_of");
  ff.disabled = true;
}

function disableNewArray(){
  const ff = document.getElementById("newArray");
  ff.disabled = true;
}

function disableMerge(){
  const ff = document.getElementById("mergeSort");
  ff.disabled = true;
}

function disableQuick(){
  const ff = document.getElementById("quickSort");
  ff.disabled = true;
}

function disableHeap(){
  const ff = document.getElementById("heapSort");
  ff.disabled = true;
}

function disableBubble(){
  const ff = document.getElementById("bubbleSort");
  ff.disabled = true;
}

function disableInsertion(){
  const ff = document.getElementById("insertionSort");
  ff.disabled = true;
}

function enableSlide(){
  const ff = document.getElementById("size_of");
  ff.disabled = false;
}

function enableNewArray(){
  const ff = document.getElementById("newArray");
  ff.disabled = false;
}

function enableMerge(){
  const ff = document.getElementById("mergeSort");
  ff.disabled = false;
}

function enableQuick(){
  const ff = document.getElementById("quickSort");
  ff.disabled = false;
}

function enableHeap(){
  const ff = document.getElementById("heapSort");
  ff.disabled = false;
}

function enableBubble(){
  const ff = document.getElementById("bubbleSort");
  ff.disabled = false;
}

function enableInsertion(){
  const ff = document.getElementById("insertionSort");
  ff.disabled = false;
}
