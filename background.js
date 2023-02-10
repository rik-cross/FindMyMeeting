// called when the extension toolbar button is clicked
chrome.action.onClicked.addListener(function(tab) {

  // parameters used to search for all Google Meet tabs with active sound
  let queryParams = { url : "https://meet.google.com/*", audible : true };

  // run search
  let tabsFound = chrome.tabs.query(queryParams, function(tabs){

    // do nothing if no matching tabs are found
    if(tabs.length > 0) {

      // get the first tab in the query result
      let foundTab = tabs[0];

      // set the tab as active
      chrome.tabs.update(foundTab.id, { active : true });
      
      // set the associated window as in focus,
      // in case multiple windows are open
      chrome.windows.update(foundTab.windowId, {focused: true})

    }

  });

});


