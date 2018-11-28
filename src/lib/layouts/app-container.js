import React, {useState} from 'react';
import styled from 'styled-components';

import {CBox,RBox} from "./containers";
import PageContainer from './page-container'

import {Button} from '../components'

const log = console.log

const Container = styled(CBox)`
`

const Header = styled.div`
  background: white;
`

const Body = styled(RBox)`
  background: tomato;
`

const AsideStyle = styled(CBox)`
  flex: 0 0 ${props => props.theme.sidebar.width};
  background: rgba(0,0,0,.1)
`

const Aside = props => {
	const [hidden, setHidden] = useState(false)
	const toggleHidden = () => { setHidden(!hidden) }

	return (
		<AsideStyle>
			<Button onClick={toggleHidden}>Toggle ???</Button>
			{props.children}
		</AsideStyle>
	)
}


const NotesStyle = styled(CBox)`
  flex: 0 0 ${props => props.theme.aside.width};
  background: rgba(0,0,0,.1)

`

const Notes = props => {
	return (
		<NotesStyle>
			<Button >Toggle -></Button>
			{props.children}
		</NotesStyle>

	)
}

export default props => {
    log(props.theme)
    return (
        <Container>
            { props.renderHeader && (
                <Header theme={props.theme}>
                    {props.renderHeader({theme: props.theme})}
                </Header>
            )}
            <Body>
                { props.renderSidebar && (
                    <Aside theme={props.theme}>
                        {props.renderSidebar({theme: props.theme})}
                    </Aside>
                )}
                <PageContainer>
                    {props.children}
                </PageContainer>
                { props.renderNotes && (
                    <Notes theme={props.theme}>
	                    {props.renderNotes({theme: props.theme})}
                    </Notes>
                )}
            </Body>
        </Container>
    )
}
