import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../../store/router/actions";

import {
  Panel,
  PanelHeader,
  Group,
  PanelHeaderBack,
  VKCOM,
	SimpleCell,
	Avatar,
	IconButton,
	Alert
} from "@vkontakte/vkui";

import bridge from '@vkontakte/vk-bridge';

import { Icon12Verified, Icon28DeleteOutline } from '@vkontakte/icons';

class BlockPostPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		};
  }

	openDeleteBlockPostPopout() {
    this.props.openPopout(
			<Alert
				actions={[{
						title: 'Нет',
						autoclose: true,
						mode: 'cancel',
				}, {
						title: 'Да',
						autoclose: true,
						mode: 'destructive'
				}]}
				onClose={() => this.props.closePopout()}
				header='Вернуть записи автора?'
				text='Вы действительно хотите, чтобы записи $Name снова отображались у Вас в ленте?'
			/>
    );
  }

	render() {
		const {id, setPage, platform, goBack} = this.props;

		return (
			<Panel id={id}>
				<PanelHeader
					left={<PanelHeaderBack onClick={() => goBack()} label={platform === VKCOM ? 'Назад' : undefined} />}
				>
					Скрытые авторы
				</PanelHeader>
				<Group>
				<SimpleCell
					before={<Avatar size={48} src="" />}
					badge={<Icon12Verified />}
					after={<IconButton onClick={() => this.openDeleteBlockPostPopout()}><Icon28DeleteOutline /></IconButton>}
					description="Скрыт 15 декабря в 14:29"
				>
					Игорь Фёдоров
				</SimpleCell>
				<SimpleCell
					before={<Avatar size={48} src="" />}
					badge={<Icon12Verified />}
					after={<IconButton><Icon28DeleteOutline /></IconButton>}
					description="Скрыт 15 декабря в 14:29"
				>
					Игорь Фёдоров
				</SimpleCell>
				<SimpleCell
					before={<Avatar size={48} src="" />}
					badge={<Icon12Verified />}
					after={<IconButton><Icon28DeleteOutline /></IconButton>}
					description="Скрыт 15 декабря в 14:29"
				>
					Игорь Фёдоров
				</SimpleCell>
				<SimpleCell
					before={<Avatar size={48} src="" />}
					badge={<Icon12Verified />}
					after={<IconButton><Icon28DeleteOutline /></IconButton>}
					description="Скрыт 15 декабря в 14:29"
				>
					Игорь Фёдоров
				</SimpleCell>
				<SimpleCell
					before={<Avatar size={48} src="" />}
					badge={<Icon12Verified />}
					after={<IconButton><Icon28DeleteOutline /></IconButton>}
					description="Скрыт 15 декабря в 14:29"
				>
					Игорь Фёдоров
				</SimpleCell>
				<SimpleCell
					before={<Avatar size={48} src="" />}
					badge={<Icon12Verified />}
					after={<IconButton><Icon28DeleteOutline /></IconButton>}
					description="Скрыт 15 декабря в 14:29"
				>
					Игорь Фёдоров
				</SimpleCell>
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

export default connect(null, mapDispatchToProps)(BlockPostPanel);