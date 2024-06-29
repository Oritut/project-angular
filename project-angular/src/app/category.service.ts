import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './models/category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private baseUrl="https://localhost:7286/api/categoery"
  constructor(private _http:HttpClient) { }
  get_categorys():Observable<Category[]>{
    return this._http.get<Category[]>(this.baseUrl)
  }
  get_category_by_id(id: number):Observable<Category>{
    return this._http.get<Category>(`${this.baseUrl}/${id}`);
  }
}
