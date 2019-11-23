import { Component } from '@angular/core';

@Component({

    selector:'app-college',
    templateUrl:'./college.component.html',
    styleUrls:['./college.component.css']
})


export class CollegeComponent{
name="pune"

student:any[]=[
    {id:1, name:"sachin", add:"nashik",contact:9876543212},
    {id:1, name:"sachin", add:"nashik",contact:9876543212},
    {id:1, name:"sachin", add:"nashik",contact:9876543212},
    {id:1, name:"sachin", add:"nashik",contact:9876543212},
    {id:1, name:"sachin", add:"nashik",contact:9876543212}
]

roll=3

show=false

clickdata(){
    console.log(this.name);
}
}