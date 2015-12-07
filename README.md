# Introduction

[![Join the chat at https://gitter.im/mgechev/angular2-seed](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mgechev/angular2-seed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://david-dm.org/mgechev/angular2-seed.svg)](https://david-dm.org/mgechev/angular2-seed)
[![devDependency Status](https://david-dm.org/mgechev/angular2-seed/dev-status.svg)](https://david-dm.org/mgechev/angular2-seed#info=devDependencies)
[![Build Status](https://travis-ci.org/mgechev/angular2-seed.svg?branch=master)](https://travis-ci.org/mgechev/angular2-seed)

A project based on the angular2-seed.
It has an page to test notification that will be removed after a timeout. 

**Note:** Angular 2.0 is not production ready yet! This project is about playing around with the latest versions but do not start new projects with it since a lot of new changes are going to be introduced until the framework is officially released.

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 3.x.x.

```bash
git clone https://github.com/mgechev/angular2-seed.git
cd angular2-seed
npm install   # or `npm run reinstall` if you get an error
npm start     # start with --env dev
npm run docs      # api document for app
```
_Does not rely on any global dependencies._

# Directory Structure

```
.
├── LICENSE
├── README.md
├── README.md
├── app
│   ├── bootstrap.ts
│   ├── components
│   │   ├── app
│   │   │   ├── app.css
│   │   │   ├── app.html
│   │   │   ├── app.ts
│   │   │   └── app_spec.ts
│   │   └── testNotifications
│   │       ├── testNotifications.css
│   │       ├── testNotifications.html
│   │       ├── testNotifications.ts
│   │       └── testNotifications_spec.ts
│   │   └── notification
│   │       ├── notification.css
│   │       ├── notification.html
│   │       ├── notification.ts
│   │       └── notification_spec.ts
│   │   └── notificationCenter
│   │       ├── notificationCenter.css
│   │       ├── notificationCenter.html
│   │       ├── notificationCenter.ts
│   │       └── notificationCenter_spec.ts
│   │   └── overlay
│   │       ├── overlay.css
│   │       ├── overlay.ts
│   │       └── overlay_spec.ts
│   ├── index.html
│   ├── services
│   │   ├── notificationService.ts
│   │   ├── notificationService_spec.ts
│   │   ├── notificationTimer.ts
│   │   └── notificationTimer_spec.ts
│   ├── system.config.js
│   └── typings.d.ts
├── gulpfile.ts
├── karma.conf.js
├── package.json
├── test
│   ├── components
│   │   ├── about
│   │   │   ├── about.js
│   │   │   └── about_spec.js
│   │   ├── app
│   │   │   ├── app.js
│   │   │   └── app_spec.js
│   │   └── home
│   │       ├── home.js
│   │       └── home_spec.js
│   └── services
│       ├── name_list.js
│       └── name_list_spec.js
├── test-main.js
├── tools
│   ├── config.ts
│   ├── preinstall.js
│   ├── tasks
│   │   ├── build.csslib.dev.ts
│   │   ├── build.docs.ts
│   │   ├── build.fonts.ts
│   │   ├── build.index.dev.ts
│   │   ├── build.js.dev.ts
│   │   ├── build.jslib.dev.ts
│   │   ├── build.sass.dev.ts
│   │   ├── build.test.ts
│   │   ├── clean.ts
│   │   ├── karma.start.ts
│   │   ├── npm.ts
│   │   ├── server.docs.ts
│   │   ├── server.start.ts
│   │   ├── tsd.ts
│   │   ├── tslint.ts
│   │   ├── watch.dev.ts
│   │   ├── watch.serve.ts
│   │   └── watch.test.ts
│   ├── typings
│   │   ├── connect-livereload.d.ts
│   │   ├── gulp-load-plugins.d.ts
│   │   ├── karma.d.ts
│   │   ├── tiny-lr.d.ts
│   │   ├── ng2_test.d.ts
│   │   ├── open.d.ts
│   │   ├── run-sequence.d.ts
│   │   ├── slash.d.ts
│   │   └── yargs.d.ts
│   ├── utils
│   │   ├── server.ts
│   │   ├── tasks-tools.ts
│   │   ├── template-injectables.ts
│   │   └── template-locals.ts
│   └── utils.ts
├── tsconfig.json
├── tsd.json
└── tslint.json
```

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# Now to extend?
If you want to use your custom libraries:

```bash
npm install my-library --save
vim tools/config.js
```
Add reference to the installed library in `PATH.src.jslib` (or whatever you like).

# Running test
```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window
```

# Change Log

You can follow the [Angular 2 change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License
MIT
