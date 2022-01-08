import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  goBack,
  closeModal,
  setStory,
  openPopout,
  closePopout,
  setPage,
} from "./js/store/router/actions";
import { getActivePanel } from "./js/services/_functions";
import bridge from "@vkontakte/vk-bridge";
import queryGet from "./functions/query_get.jsx";

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
  IconButton,
  Alert,
  Div,
  FixedLayout,
  Search,
  Link,
  List,
  Tappable,
  Switch,
  ActionSheet,
  ActionSheetItem,
} from "@vkontakte/vkui";

import {
  Icon12Dropdown,
  Icon12Verified,
  Icon24Dismiss,
  Icon28AddCircleFillBlue,
  Icon28AddCircleOutline,
  Icon28AddSquareOutline,
  Icon28CoinsOutline,
  Icon28DonateOutline,
  Icon28DoorArrowRightOutline,
  Icon28ListAddOutline,
  Icon28LiveAddOutline,
  Icon28MessagesOutline,
  Icon28MoonOutline,
  Icon28Newsfeed,
  Icon28Notifications,
  Icon28Profile,
  Icon28SettingsOutline,
  Icon28StoryAddOutline,
  Icon28Users3Outline,
  Icon28WriteSquareOutline,
} from "@vkontakte/icons";

import LoginPanel from "./js/panels/profile/login";
import RegistrationPanel from "./js/panels/profile/registration";

import HomePanel from "./js/panels/home/base";
import NotificationsPanel from "./js/panels/home/notifications";
import GiftsPanel from "./js/panels/home/gifts";
import GiftPanel from "./js/panels/home/gift";
import StoryUsersPanel from "./js/panels/home/storyUsers";

import PeoplePanel from "./js/panels/people/base";
import FilterPanel from "./js/panels/people/filter";

import AddPanel from "./js/panels/add/base";

import AddArticlesPanels from "./js/panels/addArticles/base";

import ChatPanel from "./js/panels/chat/base";
import TestChatPanel from "./js/panels/chat/testChat";

import ProfilePanel from "./js/panels/profile/base";
import SettingsPanel from "./js/panels/profile/settings";
import UserProfilePanel from "./js/panels/profile/userProfile";
import EditProfilePanel from "./js/panels/profile/editProfile";
import BlockPostPanel from "./js/panels/profile/settings/blockPost";
import BlockUsersPanel from "./js/panels/profile/settings/blockUsers";
import HiddenPhotosPanel from "./js/panels/profile/settings/hiddenPhotos";
import PremiumPanel from "./js/panels/profile/settings/premium";
import PrivacyPanel from "./js/panels/profile/settings/privacy";
import SettingsNotificationsPanel from "./js/panels/profile/settings/settingsNotifications";

import HomeGiftsModal from "./js/components/modals/HomeGiftsModal";
import ArticlesModal from "./js/components/modals/ArticlesModal";
import PublicationModal from "./js/components/modals/PublicationModal";

import noUserImage from "./img/noUserImage.jpeg";
import logo from "./img/logo.svg";
import { Dropdown } from "@vkontakte/vkui/dist/unstable";

var infouser = 0;
var first_name = "Загрузка...";
var last_name;
var user_id;
var photo = noUserImage;

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
      photo: photo,
    };

    this.lastAndroidBackAction = 0;
  }

  async componentDidMount() {
    const { goBack } = this.props;

    let parsedUrl = new URL(window.location.href);
    if (parsedUrl.searchParams.get("vk_platform") === "desktop_web") {
      this.setState({
        isDesktop: true,
        hasHeader: false,
        Platform: VKCOM,
      });
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
    const { activeView, activeStory, activePanel, scrollPosition } = this.props;

    if (
      prevProps.activeView !== activeView ||
      prevProps.activePanel !== activePanel ||
      prevProps.activeStory !== activeStory
    ) {
      let pageScrollPosition =
        scrollPosition[activeStory + "_" + activeView + "_" + activePanel] || 0;

      window.scroll(0, pageScrollPosition);
    }
  }

  async getInfoUser() {
    //this.props.openPopout(<ScreenSpinner/>)

    let user_info = await bridge.send("VKWebAppGetUserInfo");
    first_name = user_info.first_name;
    last_name = user_info.last_name;
    photo = user_info.photo_200;
    user_id = user_info.id;
    this.setState({
      first_name: first_name,
      last_name: last_name,
      user_id: user_id,
      photo: photo,
    });
    infouser = 1;
  }

  openExetPopout() {
    this.props.openPopout(
      <Alert
        actions={[
          {
            title: "Нет",
            autoclose: true,
            mode: "cancel",
          },
          {
            title: "Да",
            autoclose: true,
            mode: "destructive",
          },
        ]}
        onClose={() => this.props.closePopout()}
        header="Выход"
        text="Вы действительно хотите выйти из своего профиля?"
      />
    );
  }

  openAdd() {
    const { setStory, activeStory } = this.props;
    this.props.openPopout(
      <ActionSheet
        onClose={() => this.props.closePopout()}
        iosCloseItem={
          <ActionSheetItem autoclose mode="cancel">
            Отменить
          </ActionSheetItem>
        }
        //toggleRef={this.targetRef.current}
      >
        <ActionSheetItem
          autoclose
          before={<Icon28WriteSquareOutline />}
          onClick={() => setStory("add", "base")}
          selected={activeStory === "add"}
          multiline
        >
          Добавить запись
        </ActionSheetItem>
        <ActionSheetItem
          autoclose
          before={<Icon28ListAddOutline />}
          onClick={() => setStory("addArticles", "base")}
          selected={activeStory === "addArticles"}
          multiline
        >
          Добавить статью
        </ActionSheetItem>
        <ActionSheetItem autoclose before={<Icon28StoryAddOutline />} multiline>
          Добавить историю
        </ActionSheetItem>
        <ActionSheetItem autoclose before={<Icon28LiveAddOutline />} multiline>
          Начать трансляцию
        </ActionSheetItem>
      </ActionSheet>
    );
  }

  render() {
    const {
      goBack,
      setStory,
      closeModal,
      popouts,
      activeView,
      activeStory,
      activeModals,
      panelsHistory,
      openPopout,
      closePopout,
      setPage,
    } = this.props;
    const {
      isDesktop,
      hasHeader,
      Platform,
      photo,
      first_name,
      last_name,
      user_id,
    } = this.state;

    let history =
      panelsHistory[activeView] === undefined
        ? [activeView]
        : panelsHistory[activeView];
    let popout = popouts[activeView] === undefined ? null : popouts[activeView];
    let activeModal =
      activeModals[activeView] === undefined ? null : activeModals[activeView];

    const homeModals = (
      <ModalRoot activeModal={activeModal}>
        <HomeGiftsModal
          id="MODAL_PAGE_GIFTS_HOME"
          onClose={() => closeModal()}
        />
        <ArticlesModal
          id="MODAL_PAGE_ARTICLES"
          onClose={() => closeModal()}
          dynamicContentHeight
        />
        <PublicationModal
          id="MODAL_PAGE_PUBLICATION"
          onClose={() => closeModal()}
          dynamicContentHeight
        />
      </ModalRoot>
    );

    return (
      <ConfigProvider
        platform={Platform}
        isWebView={true}
        webviewType="internal"
      >
        <AdaptivityProvider>
          <AppRoot>
            {/*Для ПК */}
            {queryGet("vk_platform") === "desktop_web" && (
              <div>
                <FixedLayout vertical="top" className="pageHeader">
                  <div className="pageHeaderBlock">
                    <img
                      className="pageHeaderLogo"
                      src={logo}
                      onClick={() => setStory("home", "base")}
                      disabled={activeStory === "home"}
                    />
                    <Search
                      style={{
                        width: "250px",
                        marginLeft: "12px",
                        marginRight: "12px",
                      }}
                    />
                    <Dropdown
                      className="dropdownNotifications"
                      placement="bottom-start"
                      content={
                        <div
                          style={{ marginBottom: "40px", marginTop: "40px" }}
                        >
                          <FixedLayout vertical="top">
                            <div className="titleDropdownNotifications">
                              <div style={{ display: "flex" }}>
                                <div
                                  style={{
                                    marginLeft: "12px",
                                    marginRight: "auto",
                                  }}
                                >
                                  <b>Уведомления</b>
                                </div>
                                <div
                                  style={{
                                    marginLeft: "auto",
                                    marginRight: "12px",
                                    color: "var(--accent)",
                                  }}
                                >
                                  Настройки
                                </div>
                              </div>
                            </div>
                          </FixedLayout>
                          <Spacing separator="center" size={1} />
                          <SimpleCell
                            before={
                              <Avatar
                                size={48}
                                style={{ objectFit: "cover" }}
                                className="avatar-for-notifications"
                                src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album"
                              />
                            }
                            description="25 мая 2021, 01:14"
                            disabled
                            multiline
                          >
                            <div className="text-notifications">
                              <Link>Артём Петрунин</Link> подписался на Ваш
                              профиль подписался на Ваш профиль подписался на
                              Ваш профиль подписался на Ваш профиль подписался
                              на Ваш профиль подписался на Ваш профиль
                            </div>
                          </SimpleCell>
                          <SimpleCell
                            before={
                              <Avatar
                                size={48}
                                style={{ objectFit: "cover" }}
                                className="avatar-for-notifications"
                                src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album"
                              />
                            }
                            description="25 мая 2021, 01:14"
                            disabled
                            multiline
                          >
                            <div className="text-notifications">
                              <Link>Артём Петрунин</Link> подписался на Ваш
                              профиль подписался на Ваш профиль подписался на
                              Ваш профиль подписался на Ваш профиль подписался
                              на Ваш профиль подписался на Ваш профиль
                            </div>
                          </SimpleCell>
                          <SimpleCell
                            before={
                              <Avatar
                                size={48}
                                style={{ objectFit: "cover" }}
                                className="avatar-for-notifications"
                                src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album"
                              />
                            }
                            description="25 мая 2021, 01:14"
                            disabled
                            multiline
                          >
                            <div className="text-notifications">
                              <Link>Артём Петрунин</Link> подписался на Ваш
                              профиль подписался на Ваш профиль подписался на
                              Ваш профиль подписался на Ваш профиль подписался
                              на Ваш профиль подписался на Ваш профиль
                            </div>
                          </SimpleCell>
                          <FixedLayout
                            onClick={() => setPage("home", "notifications")}
                            vertical="bottom"
                            style={{
                              textAlign: "center",
                              color: "var(--accent)",
                            }}
                          >
                            <div className="allDropdownNotifications">
                              Показать все
                            </div>
                          </FixedLayout>
                        </div>
                      }
                    >
                      <IconButton
                        style={{
                          marginTop: "auto",
                          marginBottom: "auto",
                          position: "relative",
                        }}
                      >
                        <Icon28Notifications
                          style={{ color: "var(--header_text_secondary)" }}
                        />
                        <span className="badgeIconNotifications">
                          <span className="textBadgeIconNotifications">21</span>
                        </span>
                      </IconButton>
                    </Dropdown>
                    <div className="pageHeaderButton">
                      {/*<Cell
                    onClick={() => setStory('profile', 'base')}
                    disabled={activeStory === 'profile'}
                    before={<Avatar style={activeStory === 'profile' ? {outline: '2px solid var(--tabbar_active_icon)', outlineOffset: '2px'} : {}} size={30} src={photo} />}
                    style={ activeStory === 'profile' ? {
                      backgroundColor: 'var(--button_secondary_background)',
                      borderRadius: 8,
                      marginBottom: "auto",
                      marginTop: "auto",
                      marginLeft: "8px",
                      width: "190px"
                    } : {
                      marginBottom: "auto",
                      marginTop: "auto",
                      marginLeft: "8px",
                      width: "190px"
                    }}
                  >
                    Профиль
                  </Cell>
                  <IconButton style={{marginLeft: "auto", marginRight: "8px", marginTop: "auto", marginBottom: "auto", color: "var(--accent)"}} onClick={() => this.openExetPopout()}><Icon28DoorArrowRightOutline /></IconButton>
                  */}
                      <Dropdown
                        className="dropdownProfile"
                        placement="bottom-end"
                        content={
                          <div>
                            <div className="dropdownProfileBlock">
                              <SimpleCell
                                before={<Avatar size={48} src={photo} />}
                                badge={<Icon12Verified />}
                                //after={<IconButton><Icon28MessageOutline /></IconButton>}
                                description="@Alexander"
                              >
                                {first_name} {last_name}
                              </SimpleCell>
                              <Spacing separator="bottom" size={1} />
                              <div className="infiDropdownProfileBlock">
                                <Tappable className="tappableInfiDropdownProfileBlock">
                                  <div className="blockTappableInfiDropdownProfileBlock">
                                    <div className="paddingBlockTappableInfiDropdownProfileBlock">
                                      <div className="titleInfiDropdownProfileBlock">
                                        Баланс
                                      </div>
                                      <div className="descriptionInfiDropdownProfileBlock">
                                        150
                                      </div>
                                    </div>
                                    <div className="blockIconDropdownNotifications">
                                      <Icon28CoinsOutline className="iconDropdownNotifications" />
                                    </div>
                                  </div>
                                </Tappable>
                                <div className="separatorDropdownProfileBlock" />
                                <Tappable className="tappableInfiDropdownProfileBlock">
                                  <div className="blockTappableInfiDropdownProfileBlock">
                                    <div className="paddingBlockTappableInfiDropdownProfileBlock">
                                      <div className="titleInfiDropdownProfileBlock">
                                        Подписка
                                      </div>
                                      <div className="descriptionInfiDropdownProfileBlock">
                                        активировать
                                      </div>
                                    </div>
                                    <div className="blockIconDropdownNotifications">
                                      <Icon28DonateOutline className="iconDropdownNotifications" />
                                    </div>
                                  </div>
                                </Tappable>
                              </div>
                            </div>
                            <List>
                              <Cell
                                disabled
                                before={
                                  <Icon28MoonOutline width={24} height={24} />
                                }
                                after={<Switch />}
                              >
                                Темная тема
                              </Cell>
                              <Cell
                                expandable
                                before={
                                  <Icon28SettingsOutline
                                    width={24}
                                    height={24}
                                  />
                                }
                              >
                                Настройки
                              </Cell>
                              <Cell
                                onClick={() => this.openExetPopout()}
                                expandable
                                before={
                                  <Icon28DoorArrowRightOutline
                                    width={24}
                                    height={24}
                                  />
                                }
                              >
                                Выход
                              </Cell>
                            </List>
                          </div>
                        }
                      >
                        <div
                          style={{
                            position: "absolute",
                            display: "flex",
                            right: 0,
                            marginTop: "10px",
                          }}
                        >
                          <Avatar
                            size={30}
                            src={photo}
                            style={{
                              marginTop: "auto",
                              marginBottom: "auto",
                              marginRight: "5px",
                            }}
                          />
                          <Icon12Dropdown
                            style={{
                              marginTop: "auto",
                              marginBottom: "auto",
                              marginRight: "12px",
                              color: "var(--header_text_secondary)",
                            }}
                          />
                        </div>
                      </Dropdown>
                    </div>
                  </div>
                </FixedLayout>
                <SplitLayout
                  header={hasHeader && <PanelHeader separator={false} />}
                  style={{ justifyContent: "center", marginTop: "66px" }}
                >
                  <SplitCol
                    animate={!isDesktop}
                    spaced={0}
                    width={isDesktop ? "734px" : "100%"}
                    maxWidth={isDesktop ? "734px" : "100%"}
                  >
                    <Root id="home" activeView={activeView} popout={popout}>
                      <View
                        id="home"
                        modal={homeModals}
                        activePanel={getActivePanel("home")}
                        history={history}
                        onSwipeBack={() => goBack()}
                      >
                        <HomePanel
                          id="base"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <NotificationsPanel
                          id="notifications"
                          platform={Platform}
                        />
                        <GiftPanel id="gift" platform={Platform} />
                        <GiftsPanel id="gifts" platform={Platform} />
                        <UserProfilePanel
                          id="userProfile"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <StoryUsersPanel
                          id="storyUsers"
                          withoutEpic={false}
                          platform={Platform}
                        />
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
                        <PeoplePanel
                          id="base"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <FilterPanel
                          id="filter"
                          withoutEpic={false}
                          platform={Platform}
                        />
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
                        <AddPanel
                          id="base"
                          withoutEpic={false}
                          platform={Platform}
                        />
                      </View>
                    </Root>
                    <Root
                      id="addArticles"
                      activeView={activeView}
                      popout={popout}
                    >
                      <View
                        id="addArticles"
                        modal={homeModals}
                        activePanel={getActivePanel("addArticles")}
                        history={history}
                        onSwipeBack={() => goBack()}
                      >
                        <AddArticlesPanels
                          id="base"
                          withoutEpic={false}
                          platform={Platform}
                        />
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
                        <ChatPanel
                          id="base"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <TestChatPanel
                          id="testChat"
                          withoutEpic={false}
                          platform={Platform}
                        />
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
                        <ProfilePanel
                          id="base"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <SettingsPanel
                          id="settings"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <UserProfilePanel
                          id="userProfile"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <EditProfilePanel
                          id="editProfile"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <LoginPanel
                          id="login"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <RegistrationPanel
                          id="registration"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <BlockPostPanel
                          id="blockPost"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <BlockUsersPanel
                          id="blockUsers"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <HiddenPhotosPanel
                          id="hiddenPhotos"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <PremiumPanel
                          id="premium"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <PrivacyPanel
                          id="privacy"
                          withoutEpic={false}
                          platform={Platform}
                        />
                        <SettingsNotificationsPanel
                          id="settingsNotifications"
                          withoutEpic={false}
                          platform={Platform}
                        />
                      </View>
                    </Root>
                  </SplitCol>

                  {isDesktop && (
                    <SplitCol
                      fixed
                      width="250px"
                      maxWidth="250px"
                      style={{ marginLeft: "16px" }}
                    >
                      <Panel id="menuDesktop">
                        {hasHeader && <PanelHeader />}
                        <Group>
                          <Cell
                            //after={<IconButton onClick={() => this.openExetPopout()}><Icon28DoorArrowRightOutline /></IconButton>}
                            onClick={() => setStory("profile", "base")}
                            disabled={activeStory === "profile"}
                            before={
                              <Avatar
                                style={
                                  activeStory === "profile"
                                    ? {
                                        outline:
                                          "1px solid var(--tabbar_active_icon)",
                                        outlineOffset: "1px",
                                      }
                                    : {}
                                }
                                size={40}
                                src={photo}
                              />
                            }
                            description="@Alexander"
                            style={
                              activeStory === "profile"
                                ? {
                                    backgroundColor:
                                      "var(--button_secondary_background)",
                                    borderRadius: 8,
                                  }
                                : {}
                            }
                          >
                            Профиль
                          </Cell>
                          <Spacing separator="center" />
                          <Cell
                            onClick={() => setStory("home", "base")}
                            disabled={activeStory === "home"}
                            before={<Icon28Newsfeed />}
                            style={
                              activeStory === "home"
                                ? {
                                    backgroundColor:
                                      "var(--button_secondary_background)",
                                    borderRadius: 8,
                                  }
                                : {}
                            }
                          >
                            Лента
                          </Cell>
                          <Cell
                            onClick={() => setStory("people", "base")}
                            disabled={activeStory === "people"}
                            before={<Icon28Users3Outline />}
                            style={
                              activeStory === "people"
                                ? {
                                    backgroundColor:
                                      "var(--button_secondary_background)",
                                    borderRadius: 8,
                                  }
                                : {}
                            }
                          >
                            Люди
                          </Cell>
                          <Cell
                            onClick={() => setStory("chat", "base")}
                            disabled={activeStory === "chat"}
                            before={<Icon28MessagesOutline />}
                            indicator={<Counter mode="primary">2</Counter>}
                            style={
                              activeStory === "chat"
                                ? {
                                    backgroundColor:
                                      "var(--button_secondary_background)",
                                    borderRadius: 8,
                                  }
                                : {}
                            }
                          >
                            Сообщения
                          </Cell>
                        </Group>
                        <Group>
                          <Cell
                            onClick={() => setStory("add", "base")}
                            disabled={activeStory === "add"}
                            before={<Icon28WriteSquareOutline />}
                            style={
                              activeStory === "add"
                                ? {
                                    backgroundColor:
                                      "var(--button_secondary_background)",
                                    borderRadius: 8,
                                  }
                                : {}
                            }
                          >
                            Добавить запись
                          </Cell>
                          <Cell
                            onClick={() => setStory("addArticles", "base")}
                            disabled={activeStory === "addArticles"}
                            before={<Icon28ListAddOutline />}
                            style={
                              activeStory === "addArticles"
                                ? {
                                    backgroundColor:
                                      "var(--button_secondary_background)",
                                    borderRadius: 8,
                                  }
                                : {}
                            }
                          >
                            Добавить статью
                          </Cell>
                          <Cell before={<Icon28StoryAddOutline />}>
                            Добавить историю
                          </Cell>
                          <Cell before={<Icon28LiveAddOutline />}>
                            Начать трансляцию
                          </Cell>
                        </Group>
                        <Group
                          header={
                            <div
                              style={{
                                color: "var(--text_secondary)",
                                fontSize: "13px",
                                fontWeight: "400",
                              }}
                            >
                              <div style={{ display: "flex" }}>
                                <div
                                  style={{
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                  }}
                                >
                                  Реклама 14-
                                </div>
                                <div style={{ marginLeft: "auto" }}>
                                  <Icon24Dismiss />
                                </div>
                              </div>
                            </div>
                          }
                        >
                          <SimpleCell
                            before={
                              <Avatar
                                mode="app"
                                size={48}
                                src="https://sun1.velcom-by-minsk.userapi.com/impf/J9AmB7_riFnki1tfihu06XPPn8IO-rGw-Z__qw/Quyrfsx1Gx0.jpg?size=1280x1280&quality=96&sign=78b03afcf712d777caa0ecd0a1bcd0b2&type=album"
                              />
                            }
                            description="vk.com/clips"
                            style={{ padding: "0px 0px" }}
                            disabled
                            multiline
                          >
                            <div className="addBanner">Клипы ВКонтакте</div>
                          </SimpleCell>
                          <Button
                            style={{ marginTop: 5 }}
                            stretched
                            mode="outline"
                          >
                            Смотреть
                          </Button>
                        </Group>
                      </Panel>
                    </SplitCol>
                  )}
                </SplitLayout>
              </div>
            )}
            {/*Для всех остальных устройств */}
            {(queryGet("vk_platform") === "mobile_android" ||
              queryGet("vk_platform") === "mobile_iphone" ||
              queryGet("vk_platform") === "mobile_android_messenger" ||
              queryGet("vk_platform") === "mobile_iphone_messenger" ||
              queryGet("vk_platform") === "mobile_web") && (
              <Epic
                activeStory={activeStory}
                tabbar={
                  !isDesktop && (
                    <Tabbar>
                      <TabbarItem
                        onClick={() => setStory("home", "base")}
                        selected={activeStory === "home"}
                        text="Лента"
                      >
                        <Icon28Newsfeed />
                      </TabbarItem>
                      <TabbarItem
                        onClick={() => setStory("people", "base")}
                        selected={activeStory === "people"}
                        text="Люди"
                      >
                        <Icon28Users3Outline />
                      </TabbarItem>
                      <TabbarItem
                        onClick={() => this.openAdd()}
                        //onClick={() => setStory('add', 'base')}
                        //selected={activeStory === 'add'}
                        //text='Добавить'
                      >
                        <Icon28AddCircleFillBlue width={40} height={40} />
                      </TabbarItem>
                      <TabbarItem
                        onClick={() => setStory("chat", "base")}
                        selected={activeStory === "chat"}
                        text="Сообщения"
                        label="2"
                      >
                        <Icon28MessagesOutline />
                      </TabbarItem>
                      <TabbarItem
                        onClick={() => setStory("profile", "base")}
                        selected={activeStory === "profile"}
                        text="Профиль"
                      >
                        <Avatar
                          style={
                            activeStory === "profile"
                              ? {
                                  outline:
                                    "1px solid var(--tabbar_active_icon)",
                                  outlineOffset: "1px",
                                }
                              : {}
                          }
                          size={28}
                          src={photo}
                        />
                      </TabbarItem>
                    </Tabbar>
                  )
                }
              >
                <Root id="home" activeView={activeView} popout={popout}>
                  <View
                    id="home"
                    modal={homeModals}
                    activePanel={getActivePanel("home")}
                    history={history}
                    onSwipeBack={() => goBack()}
                  >
                    <HomePanel
                      id="base"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <NotificationsPanel
                      id="notifications"
                      platform={Platform}
                    />
                    <GiftPanel id="gift" platform={Platform} />
                    <GiftsPanel id="gifts" platform={Platform} />
                    <UserProfilePanel
                      id="userProfile"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <StoryUsersPanel
                      id="storyUsers"
                      withoutEpic={false}
                      platform={Platform}
                    />
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
                    <PeoplePanel
                      id="base"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <FilterPanel
                      id="filter"
                      withoutEpic={false}
                      platform={Platform}
                    />
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
                    <AddPanel id="base" withoutEpic={false} />
                  </View>
                </Root>
                <Root id="addArticles" activeView={activeView} popout={popout}>
                  <View
                    id="addArticles"
                    modal={homeModals}
                    activePanel={getActivePanel("addArticles")}
                    history={history}
                    onSwipeBack={() => goBack()}
                  >
                    <AddArticlesPanels id="base" withoutEpic={false} />
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
                    <ChatPanel id="base" withoutEpic={false} />
                    <TestChatPanel
                      id="testChat"
                      withoutEpic={false}
                      platform={Platform}
                    />
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
                    <ProfilePanel
                      id="base"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <SettingsPanel
                      id="settings"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <UserProfilePanel
                      id="userProfile"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <EditProfilePanel
                      id="editProfile"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <LoginPanel
                      id="login"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <RegistrationPanel
                      id="registration"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <BlockPostPanel
                      id="blockPost"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <BlockUsersPanel
                      id="blockUsers"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <HiddenPhotosPanel
                      id="hiddenPhotos"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <PremiumPanel
                      id="premium"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <PrivacyPanel
                      id="privacy"
                      withoutEpic={false}
                      platform={Platform}
                    />
                    <SettingsNotificationsPanel
                      id="settingsNotifications"
                      withoutEpic={false}
                      platform={Platform}
                    />
                  </View>
                </Root>
              </Epic>
            )}
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
    ...bindActionCreators(
      { setStory, goBack, closeModal, openPopout, closePopout, setPage },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
