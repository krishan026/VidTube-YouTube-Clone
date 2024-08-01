export const API_KEY = 'AIzaSyAyH4V_4UguKkXV6TAHtm4YOvHwiVB5wGw';

export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}