# Dolby.io Communications API Token Server

Using a token for [initialization](https://docs.dolby.io/communications-apis/docs/initializing-javascript) of our SDK follows our best practice for securing your application. 

This token server example is targeted for deployment with Netlify Functions.  The primary function may adapted for other function as a service on other platforms.

 

####  How to Install and deploy this project on Netlify:

 - First you'll need an API key and API secret to comunicate with the Dobly APIs. To create those:
	- Select the  **SIGN IN**  link located in the upper right corner of the [Dolby.io](https://dolbly.io) page. 
     - Log in using your email and password. Click the     **DASHBOARD**  link visible in the upper right corner of the website. 
     - Create a new Application or Select an existing application from the  **APPLICATIONS**  category located on the left side menu. 
     - Select the  **API Keys**  category from the drop-down menu visible under your application.  
     - In the Communications    APIs section, you can access your  **Consumer Key**  and  **Consumer Secret**.  

 - Now that you have your API credentials, you can clone this example project and deploy it to the web using Netlify.
 	- Clicking [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/dolbyio-samples/communications-api-token-server-netlify) will set this all up for you, taking you to your new project admin in Netlify
	- Netlify will ask you for a name for the new repository it will create for you, and for you to provide the **CONSUMER_KEY** and **CONSUMER_SECRET** you created to authenticate with Dolby, which it will store as environment variables.
	 - Once it has deployed, you'll find your project's URL at the top of the site overview page in your Netlify admin, and you'll be able to visit it and navigate to your site's token generator function.


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
