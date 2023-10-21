export class WindowApiConst {
	/** Channel used by the renderer process to send data to the main process */
	public static readonly MULTIPLES_INPUT = 'getMultiplesInput';

	/** Channel used by the renderer process to receive data from the main process */
	public static readonly MULTIPLES_OUTPUT = 'getMultiplesOutput';

	/** Channel used by the renderer process to send data to the chose image  process */
	public static readonly CHOSE_IMAGE_INPUT = 'getMultiplesInput';

	/** Channel used by the renderer process to receive data from the chose image process */
	public static readonly CHOSE_IMAGE_OUTPUT = 'getMultiplesOutput';

	/** Channel used by the renderer process to send data to the emp model process */
	public static readonly EMP_MODEL_INPUT = 'getEmpModelInput';

	/** Channel used by the renderer process to receive data from the emp model process */
	public static readonly EMP_MODEL_OUTPUT = 'getEmpModelOutput';

	/** Channel used by the renderer process to send data to the emp select process */
	public static readonly EMP_SELECT_INPUT = 'getEmpSelectInput';

	/** Channel used by the renderer process to receive data from the emp select process */
	public static readonly EMP_SELECT_OUTPUT = 'getEmpSelectOutput';

	/** Channel used by the renderer process to send data to the emp select process */
	public static readonly IMG_SELECT_INPUT = 'getImgSelectInput';

	/** Channel used by the renderer process to receive data from the emp select process */
	public static readonly IMG_SELECT_OUTPUT = 'getImgSelectOutput';

	/** Whitelist of the safe channels to use when sending data to the main process */
	public static readonly SENDING_SAFE_CHANNELS = [
		WindowApiConst.MULTIPLES_INPUT,
		WindowApiConst.CHOSE_IMAGE_INPUT,
		WindowApiConst.EMP_MODEL_INPUT,
		WindowApiConst.EMP_SELECT_INPUT,
		WindowApiConst.IMG_SELECT_INPUT,
	];

	/** Whitelist of the safe channels to use when receiving data from the main process */
	public static readonly RECEIVING_SAFE_CHANNELS = [
		WindowApiConst.MULTIPLES_OUTPUT,
		WindowApiConst.CHOSE_IMAGE_OUTPUT,
		WindowApiConst.EMP_MODEL_OUTPUT,
		WindowApiConst.EMP_SELECT_OUTPUT,
		WindowApiConst.IMG_SELECT_OUTPUT,
	];
}
