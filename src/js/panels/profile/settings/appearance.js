import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../../store/router/actions";

import {
  Panel,
  PanelHeader,
  Group,
  PanelHeaderBack,
  VKCOM,
  FormLayout,
  FormItem,
  Radio,
  Slider,
  Tabs,
  TabbarItem,
  TabsItem,
  HorizontalScroll,
  HorizontalCell,
  Avatar,
  Header
} from "@vkontakte/vkui";

import bridge from '@vkontakte/vk-bridge';

import {
  Icon28PaletteOutline,
  Icon48PictureOutline
} from '@vkontakte/icons';

class AppearancePanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      value: 16,
      activeTab: "background"
		};
    }

	render() {
		const {id, setPage, platform, goBack} = this.props;

		return (
			<Panel id={id}>
				<PanelHeader
					left={<PanelHeaderBack onClick={() => goBack()} label={platform === VKCOM ? 'Назад' : undefined} />}
				>
					Внешний вид
				</PanelHeader>
        <Group>
          <FormItem top="Темы">
            <Radio
              name="radio"
              value="1"
              defaultChecked
            >
              Авто
            </Radio>
            <Radio name="radio" value="2">
              Светлая
            </Radio>
            <Radio name="radio" value="3">
              Тёмная
            </Radio>
          </FormItem>
        </Group>
        <Group>
          <FormItem top="Размер такста в чате">
            <div style={{display: "flex"}}>
              <Slider
                style={{width: "100%"}}
                step={1}
                min={12}
                max={25}
                value={Number(this.state.value)}
                onChange={(value) => this.setState({ value })}
              />
              <div style={{marginLeft: "12px"}} onChange={(e) => this.setState({ value: e.target.value })} value={String(this.state.value)}>16</div>
            </div>
            <div className="chatBlockBackgroundAppearance" style={{marginTop: "12px"}}>
              <div className="mine messages">
                <div className="message last">
                  Привет! Как ты?
                </div>
                <div style={{display: "flex"}}>
                  <div className="messageDataRight">
                    12:43
                  </div>
                </div>
              </div>
              <div className="yours messages">
                <div className="message last">
                  Привет, нормально
                </div>
                <div className="messageDataLeft">
                  12:44
                </div>
              </div>
              <div className="mine messages">
                <div className="message last">
                  Познакомимся?
                </div>
                <div style={{display: "flex"}}>
                  <div className="messageDataRight">
                    12:43
                  </div>
                </div>
              </div>
              <div className="yours messages">
                <div className="message last">
                  Почему бы и нет?!
                </div>
                <div className="messageDataLeft">
                  12:44
                </div>
              </div>
            </div>
          </FormItem>
        </Group>
        <Group>
          <FormItem top="Фон и цвет блоков чата">
            <Tabs>
              <TabsItem
                onClick={() => this.setState({ activeTab: "background" })}
                selected={this.state.activeTab === "background"}
              >
                Фон
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ activeTab: "blockColor" })}
                selected={this.state.activeTab === "blockColor"}
              >
                Цвет блоков
              </TabsItem>
            </Tabs>
            {this.state.activeTab === "background" ? <div>
              <HorizontalScroll
                showArrows
                getScrollToLeft={(i) => i - 120}
                getScrollToRight={(i) => i + 120}
              >
                <div style={{display: "flex", marginTop: 12}}>
                  <HorizontalCell disabled size="m">
                    <Avatar
                      size={88}
                      mode="app"
                    >
                      <Icon48PictureOutline />
                    </Avatar>
                  </HorizontalCell>
                  <HorizontalCell disabled size="m">
                    <Avatar
                      size={88}
                      mode="app"
                      style={{backgroundColor: "var(--background_content)", outline: "3px solid var(--accent)", outlineOffset: "2px"}}
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="m">
                    <Avatar
                      size={88}
                      mode="app"
                      src="https://w7.pngwing.com/pngs/129/100/png-transparent-violet-blue-sky-purple-blue-background-sky-skyline.png"
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="m">
                    <Avatar
                      size={88}
                      mode="app"
                      src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?size=626&ext=jpg"
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="m">
                    <Avatar
                      size={88}
                      mode="app"
                      src="https://oir.mobi/uploads/posts/2021-03/1616538453_5-p-odnotonnii-fon-dlya-teksta-7.jpg"
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="m">
                    <Avatar
                      size={88}
                      mode="app"
                      src="https://img1.goodfon.ru/wallpaper/nbig/0/69/tekstura-svetlyy-fon-zheltyy.jpg"
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="m">
                    <Avatar
                      size={88}
                      mode="app"
                      src="https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?size=626&ext=jpg&ga=GA1.2.2011711811.1640476800"
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="m">
                    <Avatar
                      size={88}
                      mode="app"
                      src="https://www.publicdomainpictures.net/pictures/40000/velka/background-1366644919rfW.jpg"
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="m">
                    <Avatar
                      size={88}
                      mode="app"
                      src="https://oir.mobi/uploads/posts/2021-03/1616600208_17-p-tekhnicheskii-fon-18.jpg"
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="m">
                    <Avatar
                      size={88}
                      mode="app"
                      src="https://oir.mobi/uploads/posts/2021-03/1616524585_55-p-nezhno-rozovii-fon-56.jpg"
                    />
                  </HorizontalCell>
                </div>
              </HorizontalScroll>
            </div> : null}

            {this.state.activeTab === "blockColor" ? <div>
              <HorizontalScroll
                showArrows
                getScrollToLeft={(i) => i - 120}
                getScrollToRight={(i) => i + 120}
              >
                <div style={{display: "flex", marginTop: 12}}>
                  <HorizontalCell disabled size="s">
                    <Avatar
                      size={50}
                    >
                      <Icon28PaletteOutline />
                    </Avatar>
                  </HorizontalCell>
                  <HorizontalCell disabled size="s">
                    <Avatar
                      size={50}
                      style={{backgroundColor: "var(--send_bg)", outline: "3px solid var(--accent)", outlineOffset: "2px"}}
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="s">
                    <Avatar
                      size={50}
                      style={{backgroundColor: "var(--background_content)"}}
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="s">
                    <Avatar
                      size={50}
                      style={{backgroundColor: "red"}}
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="s">
                    <Avatar
                      size={50}
                      style={{backgroundColor: "green"}}
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="s">
                    <Avatar
                      size={50}
                      style={{backgroundColor: "yellow"}}
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="s">
                    <Avatar
                      size={50}
                      style={{backgroundColor: "violet"}}
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="s">
                    <Avatar
                      size={50}
                      style={{backgroundColor: "teal"}}
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="s">
                    <Avatar
                      size={50}
                      style={{backgroundColor: "thistle"}}
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="s">
                    <Avatar
                      size={50}
                      style={{backgroundColor: "turquoise"}}
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="s">
                    <Avatar
                      size={50}
                      style={{backgroundColor: "whitesmoke"}}
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="s">
                    <Avatar
                      size={50}
                      style={{backgroundColor: "yellowgreen"}}
                    />
                  </HorizontalCell>
                  <HorizontalCell disabled size="s">
                    <Avatar
                      size={50}
                      style={{backgroundColor: "snow"}}
                    />
                  </HorizontalCell>
                </div>
              </HorizontalScroll>
            </div> : null}
          </FormItem>
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

export default connect(null, mapDispatchToProps)(AppearancePanel);