# Welcome to All Day

### All Day is an e-commerce web store that offers some of the finest sofas in the world.

## Getting Started:
### Install dependencies:
##### Before attempting to run All Day, you must install all dependencies. Be sure that you have node and Yarn installed.
##### Node can be installed at: https://nodejs.org/en/download/
##### or you can use a package manager, such as Homebrew (OSX), Snap or Apt (Linux), or whatever you would use for Windows.
OSX:```brew update && brew install node```
<br/>
Linux:```sudo apt update && sudo apt install nodejs``` 
or ```sudo snap install node --classic```
####<br/>
##### Then you can install yarn with the following command:
```sudo npm i --global yarn```
<br/>

### Building and running within your local environment:
##### To run the application in development within your local environment. In the terminal, run:
```npm run start```
##### or with Yarn:
```yarn start```
#####This will run the application with hot reload, and compile SCSS/SASS files to CSS as changes are detected.
<br/>

### Build and run within a Docker container:
##### Make sure that Docker is installed locally. The Docker daemon needs to run in the background.
##### Build and launch the All Day docker image with command:
```npm run launch```
##### In your browser, navigate to http://172.17.0.2:3000 to view the application. 
##### You are also able to work within the virtual environment with hot-reloading by using ```docker exec -i <image id>```
##### Find the image id with ```docker images -a``` or ```docker ps```