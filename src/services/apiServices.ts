import * as HttpService from './httpServices';

const hostUrl = 'https://www.googleapis.com/youtube/v3';
const link =
	'/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';

export async function getChannels() {
	return await HttpService.get(`${hostUrl}${link}`);
}
