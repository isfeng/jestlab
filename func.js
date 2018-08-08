const func = () => {
    return Promise.resolve(123)
}

const func2 = () => {
    return func().then(result => Promise.resolve(result * 2))
}

module.exports = {
    func,
    func2,
}
