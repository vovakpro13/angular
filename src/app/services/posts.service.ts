import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../models";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }

  getPostsByUser(id:number){
    return this.httpClient.get<IPost[]>(`${urls.posts}?userId=${id}`)
  }
}
