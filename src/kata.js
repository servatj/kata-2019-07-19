module.exports = (seed, times) => {
  let results = [seed];
  let current = seed;

  for (let i = 1; i < times; i++) {
    let arr = current.split('');
    let counter = 1;
    let previous = arr[0];
    let display = '';
    for (let b = 1; b < arr.length; b++) {
       if(arr[b] === previous) counter++;
       else {
        display = `${display}${counter}${arr[b]}`
        previous = arr[b];
        counter = 0;
       }
    }
    current = '1' + seed;
    results.push(current);
  }
  return results;
}
