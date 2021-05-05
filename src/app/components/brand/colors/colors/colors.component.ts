import { Component, OnInit } from '@angular/core';
import { colors } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  color:colors[]=[];
  constructor(private colorService:ColorService) { }
  ngOnInit(): void {
    this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.color=response.data;
    })
  }
}
