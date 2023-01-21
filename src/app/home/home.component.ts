import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  booked:any=[];
  alreadybooked:any=[]
 ticketdata:any
  



  constructor(private ds:DataService, private route:Router){
    this.ds.getseats().subscribe((result:any)=>{
    
      this.alreadybooked=result.bookedseats
      this.ticketdata=result.message
          })
  
  }
  ngOnInit() {
    
    
  }

  
  

  book(seat:any){
    this.ds.book(seat)
  }


  
confirm(name:any,phone:any,start:any,end:any){




  this.ds.bookticket(name,phone,start,end).subscribe((result:any)=>{
   alert("added")
  })
  this.booked=[]
  window.location.reload()

}

cancel(phn:any,username:any){

  this.ds.cancelticket(phn,username).subscribe((result:any)=>{
    alert(result)
    window.location.reload()

  })

  this.route.navigateByUrl('')
  
}



 

}
