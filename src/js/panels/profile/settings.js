import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../store/router/actions";

import {
  Panel,
  PanelHeader,
  Group,
  PanelHeaderBack,
  VKCOM,
} from "@vkontakte/vkui";

import bridge from '@vkontakte/vk-bridge';

class SettingsPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		};
    }

	render() {
		const {id, setPage, platform, goBack} = this.props;

		return (
			<Panel id={id}>
				<PanelHeader
					left={<PanelHeaderBack onClick={() => goBack()} label={platform === VKCOM ? 'Назад' : undefined} />}
				>
					Настройки
				</PanelHeader>
				<Group>
					
				</Group>
			</Panel>
		);
	}

}

const mapDispatchToProps = {
  setPage,
  openPopout,
  closePopout,
  goBack
};

export default connect(null, mapDispatchToProps)(SettingsPanel);