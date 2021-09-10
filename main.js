const $ = document.querySelector.bind(document);
const shareBtn = $(".share-btn");
const shareTab = $(".share-tab");

shareBtn.onclick = () => {
  shareTab.classList.toggle("active");
};
