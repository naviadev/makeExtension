let deleteButton= document.getElementById("d");
let printURL = document.getElementById("add");

async function deleteTab() {
  let queryOptions = { active: true, lastFocusedWindow:true};
  let [tab] = await chrome.tabs.query(queryOptions);
  if(tab.id != null){
    // addURL(tab.url);
    console.log(chrome.storage.local.get(`urlArr`));
    // chrome.tabs.remove(tab.id);
  }
  return tab;
}
function addURL(tabUrl:string|undefined){
  let obj = chrome.storage.local.get("urlArr");
  if(obj != null || obj!= undefined){
    obj.then((resolve) => {
      resolve.push(tabUrl);
    })
  }
  else{
    return;
  }
}

function loadList(){
  if (chrome.storage.local.get("urlArr") == null || chrome.storage.local.get("urlArr") == undefined){
    window.alert("저장된 링크가 존재하지 않습니다.");
  }
  else{
    let aTag;
    let parent = document.getElementById("header");
    chrome.storage.local.get("urlArr").then(
      function(result){
        for(let i = 1; i < result.length(); i++){
          aTag = document.createElement("a");
          aTag.innerHTML = result.value;
          parent?.appendChild(aTag);
        }
      }
    );
  }
}

deleteButton?.addEventListener("click", deleteTab);
printURL?.addEventListener("click", loadList);
