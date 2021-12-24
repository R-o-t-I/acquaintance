import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../../store/router/actions";

import {
  Panel,
  PanelHeader,
  Group,
  PanelHeaderBack,
  VKCOM,
	Alert,
	SimpleCell,
	Avatar,
	IconButton
} from "@vkontakte/vkui";

import bridge from '@vkontakte/vk-bridge';
import { Icon12Verified, Icon28DeleteOutline } from '@vkontakte/icons';

class BlockUsersPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		};
  }

	openDeleteBlockUsersPopout() {
    this.props.openPopout(
			<Alert
				actions={[{
						title: 'Нет, оставить',
						autoclose: true,
						mode: 'cancel',
				}, {
						title: 'Да, удалить',
						autoclose: true,
						mode: 'destructive'
				}]}
				onClose={() => this.props.closePopout()}
				header='Удалить пользователя из черного списка'
				text='Вы действительно хотите удалить пользователя из черного списка? Он снова сможет взаимодействовать с Вами'
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
					Черный список
				</PanelHeader>
				<Group>
					<SimpleCell
						before={<Avatar size={48} src="" />}
						badge={<Icon12Verified />}
						after={<IconButton onClick={() => this.openDeleteBlockUsersPopout()}><Icon28DeleteOutline /></IconButton>}
						description="Заблокирован 15 декабря в 14:29"
					>
						Игорь Фёдоров
					</SimpleCell>
					<SimpleCell
						before={<Avatar size={48} src="" />}
						badge={<Icon12Verified />}
						after={<IconButton><Icon28DeleteOutline /></IconButton>}
						description="Заблокирован 15 декабря в 14:29"
					>
						Игорь Фёдоров
					</SimpleCell>
					<SimpleCell
						before={<Avatar size={48} src="" />}
						badge={<Icon12Verified />}
						after={<IconButton><Icon28DeleteOutline /></IconButton>}
						description="Заблокирован 15 декабря в 14:29"
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

export default connect(null, mapDispatchToProps)(BlockUsersPanel);