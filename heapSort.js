
async function heapify(bars,i,en){
  let left = 2*i + 1 ;
  let right = 2*i+2;
  let element = i;
  if(left < en && parseInt(bars[left].style.height) > parseInt(bars[element].style.height)){
    element = left;
  }
  if(right < en && parseInt(bars[right].style.height) > parseInt(bars[element].style.height)){
    element = right;
  }

  if(element !== i){
    bars[i].style.backgroundColor = "yellow";
    bars[element].style.backgroundColor = "red";
    await waiting(delay);
    let temp = bars[element].style.height;
    bars[element].style.height = bars[i].style.height;
    bars[i].style.height = temp;
    bars[i].style.backgroundColor =  "rgb(0, 183, 255)";
    bars[element].style.backgroundColor =  "rgb(0, 183, 255)";
    await heapify(bars,element,en);
  }
}


async function heapp(bars,en){
  let k = Math.floor(en/2) - 1;
  for(let i = k ; i >= 0 ; i-=1){
    await heapify(bars, i , en);
  }
  for(let j = en - 1; j >= 0 ; j-=1){
    bars[j].style.backgroundColor = "yellow";
    bars[0].style.backgroundColor = "red";
    await waiting(delay);
    let temp = bars[j].style.height;
    bars[j].style.height = bars[0].style.height;
    bars[0].style.height = temp;
    bars[j].style.backgroundColor = "green";
    bars[0].style.backgroundColor =  "rgb(0, 183, 255)";
    await heapify(bars,0,j);
    await waiting(delay);
  }
      bars[0].style.backgroundColor =  "green";
}



var heapi = document.getElementById("heapSort");
heapi.addEventListener("click",async function(){
  disableSlide();
  disableNewArray();
  disableBubble();
  disableMerge();
  disableQuick();
  disableHeap();
  disableInsertion();
  const bars = document.querySelectorAll(".bars-class");
  //console.log(bars.length);
  let en = bars.length ;
  await heapp(bars, en);

  enableSlide();
  enableNewArray();
  enableMerge();
  enableQuick();
  enableHeap();
  enableBubble();
  enableInsertion();

});
