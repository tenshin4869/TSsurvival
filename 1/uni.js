function printStatus(status) {
    if (status.done === false && "progress" in status) {
        console.log("\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u4E2D:".concat(status.progress, "%"));
    }
}
