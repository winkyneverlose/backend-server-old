function page(gameData, choose, callback) {
  // 判断选择 choose
  if (choose === 1) {
    // 进入下一个章节
    gameData.chapter = 2;
    // 配置下一个场景（场景）
    gameData.next = "end";
    // 返回数据（下一个场景）
    callback(null, gameData);
  } else if (choose === 2) {
    // 返回组件的基础使用
    gameData.next = "tools";
    // 返回数据（上一个场景）
    callback(null, gameData);
  } else if (choose === 3) {
    // 自己指向自己
    if (!gameData.parameters.haogan) {
      gameData.parameters.haogan = 0;
    }
    // 好感度 +10
    gameData.parameters.haogan += 10;
    // 返回数据（场景不变，自己指向自己）
    gameData.next = "tools-advanced";
    callback(null, gameData);
  } else if (choose === 4) {
    // 自己指向自己
    if (!gameData.parameters.haogan) {
      gameData.parameters.haogan = 0;
    }
    // 好感度 +100
    gameData.parameters.haogan += 100;
    // 返回数据（场景不变，自己指向自己）
    gameData.next = "tools-advanced";
    callback(null, gameData);
  } else {
    // 无效的选择
    callback(
      {
        status: "error",
        code: 1,
        message: "Invalid game data",
      },
      null
    );
  }
}

module.exports = page;
