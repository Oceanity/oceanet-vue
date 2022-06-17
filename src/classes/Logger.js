class Logger {
  static DiscordLog(msg) {
    styleLog(msg, "Discord", "#404EED");
  }
  static TwitchLog(msg) {
    styleLog(msg, "Twitch", "#A970FF");
  }
  static Log(msg) {
    styleLog(msg);
  }
}

function styleLog(msg, service = "Vue", color = "unset") {
  if (msg) {
    console.log(
      `%c[${service}] %c${msg}`,
      [`color: ${color}`, "font-weight: bold"].join(";"),
      ["color: unset", "font-weight:unset"].join(";")
    );
  }
}
module.exports = Logger
