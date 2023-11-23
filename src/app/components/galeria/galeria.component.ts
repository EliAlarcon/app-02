import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  
  imagenes=[
    {
      url: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/12/producciones-netflix-2175501.jpg?itok=uFhAi4Ez",
      descripcion: "Cuenta de Netflix"
    },
    {
      url: "https://th.bing.com/th/id/R.882b776e393ab1ea1524587f2bf759c9?rik=gjRKG2anNtsilg&pid=ImgRaw&r=0",
      descripcion: "Cuenta de HBOmax"
    },
    {
      url: "https://media.ambito.com/adjuntos/239/imagenes/037/325/0037325228.jpg",
      descripcion: "Cuenta de Disney+"
    },
  ]
}
