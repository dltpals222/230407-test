const root = document.getElementById('root')

function tagMakeCall (parentName, tagName, callback){
  const element = document.createElement(tagName);
  parentName.appendChild(element);
  if(callback){
    callback(element);
  }
  return element
}

function dateSetOne (){
  const dataA = new Date();
  let dateTime = {
    year : dataA.getFullYear(),
      month : dataA.getMonth(),
      date : dataA.getDate(),
      day : dataA.getDay(),
      hour : dataA.getHours(),
      minute : dataA.getMinutes(),
      second : dataA.getSeconds(),
    }
    
    let ampm = '';
    let dayA = '';
  
  if(dateTime.hour <12){
    ampm = '오전'
  } else {
    ampm = '오후'
  }
  
    switch(dateTime.day) {
      case 0:
        dayA ='일요일'
      break;
      case 1:
        dayA ="월요일"
      break;
      case 2:
        dayA ="화요일"
      break;
      case 3:
        dayA ="수요일"
      break;
      case 4:
        dayA ="목요일"
      break;
      case 5:
        dayA ="금요일"
      break;
      default:
        dayA ="토요일"
      break;
    }
  
  const front = `${dateTime.year}-${dateTime.month}-${dateTime.date} ${ampm} ${dateTime.hour}시 ${dateTime.minute}분 ${dateTime.second}초 ${dayA}`

  const h1Cliock = document.getElementById('h1-clock')
  h1Cliock.innerHTML = front;
  
  
}


tagMakeCall(root, 'h1', function(element){
  element.setAttribute('id','h1-clock')
  element.style.width = '100vw'
  element.style.height = '100vh'
  element.style.display = 'flex'
  element.style.justifyContent = 'center'
  element.style.alignItems = 'center'
})



setInterval(dateSetOne,1000);

