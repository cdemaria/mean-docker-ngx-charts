# mean-docker-ngx-charts
<h2>mean-docker material-design ngx-charts demo</h2>

## Details

This repo contains three docker containers (microservices) comprising a MEAN stack:
  1. An Angular.js 2 client app.
  2. An Express API server.
  3. A MongoDB database.

This pulls in examples from several sources with the purpose of demonstrating the following:
  - Hosting the MEAN stack components as dockerized microservices.
  - Material Design
  - ngx-charts (Angular 2 compatable D3 charts)

The three microservices have been configured to communicate with each other.
TODO: Add the bar chart to an MD card.
TODO: Display data from `/users` endpoint within bar chart.
TODO: Adding/removing users will be reflected in the bar chart.

## Usage

After cloning this repo, run this to start up all three containers:

`sudo docker-compose up --build`

The project will be served on: **http://localhost:4200**

Code changes will be live reloaded.

## Resources
  - https://scotch.io/tutorials/create-a-mean-app-with-angular-2-and-docker-compose
  - https://medium.com/codingthesmartway-com-blog/using-material-design-in-angular-2-83a3128c58b7#.4s5to6iou
  - https://github.com/swimlane/ngx-charts
