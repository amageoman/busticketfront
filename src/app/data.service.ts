import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  booked:any=[];
  
  constructor(private http:HttpClient) { 
    
  }


  book(seat:any){
    if(this.booked.includes(seat)){
  let index = this.booked.indexOf(seat)
  this.booked.splice(index,1)
  
  
    }
    else{
      this.booked.push(seat)
     
      
    }
  
    console.log(this.booked);
    
  
  }


bookticket(name:any,phone:any,start:any,end:any){

  const body={
name,phone,start,end,seat:this.booked
  }
  return this.http.post('http://localhost:3000/bookseat',body)
}


getseats(){

  return this.http.get('http://localhost:3000/getseats')
}

cancelticket(phone:any,name:any){

  const body={
    phone,name
  }

  return this.http.post('http://localhost:3000/cancelticket',body)
}
}
