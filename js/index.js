function fileInfo() {
  const fileName = document.querySelector("#files").files[0].name;
  const fileSize = document.querySelector("#files").files[0].size;
  let tbody = document.querySelector("#tbdy");
  Number.prototype.formatBytes = function () {
    var units = ["B", "KB", "MB", "GB", "TB"],
      bytes = this,
      i;

    for (i = 0; bytes >= 1024 && i < 4; i++) {
      bytes /= 1024;
    }

    return bytes.toFixed(2) + units[i];
  };
  tbody.innerHTML += `  <tr>
  <td>File Name: ${fileName}</td>
  <td>File Size: ${fileSize.formatBytes()}</td>
  <td><button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title=" Name:${fileName}; Ext: ${fileName
    .split(".")
    .pop()}; Size: ${fileSize}">
  File Info
</button></td>
</tr>`;
}
