import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'La tour des héros';

  computeLastModifiedDate() {
    const mois = new Array("janvier", "février", "mars",
                "avril", "mai", "juin", "juillet",
                "août", "septembre", "octobre",
                "novembre", "décembre");
    var maj = new Date(document.lastModified);
    document.getElementById("date").innerHTML = "Date de dernière mise à jour de la page :<strong> " +
            maj.getDate() + " " +
            mois[maj.getMonth()] + " " +
            maj.getFullYear() + "</strong>";
  }
}