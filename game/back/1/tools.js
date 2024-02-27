function page(gameData, choose, callback) {
  // 判断选择 choose
  if (choose === 1) {
    // 配置下一个场景（初始场景）
    gameData.next = "tools-advanced";
    // 返回数据（下一个场景）
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
