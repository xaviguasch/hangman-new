const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }
}

// adding async/await
const getCountry = async (countryCode) => {
  const response = await fetch(`//restcountries.eu/rest/v2/all`)
      if (response.status === 200) {      
        const data = await response.json()
        return data.find(((country) => country.alpha2Code === countryCode))
      } else {
        throw new Error('Unable to fetch the country')
      }
}

// adding async/await
const getLocation = async () => {
  const response = await fetch(`//ipinfo.io/json?token=456f3ad10cca05`)
    if (response.status === 200) {            
      const data = await response.json()
      return data
    } else {
      throw new Error('Unable to get the current location')
    }
  }

const getCurrentCountry = async () => {
  const location = await getLocation()  
  const country = await getCountry(location.country)  
  return country
}

export { getPuzzle as default }