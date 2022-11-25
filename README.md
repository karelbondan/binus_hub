# Binusian Hub Frontend Repository
This repository is part of a microservice project named Binusian Hub. This particular repo is made for the frontend part of the website. 

While this repo will keep being updated, you can run the development mode or even the production mode of the frontend website by having the neede tool for it:

1. node.js

That's it, that's all you need to run this repository. To make sure you have correctly installed node, you can check the version by executing 

`npm --version`

in your desired terminal. All you need to do now is set your GitLab password if you haven't, then clone this repository to your desired local directory by running 

`git clone https://gitlab.com/binus-hub/front-end/ui_source_code.git`

command in your desired terminal. Afterwards, `cd` to the newly created directory and run 

`npm install` or `npm i`

Wait until the process is finished, then run 

`npm run dev`

in your terminal if you want to see the website in development mode. Other than that, you can run 

`npm run build` then `npm run dev`

in your terminal if you want to see the production build of the website. We are planning to add a docker implementation in the future to ease the process of testing the frontend part of the website.

Alternatively, you can visit https://bihub-demo-studentproject.vercel.app/ if you don't want to go through the hassle of the steps above. Do keep in mind that the website hosted in the domain above might not be the most updated version since it's sourced from another repository (This repository is private and the build process ran into some problems because of that). 