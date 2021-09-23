//const delay = 10;
var inser = document.getElementById("insertionSort");
inser.addEventListener("click",insertion);


async function insertion(){
  disableSlide();
  disableNewArray();
  disableBubble();
  disableMerge();
  disableQuick();
  disableHeap();
  disableInsertion();
  const bars = document.querySelectorAll(".bars-class");
  console.log(bars.length);
  for(let i = 1 ; i < bars.length ; i+=1){
    let v1 = parseInt(bars[i].style.height);
    let v2 = parseInt(bars[i-1].style.height);
    if(v2 > v1){
      let j = i - 1;
      while(j>=0 &&(parseInt(bars[j].style.height) > parseInt(bars[j+1].style.height) )){
        bars[j].style.backgroundColor = "yellow";
        bars[j+1].style.backgroundColor = "red";
        await waiting(delay);
        let temp = bars[j+1].style.height;
        bars[j+1].style.height = bars[j].style.height;
        bars[j].style.height = temp;
        bars[j].style.backgroundColor = "rgb(0, 183, 255)";
        bars[j+1].style.backgroundColor = "rgb(0, 183, 255)";
        j--;
        await waiting(delay);
      }
    }
  }

  for(let k = 0 ; k < bars.length ; k+=1){
    await waiting(delay);
    bars[k].style.backgroundColor = "green";
    await waiting(delay);
  }

  enableSlide();
  enableNewArray();
  enableMerge();
  enableQuick();
  enableHeap();
  enableBubble();
  enableInsertion();

}




// async function insertion(){
//   const bars = document.querySelectorAll(".bars-class");
//   for(let i = 1 ; i < bars.length ; i+=1){
//     let v1 = parseInt(bars[i].style.height);
//     let v2 = parseInt(bars[i-1].style.height);
//     if(v2 > v1){
//       let j = i - 1;
//       while(parseInt(bars[j].style.height) > parseInt(bars[j+1].style.height)){
//         await waiting(delay)
//         let temp = bars[j+1].style.height;
//         bars[j+1].style.height = bars[j].style.height;
//         bars[j].style.height = temp;
//         j -= 1;
// //        v2 = parseInt(bars[j].style.height);
//         await waiting(delay);
//       }
//     }
//   }
// }
