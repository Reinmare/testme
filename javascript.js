let num = 50;

if(num<49){
    console.log('не верно!');
}else if(num>300){
    console.log("много!");
}else{
    console.log('верно!');
}

(num == 50)? console.log('right!'): console.log('no!');

switch (num) {
    case num <49:
        console.log('нет!');
        break;
    case num>100:
        console.log('что-то еще');
        break;
    case  50:
        console.log('в точку!');
        break;
}