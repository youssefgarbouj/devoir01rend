import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,RouterLink,CommonModule],
  selector: 'app-produits',
  templateUrl: './produits.html',
})
export class Produits {
  produits : string[]; 

  constructor() {
this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
  }
}
