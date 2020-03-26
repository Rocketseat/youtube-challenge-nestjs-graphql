declare module 'modali' {
	export interface IModalProps {
		isShown: boolean;
		hide: () => void;
		options: IModalOptions;
	}
	export interface IModalOptions {
		title?: string;
		message?: string;
		buttons?: array;
		closeButton?: boolean;
		animated?: boolean;
		large?: boolean;
		overlayClose?: boolean;
		keyboardClose?: boolean;
	}

	export function useModali(IModalOptions?): [IModalProps, () => void];
	export const Modal: FC<IModalProps>;

	export default any;
}
