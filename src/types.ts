export type Views = 'default' | 'full';

export interface ISnippet {
	title: string;
	publishedAt: string;
	description: string;
	position: number;
}

export interface IVideo {
	contentDetails: any;
	snippet: ISnippet;
}
