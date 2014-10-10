/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

/*
TAKEN FROM READ ME

rossgerbasi.glass.getLaunchParams(
  function(results) {
    console.log(results);
  },
  function () {
    console.log("Error getting launch Params");
  }
);
```

###Native Gestures###
Add an event listener to the document of your web application

```
document.addEventListener('swiperight',
  function() {
    console.log('Got that Swipe Right');
  }
);
```

For example to exit your application on swipe down you can use the following

```
document.addEventListener('swipedown', function() {
  if(navigator && navigator.app) {
    navigator.app.exitApp();
  } else {
    console.log("Exiting Application");
  }
})
```

####Basic Events####
- tap
- longpress
- swipeup
- swipedown
- swipeleft
- swiperight
- twotap
- twolongpress
- twoswipeup
- twoswipedown
- twoswipeleft
- twoswiperight
- threetap
- threelongpress


*A helpful note here a swipe to the left is backwards on the glass touchpad (from your eye towards your ear) where a swipe to the right is from your ear towards your eye.*

####Advanced Events####
Advanced events have data associated with them

- scroll
- twofingerscroll
- fingercountchanged


####Advanced Examples####

```
// Data contains properties type, displacement, delta and velocity
document.addEventListener("scroll", function(data) {
  console.log("Got that scroll");
  console.log(data.displacement);
  console.log(data.delta);
  console.log(data.velocity);
})
```

```
// Data contains properties type, displacement, delta and velocity
document.addEventListener("twofingerscroll", function(data) {
  console.log("Got that two finger scroll");
  console.log(data.displacement);
  console.log(data.delta);
  console.log(data.velocity);
})
```

```
// Data contains properties type, from and to
document.addEventListener("fingercountchanged", function(data) {
  console.log("Fingers changed from " + data.from + " to " + data.to);
})
```


###Config###
The following config.xml preferences are available via this plugin

####keepAwake####

`<preference name="rossgerbasi.glass.keepAwake" value="false"/>`

Setting this to true will force your application to always stay on, no screen dimming. A User will need to exit your application via a swipe down gesture to close it.

####touchDisabled####

`<preference name="rossgerbasi.glass.touchDisabled" value="false"/>`

Setting this to true will disable the translation of touch events from the touchpad to the web view. Essentially turning off 'touchstart', 'touched' and 'touchmove' events.

####gesturesDisabled####

`<preference name="rossgerbasi.glass.gesturesDisabled" value="false"/>`

Setting this to true will disable all native gesture events (swipe, long press, scroll, etc).
*/
