// 新建一个GameMenu类
let gameMenu = new GameMenu(); // 创建一个名为 gameMenu 的新的 GameMenu 实例

// 创建一个本地时间工具
function createLocalTime(callback) {
  // 创建一个名为 createLocalTime 的函数，接受一个回调函数作为参数
  // 创建一个本地时间工具
  gameMenu.createLocalTime((id) => {
    // 调用 gameMenu 实例的 createLocalTime 方法，传入一个回调函数，该回调函数接受一个 id 参数
    console.log("Local time tool created with id: " + id); // 在控制台输出成功创建本地时间工具的消息，包含工具的 id
    pageMessage(true, "成功创建本地时间工具，ID为：" + id, 5000); // 调用 pageMessage 函数，在页面上显示成功创建本地时间工具的消息，5000 毫秒后自动隐藏
    callback(id); // 调用传入的回调函数，传入工具的 id
  });
}

// 创建一个本地日期工具
function createLocalDate(callback) {
  // 创建一个名为 createLocalDate 的函数，接受一个回调函数作为参数
  // 创建一个本地日期工具
  gameMenu.createLocalDate((id) => {
    // 调用 gameMenu 实例的 createLocalDate 方法，传入一个回调函数，该回调函数接受一个 id 参数
    console.log("Local date tool created with id: " + id); // 在控制台输出成功创建本地日期工具的消息，包含工具的 id
    pageMessage(true, "成功创建本地日期工具，ID为：" + id, 5000); // 调用 pageMessage 函数，在页面上显示成功创建本地日期工具的消息，5000 毫秒后自动隐藏
    callback(id); // 调用传入的回调函数，传入工具的 id
  });
}

// 创建一个虚拟时间
function createTime(callback) {
  // 创建一个名为 createTime 的函数，接受一个回调函数作为参数
  gameMenu.createTime(new Date().getTime(), 1000, (id) => {
    // 调用 gameMenu 实例的 createTime 方法，传入当前时间戳和间隔时间，以及一个回调函数，该回调函数接受一个 id 参数
    console.log("Time tool created with id: " + id); // 在控制台输出成功创建虚拟时间工具的消息，包含工具的 id
    pageMessage(true, "成功创建虚拟时间，ID为：" + id, 5000); // 调用 pageMessage 函数，在页面上显示成功创建虚拟时间工具的消息，5000 毫秒后自动隐藏
    callback(id); // 调用传入的回调函数，传入工具的 id
  });
}

// 创建一个虚拟日期
function createDate(callback) {
  // 创建一个名为 createDate 的函数，接受一个回调函数作为参数
  gameMenu.createDate(new Date().getTime(), 1000, (id) => {
    // 调用 gameMenu 实例的 createDate 方法，传入当前时间戳和间隔时间，以及一个回调函数，该回调函数接受一个 id 参数
    console.log("Date tool created with id: " + id); // 在控制台输出成功创建虚拟日期工具的消息，包含工具的 id
    pageMessage(true, "成功创建虚拟日期，ID为：" + id, 5000); // 调用 pageMessage 函数，在页面上显示成功创建虚拟日期工具的消息，5000 毫秒后自动隐藏
    callback(id); // 调用传入的回调函数，传入工具的 id
  });
}
