import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {
    Panel, 
    Group, 
    PanelHeader,
    PanelHeaderButton,
    Avatar,
    HorizontalCell,
    HorizontalScroll,
    SimpleCell,
    IconButton,
    Div,
    Tappable,
    Link,
    Counter,
    ActionSheet,
    ActionSheetItem,
    CellButton,
    VKCOM
} from '@vkontakte/vkui'

import { RichTooltip, Dropdown } from '@vkontakte/vkui/dist/unstable';
import '@vkontakte/vkui/dist/unstable.css' // CSS достаточно подключить один раз 

import bridge from '@vkontakte/vk-bridge';

import queryGet from '../../../functions/query_get.jsx';

import {
  Icon12Verified,
  Icon16Add,
  Icon28CommentOutline,
  Icon28DeleteOutline,
  Icon28EditOutline,
  Icon28GiftOutline,
  Icon28HideOutline,
  Icon28LikeOutline,
  Icon28MoreVertical,
  Icon28Notifications,
  Icon28ReportOutline,
  Icon28ShareOutline
} from '@vkontakte/icons';

class HomePanel extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        
      };
      this.openInteractionAcquaintance = this.openInteractionAcquaintance.bind(this);
      this.openInteractionAcquaintance2 = this.openInteractionAcquaintance2.bind(this);
      //this.targetRef = React.createRef();
    }

    openInteractionAcquaintance() {
      this.props.openPopout(
        <ActionSheet
          onClose={() => this.props.closePopout()}
          iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
          //toggleRef={this.targetRef.current}
        >
          <ActionSheetItem autoclose before={<Icon28EditOutline/>}>
            Редактировать запись
          </ActionSheetItem>
          <ActionSheetItem autoclose before={<Icon28ShareOutline/>}>
            Поделиться записью
          </ActionSheetItem>
          <ActionSheetItem
              autoclose
              before={<Icon28DeleteOutline/>}
              mode="destructive"
          >
            Удалить запись
          </ActionSheetItem>
        </ActionSheet>
      );
    }

  openInteractionAcquaintance2() {
    this.props.openPopout(
      <ActionSheet
        onClose={() => this.props.closePopout()}
        iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
        //toggleRef={this.targetRef.current}
      >
        <ActionSheetItem autoclose before={<Icon28HideOutline />}>
          Скрыть записи автора
        </ActionSheetItem>
        <ActionSheetItem autoclose before={<Icon28ShareOutline/>}>
          Поделиться записью
        </ActionSheetItem>
        <ActionSheetItem
            autoclose
            before={<Icon28ReportOutline />}
            mode="destructive"
        >
          Пожаловаться
        </ActionSheetItem>
      </ActionSheet>
    );
}

openImg() {
  bridge.send("VKWebAppShowImages", {
    images: [
      "https://img2.akspic.ru/originals/1/7/1/5/6/165171-zemlya-oblako-atmosfera-poslesvechenie-zakat-1080x1920.jpg"
    ]
  });
}

  render() {
    const {id, setPage, platform} = this.props;

    return (
        <Panel id={id}>
        {/*Для ПК */}
				{
					(queryGet('vk_platform') === 'desktop_web') && (
            <PanelHeader
              /*right={
                <PanelHeaderButton
                  aria-label="Уведомления. У вас N уведомлений"
                  label={<Counter size="s" mode="prominent">21</Counter>}
                  onClick={() => setPage('home', 'notifications')}
                >
                  <Icon28Notifications />
                </PanelHeaderButton>
              }*/
              aria-label="Лента"
            >
              Лента
            </PanelHeader>
          )
        }
        {/*Для всех остальных устройств */}
				{
					(queryGet('vk_platform') === 'mobile_android'
					|| queryGet('vk_platform') === 'mobile_iphone'
          || queryGet('vk_platform') === 'mobile_ipad'
					|| queryGet('vk_platform') === 'mobile_android_messenger'
					|| queryGet('vk_platform') === 'mobile_iphone_messenger'
					|| queryGet('vk_platform') === 'mobile_web') && (
            <PanelHeader
              left={
                <PanelHeaderButton
                  aria-label="Уведомления. У вас N уведомлений"
                  label={<Counter size="s" mode="prominent">21</Counter>}
                  onClick={() => setPage('home', 'notifications')}
                >
                  <Icon28Notifications />
                </PanelHeaderButton>
              }
              aria-label="Лента"
            >
              Лента
            </PanelHeader>
          )
        }
            <Group>
              <HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
                <div style={{ display: 'flex' }}>
                  <HorizontalCell header={<div className="nameStory">Александр</div>}>
                    <Avatar className="noNewStory" size={56} src="https://sun9-81.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
                    <div className="iconAddStory"><Icon16Add /></div>
                  </HorizontalCell>
                  <HorizontalCell header={<div className="nameNewsStory">Новости</div>}>
                    <Avatar className="newsStory" size={56} src="" />
                  </HorizontalCell>
                  <HorizontalCell onClick={() => setPage('home', 'storyUsers')} header={<div className="nameStory">Артём</div>}>
                    <Avatar className="noNewStory" size={56} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />
                  </HorizontalCell>
                  <HorizontalCell header={<div className="nameNewStory">Ndfdgdgdfhfhdfgdfsdfame</div>}>
                    <Avatar className="newStory" size={56} src="" />
                  </HorizontalCell>
                  <HorizontalCell header={<div className="nameNewStory">Name</div>}>
                    <Avatar className="newStory" size={56} src="" />
                  </HorizontalCell>
                  <HorizontalCell header={<div className="nameNewStory">Name</div>}>
                    <Avatar className="newStory" size={56} src="" />
                  </HorizontalCell>
                  <HorizontalCell header={<div className="nameNewStory">Name</div>}>
                    <Avatar className="newStory" size={56} src="" />
                  </HorizontalCell>
                  <HorizontalCell header={<div className="nameNewStory">Name</div>}>
                    <Avatar className="newStory" size={56} src="" />
                  </HorizontalCell>
                  <HorizontalCell header={<div className="nameNewStory">Name</div>}>
                    <Avatar className="newStory" size={56} src="" />
                  </HorizontalCell>
                  <HorizontalCell header={<div className="nameNewStory">Name</div>}>
                    <Avatar className="newStory" size={56} src="" />
                  </HorizontalCell>
                  <HorizontalCell header={<div className="nameNewStory">Name</div>}>
                    <Avatar className="newStory" size={56} src="" />
                  </HorizontalCell>
                  <HorizontalCell header={<div className="nameNewStory">Name</div>}>
                    <Avatar className="newStory" size={56} src="" />
                  </HorizontalCell>
                  <HorizontalCell header={<div className="nameNewStory">Name</div>}>
                    <Avatar className="newStory" size={56} src="" />
                  </HorizontalCell>
                </div>
              </HorizontalScroll>
            </Group>
            {/*Для ПК */}
            {
					    (queryGet('vk_platform') === 'desktop_web') && (
            <Group>
              <div>
                <SimpleCell 
                  before={<Avatar size={48} src="" />}
                  badge={<Icon12Verified />}
                  after={
                    <RichTooltip
                      action="hover"
                      placement="bottom"
                      content={
                        <div>
                          <CellButton before={<Icon28HideOutline />}>Скрыть записи автора</CellButton>
                          <CellButton before={<Icon28ShareOutline />}>Поделиться записью</CellButton>
                          <CellButton before={<Icon28ReportOutline />} mode="danger">Пожаловаться</CellButton>
                        </div>
                      }
                    >
                      <IconButton><Icon28MoreVertical /></IconButton>
                    </RichTooltip>
                  }
                  description="вчера в 19:35"
                >
                  Артём Петрунин
                </SimpleCell>
                <Div>Всем привет!</Div>
                <div className="allBlockIconPost">
                  <div style={{display: "flex"}}>
                    <RichTooltip
                      action="hover"
                      placement="top"
                      style={{margin: "0px 10px"}}
                      content={
                        <div style={{display: "flex"}}>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                        </div>
                      }
                    >
                      <Tappable className="blockIconPost">
                        <Icon28LikeOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
                        <div className="indicatorblockIconPost">11</div>
                      </Tappable>
                    </RichTooltip>
                    <Tappable style={{marginLeft: "10px"}} className="blockIconPost">
                      <Icon28CommentOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
                      <div className="indicatorblockIconPost">11</div>
                    </Tappable>
                  </div>
                  <Tappable className="blockIconPost" style={{marginLeft: 10}}>
                    <Icon28GiftOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
                    <div onClick={() => setPage('home', 'gifts')} className="indicatorblockIconPost">Подарок</div>
                  </Tappable>
                </div>
              </div>
            </Group>
              )
            }
            {/*Для всех остальных устройств */}
            {
              (queryGet('vk_platform') === 'mobile_android'
              || queryGet('vk_platform') === 'mobile_iphone'
              || queryGet('vk_platform') === 'mobile_ipad'
              || queryGet('vk_platform') === 'mobile_android_messenger'
              || queryGet('vk_platform') === 'mobile_iphone_messenger'
              || queryGet('vk_platform') === 'mobile_web') && (
              <div>
                <SimpleCell 
                  before={<Avatar size={48} src="" />}
                  badge={<Icon12Verified />}
                  after={<IconButton onClick={() => this.openInteractionAcquaintance2()}><Icon28MoreVertical /></IconButton>}
                  description="вчера в 19:35"
                >
                  Артём Петрунин
                </SimpleCell>
                <Div>Всем привет!</Div>
                <div className="allBlockIconPost">
                  <div style={{display: "flex"}}>
                    <Dropdown
                      action="click"
                      placement="top"
                      style={{margin: "0px 10px"}}
                      content={
                        <div style={{display: "flex"}}>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                        </div>
                      }
                    >
                      <Tappable className="blockIconPost">
                        <Icon28LikeOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
                        <div className="indicatorblockIconPost">11</div>
                      </Tappable>
                    </Dropdown>
                    <Tappable style={{marginLeft: "10px"}} className="blockIconPost">
                      <Icon28CommentOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
                      <div className="indicatorblockIconPost">11</div>
                    </Tappable>
                  </div>
                  <Tappable className="blockIconPost" style={{marginLeft: 10}}>
                    <Icon28GiftOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
                    <div onClick={() => setPage('home', 'gifts')} className="indicatorblockIconPost">Подарок</div>
                  </Tappable>
                </div>
              </div>
              )
            }
            {/*Для ПК */}
            {
					    (queryGet('vk_platform') === 'desktop_web') && (
            <Group>
              <div>
                <SimpleCell 
                  before={<Avatar size={48} src="" />}
                  badge={<Icon12Verified />}
                  after={
                    <RichTooltip
                      action="hover"
                      placement="bottom"
                      content={
                        <div>
                          <CellButton before={<Icon28EditOutline />}>Редактировать запись</CellButton>
                          <CellButton before={<Icon28ShareOutline />}>Поделиться записью</CellButton>
                          <CellButton before={<Icon28DeleteOutline />} mode="danger">Удалить запись</CellButton>
                        </div>
                      }
                    >
                      <IconButton><Icon28MoreVertical /></IconButton>
                    </RichTooltip>
                  }
                  description="вчера в 15:12"
                >
                  Александр Тихонович
                </SimpleCell>
                <Div>Всем привет! Мой первый пост. Как вам этот закат? Пишите комментарии, ставьте лайки. <Link>#Закат</Link> <Link>@VK</Link></Div>
                <Div><img onClick={this.openImg} className="imgPost" src="https://img2.akspic.ru/originals/1/7/1/5/6/165171-zemlya-oblako-atmosfera-poslesvechenie-zakat-1080x1920.jpg" /></Div>
                <div className="allBlockIconPost">
                  <div style={{display: "flex"}}>
                  <RichTooltip
                    action="hover"
                    placement="top"
                    style={{margin: "0px 10px"}}
                    content={
                      <div style={{display: "flex"}}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                      </div>
                    }
                  >
                    <Tappable className="blockIconPost">
                      <Icon28LikeOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
                      <div className="indicatorblockIconPost">11</div>
                    </Tappable>
                  </RichTooltip>
                    <Tappable style={{marginLeft: "10px"}} className="blockIconPost">
                      <Icon28CommentOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
                      <div className="indicatorblockIconPost">11</div>
                    </Tappable>
                  </div>
                  <Tappable className="blockIconPost" style={{marginLeft: 10}}>
                    <Icon28GiftOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
                    <div onClick={() => setPage('home', 'gifts')} className="indicatorblockIconPost">Подарок</div>
                  </Tappable>
                </div>
              </div>
            </Group>
            )
          }
          {/*Для всех остальных устройств */}
          {
            (queryGet('vk_platform') === 'mobile_android'
            || queryGet('vk_platform') === 'mobile_iphone'
            || queryGet('vk_platform') === 'mobile_ipad'
            || queryGet('vk_platform') === 'mobile_android_messenger'
            || queryGet('vk_platform') === 'mobile_iphone_messenger'
            || queryGet('vk_platform') === 'mobile_web') && (
            <div>
              <SimpleCell 
                before={<Avatar size={48} src="" />}
                badge={<Icon12Verified />}
                after={<IconButton onClick={() => this.openInteractionAcquaintance()}><Icon28MoreVertical /></IconButton>}
                description="вчера в 15:12"
              >
                Александр Тихонович
              </SimpleCell>
              <Div>Всем привет! Мой первый пост. Как вам этот закат? Пишите комментарии, ставьте лайки. <Link>#Закат</Link> <Link>@VK</Link></Div>
              <Div><img onClick={this.openImg} className="imgPost" src="https://img2.akspic.ru/originals/1/7/1/5/6/165171-zemlya-oblako-atmosfera-poslesvechenie-zakat-1080x1920.jpg" /></Div>
              <div className="allBlockIconPost">
                <div style={{display: "flex"}}>
                <Dropdown
                  action="click"
                  placement="top"
                  style={{margin: "0px 10px"}}
                  content={
                    <div style={{display: "flex"}}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emojione_1F60E.svg/640px-Emojione_1F60E.svg.png" className="emojiPost" />
                    </div>
                  }
                >
                  <Tappable className="blockIconPost">
                    <Icon28LikeOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
                    <div className="indicatorblockIconPost">11</div>
                  </Tappable>
                </Dropdown>
                  <Tappable style={{marginLeft: "10px"}} className="blockIconPost">
                    <Icon28CommentOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
                    <div className="indicatorblockIconPost">11</div>
                  </Tappable>
                </div>
                <Tappable className="blockIconPost" style={{marginLeft: 10}}>
                  <Icon28GiftOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
                  <div onClick={() => setPage('home', 'gifts')} className="indicatorblockIconPost">Подарок</div>
                </Tappable>
              </div>
            </div>
            )
          }
        </Panel>
    );
  }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanel);
















































/*import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {
    Div, 
    Panel, 
    Alert, 
    Group, 
    Button, 
    PanelHeader,
    ScreenSpinner,
    Snackbar,
    Avatar
} from '@vkontakte/vkui'
import { Icon16Done } from '@vkontakte/icons'
import Chel from '../../../svg/chel.svg'


class HomePanel extends React.Component {

    state = {
        showImg: false
    };

    showImg = () => {
        this.setState({showImg: true});
    };

    openPopout() {
        this.props.openPopout(
            <Alert
                actions={[{
                    title: 'Нет',
                    autoclose: true,
                    mode: 'cancel',
                }, {
                    title: 'Да',
                    autoclose: true,
                    mode: 'destructive',
                    action: this.showImg
                }]}
                onClose={() => this.props.closePopout()}
                header='Вопрос значит'
                text='Вас роняли в детстве?'
            />
        );
    }

    async openSpinner() {
        this.props.openPopout(<ScreenSpinner/>)
        await this.sleep(2500)
        this.props.closePopout()
    }

    openSnackbar() {
        this.props.openPopout(
            <Snackbar
                layout='vertical'
                onClose={() => this.props.closePopout()}
                action='Например кнопка'
                before={<Avatar size={24} style={{ background: 'var(--accent)' }}> <Icon16Done fill='#fff' width={14} height={14}/> </Avatar>}
            >
                Какой-то текст
            </Snackbar>
        );
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    render() {
        const {id, setPage, withoutEpic} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Examples</PanelHeader>
                <Group>
                    <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => setPage('home', 'placeholder')}>Открыть Placeholder</Button>
                    </Div>
                    <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => this.openPopout()}>Открыть алерт</Button>
                    </Div>
                    <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => this.openSpinner()}>Открыть спиннер</Button>
                    </Div>
                    <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => this.openSnackbar()}>Открыть снекбар</Button>
                    </Div>
                    <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                            модальную страницу</Button>
                    </Div>
                    {withoutEpic && <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => setPage('modal', 'filters')}>Открыть модальное окно</Button>
                    </Div>}
                    {this.state.showImg && <Div className='div-center'>
                        <img src={Chel} alt="чел"/>
                    </Div>}
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanel);*/