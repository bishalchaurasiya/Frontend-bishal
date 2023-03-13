import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SkillService } from '../skill.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit  {

  skills:any;

  constructor(private service:SkillService){

  }
  ngOnInit(){
  //  this.skills=this.service.getSkills().subscribe(data=>this.skills=data);
  this.skills=this.service.getSkills().subscribe(data=>this.skills=data)
  }

}
  

