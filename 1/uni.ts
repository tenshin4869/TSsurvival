type UploadStatus = InProgress | Success | Failure;
type InProgress = { done: boolean; progress: number };
type Success = { done: boolean };
type Failure = { done: boolean; error: Error };

function printStatus(status: UploadStatus) {
  if (status.done) {
    if ("error" in status) {
      console.log(`アップロード失敗:${status.error.message}`);
    } else {
      console.log(`アップロード成功`);
    }
  } else if ("progress" in status) {
    console.log(`アップロード中:${status.progress}%`);
  }
}
