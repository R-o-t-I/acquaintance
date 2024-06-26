import React from 'react';
import {connect} from 'react-redux';

import {openModal, setPage} from "../../store/router/actions";

import {
  ModalPage, 
  ModalPageHeader, 
  PanelHeaderButton, 
  withPlatform, 
  IOS,
  Group,
  Div,
  FixedLayout
} from "@vkontakte/vkui";

import {
  Icon24Dismiss,
  Icon24Cancel,
  Icon28CoinsOutline
} from '@vkontakte/icons'

class HomeGiftsModal extends React.Component {

  render() {
    const {id, onClose, openModal, platform, setPage} = this.props;

    return (
        <ModalPage
          id={id}
          header={
            <ModalPageHeader
              right={platform === IOS &&
              <PanelHeaderButton onClick={onClose}><Icon24Dismiss/></PanelHeaderButton>}
            >
              <div style={{flexDirection: "column", textAlign: "center"}}>
                <div>Подарки</div>
                <div>Ваш баланс: 150 Coin</div>
              </div>
              
            </ModalPageHeader>
          }
          onClose={onClose}
          settlingHeight
        >
          
          <Group>
            <Div className="blockGifts">
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
        </ModalPage>
    );
  }

}

const mapDispatchToProps = {
  openModal,
  setPage
};

export default withPlatform(connect(null, mapDispatchToProps)(HomeGiftsModal));