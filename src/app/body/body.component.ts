import { Component, OnInit,Input } from '@angular/core';
import {ServiceService} from '../service.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss','../../assets/sass/panel.scss'],
  providers:[ServiceService]
})
export class BodyComponent implements OnInit {
 /* @Input()
  filterOption:string;

  @Input()
  filterOptionStore:string;

  */
  newImg:string;
  public myarray: Array<{}>
  constructor(public _serviceservice:ServiceService) {
   this.myarray=this._serviceservice.getData();
   }
 
/*
  addImage(newImg,myIndex)
  {
   
    if(newImg==""){alert("Please Enter Image");}else{
     this.newImg=newImg;
     this.myarray[myIndex].imgarray.push({imgurl:newImg});
     this.myarray[myIndex].boxdisplay=!this.myarray[myIndex].boxdisplay;
  }}
 
  toggleTextbox(myIndex)
  { 
    this.myarray[myIndex].boxdisplay=!this.myarray[myIndex].boxdisplay;
   
  }
  disStatus:boolean=false;
  checkStore(filterOptionStore:string,stories:any):boolean
  { this.disStatus=false;
    for(let i=0;i<stories.length;i++)
    { 
      let sname2=stories[i].sname;
     if(sname2.search(filterOptionStore)==-1)
     {
      
     }else{
      this.disStatus=true;
     }
    }
  
   return this.disStatus;
  }
*/
  ngOnInit() {
  }

}
