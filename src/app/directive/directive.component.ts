import { Component } from '@angular/core';

@Component({
    selector : 'app-directive',
    templateUrl : './directive.component.html',
    styleUrls : ['./directive.component.css']
})
export class DirectiveComponent{
myStyle:any={color:'pink'}
  public  handelClick(){
        this.myStyle={color:'red',backgroundColor:'yelow'}
    }
    title:string="Directive Demo Example"
    student:any=[{Name:'Ashini',RollNo:1,City:'Pune'},
                {Name:'Sumit',RollNo:2,City:'Mumabi'},
                {Name:'Vishal',RollNo:3,City:'Latur'},
                {Name:'Rohini',RollNo:4,City:'Osmanabad'},
                {Name:'Ganesh',RollNo:5,City:'Tahne'}]
}