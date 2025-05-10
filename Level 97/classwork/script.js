const names = ["Liam", "Emma", "Noah", "Olivia", "Ava", "William", "Sophia", "James", "Isabella", "Benjamin"];
function notforeach(array){
    for (let i = 0; i < array.length; i++) {
        const curValue = array[i];
        if (i % 2 === 0) {
            console.log(`${curValue} is on even index`);
        } else {
            console.log(`${curValue} is on odd index`);
        }
    }
}
notforeach(names)

function notForEach1(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
notForEach1(names)


function notmap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }