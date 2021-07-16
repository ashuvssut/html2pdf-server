# html2pdf-server
HTML 2 PDF converter using puppeteer

This server is meant to be used for generating my resume PDF by sending a "generate PDF" request from 
https://ashuvssut.github.io/ashuvssut-resume
[Link to ashuvssut-resume repo](https://github.com/ashuvssut/ashuvssut-resume)


This server is hosted on heroku.

To do the same, follow the following steps:

- Create you app on heroku
- push/deploy your code to heroku
- add puppeteer heroku buildpack (you need to have heroku CLI for this.)
  `$ heroku buildpacks:add jontewks/puppeteer -a <your-app-name>`
- create an empty commit.
- push/deploy to heroku again

Server will be setup within 15mins!
