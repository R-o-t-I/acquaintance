import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../../store/router/actions";

import {
  Panel,
  PanelHeader,
  Group,
  PanelHeaderBack,
  VKCOM,
	Gallery,
	Div,
	Cell,
	Button,
	Spacing
} from "@vkontakte/vkui";

import bridge from '@vkontakte/vk-bridge';

class PremiumPanel extends React.Component {
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
					Премиум
				</PanelHeader>
				<Group>
					<Gallery
						slideWidth="100%"
						className="galleryPremium"
						bullets="light"
						showArrows
					>
						<div>
							<img className="imgGalleryPremium" src="" />
							<Div style={{textAlign: "center"}}>Смотри столько анкет, сколько хочешь</Div>
						</div>
						<div>
							<img className="imgGalleryPremium" src="" />
							<Div style={{textAlign: "center"}}>Смотри столько анкет, сколько хочешь</Div>
						</div>
						<div>
							<img className="imgGalleryPremium" src="" />
							<Div style={{textAlign: "center"}}>Смотри столько анкет, сколько хочешь</Div>
						</div>
					</Gallery>
					<Spacing separator="center" />
					<Cell multiline mode="selectable" name="radio" value="1" after={<div style={{textAlign: "right"}}><div>2 000 RUB</div><div style={{fontSize: "12px", color: "var(--text_secondary)"}}>Экономия 75%</div></div>} description="Ежегодная подписка">1 год</Cell>
					<Cell multiline mode="selectable" name="radio" value="2" after={<div style={{textAlign: "right"}}><div>1 500 RUB</div><div style={{fontSize: "12px", color: "var(--text_secondary)"}}>Экономия 50%</div></div>} description="Ежеполугодовая подписка">6 месяцев</Cell>
					<Cell multiline mode="selectable" name="radio" value="3" after={<div style={{textAlign: "right"}}><div>1 000 RUB</div><div style={{fontSize: "12px", color: "var(--text_secondary)"}}>Экономия 25%</div></div>} description="Ежеквартальная подписка">3 месяца</Cell>
					<Cell multiline mode="selectable" name="radio" value="4" after={<div style={{textAlign: "right"}}>500 RUB</div>} description="Ежемесячная подписка">1 месяц</Cell>
					<Cell multiline name="radio" value="5" after={<div><Button>Посмотреть</Button></div>} description="Посмотри рекламу, чтобы получить премиум">15 минут</Cell>
        	<Div>
						<Button stretched mode="commerce" size="m">Подписаться за 2 000 RUB</Button>
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

export default connect(null, mapDispatchToProps)(PremiumPanel);