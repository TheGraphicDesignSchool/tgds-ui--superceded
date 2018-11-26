import Splitter from 'react-splitter-layout2'
import React from 'react'

const log = console.log

export default props => {
    const percent = Math.round(100/props.components.length),
        maxDepth = Math.floor(props.components.length/2) +1

    log(percent,maxDepth)
    const reduceOne = arr => {
        if( arr.length < 3 ) return arr
        return [
            arr.pop(),
            reduceOne(arr)
        ]
    }

    const cp = [1,2,3,4,5,6,7].reverse()
    const res = reduceOne(cp); log(res)

    const print = arr => {
        let str = ``
        str += '<>'
        if( Array.isArray(arr[1]) ) {
            str += arr[0] + ',' + print(arr[1])
        }
        else {
            str += arr[0] + ',' +arr[1]
        }
        str += '</>'
        return str
    }

    log(print(res))

    const fp = reduceOne(props.components.reverse())

    // Nice way to do recursive components !!!

    const renderSplits = (arr, depth = 0) => {

        const props = {
            style: {
                flex: '1 1 auto'
            },
            percentage: true,
            secondaryInitialSize: percent * (maxDepth - depth + 2)
        }

        log(depth)

        const children = Array.isArray(arr[1]) ?
            [ arr[0](), renderSplits(arr[1], depth + 1) ] :
            [ arr[1](), arr[0]() ]

        const Comp = () => (
            <Splitter {...props}>
                {children}
            </Splitter>
        )

        return <Comp />
    }

    return renderSplits(fp)
}
