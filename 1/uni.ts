type UploadStatus = InProgress | Success | Failure;
type InProgress = { done: boolean; progress: number };
type Success = { done: boolean };
type Failure = { done: boolean; error: Error };

function printStatus(status: UploadStatus) {
  if (status.done === false && "progress" in status) {
    console.log(`アップロード中:${status.progress}%`);
  }
}
