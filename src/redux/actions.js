export const fetchArticles = () => {
    // return a function that calls fetch and dispatches "articleAction()"
    // with the list of articles from the API call
    return (dispatch) => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=306a3a071f224f729829308fa9f5896a')
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_ARTICLES',
                    value: response.articles
                }
                console.log(response.articles)
                dispatch(action)
            })
    }
}