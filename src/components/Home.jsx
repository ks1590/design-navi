// // import App from './ImageEditor';
// import { ReactImageEditor } from './ReactImageEditor';

// function Home() {
// 	return (
// 		<div>
// 			<h1>Home Page</h1>
// 			<p>Welcome to the Home Page. This is where your journey begins.</p>
// 			{/* <App /> */}
// 			<ReactImageEditor />
// 		</div>
// 	);
// }

// export default Home;

import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

const Home = () => {
	// const [imageSrc, setImageSrc] = useState('');

	// useEffect(() => {
	// // 	// 初期画像を設定
	// // 	setImageSrc(
	// // 		'/Users/suzuki_kensuke/work_space/design-navi/src/assets/react.svg'
	// // 	);
	// // }, []);

	return (
		<ImageEditor
			includeUI={{
				loadImage: {
					// path: 'img/sampleImage.jpg',
					// name: 'SampleImage',
				},
				// theme: myTheme,
				menu: ['shape', 'filter'],
				initMenu: 'filter',
				uiSize: {
					width: '1000px',
					height: '700px',
				},
				menuBarPosition: 'bottom',
			}}
			cssMaxHeight={500}
			cssMaxWidth={700}
			selectionStyle={{
				cornerSize: 20,
				rotatingPointOffset: 70,
			}}
			usageStatistics={true}
		/>
	);
};

export default Home;
