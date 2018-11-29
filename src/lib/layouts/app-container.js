import React, {useState} from 'react';
import styled from 'styled-components';

import {CBox,RBox} from "./containers";
import PageContainer from './page-container'

import {Header, Footer, Aside} from '../components'

const log = console.log

const Container = styled(CBox)`
	overflow: hidden;
`

const Body = styled(RBox)`
`

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
                    <Aside theme={props.theme} position='left'>
                        {props.renderSidebar({theme: props.theme})}
                    </Aside>
                )}
                <PageContainer>
                    {props.children}
                </PageContainer>
                { props.renderNotes && (
                    <Aside theme={props.theme} position='right'>
	                    {props.renderNotes({theme: props.theme})}
                    </Aside>
                )}
            </Body>
	        { props.renderFooter && (
	        	<Footer theme={props.theme}>
			        {props.renderFooter({theme: props.theme})}
		        </Footer>
	        )}
        </Container>
    )
}
