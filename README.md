# :warning: This repository is no longer maintained :warning:

# Dolby.io Communications API Token Server

Using a token for [initialization](https://docs.dolby.io/communications-apis/docs/initializing-javascript) of our SDK follows our best practice for securing your application. 

This token server example is targeted for deployment with Netlify Functions.  The primary function may adapted for other function as a service on other platforms.

 

####  How to Install and deploy this project on Netlify:

 - First you'll need an API key and API secret to comunicate with the Dobly APIs. To create those:
	- Select the  **SIGN IN**  link located in the upper right corner of the [Dolby.io](https://dolbly.io) page. 
     - Log in using your email and password. Click the     **DASHBOARD**  link visible in the upper right corner of the website. 
     - Create a new application or select an existing application from the  **APPLICATIONS**  category located on the left side menu. 
     - Select the  **API Keys**  category from the drop-down menu visible under your application.  
     - In the Communications    APIs section, you can access your  **Consumer Key**  and  **Consumer Secret**.  

 - Now that you have your API credentials, you can clone this example project and deploy it to the web using Netlify.

Tokern Server:
 [![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dolbyio-samples/communications-api-token-server-netlify)
 
 - Clicking on the [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/dolbyio-samples/communications-api-token-server-netlify) button will set this all up for you, creating a new site  which can be found within  the admin console in Netlify.
	
 - You'll see an auth dialog to link you account to Netlify. Follow the
   linking instructions.
   	- Netlify will then present a form with the name of the repo, feel free to modify it. This name will be the name for clone of this
   project.
   	- Netlify will automatically clone the repo in the next step.  
   	- The other fields are for your Dolby.io API key and secret; Back in the Dolby.io dashboard, make sure you copy each key and paste them into the form.  ***[Tip- Click show secret before copying the secret]***
   	- This token service will be tied to the application you've previously
   created in the Dolby.io Dashboard.  The  **CONSUMER_KEY** and
   **CONSUMER_SECRET** you created to authenticate with Dolby.io's APIs will be added to your Netlify site in the next step during deployment; which will be stored un the site's deployment settings as pre-populated environment variables.
   	 - Once it has deployed, you'll find both the link to the GitHub clone and your project's URL at the top of the site overview page in
   your Netlify admin console, from there and you'll be able to visit
   the new site you just created and navigate to your site's token
   generator function.  Copy the URL to this token service to use in
   your application.

#### Local installation:
 if you want to edit or modify your project just pull down your copy from your GitHub (or GitLab).
```
git clone <your name or repo organization> /communications-api-token-server-netlify
```
```
cd communications-api-token-server-netlify
```
```
npm install
```

Pushing changes to your repository will autromatically trigger a fresh deployment in Netlify.
