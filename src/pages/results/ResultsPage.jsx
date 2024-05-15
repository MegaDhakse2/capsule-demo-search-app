import { redirect, useRouteLoaderData } from "react-router-dom"
import { fetchData } from "../../util/http_requests";
import { capsuleSearchAPIPath } from "../../util/api_paths_generator";
import cssClasses from '../search/SearchPage.module.css';
import Header from "../../components/UI/Header";
import SearchComponent from "../../components/search/SearchComponent";
import { useSelector } from "react-redux";

export default function ResultsPage(){
    const saltSuggestions = useRouteLoaderData('results-route').data.saltSuggestions;
    const existingUserInput = useSelector((state)=>state.search.search.userSearchInput);

    return(
        <div className={cssClasses.search_layout}>
            <div className={cssClasses.header}>
                <Header 
                    key={'results-header'}
                    headingText={'Cappsule Web Development'}
                />
                <SearchComponent 
                    key={'result-page-search-component'}
                    existingUserInput={existingUserInput}
                />
            </div>
            <div>
                {saltSuggestions.map((salt)=>{
                    return <span>{salt.id}</span>
                })}
            </div>
            <div className={cssClasses.footer}>
                {/* footer */}
            </div>
        </div>
       
    )
}

export async function getResultsLoader(){
    const searchResults = await fetchData({url: capsuleSearchAPIPath()});
    console.log(searchResults, 'search results from search component');
    debugger
    if (!searchResults || searchResults.data.saltSuggestions.length === 0) {
        return redirect('/search');
    }

    return searchResults;
}