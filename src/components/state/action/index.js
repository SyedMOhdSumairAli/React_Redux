export const des = (amout) => {
    return (dis) => {
        dis({
            type: 'des',
            payload: amout
        })
    }
}


export const withdra = (amout) => {
    return (dis) => {
        dis({
            type: 'withdra',
            payload: amout
        })
    }
}