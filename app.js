// Open the containing disclosure before navigating to content inside it.
document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(!link||link.hash.length<2)return;const target=document.getElementById(link.hash.slice(1));if(!target)return;let parent=target;while(parent){if(parent.tagName==='DETAILS')parent.open=true;parent=parent.parentElement;}});
