import { Component } from '@angular/core';

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent{
    
    name="pune"

    student:any[]=[
        {id:1, name:"sachin", add:"nashik",contact:9876543212},
        {id:2, name:"sachin", add:"nashik",contact:9876543212},
        {id:3, name:"sachin", add:"nashik",contact:9876543212},
        {id:5, name:"sachin", add:"nashik",contact:9876543212},
        {id:6, name:"sachin", add:"nashik",contact:9876543212}
    ]
    
    roll=3
    
    show=true
    
    clickdata(){
        this.show=!this.show
        console.log(this.name);
    }
}