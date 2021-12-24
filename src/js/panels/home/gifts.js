import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../store/router/actions";

import {
  Panel,
  PanelHeader,
  Group,
  Div,
  PanelHeaderBack,
  VKCOM
} from "@vkontakte/vkui";

import {
  Icon28CoinsOutline
} from '@vkontakte/icons'

import bridge from '@vkontakte/vk-bridge';

class GiftsPanel extends React.Component {
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
					separator={false}
				>
					Подарки
				</PanelHeader>
				<Div className="balansBlock">
					<div>Ваш баланс: <span className="balansText">100</span> coin</div>
				</Div>
				<Group>
					<Div className="blockGifts">
						<div className="blockGift">
							<div className="blockImgGifts" onClick={() => setPage('home', 'gift')}>
							<img className="imgGifts" src="https://cdn.pixabay.com/photo/2019/09/26/07/57/banana-4505334_1280.png" />
							</div>
							<div className="nameGifts">Банан</div>
							<div className="priceGifts">
							<Icon28CoinsOutline className="iconPriceGifts" width={16} height={16} />
							<div className="textPriceGifts">1 coin</div>
							</div>
						</div>
						<div className="blockGift">
							<div className="blockImgGifts">
							<img className="imgGifts" src="https://cdn.pixabay.com/photo/2019/09/26/07/57/banana-4505334_1280.png" />
							</div>
							<div className="nameGifts">Банан</div>
							<div className="priceGifts">
							<Icon28CoinsOutline className="iconPriceGifts" width={16} height={16} />
							<div className="textPriceGifts">1 coin</div>
							</div>
						</div>
						<div className="blockGift">
							<div className="blockImgGifts">
							<img className="imgGifts" src="https://cdn.pixabay.com/photo/2019/09/26/07/57/banana-4505334_1280.png" />
							</div>
							<div className="nameGifts">Банан</div>
							<div className="priceGifts">
							<Icon28CoinsOutline className="iconPriceGifts" width={16} height={16} />
							<div className="textPriceGifts">1 coin</div>
							</div>
						</div>
						<div className="blockGift">
							<div className="blockImgGifts">
							<img className="imgGifts" src="https://cdn.pixabay.com/photo/2019/09/26/07/57/banana-4505334_1280.png" />
							</div>
							<div className="nameGifts">Банан</div>
							<div className="priceGifts">
							<Icon28CoinsOutline className="iconPriceGifts" width={16} height={16} />
							<div className="textPriceGifts">1 coin</div>
							</div>
						</div>
						<div className="blockGift">
							<div className="blockImgGifts">
							<img className="imgGifts" src="https://cdn.pixabay.com/photo/2019/09/26/07/57/banana-4505334_1280.png" />
							</div>
							<div className="nameGifts">Банан</div>
							<div className="priceGifts">
							<Icon28CoinsOutline className="iconPriceGifts" width={16} height={16} />
							<div className="textPriceGifts">1 coin</div>
							</div>
						</div>
						<div className="blockGift">
							<div className="blockImgGifts">
							<img className="imgGifts" src="https://cdn.pixabay.com/photo/2019/09/26/07/57/banana-4505334_1280.png" />
							</div>
							<div className="nameGifts">Банан</div>
							<div className="priceGifts">
							<Icon28CoinsOutline className="iconPriceGifts" width={16} height={16} />
							<div className="textPriceGifts">1 coin</div>
							</div>
						</div>
						<div className="blockGift">
							<div className="blockImgGifts">
							<img className="imgGifts" src="https://cdn.pixabay.com/photo/2019/09/26/07/57/banana-4505334_1280.png" />
							</div>
							<div className="nameGifts">Банан</div>
							<div className="priceGifts">
							<Icon28CoinsOutline className="iconPriceGifts" width={16} height={16} />
							<div className="textPriceGifts">1 coin</div>
							</div>
						</div>
						<div className="blockGift">
							<div className="blockImgGifts">
							<img className="imgGifts" src="https://cdn.pixabay.com/photo/2019/09/26/07/57/banana-4505334_1280.png" />
							</div>
							<div className="nameGifts">Банан</div>
							<div className="priceGifts">
							<Icon28CoinsOutline className="iconPriceGifts" width={16} height={16} />
							<div className="textPriceGifts">1 coin</div>
							</div>
						</div>
						<div className="blockGift">
							<div className="blockImgGifts">
							<img className="imgGifts" src="https://cdn.pixabay.com/photo/2019/09/26/07/57/banana-4505334_1280.png" />
							</div>
							<div className="nameGifts">Банан</div>
							<div className="priceGifts">
							<Icon28CoinsOutline className="iconPriceGifts" width={16} height={16} />
							<div className="textPriceGifts">1 coin</div>
							</div>
						</div>
						<div className="blockGift">
							<div className="blockImgGifts">
							<img className="imgGifts" src="https://cdn.pixabay.com/photo/2019/09/26/07/57/banana-4505334_1280.png" />
							</div>
							<div className="nameGifts">Банан</div>
							<div className="priceGifts">
							<Icon28CoinsOutline className="iconPriceGifts" width={16} height={16} />
							<div className="textPriceGifts">1 coin</div>
							</div>
						</div>
						<div className="blockGift">
							<div className="blockImgGifts">
							<img className="imgGifts" src="https://cdn.pixabay.com/photo/2019/09/26/07/57/banana-4505334_1280.png" />
							</div>
							<div className="nameGifts">Банан</div>
							<div className="priceGifts">
							<Icon28CoinsOutline className="iconPriceGifts" width={16} height={16} />
							<div className="textPriceGifts">1 coin</div>
							</div>
						</div>
						<div className="blockGift">
							<div className="blockImgGifts">
							<img className="imgGifts" src="https://cdn.pixabay.com/photo/2019/09/26/07/57/banana-4505334_1280.png" />
							</div>
							<div className="nameGifts">Банан</div>
							<div className="priceGifts">
							<Icon28CoinsOutline className="iconPriceGifts" width={16} height={16} />
							<div className="textPriceGifts">1 coin</div>
							</div>
						</div>
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

export default connect(null, mapDispatchToProps)(GiftsPanel);