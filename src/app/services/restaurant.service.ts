import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant.model';
import { Type } from '../model/type.model';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Restaurant[]; // un tableau de restaurants
  types: Type[];
  constructor() {
    this.types = [
      { idType: 1, nomType: "Cuisine européenne" },  // Inclut : française, italienne, espagnole, grecque
      { idType: 2, nomType: "Cuisine asiatique" },    // Inclut : chinoise, japonaise, thaïlandaise, vietnamienne
      { idType: 3, nomType: "Cuisine mexicaine et latino-américaine" },  // Inclut : mexicaine
      { idType: 4, nomType: "Cuisine indienne et du sous-continent" },   // Inclut : indienne
      { idType: 5, nomType: "Cuisine méditerranéenne" }, // Inclut : méditerranéenne, marocaine, tunisienne
      { idType: 6, nomType: "Cuisine américaine" },   // Inclut : américaine
      { idType: 7, nomType: "Cuisine du Moyen-Orient" }
    ]; 
    this.restaurants = [
      {idRestaurant: 1, nomRestaurant: "Le Gourmet", adresseRestaurant: "123 Rue Principale", type: { idType: 1, nomType: "Cuisine européenne" },dateOuverture: new Date("01/14/2011")},
      {idRestaurant: 2, nomRestaurant: "El Sombrero", adresseRestaurant: "456 Avenue des Champs",type: { idType: 3, nomType: "Cuisine mexicaine et latino-américaine" }, dateOuverture: new Date("12/17/2010")},
      {idRestaurant: 3, nomRestaurant: "Sushi World", adresseRestaurant: "789 Boulevard du Sushi",type: { idType: 2, nomType: "Cuisine asiatique" }, dateOuverture: new Date("02/20/2020")}
    ];
  }
  listeTypes(): Type[] {
    return this.types;
  }
  
  consulterType(id: number): Type {
    return this.types.find(type => type.idType == id)!;
  }
  
  listeRestaurants(): Restaurant[] {
    return this.restaurants;
  }

  ajouterRestaurant(resto: Restaurant) {
    this.restaurants.push(resto);
  }

  supprimerRestaurant(resto: Restaurant) {
    const index = this.restaurants.indexOf(resto, 0);
    if (index > -1) {
      this.restaurants.splice(index, 1);
    }
  }

  consulterRestaurant(id: number): Restaurant {
    return this.restaurants.find(r => r.idRestaurant == id)!;
  }

  trierRestaurants() {
    this.restaurants = this.restaurants.sort((n1, n2) => {
      if (n1.idRestaurant! > n2.idRestaurant!) {
        return 1;
      }
      if (n1.idRestaurant! < n2.idRestaurant!) {
        return -1;
      }
      return 0;
    });
  }
  
  updateRestaurant(r: Restaurant) {
    this.supprimerRestaurant(r);
    this.ajouterRestaurant(r);
    this.trierRestaurants();
  }
}
