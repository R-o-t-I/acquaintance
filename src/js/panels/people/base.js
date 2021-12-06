import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
	Header,
	Panel,
	PanelHeader,
	PanelHeaderButton,
	Search,
	Spacing,
	Link,
	HorizontalCell,
	HorizontalScroll,
	Avatar,
	Group,
	VKCOM
} from "@vkontakte/vkui";

import queryGet from '../../../functions/query_get.jsx';

import bridge from '@vkontakte/vk-bridge';

import {
	Icon24Filter,
	Icon28AllCategoriesOutline,
	Icon28CancelOutline,
	Icon28DoneOutline,
	Icon28NarrativeOutline
} from '@vkontakte/icons';

class PeoplePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
					activeTab: 'profiles'
        };
    }

    render() {
        const {id, setPage, platform} = this.props;

        return (
            <Panel id={id}>
            {this.state.activeTab === "profiles" ?<div>
							<PanelHeader
								separator={false}
								left={<PanelHeaderButton label={platform === VKCOM ? 'Карточки' : undefined} onClick={() => this.setState({ activeTab: 'cards' })} selected={this.state.activeTab === 'cards'}><Icon28NarrativeOutline/></PanelHeaderButton>}
							>
								Люди
							</PanelHeader>
							<Search 
								icon={<Icon24Filter onClick={() => setPage('people', 'filter')} />}
								style={{backgroundColor: "var(--background_content)", marginLeft: "1px", marginRight: "1px"}}
							/>
							<Group>
							<Header mode="primary" aside={<Link>Хочу сюда</Link>}>Топ пользователи</Header>
							<HorizontalScroll>
								<div style={{display: 'flex'}}>
									<HorizontalCell
										size='s'
										header={<div className="name-people">Александр</div>}
									>
										<Avatar
											mode="app"
											size={60}
											style={{objectFit: "cover"}}
											src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album"
										/>
									</HorizontalCell>
									<HorizontalCell
										size='s'
										header={<div className="name-people">Савелий</div>}
									>
										<Avatar
											mode="app"
											size={60}
											style={{objectFit: "cover"}}
											src="https://image.flaticon.com/icons/png/512/2644/2644746.png"
										/>
									</HorizontalCell>
									<HorizontalCell
										size='s'
										header={<div className="name-people">Артём</div>}
									>
										<Avatar
											mode="app"
											size={60}
											style={{objectFit: "cover"}}
											src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album"
										/>
									</HorizontalCell>
									<HorizontalCell
										size='s'
										header={<div className="name-people">Константин</div>}
									>
										<Avatar
											mode="app"
											size={60}
											style={{objectFit: "cover"}}
											src=""
										/>
									</HorizontalCell>
									<HorizontalCell
										size='s'
										header={<div className="name-people">Кирилл</div>}
									>
										<Avatar
											mode="app"
											size={60}
											style={{objectFit: "cover"}}
											src=""
										/>
									</HorizontalCell>
									<HorizontalCell
										size='s'
										header={<div className="name-people">Павел</div>}
									>
										<Avatar
											mode="app"
											size={60}
											style={{objectFit: "cover"}}
											src=""
										/>
									</HorizontalCell>
								</div>
										</HorizontalScroll>
							</Group>
							<Group>
							<div className="people-block">
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Александр</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Артём</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Савелий</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Михаил</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Иван</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Сергей</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Александр</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Артём</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Савелий</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Михаил</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Иван</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Сергей</div>
								</div>
							</div>
							</Group>
							</div> :null}
							{this.state.activeTab === "cards" ?<div>
							<PanelHeader
								separator={false}
								left={<PanelHeaderButton label={platform === VKCOM ? 'Профили' : undefined} onClick={() => this.setState({ activeTab: 'profiles' })} selected={this.state.activeTab === 'profiles'}><Icon28AllCategoriesOutline/></PanelHeaderButton>}
							>
								Люди
							</PanelHeader>
								<div className="block-card-people">
									<img src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" className="card-people" />
									<div className="button-done-card-people"><Icon28DoneOutline style={{margin: "auto", marginTop: 10, color: "#FFFFFF"}} /></div>
									<div className="button-dismiss-card-people"><Icon28CancelOutline style={{margin: "auto", marginTop: 10, color: "#FFFFFF"}} /></div>
								</div>
							</div> :null}
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    openPopout,
    closePopout
};

export default connect(null, mapDispatchToProps)(PeoplePanel);