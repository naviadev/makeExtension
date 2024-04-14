// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow:true};

//   let [tab] = await chrome.tabs.query(queryOptions);
  
//   if(tab.id != null)
//   {
//     chrome.tabs.remove(tab.id)
//   }
//   return tab;
// }

// window.addEventListener("keydown", getCurrentTab);