import { request } from './request';

export default {
  multipartUpload: (data: any) => {
    return request.post('/upload', data);
  },
};
