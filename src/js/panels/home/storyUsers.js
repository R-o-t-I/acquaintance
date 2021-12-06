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
  FixedLayout,
  WriteBar,
  WriteBarIcon,
  Progress,
  Div
} from "@vkontakte/vkui";

import { RichTooltip } from '@vkontakte/vkui/dist/unstable';
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
        const {id, setPage, goBack} = this.props;

        return (
            <Panel id={id}>
              <PanelHeader
                separator={false}
                left={<PanelHeaderButton onClick={() => goBack()}><Icon28CancelOutline/></PanelHeaderButton>}
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
              <PanelHeaderContext opened={this.state.contextOpened} onClose={this.toggleContext}>
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
              <FixedLayout vertical="bottom">
                <div className="writeBar-story">
                  <WriteBar
                    placeholder="Сообщение"
                    inlineAfter={
                      <Fragment>
                        <RichTooltip
                          style={{maxWidth: 320}}
                          placement="top"
                          offsetDistance={0}
                          content={
                            <Div>text</Div>
                          }>
                          <WriteBarIcon>
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                        </RichTooltip>
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
              </FixedLayout>
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