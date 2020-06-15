let array = [];
let array2 = [];
let slider;
let w = 10;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(inputArr){
    let len = inputArr.length;
        for (let i = 0; i < len; i++) {
              array2[i] = 1;
            if (inputArr[i] > inputArr[i + 1]) {
                array2[i] = -1;
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                 await sleep(1000);

            }
        }
}


function setup(){
  createCanvas(displayWidth, displayHeight);
  array = new Array(floor(width / w));
  for(let i = 0; i < array.length; i++){
     array[i] = random(height);
   }

 }

function draw(){
background('black');
for(let i = 0; i < array.length; i++){
  if(array2[i] == -1){
    fill(255,0,0)
  }
  if (array2[i] == 1){
    fill(0,0,255);
  }
  else {
    fill('purple');
  }
  rect(i * w, height - array[i], w, array[i], i / length);
}
bubbleSort(array)
}
