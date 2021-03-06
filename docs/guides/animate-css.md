# Installing Animate.css
Want to use [Animate.css](http://daneden.github.io/animate.css/)? Follow this guide to get up and running with it quickly.

## Steps

### 1. Install Animate.css library
From the root of you project folder, open up a terminal/command prompt and run:

```
bower install animate.css --save
```

This will download the library and place it in the `client/bower_components` folder

### 2. Add library to your base template

Locate your base template with the following table:

***Static Sites***

|Template Type | Server? | Base Template Location
|---------|---------------|---------
|Jade | No  | `client/templates/layouts/base.jade`
|Jade | Yes | `server/templates/layouts/base.jade`
|Swig | No |`client/templates/layouts/base.swig`
|Swig | Yes | `server/templates/layouts/base.swig`
|HTML | No | `client/templates/index.html`

***Single Page Applications***

|Library/Framework | Server? | Base Template Location
|---------|---------------|---------
|Any | No  | `client/index.html`
|Any | Yes | `server/templates/index.html`

Once you have located the base template file for your project, navigate to the `<!-- build:css(client) styles/global.css -->` comment and add the needed script:

```html
<!-- build:css(client) styles/global.css -->
...
<link rel="stylesheet" type="text/css" href="/bower_components/animate.css/animate.css">
...
<!-- endbuild -->
```

## Usage
After following all of the above steps, you should be all set. Start up your development server with `grunt serve` and begin building with Animate.css.