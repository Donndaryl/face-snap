import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  ifsnap!: boolean;
  texteOnButton!: string
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imgUrl!: string;
  ngOnInit(){
    this.texteOnButton = 'Liker'
    this.title  ='Archibald'
    this.description = 'Mon meilleurs ami'
    this.createdAt = new Date()
    this.snaps = 0
    this.imgUrl = '../../assets/img/01.jpg'
  }
  addSNap(){
    if(this.ifsnap == false){
      this.snaps = 0
      this.ifsnap = true
      this.texteOnButton = 'Like'
    }else{
      this.snaps = 1
      this.ifsnap = false
      this.texteOnButton = 'Unlike'
    }


  }
}
