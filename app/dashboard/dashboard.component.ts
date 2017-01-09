import { Component, OnInit } from '@angular/core';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
    // moduleId: module.id, // Cannot be used together with outDir in tsconfig.json
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.component.html',
    styleUrls: ['./app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }
}