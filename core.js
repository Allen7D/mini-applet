console.log("Init JSCore");
console.log("this in web worker:", this);

// window 上监听 message 事件
this.addEventListener("message", (e) => {
  console.log("JSCore 接收到消息:", e.data);
});

let index = 1;
setInterval(() => {
  if (index <= 100) {
    this.postMessage(`这是来自 JSCore 的消息 ${index}`);
    index++;
  }
}, 2000);
