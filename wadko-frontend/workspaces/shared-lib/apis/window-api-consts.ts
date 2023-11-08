export class WindowApiConst {
	/** Channel used by the renderer process to send data to the emp select process */
	public static readonly IMG_SELECT_INPUT = 'getImgSelectInput';

	/** Channel used by the renderer process to receive data from the emp select process */
	public static readonly IMG_SELECT_OUTPUT = 'getImgSelectOutput';

	/** Whitelist of the safe channels to use when sending data to the main process */
	public static readonly SENDING_SAFE_CHANNELS = [
		WindowApiConst.IMG_SELECT_INPUT,
	];

	/** Whitelist of the safe channels to use when receiving data from the main process */
	public static readonly RECEIVING_SAFE_CHANNELS = [
		WindowApiConst.IMG_SELECT_OUTPUT,
	];
}
