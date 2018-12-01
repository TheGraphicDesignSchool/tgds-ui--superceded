import React, {lazy, Suspense} from 'react'
// import Doc, {frontMatter} from '!babel-loader!mdx-loader!./content/home.mdx'

const LazyDoc = lazy(() => import('!babel-loader!mdx-loader!./content/home.mdx'))
const Loading = () => (<div>Loading...</div>)

export default () => (
    <Suspense fallback={Loading}>
        <LazyDoc />
    </Suspense>
)