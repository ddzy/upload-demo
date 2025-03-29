import api from '@/api/index';

const fileElement = document.getElementById('file') as HTMLInputElement;
const buttonElement = document.getElementById('button') as HTMLButtonElement;
let fileList: File[] = [];

fileElement.addEventListener('change', (event) => {
  const target = event.target as HTMLInputElement;
  fileList = Array.from(target.files as FileList);
});
buttonElement.addEventListener('click', async () => {
  const file = fileList[0];
  const chunks = [];
  const chunkSize = 1024 * 1024;
  const totalChunks = Math.ceil(file.size / chunkSize);
  for (let i = 0; i < totalChunks; i++) {
    const start = i * chunkSize;
    const end = Math.min(start + chunkSize, file.size);
    const chunk = file.slice(start, end);
    chunks.push(chunk);
  }
  chunks.forEach(async (chunk, index) => {
    const formData = new FormData();
    formData.append('file', chunk, file.name);
    formData.append('chunk', (index + 1).toString());
    formData.append('totalChunks', totalChunks.toString());
    const res = await api.multipartUpload(formData);
    console.log('res :>> ', res);
  });
});
