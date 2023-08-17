import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
 


countries:country[]=[
  new country('1','India'),
  new country('2','Australia'),
  new country('3','usa')
]
contacts!:contact;
ngOnInit(): void {

  this.contacts={
    firstName:"",
    lastName:"karthikeyan",
    email:"sharmi@gmail.com",
    gender:"female",
    ismarried:true,
    country:"1",
    address:
    {
      city:"Tiruchengode",
      street:"sengodapalayam",
      pincode:"123456"
    }

  }
}



onsubmit(form:any)
{
console.log(form.value);
}
}


class country
{
  id!:string;
  name!:string;
  constructor(id:string,name:string)
  {
    this.id=id;
    this.name=name;
  }
}
class contact
{
  firstName!:string;
  lastName!:string;
  email!:string;
  gender!:string;
  ismarried!:boolean;
  country!:string;
  address!:
  {
    city:string;
    street:string;
    pincode:string;

  }


}







