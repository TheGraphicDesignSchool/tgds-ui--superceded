import RootContainer from './layouts/root-container'
import AppContainer from './layouts/app-container'
import PageContainer from './layouts/page-container'
import {CBox,RBox} from "./layouts/containers";
import SplitGrid from './layouts/split-grid'
import {useState} from "react";

export {
    CBox,
    RootContainer,
    AppContainer,
    PageContainer,
    SplitGrid
}


export const Motherfucker = () => {
	const [hidden, setHidden] = useState(false)
	const toggleHidden = () => { setHidden(!hidden) }

	return (
		<div>
			<button onClick={toggleHidden}>
				<b>Fuck you!</b>
				{ hidden && <span>You can't see me, motherfucker!</span> }
			</button>
		</div>
	)
}
