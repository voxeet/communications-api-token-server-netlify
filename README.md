# Dolby.io Comminications API Token Server

Using a token for [initialization](https://docs.dolby.io/communications-apis/docs/initializing-javascript) of our SDK follows our best practice for securing your application. 

This token server example is targeted for deployment with Netlify Functions.  The primary function may adapted for other function as a service on other platforms.

 

####  How to Install and deploy this project on Netlify:

  

 - [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/dolbyio-samples/communications-api-token-server-netlify) Clicking this link will automatically prepare a copy of this project to instantly deply to Netlify, and link that copy to your own GitHub (or GitLab) repo.   After clicking the link follow the instructions to link and copy this repo to your GitHub (or GitLab) user or organization.
 - Add the **CONSUMER_KEY** and **CONSUMER_SECRET** Enviromental Variables to your Netlify Instance and fill in the values with your applications keys: You can find your  **Consumer Key**  and  **Consumer Secret**  by following these steps:
 
	 - Select the  **SIGN IN**  link located in the upper right corner of   the Dolby.io page. 
     - Log in using your email and password. Click the     **DASHBOARD**  link visible in the upper right corner of the website. 
     - Select your application from the  **APPLICATIONS**  category located    on the left side menu. 
     - Select the  **API Keys**  category from the drop-down menu visible under your application.  
     - In the Communications    APIs section, you can access your  **Consumer Key**  and  **Consumer    Secret**.
 - Next go to your build settings and edit them to include: 
 ```
npm run
  ```
  
  - In the **Netlify** Console, clear the cache and re-deploy to force reload the new environment variables.

 - At the top of the deploys section you'll see the url to your token server.  It will be similar to this:   https://dolbyio-token-server.netlify.app/.netlify/functions/token-generator. you'll note how the url reflects your projects **functions/token-server** organization. 


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