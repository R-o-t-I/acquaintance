import React from 'react';
import {connect} from 'react-redux';

import {openModal} from "../../store/router/actions";

import {
  ModalPage, 
  ModalPageHeader, 
  PanelHeaderButton, 
  withPlatform, 
  IOS,
  HorizontalScroll,
  HorizontalCell,
  Avatar,
  Placeholder,
  Button,
  FixedLayout,
  Div
} from "@vkontakte/vkui";
import {
  Icon24Dismiss,
  Icon24Cancel,
  Icon28CameraOutline,
  Icon28VideoOutline,
  Icon28GiftOutline,
  Icon28LocationMapOutline,
  Icon56CameraOffOutline,
  Icon28PictureOutline,
  Icon28VideocamOutline,
  Icon28VideocamSlashOutline,
  Icon28CameraSlashOutline,
  Icon28CoinsOutline,
} from '@vkontakte/icons'

class ActionChatModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeAction: "photo"
    };
  }

  render() {
    const {id, onClose, openModal, platform, activeAction} = this.props;

    return (
      <ModalPage
        id={id}
        settlingHeight={40}
        dynamicContentHeight
        header={
          <ModalPageHeader
            left={platform !== IOS &&
            <PanelHeaderButton onClick={onClose}><Icon24Cancel/></PanelHeaderButton>}
            right={platform === IOS &&
            <PanelHeaderButton onClick={onClose}><Icon24Dismiss/></PanelHeaderButton>}
          >
            {this.state.activeAction === "photo" ? <div>
              Фото
            </div> : null}
            {this.state.activeAction === "video" ? <div>
              Видео
            </div> : null}
            {this.state.activeAction === "location" ? <div>
              Место
            </div> : null}
            {this.state.activeAction === "gift" ? <div>
              Подарок
            </div> : null}
          </ModalPageHeader>
        }
        onClose={onClose}
      >
        {this.state.activeAction === "photo" ? <div>
          <div style={{boxShadow: "0 0 0 var(--thin-border) var(--input_border) inset"}}>
            <Button before={<Icon28CameraOutline />} stretched size="l" mode="tertiary">Камера</Button>
          </div>
          <Placeholder
            icon={<Icon28CameraSlashOutline width={60} height={60} />}
            header="Нет доступа"
            action={<Button mode="outline" size="m" onClick={this.select} data-mode="message">Предоставить доступ</Button>}
          >
            Чтобы прикрепить фото из галереи, нужно предоставить доступ к файлам
          </Placeholder>
          <HorizontalScroll
            showArrows
            getScrollToLeft={(i) => i - 120}
            getScrollToRight={(i) => i + 120}
          >
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <HorizontalCell
                header={
                  <div style={activeAction === "photo" ? {} : {color: "var(--accent)", fontWeight: "500"}}>
                    Фото
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "photo" })}
                  selected={this.state.activeAction === "photo"}
                  style={activeAction === "photo" ? {} : {backgroundColor: "var(--accent)"}}
                >
                  <Icon28PictureOutline
                    width={35}
                    height={35}
                    style={activeAction === "photo" ? {} : {color: "var(--background_content)"}}
                  />
                </Avatar>
              </HorizontalCell>
              <HorizontalCell
                header={
                  <div style={activeAction === "video" ? {color: "var(--accent)", fontWeight: "500"} : {}}>
                    Видео
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "video" })}
                  selected={this.state.activeAction === "video"}
                  style={activeAction === "video" ? {backgroundColor: "var(--accent)"} : {}}
                >
                  <Icon28VideoOutline
                    width={35}
                    height={35}
                    style={activeAction === "video" ? {color: "var(--background_content)"} : {}}
                  />
                </Avatar>
              </HorizontalCell>
              <HorizontalCell
                header={
                  <div style={activeAction === "location" ? {color: "var(--accent)", fontWeight: "500"} : {}}>
                    Место
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "location" })}
                  selected={this.state.activeAction === "location"}
                  style={activeAction === "location" ? {backgroundColor: "var(--accent)"} : {}}
                >
                  <Icon28LocationMapOutline
                    width={35}
                    height={35}
                    style={activeAction === "location" ? {color: "var(--background_content)"} : {}}
                  />
                </Avatar>
              </HorizontalCell>
              <HorizontalCell
                header={
                  <div style={activeAction === "gift" ? {color: "var(--accent)", fontWeight: "500"} : {}}>
                    Подарок
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "gift" })}
                  selected={this.state.activeAction === "gift"}
                  style={activeAction === "gift" ? {backgroundColor: "var(--accent)"} : {}}
                >
                  <Icon28GiftOutline
                    width={35}
                    height={35}
                    style={activeAction === "gift" ? {color: "var(--background_content)"} : {}}
                  />
                </Avatar>
              </HorizontalCell>
            </div>
          </HorizontalScroll>
        </div> : null}

        {this.state.activeAction === "video" ? <div>
          <div style={{boxShadow: "0 0 0 var(--thin-border) var(--input_border) inset"}}>
            <Button before={<Icon28VideocamOutline />} stretched size="l" mode="tertiary">Камера</Button>
          </div>
          <Placeholder
            icon={<Icon28VideocamSlashOutline width={60} height={60}/>}
            header="Нет доступа"
            action={<Button mode="outline" size="m" onClick={this.select} data-mode="message">Предоставить доступ</Button>}
          >
            Чтобы прикрепить видео из галереи, нужно предоставить доступ к файлам
          </Placeholder>
          <HorizontalScroll
            showArrows
            getScrollToLeft={(i) => i - 120}
            getScrollToRight={(i) => i + 120}
          >
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <HorizontalCell
                header={
                  <div style={activeAction === "photo" ? {color: "var(--accent)", fontWeight: "500"} : {}}>
                    Фото
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "photo" })}
                  selected={this.state.activeAction === "photo"}
                  style={activeAction === "photo" ? {backgroundColor: "var(--accent)"} : {}}
                >
                  <Icon28PictureOutline
                    width={35}
                    height={35}
                    style={activeAction === "photo" ? {color: "var(--background_content)"} : {}}
                  />
                </Avatar>
              </HorizontalCell>
              <HorizontalCell
                header={
                  <div style={activeAction === "video" ? {} : {color: "var(--accent)", fontWeight: "500"}}>
                    Видео
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "video" })}
                  selected={this.state.activeAction === "video"}
                  style={activeAction === "video" ? {} : {backgroundColor: "var(--accent)"}}
                >
                  <Icon28VideoOutline
                    width={35}
                    height={35}
                    style={activeAction === "video" ? {} : {color: "var(--background_content)"}}
                  />
                </Avatar>
              </HorizontalCell>
              <HorizontalCell
                header={
                  <div style={activeAction === "location" ? {color: "var(--accent)", fontWeight: "500"} : {}}>
                    Место
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "location" })}
                  selected={this.state.activeAction === "location"}
                  style={activeAction === "location" ? {backgroundColor: "var(--accent)"} : {}}
                >
                  <Icon28LocationMapOutline
                    width={35}
                    height={35}
                    style={activeAction === "location" ? {color: "var(--background_content)"} : {}}
                  />
                </Avatar>
              </HorizontalCell>
              <HorizontalCell
                header={
                  <div style={activeAction === "gift" ? {color: "var(--accent)", fontWeight: "500"} : {}}>
                    Подарок
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "gift" })}
                  selected={this.state.activeAction === "gift"}
                  style={activeAction === "gift" ? {backgroundColor: "var(--accent)"} : {}}
                >
                  <Icon28GiftOutline
                    width={35}
                    height={35}
                    style={activeAction === "gift" ? {color: "var(--background_content)"} : {}}
                  />
                </Avatar>
              </HorizontalCell>
            </div>
          </HorizontalScroll>
        </div> : null}
        {this.state.activeAction === "location" ? <div>
          <Placeholder
            icon={<Icon28LocationMapOutline width={60} height={60} />}
            header="Нет доступа"
            action={<Button mode="outline" size="m" onClick={this.select} data-mode="message">Предоставить доступ</Button>}
          >
            Чтобы прикрепить местоположение, нужно предоставить доступ к местоположению
          </Placeholder>
          <HorizontalScroll
            showArrows
            getScrollToLeft={(i) => i - 120}
            getScrollToRight={(i) => i + 120}
          >
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <HorizontalCell
                header={
                  <div style={activeAction === "photo" ? {color: "var(--accent)", fontWeight: "500"} : {}}>
                    Фото
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "photo" })}
                  selected={this.state.activeAction === "photo"}
                  style={activeAction === "photo" ? {backgroundColor: "var(--accent)"} : {}}
                >
                  <Icon28PictureOutline
                    width={35}
                    height={35}
                    style={activeAction === "photo" ? {color: "var(--background_content)"} : {}}
                  />
                </Avatar>
              </HorizontalCell>
              <HorizontalCell
                header={
                  <div style={activeAction === "video" ? {color: "var(--accent)", fontWeight: "500"} : {}}>
                    Видео
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "video" })}
                  selected={this.state.activeAction === "video"}
                  style={activeAction === "video" ? {backgroundColor: "var(--accent)"} : {}}
                >
                  <Icon28VideoOutline
                    width={35}
                    height={35}
                    style={activeAction === "video" ? {color: "var(--background_content)"} : {}}
                  />
                </Avatar>
              </HorizontalCell>
              <HorizontalCell
                header={
                  <div style={activeAction === "location" ? {} : {color: "var(--accent)", fontWeight: "500"}}>
                    Место
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "location" })}
                  selected={this.state.activeAction === "location"}
                  style={activeAction === "location" ? {} : {backgroundColor: "var(--accent)"}}
                >
                  <Icon28LocationMapOutline
                    width={35}
                    height={35}
                    style={activeAction === "location" ? {} : {color: "var(--background_content)"}}
                  />
                </Avatar>
              </HorizontalCell>
              <HorizontalCell
                header={
                  <div style={activeAction === "gift" ? {color: "var(--accent)", fontWeight: "500"} : {}}>
                    Подарок
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "gift" })}
                  selected={this.state.activeAction === "gift"}
                  style={activeAction === "gift" ? {backgroundColor: "var(--accent)"} : {}}
                >
                  <Icon28GiftOutline
                    width={35}
                    height={35}
                    style={activeAction === "gift" ? {color: "var(--background_content)"} : {}}
                  />
                </Avatar>
              </HorizontalCell>
            </div>
          </HorizontalScroll>
        </div> : null}
        {this.state.activeAction === "gift" ? <div>
          <FixedLayout vertical="top" filled style={{marginTop: "52px", borderBottom: "var(--thin-border) inset var(--input_border)"}}>
          <HorizontalScroll
            showArrows
            getScrollToLeft={(i) => i - 120}
            getScrollToRight={(i) => i + 120}
          >
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <HorizontalCell
                header={
                  <div style={activeAction === "photo" ? {color: "var(--accent)", fontWeight: "500"} : {}}>
                    Фото
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "photo" })}
                  selected={this.state.activeAction === "photo"}
                  style={activeAction === "photo" ? {backgroundColor: "var(--accent)"} : {}}
                >
                  <Icon28PictureOutline
                    width={35}
                    height={35}
                    style={activeAction === "photo" ? {color: "var(--background_content)"} : {}}
                  />
                </Avatar>
              </HorizontalCell>
              <HorizontalCell
                header={
                  <div style={activeAction === "video" ? {color: "var(--accent)", fontWeight: "500"} : {}}>
                    Видео
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "video" })}
                  selected={this.state.activeAction === "video"}
                  style={activeAction === "video" ? {backgroundColor: "var(--accent)"} : {}}
                >
                  <Icon28VideoOutline
                    width={35}
                    height={35}
                    style={activeAction === "video" ? {color: "var(--background_content)"} : {}}
                  />
                </Avatar>
              </HorizontalCell>
              <HorizontalCell
                header={
                  <div style={activeAction === "location" ? {color: "var(--accent)", fontWeight: "500"} : {}}>
                    Место
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "location" })}
                  selected={this.state.activeAction === "location"}
                  style={activeAction === "location" ? {backgroundColor: "var(--accent)"} : {}}
                >
                  <Icon28LocationMapOutline
                    width={35}
                    height={35}
                    style={activeAction === "location" ? {color: "var(--background_content)"} : {}}
                  />
                </Avatar>
              </HorizontalCell>
              <HorizontalCell
                header={
                  <div style={activeAction === "gift" ? {} : {color: "var(--accent)", fontWeight: "500"}}>
                    Подарок
                  </div>
                }
                disabled
                size="s"
              >
                <Avatar
                  size={60}
                  onClick={() => this.setState({ activeAction: "gift" })}
                  selected={this.state.activeAction === "gift"}
                  style={activeAction === "gift" ? {} : {backgroundColor: "var(--accent)"}}
                >
                  <Icon28GiftOutline
                    width={35}
                    height={35}
                    style={activeAction === "gift" ? {} : {color: "var(--background_content)"}}
                  />
                </Avatar>
              </HorizontalCell>
            </div>
          </HorizontalScroll>
          </FixedLayout>
          <FixedLayout vertical="top" filled style={{marginTop: "144px", borderBottom: "var(--thin-border) inset var(--input_border)"}}>
            <Div style={{textAlign: "center"}}>Ваш баланс: 150 Coin</Div>
          </FixedLayout>
          <div className="blockGifts" style={{marginTop: "140px"}}>
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
          </div>
        </div> : null}
      </ModalPage>
    );
  }

}

const mapDispatchToProps = {
    openModal
};

export default withPlatform(connect(null, mapDispatchToProps)(ActionChatModal));