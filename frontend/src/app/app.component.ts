import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { latLng, tileLayer } from 'leaflet';

declare var L;
declare var HeatmapOverlay;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.scss',"./node_modules/leaflet/dist/leaflet.css"]
})
export class AppComponent {
  title = 'app';
  data: JSON;
  heatmapLayer = new HeatmapOverlay({
    radius: 2,
    maxOpacity: 0.8,
    scaleRadius: true,
    useLocalExtrema: true,
    latField: 'lat',
    lngField: 'lng',
    valueField: 'count'
  })
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      }),
      this.heatmapLayer
    ],
    zoom: 4,
    center: L.latLng([ 46.879966, -121.726909 ])
  };
  

  

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('http://127.0.0.1:5000/data').subscribe(data => {
      this.data = data as JSON;
      for(let x in data){
        let heat = L.heatLayer([
        ])
      }
    })
  }

  getData() {
    
    console.log('data', this.data[0]);
  }
}
