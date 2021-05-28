import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models";
import {PostsService} from "../../services";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  userId: number

  posts:IPost[]
  constructor(private postsService:PostsService ) { }

  ngOnInit(): void {
    this.postsService.getPostsByUser(this.userId).subscribe(posts =>{
      this.posts = posts;
    })
  }

}
