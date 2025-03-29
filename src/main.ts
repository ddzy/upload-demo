import api from '@/api/index';

const fileElement = document.getElementById('file') as HTMLInputElement;
const buttonElement = document.getElementById('button') as HTMLButtonElement;
let fileList: File[] = [];

fileElement.addEventListener('change', (event) => {
  const target = event.target as HTMLInputElement;
  fileList = Array.from(target.files as FileList);
});
buttonElement.addEventListener('click', () => {
  const formData = new FormData();
  fileList.forEach((file) => {
    formData.append('files', file);
  });
});
