// 请不要移除本文件（但可以更改），本文件用于新用户入口引导
// 请不要移除本文件（但可以更改），本文件用于新用户入口引导
// 请不要移除本文件（但可以更改），本文件用于新用户入口引导
// 请不要移除本文件（但可以更改），本文件用于新用户入口引导
// 请不要移除本文件（但可以更改），本文件用于新用户入口引导
// 请不要移除本文件（但可以更改），本文件用于新用户入口引导

function page(gameData, choose, callback) {
  // 判断选择 choose
  if (choose === 1) {
    // 配置下一个场景（初始场景）
    gameData.next = "intro";
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
