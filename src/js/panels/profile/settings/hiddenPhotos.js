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

import {
	Icon12Verified,
	Icon28DeleteOutline
} from '@vkontakte/icons';

class HiddenPhotosPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		};
  }

	openDeleteHiddenPhotosPopout() {
    this.props.openPopout(
			<Alert
					actions={[{
							title: 'Нет, оставить доступ',
							autoclose: true,
							mode: 'cancel',
					}, {
							title: 'Да, отменить',
							autoclose: true,
							mode: 'destructive'
					}]}
					onClose={() => this.props.closePopout()}
					header='Отменить доступ к скрытым фото'
					text='Вы действительно хотите отменить доступ к скрытым фото? $Name больше не сможет видеть Ваши скрытые фото, пока Вы снова не предоставите доступ'
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
					Доступ к скрытым фото
				</PanelHeader>
				<Group>
					<SimpleCell
						before={<Avatar size={48} src="" />}
						badge={<Icon12Verified />}
						after={<IconButton onClick={() => this.openDeleteHiddenPhotosPopout()}><Icon28DeleteOutline /></IconButton>}
						description="Предоставлено 15 декабря в 14:29"
					>
						Игорь Фёдоров
					</SimpleCell>
					<SimpleCell
						before={<Avatar size={48} src="" />}
						badge={<Icon12Verified />}
						after={<IconButton><Icon28DeleteOutline /></IconButton>}
						description="Предоставлено 15 декабря в 14:29"
					>
						Игорь Фёдоров
					</SimpleCell>
					<SimpleCell
						before={<Avatar size={48} src="" />}
						badge={<Icon12Verified />}
						after={<IconButton><Icon28DeleteOutline /></IconButton>}
						description="Предоставлено 15 декабря в 14:29"
					>
						Игорь Фёдоров
					</SimpleCell>
					<SimpleCell
						before={<Avatar size={48} src="" />}
						badge={<Icon12Verified />}
						after={<IconButton><Icon28DeleteOutline /></IconButton>}
						description="Предоставлено 15 декабря в 14:29"
					>
						Игорь Фёдоров
					</SimpleCell>
					<SimpleCell
						before={<Avatar size={48} src="" />}
						badge={<Icon12Verified />}
						after={<IconButton><Icon28DeleteOutline /></IconButton>}
						description="Предоставлено 15 декабря в 14:29"
					>
						Игорь Фёдоров
					</SimpleCell>
					<SimpleCell
						before={<Avatar size={48} src="" />}
						badge={<Icon12Verified />}
						after={<IconButton><Icon28DeleteOutline /></IconButton>}
						description="Предоставлено 15 декабря в 14:29"
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

export default connect(null, mapDispatchToProps)(HiddenPhotosPanel);