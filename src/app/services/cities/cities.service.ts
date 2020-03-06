import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesService {
    constructor(private _citiesEndpoint: CitiesEndpoint) {}

    getCityList(): Promise<ICity[]> {
        return this._citiesEndpoint.getCityList().toPromise();
    }

    deleteCity(id: number): Promise<any> {
        return this._citiesEndpoint.deleteCity(id).toPromise();
    }
}