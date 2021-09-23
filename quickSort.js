

async function newSort(bars, l , e){
  let n1 = e - l + 1 ;

  // let left = new Array(n1);
  // for(let i = 0 ; i < n1 ; i++){
  //   left[i] = bars[l+i].style.height;
  // }

  let pivot = parseInt(bars[e].style.height);

  let i = l ;
  let j = l ;
  bars[e].style.backgroundColor="#ABEBC6";
  while( j < e){
    await waiting(delay);
    if(parseInt(bars[j].style.height) <= pivot){
      await waiting(delay);
      bars[j].style.backgroundColor = "yellow";
      bars[i].style.backgroundColor = "red";
      let temp = bars[j].style.height;
      bars[j].style.height = bars[i].style.height;
      bars[i].style.height = temp;
      await waiting(delay);
      bars[i].style.backgroundColor = "rgb(0, 183, 255)";
      bars[j].style.backgroundColor = "rgb(0, 183, 255)";
      i++;
      j++;
    }
    else{
      await waiting(delay);
      bars[j].style.backgroundColor = "yellow";
      await waiting(delay);
      bars[j].style.backgroundColor = "rgb(0, 183, 255)";
      j++;
      // bars[j].style.backgroundColor = "yellow";
    }
    await waiting(delay);
  }
  bars[e].style.backgroundColor="rgb(0, 183, 255)";
  let temp = bars[i].style.height;
  bars[i].style.height = bars[e].style.height;
  bars[e].style.height = temp;
  bars[i].style.backgroundColor = "green";
//  bars[j+1].style.backgroundColor = "rgb(0, 183, 255)";

  return i;

}


async function quick(bars, l , e){
  if(e > l){
    let partition = await newSort(bars, l , e);
    await quick(bars, l , partition - 1);
    await quick(bars, partition+1 , e);
  }
  else if(e === l){
    bars[e].style.backgroundColor = "green";
  }
}

const eleme = document.getElementById("quickSort");
eleme.addEventListener("click",async function(){
  disableSlide();
  disableNewArray();
  disableBubble();
  disableMerge();
  disableQuick();
  disableHeap();
  disableInsertion();
  const bars = document.querySelectorAll(".bars-class");
  let l = 0 ;
  let e = bars.length-1;

  await quick(bars, l , e);

  enableSlide();
  enableNewArray();
  enableMerge();
  enableQuick();
  enableHeap();
  enableBubble();
  enableInsertion();

});
