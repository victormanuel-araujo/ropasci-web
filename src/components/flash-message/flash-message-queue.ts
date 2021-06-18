import {
	FlashMessageOptions,
	ShowMessageCallback,
} from './flash-message.interface';

class FlashMessageQueue {
	private messages: FlashMessageOptions[] = [];
	onShowMessage: ShowMessageCallback = null;

	constructor(showMessageCallback?: ShowMessageCallback) {
		if (showMessageCallback) {
			this.onShowMessage = showMessageCallback;
		}
	}

	public showMessage(
		title: string,
		options: Omit<FlashMessageOptions, 'message'> = {}
	) {
		if (this.messages.length === 0) {
			this.messages.push({message: title, ...options});
			return this.handleMessage();
		}

		this.messages.push({message: title, ...options});
	}

	private async handleMessage() {
		if (this.messages.length === 0) return;

		const currentValue = this.messages[0];
		await this.onShowMessage?.(currentValue);
		this.messages.shift();

		this.handleMessage();
	}
}

export const FlashMessage = new FlashMessageQueue();
