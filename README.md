# CSV Reader
React-Redux app to filter, sort and read CSV files with headers

<img src="https://github.com/teddy-owen/CSV_Reader/blob/master/img/snip1.PNG" alt="drawing" height="450px" width="550px"/>
<img src="https://github.com/teddy-owen/CSV_Reader/blob/master/img/snip2.PNG" alt="drawing" height="450px" width="550px"/>
<img src="https://github.com/teddy-owen/CSV_Reader/blob/master/img/snip3.PNG" alt="drawing" height="450px" width="550px"/>

### Requirements
- NodeJS
- NPM

### Getting Started
1. Clone this repo into your chosen directory
1. Make sure NodeJS and NPM are installed (https://nodejs.org/en/download/) 
1. Open your terminal/CLI, cd into the `app` directory and run `npm install`
1. Once the dependencies are installed, run `npm start`
1. A development server will "spin up" and the app should be available in your browser at `http://localhost:3000` 
1. The app should open in your browser
1. You can upload a CSV file with headers to be parsed - some sample files are availble in `app/data/`
1. Try adding filters and sorting your data on different columns

### Implementation
- Front end
  - ReactJS with Redux served via the server
  - Bootstrap served via CDN
  - Font Awesome served via CDN
  - Papa Parse is used in a webworker to parse the CSV into JSON
  - CSS and HTML served via dev server
- Back end
  - NodeJS running the dev server
  - Babel and Webpack used to compile jsx to js and then bundle the js files  
  - Single route serving index.html with React app 
  - Serves static files
