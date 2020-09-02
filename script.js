const adjustCanonicalLink =()=> {
    document.querySelector('link[rel="canonical"]').href = document.URL
}

const getSeoData = () => {
    const pageTitle = document.title
    const pageUrl = document.URL
    const pageDescription = document.querySelector('meta[name="description"]').content
    const pageImg = document.querySelectorAll('img')[0].src
    
    setOgSeoData({ pageTitle, pageUrl, pageDescription, pageImg })
}

const setOgSeoData = ({ pageTitle, pageUrl, pageDescription, pageImg }) => {
    document.querySelector('meta[property="og:url"]').content = pageUrl
    document.querySelector('meta[property="og:title"]').content = pageTitle
    document.querySelector('meta[property="og:site_name"]').content = pageTitle
    document.querySelector('meta[property="og:description"]').content = pageDescription
    document.querySelector('meta[property="og:image"]').content = pageImg
}

getSeoData()
adjustCanonicalLink()

/*
 * Add here any JavaScript you want to use
 */
