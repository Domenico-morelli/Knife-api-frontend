import { KnifeFetcherServiceService } from './../services/knife-fetcher-service.service';
import { KnifeserviceService } from './../services/knifeservice.service';
import { Component, OnInit } from '@angular/core'
import { KnifeInterface } from './knifeInterface';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-knife',
  templateUrl: './knife.component.html',
  styleUrls: ['./knife.component.css']
})
export class KnifeComponent implements OnInit{

constructor(private knifeService : KnifeserviceService,private KnifeFetcherServiceService:KnifeFetcherServiceService){}

knivesArray: any;
knivesArray$: any; //observable
responsiveOptions!: any[];
//add this if it gets fetched only once
//.pipe(take(1))

//non va
 getKnivesArrayPreferedMethod() :void{
 this.knivesArray$ = this.KnifeFetcherServiceService.getAvailableKnivesFromDB().pipe(tap(data=>this.knivesArray$=data));
}

getKnivesArray() :void{
  this.KnifeFetcherServiceService.getAvailableKnivesFromDB().pipe(take(1)).subscribe((data) =>{
   this.knivesArray = data;
  });
 }

ngOnInit() {
    // this.knifeService.getKnivesArray().then((knives:knifeInterface) => {
    //     this.knivesArray = knives;
    // });
   // console.log(this.knivesArray);

    this.getKnivesArray();

    this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];


}

getSeverity(status: string) {
  switch (status) {
      case 'INSTOCK':
          return 'success';
      case 'LOWSTOCK':
          return 'warning';
      case 'OUTOFSTOCK':
          return 'danger';
      default :
      return 'OUTOFSTOCK';
  }
}
}
