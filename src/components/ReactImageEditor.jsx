import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

const myTheme = {
	// Theme object to extends default dark theme.
};

const ReactImageEditor = () => (
	<ImageEditor
		includeUI={{
			// loadImage: {
			// 	path: 'img/sampleImage.jpg',
			// 	name: 'SampleImage',
			// },
			theme: myTheme,
			menu: ['shape', 'filter'],
			initMenu: 'filter',
			uiSize: {
				width: '1000px',
				height: '700px',
			},
			menuBarPosition: 'bottom',
		}}
		cssMaxHeight={document.documentElement.clientWidth}
		cssMaxWidth={document.documentElement.clientHeight}
		selectionStyle={{
			// cornerSize: 20,
			// rotatingPointOffset: 70,
			cornerSize: 50,
			rotatingPointOffset: 100,
		}}
		usageStatistics={true}
	/>
);

export { ReactImageEditor };
