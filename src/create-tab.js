;(function (global) {
  const createTab = (tabElementId, tabViewId) => {
    const tabChildrenLinks = Array.from(document.querySelector(`#${tabElementId}`).children)
    const viewChildrenContent = Array.from(document.querySelector(`#${tabViewId}`).children)

    const render = (view, tabName) => {
      view
        .forEach(content => {
          content.attributes['data-view'].value === tabName
            ? content.style.display = ''
            : content.style.display = 'none'
        })
    }

    const initActiveView = (tab, view) => {
      tab
        .forEach((item, index) => {
          const initialTabAttribute = item.attributes['data-initial']
          const dataItemValue = item.attributes['data-item'].value
          if (initialTabAttribute !== undefined && initialTabAttribute.value === 'true') {
            item.classList.toggle('tab-active')
            return document
              .querySelector(`[data-view=${dataItemValue}]`)
              .style
              .display = ''
          }
          if (view[index] !== undefined) { view[index].style.display = 'none'; }
        })
    }

    const setTabActive = (tabChildren, clickedTab) => {
      tabChildren.filter(item => {
        return item.classList.contains('tab-active') && item !== clickedTab
      })
        .forEach(item => {
          return item.classList.toggle('tab-active')
        })
      clickedTab.classList.add('tab-active')
    }

    const registerRenderEvents = (tabView, viewChildrenContent) => {
      tabView
        .forEach(item => {
          item.addEventListener('click', e => {
			e.stopPropagation()
			const dataItem = e.target.attributes['data-item'];
			if ( dataItem !== undefined) {
				setTabActive(tabView, item);
				render(viewChildrenContent, dataItem.value);
			}
          }, false)
        })
    }

    const init = (tab, view) => {
      initActiveView(tab, view)
      registerRenderEvents(tab, view)
    }

    init(tabChildrenLinks, viewChildrenContent)
  }

  if (typeof exports === 'object') {
    module.exports = createTab
  } else {
    global.createTab = createTab
  }
})(this);