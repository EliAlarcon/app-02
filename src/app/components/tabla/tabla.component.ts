import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  nombre = "Juan Paz";
  edad=23;

  peliculas=[
    {
      titulo: "Matrix",
      genero: "accion",
      anio: "1999",
      imagen: "https://th.bing.com/th/id/R.2883ac9bed6c4966950aeaa5f495f52b?rik=R6EdTf6S1Y6tAA&pid=ImgRaw&r=0"
    },
    {
      titulo: "Titanic",
      genero: "Romance",
      anio: "2002",
      imagen: "https://th.bing.com/th/id/R.667009e0b2d0878fed8c8a2b45af4376?rik=CTuVDirCs9KsrQ&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2ftitanic-movie-full-hd.jpg&ehk=shuYoCshdWaPmf8iswXCLMCuKFbhdMKIwKhFoDL2slk%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      titulo: "Frozen",
      genero: "Animada",
      anio: "2019",
      imagen: "https://th.bing.com/th/id/OIP.9aerk7GTztYecqaYydhnIgHaFj?pid=ImgDet&rs=1"
    },
    {
      titulo: "Jumanji",
      genero: "Ciencia ficción",
      anio: "2021",
      imagen: "https://th.bing.com/th/id/R.480683358dfaf28ada83710630778c06?rik=mkM6Y12BB6q%2fcg&pid=ImgRaw&r=0"
    }
  ]

  mostrar = false;

  temp = true;

  cambiar(){
    this.temp = !this.temp
  }
}
