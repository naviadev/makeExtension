let button = {
  removeButton : document.getElementById("deleteStorage"),
  deleteButton : document.getElementById("d"),
  printURL : document.getElementById("add")
} 


async function deleteTab()
{
  let chromeTabsApi = chrome.tabs;
  
  let queryOptions = { active: true, lastFocusedWindow:true};   // 받아올 탭의 조건
  let [tab] = await chrome.tabs.query(queryOptions);  // 현재 탭

  if(tab.id != null)
  {
    // 현재 탭의 url을 스토리지에 저장.
    await chrome.storage.local.get("urlArr").then( 
      (result)=>{
        result.urlArr.push(tab.url);
        chrome.storage.local.set({"urlArr" : result.urlArr});
      }
    );
    chrome.tabs.remove(tab.id); // 현재 탭 닫기.
  }
  
  return tab;
}

function loadList()
{
  if (chrome.storage.local.get("urlArr") == null || chrome.storage.local.get("urlArr") == undefined)
  {
    window.alert("저장된 링크가 존재하지 않습니다.");
    return;
  }
  location.href = "popupPage2.html";
}

function removeStorage(){
  chrome.storage.local.set({"urlArr" : [""]});
}

button.deleteButton?.addEventListener("click", deleteTab);
button.printURL?.addEventListener("click", loadList);
button.removeButton?.addEventListener("click", removeStorage);