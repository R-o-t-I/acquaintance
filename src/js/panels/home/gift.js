import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../store/router/actions";

import {
  Panel,
  PanelHeader,
  Group,
  PanelHeaderBack,
  VKCOM,
  SimpleCell,
  Avatar,
  FormItem,
  Textarea,
  Switch,
  Cell,
	Div,
	Button,
	FixedLayout,
	Spacing
} from "@vkontakte/vkui";

import bridge from '@vkontakte/vk-bridge';
import { Icon28CoinsOutline } from '@vkontakte/icons';

class GiftPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

	render() {
		const {id, setPage, goBack, platform} = this.props;

		return (
			<Panel id={id}>
				<PanelHeader
					left={<PanelHeaderBack onClick={() => goBack()} label={platform === VKCOM ? 'Назад' : undefined} />}
				>
					Подарок
				</PanelHeader>
				<Group style={{paddingBottom: 84}}>
					<img className="imgGift" src="https://cdn.pixabay.com/photo/2019/09/26/07/57/banana-4505334_1280.png" />
					<FormItem top="Получатель">
						<SimpleCell before={<Avatar size={48} src="" />}>Артём Петрунин</SimpleCell>
					</FormItem>
					<FormItem top="Текст к подарку">
						<Textarea placeholder="Ваш текст" />
					</FormItem>
					<Cell multiline after={<Switch aria-label="Видимость подарка" />}>
						Ваше имя и текст видны всем
					</Cell>
					<Spacing separator="center" />
					<Div className="buttonGiftBlock">
						<div style={{marginTop: "-7px", marginBottom: "7px"}}>У Вас 100 coin</div>
						<Button stretched mode="commerce" size="l"><div style={{display: "flex", marginTop: "auto", marginBottom: "auto"}}>Отправить за 1 coin <Icon28CoinsOutline style={{marginLeft: "5px", marginTop: "auto", marginBottom: "auto"}} width={24} height={24} /></div></Button>
					</Div>
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

export default connect(null, mapDispatchToProps)(GiftPanel);