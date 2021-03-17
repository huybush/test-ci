function soSanh(arr1 ,arr2){

  let arr = arr1.concat(arr2)
  
  for(let i = 0 ; i < arr.length ; i++){

      for(let j = i+1 ; j<arr.length;j++){
        if(arr[i] === arr[j]){
          arr.splice(j,1);
          arr.splice(i,1);
          i--

          
        }
        
        
      }
  }
  return arr
  
}

soSanh([1, 2, "a"],[1, 3, "b"] )





function xephang (oj){
  let tg; 
  for (let i = 0 ; i <oj.length; i++){
    
    for(let j =i+1; j <oj.length;j ++){
       if(oj[i].points < oj[j].points){
          tg =oj[i]
          oj[i]= oj[j]
          oj[j] =tg
       }
       if((oj[i].points == oj[j].points)&&(oj[i].GD < oj[j].GD)){
          tg =oj[i]
          oj[i]= oj[j]
          oj[j] =tg
          

       }
          
    }
    
  
  }
  for(let i = 0 ; i < oj.length;i++) {
    oj[i].position = i+ 1
  }

  return oj
}


let ob = [
  {
    name:"Arsenal",
    points : 99,
    GD: 45
  },
    {
    name:"Chelsea",
    points : 75,
    GD: 38
  },
    {
    name:"Manchester United",
    points : 60,
    GD: 29
  },
    {
    name:"Liverpool",
    points : 100,
    GD: 39
  },

]


xephang(ob)