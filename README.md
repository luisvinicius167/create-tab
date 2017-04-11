# create-tab

[![npm package](https://img.shields.io/badge/npm-v0.0.4-lightgray.svg)](https://www.npmjs.com/package/create-tab)

> Dead simple way to create Tabs

---


<p align="center">
  <img src="https://cdn.rawgit.com/luisvinicius167/create-tab/9a1eaa5d/create-tab.gif" width="400"/>
</p>


## Why should you use create-tab?
 * Tiny size: 1kb
 * Add your own css style
 * No dependencies
 * Create functional tabs faster

#### Install

Npm: `npm install create-tab` </br>
CDN: `https://unpkg.com/create-tab@0.0.4`


#### The Gist:

```javascript
// ES6 Module
import createTab from 'create-tab';
createTab("tab-links-id", "tab-content-view-id");

// Browser
createTab("tab-links-id", "tab-content-view-id");

```

### API

```javascript
/**
 * @name createTab
 * type Function
 * @description Create one Tab automatically
 * @param {String} tabID The id of the tab links elements
 * @param {String} tabContentId The id of the content tab view
 * return void
 */

 createTab("tab-links-id", "tab-content-view-id");

```


HTML Element Params

```html
<!-- 
    data-item="tab-name"
    The correspondent data-view value that will be render 
-->

<!-- 
    data-initial="true" 
    The initial rendered tab view. 
    Will be appended the class .tab-active automatically on each click event
-->

<!-- 
    data-view="tab-view-name"
    The tab view name. 
    Will be rendered when the correspondent data-item is clicked
-->

<ul id="tabbar"> <!-- Tab Links id -->
    <!-- Tab Links Children -->
    <li data-item="tab-one tab-active" data-initial="true">Tab One</li>
    <li data-item="tab-two">Tab Two</li>
    <li data-item="tab-three">Tab Three</li>
    <li data-item="tab-four">Tab Four</li>
</ul>

<div id="tabview"> <!-- Tab View id  -->
    <!-- Tab View Children -->
    <h1 data-view="tab-one">
        Tab 1
    </h1>
    <h1 data-view="tab-two">
        Tab 2
    </h1>
    <h1 data-view="tab-three">
        Tab 3
    </h1>
    <h1 data-view="tab-four">
        Tab 4
    </h1>
</div>
```

## LICENSE
[MIT]
