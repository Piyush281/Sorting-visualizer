
async function addMerge(bars,l, mid , e){
  let n1 = mid - l +1;
  let n2 = e - mid;
  let left = new Array(n1);
  let right = new Array(n2);
  for(let i = 0 ; i < n1 ; i+=1){
    await waiting(delay);
    bars[l+i].style.backgroundColor = "#F1C40F";
    left[i] = bars[l+i].style.height;
  }
  for(let j = 0 ; j < n2 ; j+=1){
    await waiting(delay);
    bars[mid+1+j].style.backgroundColor = "red";
    right[j] = bars[mid+1+j].style.height;
  }
  //console.log(left);
  //console.log(right);
  let k = l ;
  let p = 0 ;
  let q = 0 ;
  while(p < n1 && q < n2){
    await waiting(delay);
    if(parseInt(left[p]) < parseInt(right[q])){
      bars[k].style.height = left[p];
      if(n1+n2 === parseInt(bars.length)){
        bars[k].style.backgroundColor = "green";
      }
      p++;
      k++;
    }
    else{
      bars[k].style.height = right[q];
      if(n1+n2 === parseInt(bars.length)){
        bars[k].style.backgroundColor = "green";
      }
      q++;
      k++;
    }
    await waiting(delay);
  }

  while(p < n1){
    await waiting(delay);
    bars[k].style.height = left[p];
    if(n1+n2 === parseInt(bars.length)){
      bars[k].style.backgroundColor = "green";
    }
    p++;
    k++;
    await waiting(delay);
  }
  while(q < n2){
    await waiting(delay);
    bars[k].style.height = right[q];
    if(n1+n2 === parseInt(bars.length)){
      bars[k].style.backgroundColor = "green";
    }
    q++;
    k++;
    await waiting(delay);
  }
  if(n1+n2 !== bars.length){
  for(let kp = l ; kp< e+1 ; kp+=1){
    await waiting(delay);
    bars[kp].style.backgroundColor="#ABEBC6";
  }
}
}

async function merg(bars , l , e){
  if(e > l){
    let mid = l +  Math.floor((e - l)/2);
    await merg(bars, l , mid);
    await merg(bars,mid+1 , e);
    await addMerge(bars, l , mid , e);
  }
}

var inser = document.getElementById("mergeSort");
inser.addEventListener("click",async function(){
  disableSlide();
  disableNewArray();
  disableBubble();
  disableMerge();
  disableQuick();
  disableHeap();
  disableInsertion();
  const bars = document.querySelectorAll(".bars-class");
  console.log(bars.length);
  let l = 0 ;
  let e = bars.length - 1;
  await merg(bars,l,e);

  enableSlide();
  enableNewArray();
  enableMerge();
  enableQuick();
  enableHeap();
  enableBubble();
  enableInsertion();

});
