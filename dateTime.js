// const dateTime = new Date();

// const year = dateTime.getFullYear(); //년
// const month = dateTime.getMonth(); //월
// const date = dateTime.getDate(); //일수

// const day = dateTime.getDay(); //요일

// const hour = dateTime.getHours(); //시
// const minute = dateTime.getMinutes(); //분
// const second = dateTime.getSeconds(); //초



// export default {dateTime, year, month, date, day, hour, minute, second}


const dateTime = {
  year : new Date().getFullYear(),
  month : new Date().getMonth(),
  date : new Date().getDate(),
  day : new Date().getDay(),
  hour : new Date().getHours(),
  minute : new Date().getMinutes(),
  second : new Date().getSeconds(),
}

// console.log(dateTime)

export default dateTime