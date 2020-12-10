import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  name = 'Angular 5';
  uluru: Object = { lat: -25.363, lng: 131.044 };
  map: Object;
  marker: Object;
  zoom: number;
  @ViewChild('map') mapRef: ElementRef;
  ngAfterViewInit() {
    //used setTimeout google map is delayed in loading, in stackBlitz

    setTimeout(() => {
      this.map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 4,
        center: this.uluru
      });
      this.marker = new google.maps.Marker({
        position: this.uluru,
        map: this.map
      });

    }, 2000)

    //console.log(this.map.getZoom())
  }
  reset() {
    this.uluru = { lat: -25.363, lng: 131.044 };
    this.map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 4,
      center: this.uluru
    });
    this.marker = new google.maps.Marker({
      position: this.uluru,
      map: this.map
    });
  }
  updateMap(lats: number, lon: number) {
    this.zoom = this.map.getZoom();
    alert('current zoom=' + this.zoom)
    this.uluru = { lat: lats, lng: lon };
    this.map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: this.zoom,
      center: this.uluru
    });
    this.marker = new google.maps.Marker({
      position: this.uluru,
      map: this.map
    });
  }

}
