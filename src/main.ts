import api from '@/api/index';

const fileElement = document.getElementById('file') as HTMLInputElement;
const buttonElement = document.getElementById('button') as HTMLButtonElement;
let fileList: File[] = [];

fileElement.addEventListener('change', (event) => {
  const target = event.target as HTMLInputElement;
  fileList = Array.from(target.files as FileList);
});
buttonElement.addEventListener('click', async () => {
  const formData = new FormData();
  const file = fileList[0];
  const chunks = [];
  const chunkSize = 1024 * 1024;
  const totalChunks = Math.ceil(file.size / chunkSize);
});
