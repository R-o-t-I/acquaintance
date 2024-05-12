import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../../store/router/actions";

import queryGet from '../../../../functions/query_get.jsx';

import {
  Panel,
  PanelHeader,
  Group,
  PanelHeaderBack,
  VKCOM,
	Spacing,
	Div,
	CardGrid,
	Card,
	Input,
	FormItem,
	Button,
	Header,
	SimpleCell,
	Link,
	Avatar,
	FormLayoutGroup
} from "@vkontakte/vkui";

import bridge from '@vkontakte/vk-bridge';
import { Icon28CoinsOutline, Icon28DonateOutline, Icon28GiftOutline, Icon28ThumbsUpOutline } from '@vkontakte/icons';

class BalancePanel extends React.Component {
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
					Баланс
				</PanelHeader>
				<Group header={<Header>Информация о Coin</Header>}>
					<Div>Coin — виртуальная валюта приложения.</Div>
				{/*Для ПК */}
				{queryGet("vk_platform") === "desktop_web" && (
					<CardGrid size="m">
						<Card>
							<Div style={{display: "flex"}}>
								<Icon28GiftOutline style={{color: "var(--background_content)", backgroundColor: "var(--field_valid_border)"}} className="iconBlockInfoBalance" />
								<div>
									<div className="titleBlockInfoBalance">
										Дари подарки!
									</div>
									<div className="descriptionInfoBalance">
										Подари подарок, сделай кому-нибудь приятно
									</div>
								</div>
							</Div>
						</Card>
						<Card>
							<Div style={{display: "flex"}}>
								<Icon28ThumbsUpOutline style={{color: "var(--background_content)", backgroundColor: "var(--dynamic_orange)"}} className="iconBlockInfoBalance" />
								<div>
									<div className="titleBlockInfoBalance">
										Попади в топ!
									</div>
									<div className="descriptionInfoBalance">
										Займи место в блоке "Топ пользователи"
									</div>
								</div>
							</Div>
						</Card>
					</CardGrid>
				)}
				{/*Для всех остальных устройств */}
				{(queryGet("vk_platform") === "mobile_android" ||
					queryGet("vk_platform") === "mobile_iphone" ||
					queryGet("vk_platform") === "mobile_android_messenger" ||
					queryGet("vk_platform") === "mobile_iphone_messenger" ||
					queryGet("vk_platform") === "mobile_web") && (
					<CardGrid size="l">
						<Card>
							<Div style={{display: "flex"}}>
								<Icon28GiftOutline style={{color: "var(--background_content)", backgroundColor: "var(--field_valid_border)"}} className="iconBlockInfoBalance" />
								<div>
									<div className="titleBlockInfoBalance">
										Дари подарки!
									</div>
									<div className="descriptionInfoBalance">
										Подари подарок, сделай кому-нибудь приятно
									</div>
								</div>
							</Div>
						</Card>
						<Card>
							<Div style={{display: "flex"}}>
								<Icon28ThumbsUpOutline style={{color: "var(--background_content)", backgroundColor: "var(--dynamic_orange)"}} className="iconBlockInfoBalance" />
								<div>
									<div className="titleBlockInfoBalance">
										Попади в топ!
									</div>
									<div className="descriptionInfoBalance">
										Займи место в блоке "Топ пользователи"
									</div>
								</div>
							</Div>
						</Card>
					</CardGrid>
				)}
				<Spacing separator="bottom" size={18} />
				<Div style={{textAlign: "center"}}>На Вашем балансе: 150 Coin</Div>
        </Group>
				<Group header={<Header>Купить Coin</Header>}>
					<CardGrid size="s">
						<Card>
							<div>
								<img src="https://pngicon.ru/file/uploads/1_1677.png" className="imgBalanceBlock"/>
								<div className="balanceBalansBlock">100 Coin</div>
								<div className="titleBalansBlock">Жменя коинов</div>
								<div className="priceBalansBlock">100 RUB</div>
								<div className="priceBalansSale">Выгода 0%</div>
								<Div><Button stretched>Купить</Button></Div>
							</div>
						</Card>
						<Card>
							<div>
								<img src="https://pngicon.ru/file/uploads/meshok-s-dengami.png" className="imgBalanceBlock"/>
								<div className="balanceBalansBlock">500 Coin</div>
								<div className="titleBalansBlock">Мешочек коинов</div>
								<div className="priceBalansBlock">300 RUB</div>
								<div className="priceBalansSale">Выгода 15%</div>
								<Div><Button stretched>Купить</Button></Div>
							</div>
						</Card>
						<Card>
							<div>
								<img src="https://pngimg.com/uploads/treasure_chest/treasure_chest_PNG8.png" className="imgBalanceBlock"/>
								<div className="balanceBalansBlock">1000 Coin</div>
								<div className="titleBalansBlock">Сундук коинов</div>
								<div className="priceBalansBlock">500 RUB</div>
								<div className="priceBalansSale">Выгода 25%</div>
								<Div><Button stretched>Купить</Button></Div>
							</div>
						</Card>
					</CardGrid>
				{/*Для ПК */}
				{queryGet("vk_platform") === "desktop_web" && (
					<FormLayoutGroup mode="horizontal">
						<FormItem top="Своя сумма">
							<div style={{display: "flex"}}>
								<Input style={{width: "100%"}} type="number" placeholder="Желаемая сумма Coin" />
								<Button style={{marginLeft: "8px"}}>Купить</Button>
							</div>
						</FormItem>
						<FormItem top="Промокод">
							<div style={{display: "flex"}}>
								<Input style={{width: "100%"}} placeholder="Промокод" />
								<Button style={{marginLeft: "8px"}}>Активировать</Button>
							</div>
						</FormItem>
					</FormLayoutGroup>
				)}
				{/*Для всех остальных устройств */}
				{(queryGet("vk_platform") === "mobile_android" ||
					queryGet("vk_platform") === "mobile_iphone" ||
					queryGet("vk_platform") === "mobile_android_messenger" ||
					queryGet("vk_platform") === "mobile_iphone_messenger" ||
					queryGet("vk_platform") === "mobile_web") && (
						<FormLayoutGroup>
						<FormItem top="Своя сумма">
							<div style={{display: "flex"}}>
								<Input style={{width: "100%"}} type="number" placeholder="Желаемая сумма Coin" />
								<Button style={{marginLeft: "8px"}}>Купить</Button>
							</div>
						</FormItem>
						<FormItem top="Промокод">
							<div style={{display: "flex"}}>
								<Input style={{width: "100%"}} placeholder="Промокод" />
								<Button style={{marginLeft: "8px"}}>Активировать</Button>
							</div>
						</FormItem>
					</FormLayoutGroup>
				)}
				</Group>
				<Group header={<Header>История операций</Header>}>
					<SimpleCell
						before={<Icon28GiftOutline />}
						description="29 декабря 2021 в 12:43"
						indicator={<div style={{width: "100%"}}>-5 Coin</div>}
						multiline
						disabled
					>
						Подарок для <Link>Артёма Петрунина</Link>
					</SimpleCell>
					<SimpleCell
						before={<Icon28DonateOutline />}
						description="21 декабря 2021 в 13:35"
						indicator={<div style={{width: "100%"}}>-500 RUB</div>}
						multiline
						disabled
					>
						Покупка премиум на месяц
					</SimpleCell>
					<SimpleCell
						before={<Icon28CoinsOutline />}
						description="20 декабря 2021 в 21:57"
						indicator={<div style={{width: "100%"}}>+155 Coin</div>}
						multiline
						disabled
					>
						Пополнение баланса
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

export default connect(null, mapDispatchToProps)(BalancePanel);