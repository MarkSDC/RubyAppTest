<h1>JSapptest</h1>

A simple ruby application to show how to easily pull JSON (Javascript Object Notation) data from a public/seeded data API

How to use

<h3>Installation</h3>

You need to make sure you have ruby 2.3.0 and have installed the gem "Bundler". I would recommend [RBENV](https://github.com/rbenv/rbenv) for managing ruby and you can find [Bundler here](http://bundler.io/).

Assuming this is done you can simply clone down this repo and run ``` bundle```.

Once you have installed the rails dependancies you can get the project set up with ```rails db:drop db:create db:migrate db:seed```  in the terminal command line, this will run the database migrations and produce the seed data.

Next run ```rails s``` in the command line to start the rails server.

The app will be viewable at http://localhost:3000/ from your browser.

<h3>Tech/Language Used</h3>

1.Ruby on Rails
<br>
2.JavaScript
<br>
3.Data Tables

<b>Ruby on Rails</b>
Rails is a web application framework designed to work with the Ruby programming language.

I used Rails to seed 100 products and rendered them as JSON(Javascript Object Notation) to a view in order to create an api end point.

<b>Javascript</b>
JavaScript is one of the most common programming language's used with HTML to develop for the Web.

I used Javascript to create an ajax request pulling the the data from the api end point and serving it up to the datatable.

Javascript can be found in app/assets/javascripts/application.js

<b>Data Tables</b>
Datatables is a pluggin designed expescially for formating data into a readable table format with pagination, filtering and search options 

I used Datatables to create a easy to use user interface for viewing/navigating the data.


Although I seeded my own data with minor tweaks this could be modified to work with public api's from sites such at github, twitter, facebook  and google.

Adding, Viewing, Editing and Deleting the data is possible because Rails stores the information in a mySQL Database all of these things are in the app.

Unfortunately I found out at the end of this project because of the way I was pushing the data into the table I had created a problem when adding links to the application for viewing, editing and deleting data as the links are written in Ruby and could not be pushed in via Javascript. 

For the purpose of seeing them in working order you can access them by simply going to the links provided below.

Show = http://localhost:3000/cars/3

Edit = http://localhost:3000/cars/3/edit



<h3>Further reading</h3>

<a href="http://guides.rubyonrails.org/">Ruby on Rails Guides</a>
<br>
<a href="https://datatables.net/">DataTables Plugin</a>
<br>
<a href="http://themarklee.com/2014/04/03/pulling-json-data-open-data-api/">Pulling Json Data Api</a>




