import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  audio = new Audio();

  play(){
    this.audio.src = "../../../assets/sounds/Hasile-Fisile.mp3"
    this.audio.load();
    this.audio.play();
  }
  stop(){
    this.audio.pause();
  }
}
