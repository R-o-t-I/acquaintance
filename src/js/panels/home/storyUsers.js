import React, { Fragment } from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../store/router/actions";

import {
  Panel,
	PanelHeader,
  PanelHeaderButton,
  PanelHeaderContent,
  PanelHeaderContext,
  List,
  CellButton,
  Avatar,
  WriteBar,
  WriteBarIcon,
  Progress,
  Div,
  VKCOM
} from "@vkontakte/vkui";

import { Dropdown, RichTooltip } from '@vkontakte/vkui/dist/unstable';
import '@vkontakte/vkui/dist/unstable.css' // CSS достаточно подключить один раз 

import {
  Icon16Dropdown,
  Icon28CancelOutline,
  Icon28GiftOutline,
  Icon28HideOutline,
  Icon28LikeOutline,
  Icon28Profile,
  Icon28ReportOutline,
  Icon28ShareOutline,
  Icon28SmileOutline
} from '@vkontakte/icons';

import bridge from '@vkontakte/vk-bridge';

class StoryUsersPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          contextOpened: false
        };
        this.toggleContext = this.toggleContext.bind(this);
    }

    toggleContext () {
      this.setState({ contextOpened: !this.state.contextOpened });
    }

    render() {
        const {id, setPage, goBack, platform} = this.props;

        return (
            <Panel id={id}>
              <PanelHeader
                separator={false}
                left={<PanelHeaderButton onClick={() => goBack()}><Icon28CancelOutline/></PanelHeaderButton>}
                className="panelHeaderMini"
              >
                <PanelHeaderContent
                  status="был сегодня, в 18:46"
                  before={<Avatar style={{objectFit: "cover"}} size={36} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                  aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
                  onClick={this.toggleContext}
                >
                  Артём Петрунин
                </PanelHeaderContent>
              </PanelHeader>
              <PanelHeaderContext className="panelHeaderMini" className={platform === VKCOM ? 'panelHeaderMiniPC' : undefined} opened={this.state.contextOpened} onClose={this.toggleContext}>
                <List>
                  <CellButton
                    before={<Icon28Profile />}
                    multiline
                  >
                    Открыть профиль
                  </CellButton>
                  <CellButton
                    before={<Icon28ShareOutline />}
                    multiline
                  >
                    Поделиться
                  </CellButton>
                  <CellButton
                    before={<Icon28HideOutline />}
                    multiline
                  >
                    Скрыть автора из историй
                  </CellButton>
                  <CellButton
                    before={<Icon28ReportOutline />}
                    multiline
                    mode="danger"
                  >
                    Пожаловаться
                  </CellButton>
                </List>
              </PanelHeaderContext>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/2006-09-15_18-47-19_ziaja.jpg/1200px-2006-09-15_18-47-19_ziaja.jpg" className="img-story" />
              <Progress className="progress-story" value={40} />
              <div>
                <div className="writeBar-story">
                  <WriteBar
                    placeholder="Сообщение"
                    inlineAfter={
                      <Fragment>
                        <Dropdown
                          className="dropdownStory"
                          action="click"
                          placement="top"
                          content={
                            <div>
                              <img className="imgDropdownStory" src="https://getemoji.com/assets/og/mobile.png" />
                            </div>
                          }>
                          <WriteBarIcon>
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                        </Dropdown>
                      </Fragment>
                    }
                    after={
                      <Fragment>
                        <WriteBarIcon mode="send" />
                          <WriteBarIcon>
                            <Icon28GiftOutline className="icon-users-story" />
                          </WriteBarIcon>
                          <WriteBarIcon>
                            <Icon28LikeOutline style={{color: "var(--destructive)"}} className="icon-users-story" />
                        </WriteBarIcon>
                      </Fragment>
                    }
                  />
                </div>
              </div>
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

export default connect(null, mapDispatchToProps)(StoryUsersPanel);