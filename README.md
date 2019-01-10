# About:

The repository hosting files for the application represents the use of Google Maps API feature built upon the library ReactJS for our single page application.

This is a example application of Google Maps API implementations with some features such as using third party data for creating markers for the map, in this case, this is a example app for coffee in Washinton D.C.

## Getting Started:

After downloading / cloning the repo run:
- > npm intall - Install packages.
- > npm start - To run React app locally on your client.

## Tools / Resources:
- [Axios](https://github.com/axios/axios) added as it can be used both server and client side. The flexibility is useful for possible server side additions.

- [FourSquare](https://developer.foursquare.com/) The next best used places API but also has some nice features such as having more extensive coverage globally and filter options. Also, until getting a premium google API sub this will help reduce some of the requests that you are limited too.

- [react-google-maps & explanations](https://tomchentw.github.io/react-google-maps/#introduction) Is the website that gave me insight on using a more clean approach rather than the previous map setup of building and appending a script tag to initialize the [Google Maps](https://developers.google.com/maps/documentation/) within ReactJS as one example.

## Notes / Todos:

Everything in the readme doccumentation is subject to change. This is currently a documentation of a repo in development and not yet fully published for use. Will update further on the status. 

__Contributions__

I notice unique cloners and viewers on the repo. If you happen to have a suggestion for a template example by pull requests, or by contact would be much appreciated to increase the production speed.

If you'd like for me to review yours and possibly provide feedback as well, feel free to contact me of any of preferred choice / platform.:

- [FaceBook](https://www.facebook.com/baophamga)
- [StackOverflow](https://chat.stackoverflow.com/users/9154831/bao-pham)
- [Twitter](https://twitter.com/CodeCuza)

---
__Service Worker:__

> SW has been registered now. If you wish to use turn off, navigate to index.js and find ``` serviceWorker.register() ``` and change too ``` serviceWorker.unregister() ``` for development purposes.
---

1) Todo: Large portion and loss of time on this project was attempting to understand the documentations for [react-google-maps](https://tomchentw.github.io/react-google-maps/#introduction) whilst implementing a use for Polygons. My first interest in Maps is this feature.

2) Todo: Search on languages for possible universal language implementation. Maps is used globally afterall.