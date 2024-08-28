function printStatus(status) {
    if (status.done) {
        if ("error" in status) {
            console.log("\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u5931\u6557:".concat(status.error.message));
        }
        else {
            console.log("\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u6210\u529F");
        }
    }
    else if ("progress" in status) {
        console.log("\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u4E2D:".concat(status.progress, "%"));
    }
}
