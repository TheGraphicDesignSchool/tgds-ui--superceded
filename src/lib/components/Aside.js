import styled from "styled-components";
import {CBox} from "../layouts/containers";
import Button from "./Button";
import React, {useState} from "react";

const AsideStyle = styled(CBox)`
	position: relative;	
  	background: rgba(0,0,0,.1);
  	transition: all ease-out .3s;

 	flex: 0 0 ${props => props.theme.aside.width};
  	
  	${props => props.isHidden ? (
		props.position === 'left' ?
			`margin-left: -${props.theme.aside.width};` :
			`margin-right: -${props.theme.aside.width};` 
	):(
		props.position === 'left' ?
			`margin-left: 0;` :
			`margin-right: 0;`
	)}
`

const AsideButton = styled(Button)`
	position: absolute;
	background: none;
	text-align: center;
	border: 1px solid white;
	color: white;
	
	${props => props.position === 'left' ?
		`left: 100%;` :
		`right: 100%;`
	}
	
`

export default props => {

	const [hidden, setHidden] = useState(false)
	const toggleHidden = () => { setHidden(!hidden) }

	return (
		<AsideStyle isHidden={hidden} {...props} >
			<AsideButton position={props.position} onClick={toggleHidden}>{hidden ? 'Show' : 'Hide'}</AsideButton>
			{props.children}
		</AsideStyle>
	)
}

