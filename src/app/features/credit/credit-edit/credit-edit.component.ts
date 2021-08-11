import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { Credit } from 'src/app/model/credit.class';
import { Movie } from 'src/app/model/movie.class';
import { ActorService } from 'src/app/service/actor.service';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-credit-edit',
  templateUrl: './credit-edit.component.html',
  styleUrls: ['./credit-edit.component.css']
})
export class CreditEditComponent implements OnInit {

  title: string= 'Credit-Edit';
  credit: Credit= new Credit();
  creditId: number=0;
  actors: Actor[]= [];
  movies: Movie[]= [];

  constructor(
    private creditSvc: CreditService,
    private movieSvc: MovieService,
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(parms => this.creditId = parms["id"]);
    console.log('creditId= '+this.creditId);
    this.creditSvc.get(this.creditId).subscribe(
      resp => {
          this.credit= resp as Credit;},
      err => {console.log(err);}        
    );

    this.actorSvc.list()
    .subscribe(
      resp => {
        this.actors= resp as Actor[];
      },
      err => {
        console.log(err);
      }
    );

    this.movieSvc.list()
    .subscribe(
      resp => {
        this.movies = resp as Movie[];
      },
      err => {
        console.log(err);
      }
    );
  }

  save() {
    this.creditSvc.edit(this.credit).subscribe(
      resp => {this.credit= resp as Credit;
              this.router.navigateByUrl('/credit-list')},
      err => {console.log(err);}
    );

  }

  compActor(a: Actor, b: Actor): boolean {
    return a && b && a.id === b.id;
  }

  compMovie(a: Movie, b: Movie): boolean {
    return a && b && a.id === b.id;
  }

}
