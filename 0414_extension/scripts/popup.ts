let deleteButton= document.getElementById("d");
let URLButton= document.getElementById("u");

function createAtag(url:any) {
  let parent = document.getElementById("container");
  let aTag = document.createElement("a");
  aTag.innerHTML = "123";
  parent?.appendChild(aTag);
}


// async 
async function deleteTab() {
  let queryOptions = { active: true, lastFocusedWindow:true};

  let [tab] = await chrome.tabs.query(queryOptions);
  
  if(tab.id != null)
  {
    createAtag(tab.url);
    chrome.tabs.remove(tab.id);
   
  }

  return tab;
}
// async function printURL(){

  
// };

deleteButton?.addEventListener("click", deleteTab);
// URLButton?.addEventListener("click",printURL);




