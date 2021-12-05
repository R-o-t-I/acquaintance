import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {goBack, closeModal, setStory} from "./js/store/router/actions";
import {getActivePanel} from "./js/services/_functions";
import bridge from '@vkontakte/vk-bridge';

import {
  Epic, 
  View, 
  Root, 
  Tabbar, 
  ModalRoot, 
  TabbarItem, 
  ConfigProvider,
  AdaptivityProvider, 
  AppRoot,
  platform,
  VKCOM,
  Cell,
  SplitCol,
  PanelHeader,
  SplitLayout,
  Panel,
  Group,
  Counter,
  SimpleCell,
  Avatar,
  Button,
  Spacing,
  IconButton
} from "@vkontakte/vkui";

import { 
  Icon24Dismiss,
  Icon28AddSquareOutline,
  Icon28MessagesOutline, 
  Icon28Newsfeed, 
  Icon28Profile, 
  Icon28SettingsOutline, 
  Icon28Users3Outline
} from '@vkontakte/icons';

import HomePanel from './js/panels/home/base';
import NotificationsPanel from './js/panels/home/notifications';
import GiftsPanel from './js/panels/home/gifts';
import GiftPanel from './js/panels/home/gift';
import StoryUsersPanel from './js/panels/home/storyUsers';

import PeoplePanel from './js/panels/people/base';
import FilterPanel from './js/panels/people/filter';

import AddPanel from './js/panels/add/base';

import ChatPanel from './js/panels/chat/base';

import ProfilePanel from './js/panels/profile/base';
import SettingsPanel from './js/panels/profile/settings';
import UserProfilePanel from './js/panels/profile/userProfile';
import EditProfilePanel from './js/panels/profile/editProfile';

import HomeGiftsModal from './js/components/modals/HomeGiftsModal';

var infouser = 0
var first_name = 'Загрузка...'
var last_name
var user_id
var photo

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasHeader: true,
      isDesktop: false,
      Platform: platform(),
      first_name: first_name,
			last_name: last_name,
			user_id: user_id,
      photo: photo
    }

    this.lastAndroidBackAction = 0;
  }

  async componentDidMount() {
    const {goBack} = this.props;

    let parsedUrl = new URL(window.location.href)
    if (parsedUrl.searchParams.get('vk_platform') === 'desktop_web') {
      this.setState({ 
        isDesktop: true,
        hasHeader: false,
        Platform: VKCOM
      })
    }
    if (infouser === 0) {
			this.getInfoUser();
		}

    window.onpopstate = () => {
      let timeNow = +new Date();

      if (timeNow - this.lastAndroidBackAction > 500) {
        this.lastAndroidBackAction = timeNow;

        goBack();
      } else {
        window.history.pushState(null, null);
      }
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {activeView, activeStory, activePanel, scrollPosition} = this.props;

    if (
      prevProps.activeView !== activeView ||
      prevProps.activePanel !== activePanel ||
      prevProps.activeStory !== activeStory
    ) {
      let pageScrollPosition = scrollPosition[activeStory + "_" + activeView + "_" + activePanel] || 0;

      window.scroll(0, pageScrollPosition);
    }
  }

	async getInfoUser() {
		//this.props.openPopout(<ScreenSpinner/>)

		let user_info = await bridge.send('VKWebAppGetUserInfo');
		first_name = user_info.first_name
		last_name = user_info.last_name
		photo = user_info.photo_200
		user_id = user_info.id
		this.setState({
      first_name: first_name,
			last_name: last_name,
			user_id: user_id,
			photo: photo,
		});
		infouser = 1
	}

  render() {
    const {goBack, setStory, closeModal, popouts, activeView, activeStory, activeModals, panelsHistory} = this.props;
    const { isDesktop, hasHeader, Platform, photo, first_name, last_name, user_id } = this.state

    let history = (panelsHistory[activeView] === undefined) ? [activeView] : panelsHistory[activeView];
    let popout = (popouts[activeView] === undefined) ? null : popouts[activeView];
    let activeModal = (activeModals[activeView] === undefined) ? null : activeModals[activeView];

    const homeModals = (
      <ModalRoot activeModal={activeModal}>
        <HomeGiftsModal
          id="MODAL_PAGE_GIFTS_HOME"
          onClose={() => closeModal()}
        />
      </ModalRoot>
    );

    return (     
      <ConfigProvider platform={Platform} isWebView={true} webviewType='internal'>
        <AdaptivityProvider>
          <AppRoot>
            <SplitLayout
              header={hasHeader && <PanelHeader separator={false} />}
              style={{ justifyContent: "center" }}
            >
              <SplitCol
                animate={!isDesktop}
                spaced={isDesktop}
                width={isDesktop ? '700px' : '100%'}
                maxWidth={isDesktop ? '700px' : '100%'}
              >   
                <Epic activeStory={activeStory} tabbar={ !isDesktop && 
                <Tabbar>
                  <TabbarItem
                    onClick={() => setStory('home', 'base')}
                    selected={activeStory === 'home'}
                    text='Лента'
                  >
                    <Icon28Newsfeed/>
                  </TabbarItem>
                  <TabbarItem
                    onClick={() => setStory('people', 'base')}
                    selected={activeStory === 'people'}
                    text='Люди'
                  >
                    <Icon28Users3Outline/>
                  </TabbarItem>
                  <TabbarItem
                    onClick={() => setStory('add', 'base')}
                    selected={activeStory === 'add'}
                    text='Добавить'
                  >
                    <Icon28AddSquareOutline/>
                  </TabbarItem>
                  <TabbarItem
                    onClick={() => setStory('chat', 'base')}
                    selected={activeStory === 'chat'}
                    text='Сообщения'
                    label='2'
                  >
                    <Icon28MessagesOutline/>
                  </TabbarItem>
                  <TabbarItem
                    onClick={() => setStory('profile', 'base')}
                    selected={activeStory === 'profile'}
                    text='Профиль'
                  >
                    <Avatar style={activeStory === 'profile' ? {outline: '1px solid var(--tabbar_active_icon)', outlineOffset: '1px'} : {}} size={28} src={photo} />
                  </TabbarItem>
                </Tabbar>}>
                  <Root id="home" activeView={activeView} popout={popout}>
                    <View
                      id="home"
                      modal={homeModals}
                      activePanel={getActivePanel("home")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <HomePanel id="base" withoutEpic={false} platform={Platform}/>
                      <NotificationsPanel id="notifications" platform={Platform}/>
                      <GiftPanel id="gift" platform={Platform}/>
                      <GiftsPanel id="gifts" platform={Platform}/>
                      <UserProfilePanel id="userProfile" withoutEpic={false} platform={Platform}/>
                      <StoryUsersPanel id="storyUsers" withoutEpic={false} platform={Platform}/>
                    </View>
                  </Root>
                  <Root id="people" activeView={activeView} popout={popout}>
                    <View
                      id="people"
                      modal={homeModals}
                      activePanel={getActivePanel("people")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <PeoplePanel id="base" withoutEpic={false} platform={Platform}/>
                      <FilterPanel id="filter" withoutEpic={false} platform={Platform}/>
                    </View>
                  </Root>
                  <Root id="add" activeView={activeView} popout={popout}>
                    <View
                      id="add"
                      modal={homeModals}
                      activePanel={getActivePanel("add")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <AddPanel id="base" withoutEpic={false}/>
                    </View>
                  </Root>
                  <Root id="chat" activeView={activeView} popout={popout}>
                    <View
                      id="chat"
                      modal={homeModals}
                      activePanel={getActivePanel("chat")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <ChatPanel id="base" withoutEpic={false}/>
                    </View>
                  </Root>
                  <Root id="profile" activeView={activeView} popout={popout}>
                    <View
                      id="profile"
                      modal={homeModals}
                      activePanel={getActivePanel("profile")}
                      history={history}
                      onSwipeBack={() => goBack()}
                    >
                      <ProfilePanel id="base" withoutEpic={false} platform={Platform}/>
                      <SettingsPanel id="settings" withoutEpic={false} platform={Platform}/>
                      <UserProfilePanel id="userProfile" withoutEpic={false} platform={Platform}/>
                      <EditProfilePanel id="editProfile" withoutEpic={false} platform={Platform}/>
                    </View>
                  </Root>
                </Epic>
              </SplitCol>

              {isDesktop && (
                <SplitCol fixed width='250px' maxWidth='250px'>
                  <Panel id='menuDesktop'>
                    {hasHeader && <PanelHeader/>}
                    <Group>
                      <Cell
                        onClick={() => setStory('profile', 'base')}
                        disabled={activeStory === 'profile'}
                        before={<Avatar style={activeStory === 'profile' ? {outline: '2px solid var(--tabbar_active_icon)', outlineOffset: '2px'} : {}} size={28} src={photo} />}
                        style={ activeStory === 'profile' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Профиль
                      </Cell>
                      <Spacing separator="center" />
                      <Cell
                        onClick={() => setStory('home', 'base')}
                        disabled={activeStory === 'home'}
                        before={<Icon28Newsfeed/>}
                        style={ activeStory === 'home' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Лента
                      </Cell>
                      <Cell
                        onClick={() => setStory('people', 'base')}
                        disabled={activeStory === 'people'}
                        before={<Icon28Users3Outline/>}
                        style={ activeStory === 'people' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Люди
                      </Cell>
                      <Cell
                        onClick={() => setStory('chat', 'base')}
                        disabled={activeStory === 'chat'}
                        before={<Icon28MessagesOutline/>}
                        indicator={<Counter mode="primary">2</Counter>}
                        style={ activeStory === 'chat' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Сообщения
                      </Cell>
                    </Group>
                    <Group>
                      <Cell
                        onClick={() => setStory('add', 'base')}
                        disabled={activeStory === 'add'}
                        before={<Icon28AddSquareOutline/>}
                        style={ activeStory === 'add' ? {
                          backgroundColor: 'var(--button_secondary_background)',
                          borderRadius: 8
                        } : {}}
                      >
                        Добавить запись
                      </Cell>
                    </Group>
                    <Group header={<div style={{color: "var(--text_secondary)", fontSize: "13px", fontWeight: "400"}}><div style={{display: "flex"}}><div style={{marginTop: "auto", marginBottom: "auto"}}>Реклама 14+</div><div style={{marginLeft: "auto"}}><Icon24Dismiss /></div></div></div>}>
                      <SimpleCell
                        before={<Avatar mode="app" size={48} src="" />}
                        description="vk.com"
                        style={{padding: "0px 0px"}}
                        disabled
                        multiline
                      >
                        <div className="addBanner">Заголовок sfdfsdf sfsdfs ddfsdfds Заголовок sfdfsdf sfsdfs ddfsdfds Заголовок sfdfsdf sfsdfs ddfsdfds</div>
                      </SimpleCell>
                      <Button style={{marginTop: 5}} stretched mode="outline">Перейти</Button>
                    </Group>
                  </Panel>
                </SplitCol>
              )}
              
            </SplitLayout>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeView: state.router.activeView,
    activeStory: state.router.activeStory,
    panelsHistory: state.router.panelsHistory,
    activeModals: state.router.activeModals,
    popouts: state.router.popouts,
    scrollPosition: state.router.scrollPosition,
  };
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({setStory, goBack, closeModal}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);