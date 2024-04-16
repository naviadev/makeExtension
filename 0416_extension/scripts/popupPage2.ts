window.onload = async()=>{let bTag:any;
  let parent = document.getElementById("urlHeder");
  await chrome.storage.local.get(`urlArr`).then(
    (result)=>{
      for(let i = 1; i < result.urlArr.length; i++){
        bTag = document.createElement("button");
        bTag.innerHTML = result.urlArr[i];
        bTag.addEventListener("click", ()=>
        {
          chrome.tabs.create({url:result.urlArr[i]});
        })
        parent?.appendChild(bTag);
      }
    }
  )
  return bTag;};

let back = document.getElementById("back");
back?.addEventListener("click", ()=>{
  location.href = "popup.html";
})