import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";
@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{

    cities: ICity[] = [];
    
    noCitiesMessage : string = "No cities were found.";
    constructor(private citiesService: CitiesService) {}
    ngOnInit(): void {
        console.log("test");
        this.getCityList();
    }

    cityListExists() : boolean {
        if (this.cities === []) {
            return false;
        } 

        return true
    }

    getCityList() {
        this.citiesService.getCityList().then((cities) => {
            this.cities = cities;
            this.cityListExists();
        });
    }

    deleteCity(id: number) {
        this.citiesService.deleteCity(id).then(() => {
            this.getCityList();
        })
    }

}