import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, filter, map, Observable} from "rxjs";
import {FakerData} from "../models/faker-data";
import {FakerResponse} from "../models/faker-response";

@Injectable({
  providedIn: 'root'
})
export class FakerService {

  private fakerDataUrl = 'https://fakerapi.it/api/v1/images?_width=380';

  private fakerData: BehaviorSubject<FakerData[]> = new BehaviorSubject<FakerData[]>([]);

  constructor(private httpClient: HttpClient) { }

  fetchFakerData() {
    this.httpClient.get<FakerResponse>(this.fakerDataUrl).subscribe(response => {
      if (response?.data) {
        this.fakerData.next(response.data);
      } else {
        this.fakerData.next([]);
      }
    });
  }

  clearFakerData() {
    this.fakerData.next([]);
  }

  public getNonNullFakerData(): Observable<FakerData[]> {
    return this.fakerData.asObservable().pipe(
      map((fakerData) => fakerData ? fakerData : [])
    )
  }
}
