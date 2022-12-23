# Storage-Center


<div align="center">
   <a href="https://github.com/Ezra-code/storage-center-frontend">
    <img src="" />
    </a>
</div>

## Live Demo

```shell
    link
```

<div align="center">

[![forthebadge](https://forthebadge.com/images/badges/made-with-ruby.svg)]()
<br />
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)]()
<br />
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5b677e607def4466b8084eb76be4f0d7)]()
![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)]() [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
</div>


> Storage-Center is  an ecommerce  web interface that can be used for obtaing storage failities. The web deals with a large range a of product interms of containers where one can obtain a storage facility in sizes according to what thry want to store. It also gives a user a chance to chose on how they will want there belongings will be transported.



> The source code is open so that you can download the source code and set it up with ease if you would like to have your own exclusive environment.



## App Screenshots

|                                                                                    Desktop App Home                                                                                  |                                                                                   Desktop App Products                                                                              |                                                                               Products in Cart                                                                                  |                                                                           About us                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="" title="" width="100%" crossorigin> | <img src="" title="" width="100%" crossorigin> | <img src="" title="" width="100%" crossorigin> | <img src="" alt=""  title="" width="100%" crossorigin> |


## Folder Structure

### Frontend



### Backend


## What (This Storage-Center) ?

The concept behind Storage-center app was to help users access  a platform with hihger levels of security
where they can store there goods and also help in transportation.


## What (The advantage) ?

- The app's responsive web interface helps you to browse storage facilities  in any resolution device.

## The project has been Developed and works in: 

### Platforms

| Platform          | Status     |
| ----------------- | ---------- |
| Microsoft Windows | Developing |
| Linux             | Developed  |
| Mac os            | Developing |
| Android           | Developing |



#### Built With

- [React Js v18.2.0](https://reactjs.org) - Frontend side
- [Ruby On Rails v7.0.4](https://rubyonrails.org) - backend side
- [Writen in Ruby v3.1.0](https://www.ruby-lang.org/en/)



## Current API Endpoints

The API build with Rails will expose the following RESTful endpoints.
### BaseUrl: {Host-URL}/api/v1

| Endpoint                     | Functionality                |
|------------------------------|------------------------------|
| POST /register               | Signup                       |
| POST /login                  | Login                        |
| GET /clients                 | List all clients             |
| GET /storage-units           | List all storage-units       |
| POST /storage-units          | Add a new  storage-units     |
| DELETE /storage-units /:id   | Delete a storage-units       |
| PUT /storage-units /:id      | Update a storage-units       |
| DELETE /user/:id             | Delete a user                |
| PUT /user/:id                | Update a user                |
| POST /storage-units          | Add   storage-units          |
| GET /storage-units           | Get u  storage-units         |



## Our  API Documentation
[Storage-Center]()
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- React Js v18.2.0
- Ruby: 2.7.4
- Rails: 7.0.4
- Postgres: >=15.0


## Setup

### For the backend

- Clone the repository

 ~~~bash
$ git@github.com:gitahievans/store-centre-backend.git
$ cd storage-center-backend
~~~

Install gems with:

```
bundle install
```

Setup database with:

> make sure you have postgress sql installed and running on your system

```
    rails db:migrate
    rails db:seed
```

### Usage

Start server with:

```
    rails server 
```

Open `http://localhost:3000/` in your browser.



#### For the Frontend

 - Clone the Repo 

 ~~~bash
$ git@github.com:Ezra-code/storage-center-frontend.git
$ cd storage-center-frontend
~~~


- To  Install the dependencies in the local node_modules folder Run 
~~~bash
  npm install
~~~

- When done, to start the server run
~~~bash
npm start
~~~

- The app will run in `http://localhost:4000/` in your browser



### Deploy to a live server

 We will deploy using heroku
> To install heroku:-

Step 1: Install Heroku CLI in your system by running the following command. It will install the updated version of Heroku CLI into your system.

~~~bash
curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
~~~

To check the version you may run the command.

~~~bash
heroku -v 
~~~

- Step 2: Now, get to https://www.heroku.com/ and register. After completing your registration go to the dashboard and create a new app named “myherokuapp” or name of your choice. 

- Step 3: Run the following command, it will prompt you to enter any key to continue, it will open a new tab in your browser asking you to log in to your Heroku account. After you enter the required credentials and login on to the site, it is going to show in your terminal “Logged in”

~~~bash
heroku login
~~~


- Step 4: Initialize a Git repository by running the following command. Make sure you be at the top level of your project directory.

~~~bash
git init
~~~
- Step 5: Now, add the Heroku remote by simply running the command which you will find in your Heroku Dashboard -> myherokuapp or Your App Name -> Deploy Section 

Or 

> Simply run the following command. The deployment method should’ve chosen as GitHub.

~~~bash
heroku git:remote -a myherokuapp
~~~

- Step 6: Now the most important part and i.e Heroku provides the buildpack for Python, Node.js-based app, but it doesn’t provide buildpack for React apps. So we have to add an extra buildpack in the settings section of your frontend Heroku app.


~~~bash
https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz
~~~



<div align="center">
   <a>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200719000910/buildpack.png" />
    </a>
</div>


Deploying to a live server like Heroku is easy, make sure you have the necessary credentials setup on your local machine for yor local machine



```bash
    heroku create
    heroku rename app-new-name
    git push heroku $BRANCH_NAME:master 
```

if you are already in master branch no need to add $BRANCH_NAME, just use `git push heroku master`

### For the Frontend

~~~bash
  git add.
  git commit -m "First Commit"
  git push heroku master
~~~

### For the backend

```bash
    heroku run rails db:migrate
    heroku run rails db:seed
    heroku open
```

Enjoy your newly deployed React App with rails API for the backend



# Authors

👤 ****

- Github: []()
- Twitter: []()
- Linkedin: []()
- Email: []()

👤 ****

- Github: []()
- Twitter: []()
- Linkedin: []()
- Email: []()


👤 ****

- Github: []()
- Twitter: []()
- Linkedin: []()
- Email: []()

👤 ****

- Github: []()
- Twitter: []()
- Linkedin: []()
- Email: []()

👤 **Derrick Otieno**

- Github: []()
- Twitter: []()
- Linkedin: []()
- Email: []()

## 🤝 Contributing

Contributions, issues and feature requests are welcome!


## Show your support

Give a ⭐️ if you like this project!

## License


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) [2022/11/1] [Storage-Center]

## Acknowledgement
[The  Moringa School](https://moringaschool.com/)
