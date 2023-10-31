// 取得最外層的 div items
const slider = document.querySelector(".items");
// const slider = document.querySelector(".items");

// 紀錄滑鼠點擊的起始位置
let startX;
// let startX;
// 紀錄卷軸左邊位置
let scrollLeft;
// let scrollLeft;

/**
 * 移除樣式
 */
function handleRemoveActive() {
  slider.classList.remove("active");
}
// function handleRemoveActive(){
//   slider.classList.remove("active");
// }
/**
 * 滑鼠按鍵按下
 * @param {*} e
 */
function handleMouseDown(e) {
  slider.classList.add("active");
  // 設定起始位置
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}
// function handleMouseDown(e){
//   slider.classList.add("active");
//   startX = e.pageX -slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// }

/**
 * 移動事件
 * @param {*} e window.event
 */
function handleMove(e) {
  // 判斷滑鼠左鍵點選，未點選直接返回停止
  if (e.buttons !== 1) return;
  // 停止冒泡
  e.stopPropagation();
  const walk = e.pageX - slider.offsetLeft - startX;
  slider.scrollLeft = scrollLeft - walk;
}

// function handleMove(e){
//   if(e.buttons !== 1)return;
//   e.stopPropagation();
//   const walk = e.pageX -slider.offsetLeft -startX;
//   slider.scrollLeft = scrollLeft -walk;
// }
// 滑鼠按鍵按下
slider.addEventListener("mousedown", handleMouseDown);
// slider.addEventListener("mousedown", handleMouseDown);
// 滑鼠離開元素
slider.addEventListener("mouseleave", handleRemoveActive);
// slider.addEventListener("mouseleave", handleRemoveActive);
// 滑鼠按鍵鬆開
slider.addEventListener("mouseup", handleRemoveActive);
// slider.addEventListener("mouseUp",handleRemoveActive)
// 滑鼠移動
slider.addEventListener("mousemove", handleMove);
// slider.addEventListener("mousemove", handleMove);
