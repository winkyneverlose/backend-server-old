// 新建一个GameMenu类
let gameMenu = new GameMenu(); // 创建一个名为 gameMenu 的新的 GameMenu 实例

let likeToolId;
function createLike() {
  if (likeToolId) {
    pageMessage(false, "好感度工具已存在，ID为：" + likeToolId, 5000);
    return;
  }
  gameMenu.show();
  gameMenu.creatTool("好感度", (id) => {
    likeToolId = id;
    document.getElementById(id).innerText = Parameters.haogan;
    console.log("Like tool created with id: " + id);
    pageMessage(true, "成功创建好感度工具，ID为：" + id, 5000);
  });
}

function feet5min() {
  gameMenu.show();
  gameMenu.createCountDown(0, 0, 5, 0, 50, (id) => {
    console.log("CountDown tool created with id: " + id);
    pageMessage(true, "成功创建5分钟倒计时，ID为：" + id, 2000);
    gameMenu.createListener(id, (time) => {
      if (time === "0天0时0分0秒") {
        pageMessage(
          true,
          "5分钟倒计时结束（按摩完成），可喵大人很高兴，好感度居然增加了100！",
          8000
        );
        gameMenu.clearListener(id);
        setTimeout(() => {
          sendChoose(4);
        }, 6000);
      }
    });
  });
}
