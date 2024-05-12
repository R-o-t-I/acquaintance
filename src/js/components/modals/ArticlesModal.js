import React from 'react';
import {connect} from 'react-redux';

import {openModal, openPopout, closePopout} from "../../store/router/actions";

import {
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  withPlatform,
  IOS,
  Div,
  Tabs,
  TabsItem,
  Search,
  HorizontalScroll,
  Cell,
  IconButton,
  Placeholder,
  Alert,
  Snackbar,
  Avatar
} from "@vkontakte/vkui";

import {
  Icon24Dismiss,
  Icon24Cancel,
  Icon28CancelOutline,
  Icon24ArticleOutline,
  Icon16Done
} from '@vkontakte/icons'

const bots = [
  {
    name: "Наши проекты",
    description: "2 часа назад"
  },
  {
    name: "ПРЕЗЕНТАЦИЯ APPLE 2021",
    description: "вчера"
  },
  {
    name: "Наши проекты",
    description: "5 июн в 12:42"
  }
];

class Articles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openSnackbar: false,
      activeTab: 'drafts',
      popout: null
    }
  };

  openSnackbar = () => {
    this.setState({openSnackbar: true});
  };

  openPopout() {
    this.props.openPopout(
      <Alert
        actions={[{
          title: 'Отмена',
          autoclose: true,
          mode: 'cancel'
        }, {
          title: 'Удалить',
          autoclose: true,
          mode: 'destructive',
          action: this.openSnackbar
        }]}
        onClose={() => this.props.closePopout()}
        header='Удаление черновика'
        text='Вы действительно хотите удалить этот черновик? Восстановить его будет невозможно.'
      />
    );
  }

  openSnackbar() {
    this.props.openPopout(
      <Snackbar
        onClose={() => this.props.closePopout()}
        action='Ок'
        before={<Avatar size={24} style={{ background: 'var(--accent)' }}> <Icon16Done fill='#fff'/> </Avatar>}
      >
        Статья успешно удалена
      </Snackbar>
    );
  }

  render() {
    const {id, onClose, openModal, platform} = this.props;

    return (
      <ModalPage
        id={id}
        header={
          <ModalPageHeader
            left={platform !== IOS &&
            <PanelHeaderButton onClick={onClose}><Icon24Cancel/></PanelHeaderButton>}
            right={platform === IOS &&
            <PanelHeaderButton onClick={onClose}><Icon24Dismiss/></PanelHeaderButton>}
          >
            Статьи
          </ModalPageHeader>
        }
        onClose={onClose}
        settlingHeight={80}
      >
        <Tabs>
          <HorizontalScroll>
            <TabsItem
              onClick={() => this.setState({ activeTab: 'drafts' })}
              selected={this.state.activeTab === 'drafts'}
            >
              Опубликованные
            </TabsItem>
            <TabsItem
              onClick={() => this.setState({ activeTab: 'availableLink' })}
              selected={this.state.activeTab === 'availableLink'}
            >
              Доступные по ссылке
            </TabsItem>
          </HorizontalScroll>
        </Tabs>
        <Search />
        {this.state.activeTab === "drafts" ?<div>
          {bots.map((bot, index) => (
          <Cell
            description={bot.description}
            after={<IconButton onClick={() => this.openPopout()} style={{color: "var(--icon_secondary)"}}><Icon28CancelOutline /></IconButton>}
            //onClick={() => this.openSnackbar()}
          >
            {bot.name}
          </Cell>
          ))}
        </div> : null}
        {this.state.activeTab === "availableLink" ?<div>
          <Placeholder
            icon={<Icon24ArticleOutline width={56} height={56} />}
          >
            У Вас пока нет статей, доступных по ссылке
          </Placeholder>
        </div> : null}
        {this.state.openSnackbar && <Div className='div-center'>
          {this.openSnackbar}
          Тут типа снекбар
        </Div>}
      </ModalPage>
    );
  }

}

const mapDispatchToProps = {
  openModal,
  openPopout,
  closePopout
};

export default withPlatform(connect(null, mapDispatchToProps)(Articles));