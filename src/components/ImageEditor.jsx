import React from 'react';
import TuiImageEditor from 'tui-image-editor';

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

// import './index.css';
import 'tui-image-editor/dist/tui-image-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';

import icon_a from 'tui-image-editor/dist/svg/icon-a.svg';
import icon_b from 'tui-image-editor/dist/svg/icon-b.svg';
import icon_c from 'tui-image-editor/dist/svg/icon-c.svg';
import icon_d from 'tui-image-editor/dist/svg/icon-d.svg';

const theme = {
	//共通のスタイル
	'common.bi.image': '',
	'common.bisize.width': '0px',
	'common.bisize.height': '0px',
	'common.backgroundImage': 'none',
	'common.backgroundColor': '#FFFFFF',
	'common.border': '0px',
	// ヘッダー
	'header.backgroundImage': 'none',
	'header.backgroundColor': 'transparent',
	'header.border': '0px',
	// ファイルアップロードボタンのスタイル
	'loadButton.backgroundColor': '#fff',
	'loadButton.border': '1px solid #ddd',
	'loadButton.color': '#222',
	'loadButton.fontFamily': 'NotoSans, sans-serif',
	'loadButton.fontSize': '12px',
	// ダウンロードボタンのスタイル
	'downloadButton.backgroundColor': '#fdba3b',
	'downloadButton.border': '1px solid #fdba3b',
	'downloadButton.color': '#fff',
	'downloadButton.fontFamily': 'NotoSans, sans-serif',
	'downloadButton.fontSize': '12px',
	// メインアイコン
	'menu.normalIcon.path': icon_d,
	'menu.activeIcon.path': icon_b,
	'menu.disabledIcon.path': icon_a,
	'menu.hoverIcon.path': icon_c,
	// サブメニューアイコン
	'submenu.normalIcon.path': icon_d,
	'submenu.activeIcon.path': icon_c,
	// submenu primary color
	'submenu.backgroundColor': '#ffffff',
	'submenu.partition.color': '#858585',
	// サブメニュー
	'submenu.normalLabel.color': '#858585',
	'submenu.normalLabel.fontWeight': 'lighter',
	'submenu.activeLabel.color': '#000',
	'submenu.activeLabel.fontWeight': 'lighter',
	// チェックボックス
	'checkbox.border': '1px solid #ccc',
	'checkbox.backgroundColor': '#fff',
	// 切り取り
	'range.pointer.color': '#000',
	'range.bar.color': '#666',
	'range.subbar.color': '#d1d1d1',
	'range.value.color': '#000',
	'range.value.fontWeight': 'lighter',
	'range.value.fontSize': '11px',
	'range.value.border': '1px solid #353535',
	'range.value.backgroundColor': '#151515',
	'range.title.color': '#000',
	'range.title.fontWeight': 'lighter',
	// colorpicker
	'colorpicker.button.border': '1px solid #1e1e1e',
	'colorpicker.title.color': '#fff',
};

const locale_ja = {
	Load: 'ファイル選択',
	Download: 'ダウンロード',
	Shape: '図形',
	Text: 'テキスト',
	Draw: '手書き',
	Rectangle: '正方形',
	Circle: '円',
	Triangle: '三角形',
	Apply: '適用',
	Arrow: '矢印',
	'Arrow-2': '矢印2',
	'Arrow-3': '矢印3',
};

class ImageEditor extends React.Component {
	rootEl = React.createRef();

	imageEditorInst = null;

	componentDidMount() {
		this.imageEditorInst = new TuiImageEditor(this.rootEl.current, {
			...this.props,
		});
	}

	componentWillUnmount() {
		// this.unbindEventHandlers();
		this.imageEditorInst.destroy();
		this.imageEditorInst = null;
	}

	render() {
		return <div ref={this.rootEl} />;
	}
}

export default function App() {
	const props = {
		includeUI: {
			menu: ['draw', 'shape', 'text'],
			initMenu: 'text',
			uiSize: {
				width: '95vw',
				height: '89vh',
			},
			menuBarPosition: 'bottom',
			theme: theme,
			locale: locale_ja,
		},
		cssMaxWidth: 800,
		cssMaxHeight: 600,
		selectionStyle: {
			cornerSize: 20,
			rotatingPointOffset: 70,
		},
	};

	const [opened, { open, close }] = useDisclosure(false);

	return (
		<div>
			<Modal
				opened={opened}
				onClose={close}
				title='This is a fullscreen modal'
				fullScreen
				radius={0}
				transitionProps={{ transition: 'fade', duration: 200 }}>
				<button onClick={console.log('clicked')}>Get Image URL</button>
				<ImageEditor {...props} />
			</Modal>
			<Button onClick={open}>Open Modal</Button>
		</div>
	);
}
