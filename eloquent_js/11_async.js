
//exercise 1
async function activityTable(day) {
  let logFileList = await textFile("camera_logs.txt");
  const linesArray = logFileList.split("\n");
  let table = new Array(24).fill(0);
  for (let file of linesArray){
    let timestamp = await textFile(file);
    let timestamp_arr = timestamp.split("\n");
    for (let time of timestamp_arr){
     let d = new Date(parseInt(time));
     if(d.getDay() == day){
        table[d.getHours()] += 1;
     }
    }
  }
//console.log(new Date(parseInt((await textFile(linesArray[0])).split("\n"))).getHours());

  return table;
}

activityTable(1)
  .then(table => console.log(activityGraph(table)));

  //exercise 2