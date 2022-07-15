# react-template

## webpack

This is a starting webpack template for a _ReactJS_ project.

### Usage

Installing all the dependencies:

    npm install

Checking if some updates are available (I use [npm-check-updates](https://github.com/raineorshine/npm-check-updates)):

    npm run update

Install updates:

    npm run install

Build for production:

    npm run build

Watch for developement:

    npm run watch

Developement web server:

    python3 -m http.server
    curl http://0.0.0.0:5000/

## [Parcel](https://parceljs.org/)

### Usage

    npm install
    npm run update
    npm run build
    npm run watch
    npm run serve

The developement server runs with "serve".

### Proxy dev server

I usually have a Python application server do serve APIs.
In this case it is necessary to setup a proxy configuration for Parcel, in order to dispatch some API calls to the developement server.

I define a _.proxyrc.json_ file in this way ([documentation](https://parceljs.org/features/development/#api-proxy)):

    {
        "/api": {
            "target": "http://dev:8000/",
            "pathRewrite": {
                "^/api": "/api"
            }
        }
    }

In the sample above, all API calls starting with _/api_ are redirected to something running on another port (also another domain).

### Server Docker

    sudo docker build -t test .
    sudo docker run --rm -it -p 5000:8000 test