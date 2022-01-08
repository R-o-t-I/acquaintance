import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
  Button,
	FormItem,
	Panel,
	PanelHeader,
	Textarea,
	Div,
	HorizontalScroll,
	HorizontalCell,
	Avatar,
	FixedLayout,
  Group
} from "@vkontakte/vkui";

import queryGet from '../../../functions/query_get.jsx';

import {
	Icon24CameraOutline,
	Icon24DismissOverlay,
	Icon24VideocamAddOutline
} from '@vkontakte/icons';

import bridge from '@vkontakte/vk-bridge';

class AddPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

    render() {
        const {id} = this.props;

        return (
            <Panel id={id}>
              <PanelHeader>Добавить запись</PanelHeader>
              <Group>
                <FormItem top="Поделитесь со всеми">
                  <Textarea placeholder="Что у Вас нового?" />
                </FormItem>
                <FormItem top="Добавить медиа">
                <div style={{display: 'flex'}}>
                  <Button mode="outline" before={<Icon24CameraOutline />} size="m" stretched style={{ marginRight: 8 }}>Фото</Button>
                  <Button mode="outline" before={<Icon24VideocamAddOutline />} size="m" stretched>Видео</Button>
                </div>
                </FormItem>
                <HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
                  <div style={{display: 'flex'}}>
                    <HorizontalCell
                      size='l'
                    >
                      <div style={{position: "relative"}}>
                        <Avatar
                          mode="app"
                          size={90}
                          style={{objectFit: "cover"}}
                          src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album"
                        />
                        <div className="icon-add"><Icon24DismissOverlay width={20} height={20} /></div>
                      </div>
                    </HorizontalCell>
                    <HorizontalCell
                      size='l'
                    >
                      <div style={{position: "relative"}}>
                        <Avatar
                          mode="app"
                          size={90}
                          style={{objectFit: "cover"}}
                          src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album"
                        />
                        <div className="icon-add"><Icon24DismissOverlay width={20} height={20} /></div>
                      </div>
                    </HorizontalCell>
                    <HorizontalCell
                      size='l'
                    >
                      <div style={{position: "relative"}}>
                        <Avatar
                          mode="app"
                          size={90}
                          style={{objectFit: "cover"}}
                          src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album"
                        />
                        <div className="icon-add"><Icon24DismissOverlay width={20} height={20} /></div>
                      </div>
                    </HorizontalCell>
                    <HorizontalCell
                      size='l'
                    >
                      <div style={{position: "relative"}}>
                        <Avatar
                          mode="app"
                          size={90}
                          style={{objectFit: "cover"}}
                          src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album"
                        />
                        <div className="icon-add"><Icon24DismissOverlay width={20} height={20} /></div>
                      </div>
                    </HorizontalCell>
                    <HorizontalCell
                      size='l'
                    >
                      <div style={{position: "relative"}}>
                        <Avatar
                          mode="app"
                          size={90}
                          style={{objectFit: "cover"}}
                          src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album"
                        />
                        <div className="icon-add"><Icon24DismissOverlay width={20} height={20} /></div>
                      </div>
                    </HorizontalCell>
                    <HorizontalCell
                      size='l'
                    >
                      <div style={{position: "relative"}}>
                        <Avatar
                          mode="app"
                          size={90}
                          style={{objectFit: "cover"}}
                          src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album"
                        />
                        <div className="icon-add"><Icon24DismissOverlay width={20} height={20} /></div>
                      </div>
                    </HorizontalCell>
                    <HorizontalCell
                      size='l'
                    >
                      <div style={{position: "relative"}}>
                        <Avatar
                          mode="app"
                          size={90}
                          style={{objectFit: "cover"}}
                          src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album"
                        />
                        <div className="icon-add"><Icon24DismissOverlay width={20} height={20} /></div>
                      </div>
                    </HorizontalCell>
                    <HorizontalCell
                      size='l'
                    >
                      <div style={{position: "relative"}}>
                        <Avatar
                          mode="app"
                          size={90}
                          style={{objectFit: "cover"}}
                          src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album"
                        />
                        <div className="icon-add"><Icon24DismissOverlay width={20} height={20} /></div>
                      </div>
                    </HorizontalCell>
                    <HorizontalCell
                      size='l'
                    >
                      <div style={{position: "relative"}}>
                        <Avatar
                          mode="app"
                          size={90}
                          style={{objectFit: "cover"}}
                          src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album"
                        />
                        <div className="icon-add"><Icon24DismissOverlay width={20} height={20} /></div>
                      </div>
                    </HorizontalCell>
                    <HorizontalCell
                      size='l'
                    >
                      <div style={{position: "relative"}}>
                        <Avatar
                          mode="app"
                          size={90}
                          style={{objectFit: "cover"}}
                          src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album"
                        />
                        <div className="icon-add"><Icon24DismissOverlay width={20} height={20} /></div>
                      </div>
                    </HorizontalCell>
                  </div>
                </HorizontalScroll>
                {/*Для ПК */}
                {
                  (queryGet('vk_platform') === 'desktop_web') && (
                    <Div>
                      <Button mode="commerce" stretched size="m">
                        Опубликовать запись
                      </Button>
                    </Div>
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
                    <FixedLayout vertical="bottom">
                      <Div>
                        <Button mode="commerce" stretched size="m">
                          Опубликовать запись
                        </Button>
                      </Div>
                    </FixedLayout>
                  )
                }
              </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
  setPage,
  openPopout,
  closePopout
};

export default connect(null, mapDispatchToProps)(AddPanel);