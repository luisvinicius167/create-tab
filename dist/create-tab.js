var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function (global) {
  var createTab = function createTab(tabElementId, tabViewId) {
    var tabChildrenLinks = Array.from(document.querySelector('#' + tabElementId).children);
    var viewChildrenContent = Array.from(document.querySelector('#' + tabViewId).children);

    var render = function render(view, tabName) {
      view.forEach(function (content) {
        content.attributes['data-view'].value === tabName ? content.style.display = '' : content.style.display = 'none';
      });
    };

    var initActiveView = function initActiveView(tab, view) {
      tab.forEach(function (item, index) {
        var initialTabAttribute = item.attributes['data-initial'];
        var dataItemValue = item.attributes['data-item'].value;
        if (initialTabAttribute !== undefined && initialTabAttribute.value === 'true') {
          item.classList.toggle('tab-active');
          return document.querySelector('[data-view=' + dataItemValue + ']').style.display = '';
        }
        if (view[index] !== undefined) {
          view[index].style.display = 'none';
        }
      });
    };

    var setTabActive = function setTabActive(tabChildren, clickedTab) {
      tabChildren.filter(function (item) {
        return item.classList.contains('tab-active') && item !== clickedTab;
      }).forEach(function (item) {
        return item.classList.toggle('tab-active');
      });
      clickedTab.classList.add('tab-active');
    };

    var registerRenderEvents = function registerRenderEvents(tabView, viewChildrenContent) {
      tabView.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.stopPropagation();
          var tabViewValue = e.target.attributes['data-item'].value;
          setTabActive(tabView, item);
          render(viewChildrenContent, tabViewValue);
        });
      });
    };

    var init = function init(tab, view) {
      initActiveView(tab, view);
      registerRenderEvents(tab, view);
    };

    init(tabChildrenLinks, viewChildrenContent);
  };

  if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = { createTab: createTab };
  } else {
    global.createTab = createTab;
  }
})(this);
