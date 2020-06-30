function findMatching(drivers, s) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === s.toLowerCase()
    })
}

function fuzzyMatch(drivers, s) {
    return drivers.filter(function(driver) {
        return driver.startsWith(s)
    })
}

function matchName(drivers, s) {
    return drivers.filter(function(driver) {
        return driver.name === s
    })
}

