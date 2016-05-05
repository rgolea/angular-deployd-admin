# angular-deployd-admin  
---
Angular CMS contains 3 User interfaces : Database and API dashboard, Website control panel,  website 
---

  
## Website Admin Dashboard
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/67625496@N06/26733225002/in/dateposted-public/" title="marscms-dashboard1"><img src="https://farm8.staticflickr.com/7429/26733225002_5bc7951f14_b.jpg" width="937" height="706" alt="marscms-dashboard1"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

## Website Admin Dashboard - Settings page
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/67625496@N06/26733383952/in/dateposted-public/" title="settings-dashboard1"><img src="https://farm8.staticflickr.com/7322/26733383952_a642a4c2d3_b.jpg" width="970" height="734" alt="settings-dashboard1"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

## Website Admin Dashboard - Login page - Private Zone
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/67625496@N06/26733384052/in/dateposted-public/" title="loginpage"><img src="https://farm8.staticflickr.com/7086/26733384052_61be7f0bdb_b.jpg" width="971" height="737" alt="loginpage"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

## API and Database Admin DeployD Dashboard
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/67625496@N06/26827076945/in/dateposted-public/" title="deployd-dashboard"><img src="https://farm8.staticflickr.com/7191/26827076945_98a3a0e189_b.jpg" width="972" height="740" alt="deployd-dashboard"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

[![Join the chat at https://gitter.im/rgolea/angular-deployd-admin](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/rgolea/angular-deployd-admin?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
This is an Angular.js & Deployd admin system. It's been maintained by [@rgolea](https://github.com/rgolea), [@andreialecu](https://github.com/andreialecu), [@vaesergio](https://github.com/vaesergio) and [@moorthi07] (https://github.com/moorthi07)

---
###Download
To download paste this command in your terminal window:

```
git clone https://github.com/rgolea/angular-deployd-admin.git
```
---

###Instalation
Make sure you have [Node.js](https://nodejs.org/) installed. Try having [MongoDB](http://www.mongodb.org/) as well.

Step 1. - Install Grunt and Bower

Open your terminal window and install Grunt by pasting this code:
```
npm install -g grunt-cli
```
Also install Bower.
````
npm install -g bower
```

Step 2. - Install dependencies

Go to the project folder in your terminal window and use the following command to install the NPM dependencies. 

```
npm install
```

Now install your Bower dependencies by using

```
bower install
```

Step 3. - Execute Grunt and Grunt watch

In order to make the app work execute Grunt to minify and concatenate the `javascript` files and the `css` files.
```
grunt
```
Use Grunt watch to be able to change the files automatically. You can do that by using:
```
grunt watch
```
---
###Running the app

You can run the app by starting mongodb and the entire app. After that, open your browser and go to [http://localhost:2403/dashboard](http://localhost:2403/dashboard). Go to the users collection and add an admin user. (Fillin Users first and last name and select admin column check box to make the user as 'ADMIN')

First start and run the,
MongoDB:
```
mongod 
```
Next start the deployd web server,
For Application in production: 
```
npm start
```

For Application in development:
```
npm run dev
```
---
###User Interfaces: ( GUI )
 ```
1. Deployd admin Dashboard: URL:
```
http://localhost:2403/dashboard
```
2. Public website : URL: http://localhost:2403
```
3. Website admin site (cms to update the public pages / add users / polls, etc.) - in the public website click on 'login' to open the cms admin site.
```
-- To change the first page (website look and content), login (step 3) to the Website admin site 
```
-- then  click on the menu button to open the side navigation menu
```
-- in the menu select 'Settings' -here you should set up your application title, app name, theme, etc.
```
-- you can create more users with different permission levels

```
We are working on to make it best. Post your comments here. 
 








####Thank you
