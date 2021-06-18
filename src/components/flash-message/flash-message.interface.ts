export type ShowMessageCallback = (value: FlashMessageOptions) => Promise<void>;

export enum FlashMessageTypes {
	SUCCESS = 'success',
	ERROR = 'danger',
	DEFAULT = 'default',
}

export interface FlashMessageOptions {
	message: string;
	type?: FlashMessageTypes;
}
