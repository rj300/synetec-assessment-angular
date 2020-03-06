import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesEndpoint extends BaseService {

    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }

    public getCityList(): Observable<any> {
        return this._httpClient.get<ICity[]>(`${this.getBaseUrl()}/api/cities`);
    }

    public deleteCity(id: number): Observable<any> {
        return this._httpClient.delete(`${this.getBaseUrl()}/api/cities/delete-city/${id}`);
    }
}