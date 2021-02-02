# Weather App Using React Js

## Table of Contents
* [Description](#Description)
* [Links](#Links)
* [Technologies](#Technologies)
* [Features](#Features)
* [Author](#Author)
* [Credits](#Credits)
* [License](#License)

## Description 
Welcome to my very own Weather app. Here you will find the ability to search a city, state or country and find the current weather, along with the five day forcast. This project I previously wrote using jQuery, local storage, and Ajax but decided to re-write it using react, sequelize and axios. Have Fun searching your city!

## Links
* [Repo](https://github.com/IvanTorresMia/React-Weather-App)

## Technologies
* [JavaScript](https://www.w3schools.com/js/)
* [AOS](https://michalsnik.github.io/aos/)
* [react](https://reactjs.org/)
* [React-Router](https://reactrouter.com/)
* [CSS](https://www.w3schools.com/css/)
* [HTML](https://www.w3schools.com/html/)
* [JSX](https://reactjs.org/docs/introducing-jsx.html)
* [Axios](https://www.npmjs.com/package/axios)



## Features
![Gif](./reactportfolio.gif)

## Code

* This is the code I used to map through my projects, Using Context.
```
      <div className="ConStyle">
            <div className="title">
            <h1 className="display-4">Projects</h1>
            </div>
            <hr />
            <div className="row card-group">
            {projects.map((project, i) => (
                <div className="col-sm-4 projectStyle rounded" data-aos="fade-left">
                    <h3 className="font-weight-normal">
                    {project.name}
                    </h3>
                    <a href={project.link}>
                    <img className="rounded projectImg" src={project.image} alt="project" />
                    </a>
                </div>
    ))}
            </div>
        </div>
  ```


## Author
Ivan Torres
* [GitHub-Repo]()
* [linkedIn](www.linkedin.com/in/ivan-torres-0828931b2)

## Credits
* Credits For this projet goes out to my former instructers and TA's that taught me how to code as well as friends who give me feed back on how to make my projects better.
* [StackOverFlow](https://stackoverflow.com/)




## License]
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://www.mit.edu/~amini/LICENSE.md)