import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../store/router/actions";

import {
  Panel,
  PanelHeader,
  Group,
  PanelHeaderBack,
  VKCOM,
  List,
  Cell,
  Footer,
} from "@vkontakte/vkui";

import bridge from '@vkontakte/vk-bridge';
import {
  Icon28BlockOutline,
  Icon28DonateOutline,
  Icon28EditOutline,
  Icon28HideOutline,
  Icon28LockOutline,
  Icon28Notifications,
  Icon28PrivacyOutline
} from '@vkontakte/icons';

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
					<List>
						<Cell expandable multiline before={<Icon28EditOutline />}>Редактировать информацию профиля</Cell>
            <Cell expandable multiline before={<Icon28Notifications />}>Уведомления</Cell>
            <Cell expandable multiline before={<Icon28PrivacyOutline />}>Приватность</Cell>
            <Cell expandable multiline before={<Icon28BlockOutline />}>Черный список</Cell>
            <Cell expandable multiline before={<Icon28HideOutline />}>Скрытые авторы</Cell>
						<Cell expandable multiline before={<Icon28LockOutline />}>Доступ к скрытым фото</Cell>
            <Cell expandable multiline before={<Icon28DonateOutline />}>Премиум аккаунт</Cell>
					</List>
        </Group>
        <Footer>Версия: 0.0.1</Footer>
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