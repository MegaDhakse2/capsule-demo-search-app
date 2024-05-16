import { redirect, useRouteLoaderData } from "react-router-dom"
import { fetchData } from "../../util/http_requests";
import { capsuleSearchAPIPath } from "../../util/api_paths_generator";
import cssClasses from '../search/PageLayout.module.css';
import Header from "../../components/UI/header/Header";
import SearchComponent from "../../components/search/SearchComponent";
import { useSelector } from "react-redux";
import ResultCard from "../../components/results/ResultCard";
import appStore from "../../store";
import { uiActions } from "../../store/ui";

export default function ResultsPage(){
    const saltSuggestions = useRouteLoaderData('results-route').data.saltSuggestions;
    const existingUserInput = useSelector((state)=>state.search.search.userSearchInput);

    return(
        <div className={cssClasses.layout}>
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
            <div className={cssClasses.result_body}>
                {saltSuggestions.map((saltObj)=>(
                    <ResultCard 
                        key={saltObj.id}
                        saltObj={saltObj}
                    />
                ))}
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
        appStore.dispatch(uiActions.triggerFlash(
            {
                type:'info',
                message: 'Search a valid salt!'
            }
        ))
        return redirect('/search');
    }

    return searchResults;
}

// const saltObj = {
//     "id": 2,
//     "salt": "Paracetamol",
//     "salt_frequency": 1694,
//     "available_forms": [
//         "Tablet",
//         "Oral Liquid",
//         "Miscellaneous",
//         "Drops",
//         "Injection",
//         "Capsule"
//     ],
//     "most_common": {
//         "Form": "Tablet",
//         "Strength": "650mg",
//         "Packing": "10 tablets"
//     },
//     "salt_forms_json": {
//         "Oral Liquid": {
//             "120mg/5ml": {
//                 "60 ml": {
//                     "5092": null,
//                     "27585": null,
//                     "29926": null,
//                     "30517": null,
//                     "37922": null,
//                     "41000": null,
//                     "49681": null,
//                     "52210": null,
//                     "72628": null,
//                     "72880": null,
//                     "79744": null,
//                     "97828": null,
//                     "98402": null,
//                     "114199": null,
//                     "147540": null,
//                     "147703": null,
//                     "153018": null,
//                     "153824": null,
//                     "158913": null,
//                     "159386": null,
//                     "183366": null,
//                     "195688": null
//                 },
//                 "30 ml": {
//                     "153844": null
//                 }
//             },
//             "100mg/ml": {
//                 "15 ml": {
//                     "9430": null,
//                     "22725": null,
//                     "29843": null,
//                     "30163": null,
//                     "49417": null,
//                     "50301": null,
//                     "83409": null,
//                     "147485": null,
//                     "147557": null,
//                     "148227": null,
//                     "150961": null,
//                     "152004": null,
//                     "177211": null,
//                     "191044": null,
//                     "217956": null
//                 },
//                 "30 ml": {
//                     "1727": null
//                 }
//             },
//             "250mg/5ml": {
//                 "60 ml": {
//                     "3702": null,
//                     "5948": null,
//                     "6534": null,
//                     "7099": null,
//                     "8240": null,
//                     "12711": null,
//                     "13828": null,
//                     "14452": null,
//                     "15337": null,
//                     "15908": null,
//                     "17856": null,
//                     "23009": null,
//                     "24008": null,
//                     "24035": null,
//                     "25115": null,
//                     "25962": null,
//                     "27956": null,
//                     "29819": null,
//                     "29895": null,
//                     "31349": null,
//                     "34506": null,
//                     "35155": null,
//                     "37129": null,
//                     "37989": null,
//                     "38105": null,
//                     "40395": null,
//                     "40936": null,
//                     "45996": null,
//                     "47615": null,
//                     "48038": null,
//                     "48141": null,
//                     "48893": null,
//                     "49334": null,
//                     "49605": null,
//                     "50367": null,
//                     "50927": null,
//                     "53343": null,
//                     "53777": null,
//                     "56356": null,
//                     "56852": null,
//                     "58447": null,
//                     "58595": null,
//                     "72709": null,
//                     "73809": null,
//                     "73929": null,
//                     "74509": null,
//                     "75020": null,
//                     "75049": null,
//                     "75075": null,
//                     "75106": null,
//                     "75722": null,
//                     "75905": null,
//                     "76023": null,
//                     "76251": null,
//                     "76754": null,
//                     "77469": null,
//                     "77476": null,
//                     "77727": null,
//                     "77762": null,
//                     "77786": null,
//                     "78202": null,
//                     "78347": null,
//                     "78810": null,
//                     "79858": null,
//                     "85949": null,
//                     "87907": null,
//                     "90697": null,
//                     "95064": null,
//                     "96194": null,
//                     "96227": null,
//                     "96395": null,
//                     "97487": null,
//                     "98275": null,
//                     "112238": null,
//                     "112343": null,
//                     "113327": null,
//                     "114091": null,
//                     "116927": null,
//                     "116985": null,
//                     "117319": null,
//                     "118974": null,
//                     "119156": null,
//                     "119681": null,
//                     "121272": null,
//                     "121281": null,
//                     "122195": null,
//                     "122800": null,
//                     "123305": null,
//                     "124548": null,
//                     "129643": null,
//                     "131489": null,
//                     "132230": null,
//                     "132692": null,
//                     "132908": null,
//                     "133786": null,
//                     "134953": null,
//                     "134997": null,
//                     "135348": null,
//                     "135831": null,
//                     "139525": null,
//                     "139675": null,
//                     "143379": null,
//                     "147499": null,
//                     "147562": null,
//                     "147651": null,
//                     "147997": null,
//                     "148128": null,
//                     "148856": null,
//                     "149084": null,
//                     "149384": null,
//                     "149393": null,
//                     "149587": null,
//                     "149741": null,
//                     "149959": null,
//                     "150279": null,
//                     "150708": null,
//                     "151047": null,
//                     "151059": null,
//                     "151394": null,
//                     "151624": null,
//                     "151667": null,
//                     "151817": null,
//                     "152111": null,
//                     "152482": null,
//                     "152773": null,
//                     "152789": null,
//                     "152807": null,
//                     "153091": null,
//                     "153524": null,
//                     "153895": null,
//                     "154213": null,
//                     "154504": null,
//                     "154591": null,
//                     "154752": null,
//                     "155031": null,
//                     "155405": null,
//                     "155605": null,
//                     "155697": null,
//                     "155702": null,
//                     "155818": null,
//                     "156048": null,
//                     "156141": null,
//                     "156150": null,
//                     "156247": null,
//                     "156432": null,
//                     "156487": null,
//                     "156927": null,
//                     "156937": null,
//                     "157084": null,
//                     "157211": null,
//                     "157215": null,
//                     "157216": null,
//                     "157289": null,
//                     "157302": null,
//                     "157527": null,
//                     "157877": null,
//                     "157975": null,
//                     "157980": null,
//                     "157982": null,
//                     "158058": null,
//                     "158148": null,
//                     "158505": null,
//                     "158512": null,
//                     "158717": null,
//                     "158726": null,
//                     "159088": null,
//                     "159095": null,
//                     "159203": null,
//                     "159292": null,
//                     "159387": null,
//                     "159590": null,
//                     "159598": null,
//                     "159804": null,
//                     "159805": null,
//                     "159808": null,
//                     "160043": null,
//                     "160128": null,
//                     "160142": null,
//                     "160144": null,
//                     "160454": null,
//                     "160583": null,
//                     "160710": null,
//                     "160715": null,
//                     "161040": null,
//                     "164704": null,
//                     "166337": null,
//                     "170749": null,
//                     "171715": null,
//                     "171855": null,
//                     "172781": null,
//                     "173301": null,
//                     "173700": null,
//                     "175384": null,
//                     "177059": null,
//                     "180242": null,
//                     "180765": null,
//                     "182008": null,
//                     "182172": null,
//                     "185176": null,
//                     "185351": null,
//                     "187190": null,
//                     "187785": null,
//                     "187984": null,
//                     "189304": null,
//                     "191410": null,
//                     "192579": null,
//                     "195043": null,
//                     "196226": null,
//                     "196304": null,
//                     "196624": null,
//                     "198017": null,
//                     "198785": null,
//                     "198985": null,
//                     "213177": null,
//                     "213739": null,
//                     "216157": null,
//                     "216602": null,
//                     "217782": null
//                 },
//                 "30 ml": {
//                     "77654": null,
//                     "180639": null
//                 },
//                 "100 ml": {
//                     "13484": null
//                 }
//             },
//             "125mg/5ml": {
//                 "60 ml": {
//                     "2732": null,
//                     "8794": null,
//                     "10606": null,
//                     "11730": null,
//                     "13381": null,
//                     "13851": null,
//                     "17538": null,
//                     "19647": null,
//                     "23001": null,
//                     "24046": null,
//                     "28696": null,
//                     "36958": null,
//                     "40831": null,
//                     "41366": null,
//                     "50280": null,
//                     "52675": null,
//                     "53060": null,
//                     "58163": null,
//                     "58406": null,
//                     "59038": null,
//                     "59887": null,
//                     "73195": null,
//                     "73397": null,
//                     "74251": null,
//                     "74877": null,
//                     "75279": null,
//                     "79162": null,
//                     "79975": null,
//                     "90785": null,
//                     "96251": null,
//                     "113078": null,
//                     "114002": null,
//                     "114909": null,
//                     "117989": null,
//                     "119382": null,
//                     "120667": null,
//                     "120944": null,
//                     "123341": null,
//                     "134194": null,
//                     "140074": null,
//                     "144916": null,
//                     "147586": null,
//                     "147676": null,
//                     "147690": null,
//                     "147892": null,
//                     "148020": null,
//                     "148245": null,
//                     "148529": null,
//                     "150595": null,
//                     "151162": null,
//                     "151214": null,
//                     "152225": null,
//                     "152715": null,
//                     "152758": null,
//                     "152835": null,
//                     "153092": null,
//                     "153152": null,
//                     "153289": null,
//                     "153984": null,
//                     "154549": null,
//                     "155358": null,
//                     "155600": null,
//                     "156596": null,
//                     "156801": null,
//                     "157002": null,
//                     "157015": null,
//                     "157152": null,
//                     "157288": null,
//                     "157290": null,
//                     "157370": null,
//                     "157376": null,
//                     "157864": null,
//                     "157974": null,
//                     "158607": null,
//                     "158609": null,
//                     "158805": null,
//                     "158998": null,
//                     "159005": null,
//                     "159199": null,
//                     "159919": null,
//                     "160450": null,
//                     "161149": null,
//                     "168581": null,
//                     "172083": null,
//                     "175703": null,
//                     "177225": null,
//                     "182028": null,
//                     "182262": null,
//                     "186117": null,
//                     "187075": null,
//                     "191397": null,
//                     "195469": null,
//                     "213624": null,
//                     "216268": null,
//                     "225219": null
//                 },
//                 "450 ml": {
//                     "97681": null
//                 },
//                 "100 ml": {
//                     "113755": null
//                 }
//             },
//             "250mg": {
//                 "60 ml": {
//                     "7835": null,
//                     "9139": null,
//                     "9902": null,
//                     "11294": null,
//                     "14045": null,
//                     "14388": null,
//                     "18189": null,
//                     "18348": null,
//                     "19121": null,
//                     "19131": null,
//                     "19310": null,
//                     "20067": null,
//                     "20078": null,
//                     "22181": null,
//                     "26572": null,
//                     "28344": null,
//                     "28967": null,
//                     "34275": null,
//                     "40151": null,
//                     "40625": null,
//                     "42160": null,
//                     "44258": null,
//                     "44469": null,
//                     "44980": null,
//                     "53410": null,
//                     "53859": null,
//                     "58978": null,
//                     "59523": null,
//                     "60283": null,
//                     "60749": null,
//                     "72526": null,
//                     "73901": null,
//                     "74740": null,
//                     "74901": null,
//                     "77719": null,
//                     "77896": null,
//                     "78785": null,
//                     "78917": null,
//                     "79238": null,
//                     "79345": null,
//                     "79390": null,
//                     "79689": null,
//                     "79731": null,
//                     "79881": null,
//                     "80274": null,
//                     "84479": null,
//                     "85829": null,
//                     "88095": null,
//                     "88200": null,
//                     "89983": null,
//                     "91258": null,
//                     "91574": null,
//                     "93308": [
//                         {
//                             "pharmacy_id": 1,
//                             "selling_price": 150
//                         }
//                     ],
//                     "95091": null,
//                     "96335": null,
//                     "97348": null,
//                     "98042": null,
//                     "98437": null,
//                     "98579": null,
//                     "119632": null,
//                     "121310": null,
//                     "122759": null,
//                     "122992": null,
//                     "123433": null,
//                     "123729": null,
//                     "133391": null,
//                     "133418": null,
//                     "141163": null,
//                     "141644": null,
//                     "143881": null,
//                     "145570": null,
//                     "145829": null,
//                     "145832": null,
//                     "148427": null,
//                     "150078": null,
//                     "150079": null,
//                     "150651": null,
//                     "150881": null,
//                     "151681": null,
//                     "151782": null,
//                     "152805": null,
//                     "153153": null,
//                     "154143": null,
//                     "154362": null,
//                     "154461": null,
//                     "155034": null,
//                     "155078": null,
//                     "155124": null,
//                     "155604": null,
//                     "155750": [
//                         {
//                             "pharmacy_id": 3,
//                             "selling_price": 105
//                         },
//                         {
//                             "pharmacy_id": 2,
//                             "selling_price": 100
//                         }
//                     ],
//                     "155816": null,
//                     "155880": null,
//                     "156047": null,
//                     "156091": null,
//                     "156190": null,
//                     "156245": null,
//                     "156301": null,
//                     "156672": [
//                         {
//                             "pharmacy_id": 1,
//                             "selling_price": 100
//                         }
//                     ],
//                     "156800": null,
//                     "156860": null,
//                     "157011": null,
//                     "157213": null,
//                     "157369": null,
//                     "157383": null,
//                     "157457": null,
//                     "157532": null,
//                     "157619": null,
//                     "157627": null,
//                     "157698": [
//                         {
//                             "pharmacy_id": 2,
//                             "selling_price": 150
//                         }
//                     ],
//                     "157785": null,
//                     "157875": null,
//                     "158149": null,
//                     "158227": null,
//                     "158319": null,
//                     "158405": null,
//                     "158506": null,
//                     "158508": null,
//                     "158616": null,
//                     "158728": [
//                         {
//                             "pharmacy_id": 3,
//                             "selling_price": 80
//                         }
//                     ],
//                     "158816": null,
//                     "158819": null,
//                     "159009": null,
//                     "159091": null,
//                     "159101": null,
//                     "159189": null,
//                     "159289": null,
//                     "159385": null,
//                     "159589": null,
//                     "159682": null,
//                     "159684": null,
//                     "159685": null,
//                     "159687": null,
//                     "159691": null,
//                     "159692": null,
//                     "159799": null,
//                     "159811": null,
//                     "159812": null,
//                     "159924": null,
//                     "160129": null,
//                     "160138": null,
//                     "160146": null,
//                     "160363": null,
//                     "160453": null,
//                     "160579": null,
//                     "160717": null,
//                     "160944": null,
//                     "161042": null,
//                     "161052": null,
//                     "161056": null,
//                     "161533": null,
//                     "161537": null,
//                     "166246": null,
//                     "167385": null,
//                     "170480": null,
//                     "170719": null,
//                     "171211": null,
//                     "173782": null,
//                     "174475": null,
//                     "176005": null,
//                     "178682": null,
//                     "180842": null,
//                     "181213": null,
//                     "184129": null,
//                     "184308": null,
//                     "189127": null,
//                     "190224": null,
//                     "192992": null,
//                     "213175": null,
//                     "213513": null,
//                     "213651": null,
//                     "213703": null,
//                     "216869": null,
//                     "218535": null,
//                     "218662": null,
//                     "218722": [
//                         {
//                             "pharmacy_id": 3,
//                             "selling_price": 150
//                         }
//                     ],
//                     "218922": null,
//                     "219703": null,
//                     "223717": null,
//                     "224057": null,
//                     "224462": null,
//                     "225334": null
//                 },
//                 "30 ml": {
//                     "156669": null,
//                     "162162": null,
//                     "179274": null
//                 },
//                 "100 ml": {
//                     "15333": null,
//                     "153112": null
//                 },
//                 "60 oral suspensions": {
//                     "161055": null
//                 }
//             },
//             "100mg": {
//                 "60 ml": {
//                     "14632": null,
//                     "26295": null,
//                     "79639": null
//                 },
//                 "15 ml": {
//                     "134027": null
//                 },
//                 "100 ml": {
//                     "75883": null
//                 }
//             },
//             "650mg": {
//                 "60 ml": {
//                     "14209": null,
//                     "15949": null,
//                     "139499": null,
//                     "144394": null,
//                     "154554": null
//                 }
//             },
//             "125mg": {
//                 "60 ml": {
//                     "9098": null,
//                     "14799": null,
//                     "17135": null,
//                     "20053": null,
//                     "20233": null,
//                     "34260": null,
//                     "36596": null,
//                     "59886": null,
//                     "75174": null,
//                     "75921": null,
//                     "76120": null,
//                     "77005": null,
//                     "77792": null,
//                     "78058": null,
//                     "78137": null,
//                     "79642": null,
//                     "79940": null,
//                     "80185": null,
//                     "86442": null,
//                     "89607": null,
//                     "90283": null,
//                     "91103": null,
//                     "96172": null,
//                     "123881": null,
//                     "133973": null,
//                     "152352": null,
//                     "152370": null,
//                     "153217": null,
//                     "153346": null,
//                     "153403": null,
//                     "153404": null,
//                     "154675": null,
//                     "155168": null,
//                     "155404": null,
//                     "155513": null,
//                     "155603": null,
//                     "155749": null,
//                     "156866": null,
//                     "156932": null,
//                     "157147": null,
//                     "157530": null,
//                     "157984": null,
//                     "158145": null,
//                     "158150": null,
//                     "158619": null,
//                     "158620": null,
//                     "159505": null,
//                     "159580": null,
//                     "159921": null,
//                     "160133": null,
//                     "160264": null,
//                     "160596": null,
//                     "169546": null,
//                     "171410": null,
//                     "173034": null,
//                     "176121": null,
//                     "184999": null,
//                     "186567": null,
//                     "199626": null,
//                     "216429": null,
//                     "224780": null,
//                     "225464": null
//                 },
//                 "100 ml": {
//                     "14148": null
//                 },
//                 "30 ml": {
//                     "185962": null,
//                     "198941": null
//                 },
//                 "15 ml": {
//                     "58243": null,
//                     "147856": null
//                 },
//                 "50 ml": {
//                     "159897": null
//                 }
//             },
//             "156.25mg/5ml": {
//                 "60 ml": {
//                     "52588": null,
//                     "115975": null,
//                     "198897": null
//                 }
//             },
//             "500mg": {
//                 "60 ml": {
//                     "77649": null,
//                     "99460": null,
//                     "148023": null,
//                     "223067": null
//                 }
//             },
//             "150mg": {
//                 "60 ml": {
//                     "118950": null,
//                     "121378": null,
//                     "140377": null
//                 },
//                 "15 ml": {
//                     "113672": null,
//                     "149616": null,
//                     "150276": null
//                 }
//             },
//             "120mg": {
//                 "60 ml": {
//                     "13090": null,
//                     "76579": null,
//                     "134425": null,
//                     "147874": null,
//                     "154142": null,
//                     "155881": null,
//                     "172355": null,
//                     "177283": null
//                 }
//             },
//             "100mg/5ml": {
//                 "15 ml": {
//                     "179872": null
//                 }
//             },
//             "150mg/ml": {
//                 "60 ml": {
//                     "29138": null
//                 }
//             },
//             "250mg/ml": {
//                 "60 ml": {
//                     "13191": null
//                 }
//             },
//             "120mg/ml": {
//                 "60 ml": {
//                     "5067": null
//                 }
//             }
//         },
//         "Tablet": {
//             "500mg": {
//                 "10 tablets": {
//                     "756": null,
//                     "1405": null,
//                     "2142": null,
//                     "2881": null,
//                     "3106": null,
//                     "3229": null,
//                     "3405": null,
//                     "3992": null,
//                     "4740": null,
//                     "5069": null,
//                     "6332": null,
//                     "7993": null,
//                     "8527": null,
//                     "8884": null,
//                     "9123": null,
//                     "10385": null,
//                     "12530": null,
//                     "13065": null,
//                     "17532": null,
//                     "17542": null,
//                     "18535": null,
//                     "24359": null,
//                     "25024": null,
//                     "26243": null,
//                     "28230": null,
//                     "30561": null,
//                     "32286": null,
//                     "33522": null,
//                     "33549": null,
//                     "35092": null,
//                     "35158": null,
//                     "35272": null,
//                     "35477": null,
//                     "35820": null,
//                     "37059": null,
//                     "37162": null,
//                     "40071": null,
//                     "40350": null,
//                     "44325": null,
//                     "47837": null,
//                     "49993": null,
//                     "50283": null,
//                     "50999": null,
//                     "51491": null,
//                     "52169": null,
//                     "52246": null,
//                     "54001": null,
//                     "54219": null,
//                     "58474": null,
//                     "59362": null,
//                     "60855": null,
//                     "72893": null,
//                     "72985": null,
//                     "73697": null,
//                     "73923": null,
//                     "75271": null,
//                     "76324": null,
//                     "76650": null,
//                     "76686": null,
//                     "77318": null,
//                     "77549": null,
//                     "78064": null,
//                     "78096": null,
//                     "78141": null,
//                     "78582": null,
//                     "79585": null,
//                     "81958": null,
//                     "82289": null,
//                     "82642": null,
//                     "83505": null,
//                     "85153": null,
//                     "88291": null,
//                     "91532": null,
//                     "92386": null,
//                     "92849": null,
//                     "93654": null,
//                     "97342": null,
//                     "99204": null,
//                     "112101": null,
//                     "112252": null,
//                     "112335": null,
//                     "113236": null,
//                     "113733": null,
//                     "113848": null,
//                     "114755": null,
//                     "116573": null,
//                     "117196": null,
//                     "117943": null,
//                     "119244": null,
//                     "119247": null,
//                     "121542": null,
//                     "134766": null,
//                     "138344": null,
//                     "147327": null,
//                     "147555": null,
//                     "148089": null,
//                     "148395": null,
//                     "148657": null,
//                     "148819": null,
//                     "148828": null,
//                     "148903": null,
//                     "149077": null,
//                     "149105": null,
//                     "149206": null,
//                     "149362": null,
//                     "149374": null,
//                     "149686": null,
//                     "149906": null,
//                     "149956": null,
//                     "149992": null,
//                     "150172": null,
//                     "150241": null,
//                     "150286": null,
//                     "150305": null,
//                     "150414": null,
//                     "150475": null,
//                     "150579": null,
//                     "150661": null,
//                     "150875": null,
//                     "151046": null,
//                     "151050": null,
//                     "151227": null,
//                     "151243": null,
//                     "151758": null,
//                     "151841": null,
//                     "152307": null,
//                     "152400": null,
//                     "152649": null,
//                     "152752": null,
//                     "152975": null,
//                     "153007": null,
//                     "153735": null,
//                     "154555": null,
//                     "154634": null,
//                     "154721": null,
//                     "154764": null,
//                     "154865": null,
//                     "154874": null,
//                     "155119": null,
//                     "155225": null,
//                     "155621": null,
//                     "155643": null,
//                     "155830": null,
//                     "155914": null,
//                     "156177": null,
//                     "156192": null,
//                     "156204": null,
//                     "156529": null,
//                     "156545": null,
//                     "156554": null,
//                     "156814": null,
//                     "158170": null,
//                     "158359": null,
//                     "158563": null,
//                     "158986": null,
//                     "160243": null,
//                     "161416": null,
//                     "164366": null,
//                     "164385": null,
//                     "169715": null,
//                     "171579": null,
//                     "172658": null,
//                     "172811": null,
//                     "173607": null,
//                     "177833": null,
//                     "178768": null,
//                     "181184": null,
//                     "181616": null,
//                     "181823": null,
//                     "182632": null,
//                     "184627": null,
//                     "184892": null,
//                     "186742": null,
//                     "186828": null,
//                     "191378": null,
//                     "192272": null,
//                     "192729": null,
//                     "194365": null,
//                     "195099": null,
//                     "195570": null,
//                     "197362": null,
//                     "199099": null,
//                     "199125": null,
//                     "199792": null,
//                     "213257": null,
//                     "215312": null,
//                     "216393": null,
//                     "217525": null,
//                     "217573": null,
//                     "217761": null,
//                     "218278": null,
//                     "218346": null,
//                     "218519": null,
//                     "219311": null
//                 },
//                 "15 tablets": {
//                     "1363": null,
//                     "2318": null,
//                     "23071": null,
//                     "29772": null,
//                     "29829": null,
//                     "35628": null,
//                     "38978": null,
//                     "49363": null,
//                     "72583": null,
//                     "72839": null,
//                     "111982": null,
//                     "119947": null,
//                     "147521": null,
//                     "147543": null,
//                     "147567": null,
//                     "147969": null,
//                     "148710": null,
//                     "148912": null,
//                     "154253": null,
//                     "155965": null,
//                     "158257": null
//                 },
//                 "10 tablet dt": {
//                     "4055": null,
//                     "55761": null,
//                     "149106": null,
//                     "153390": null
//                 },
//                 "50 tablets": {
//                     "75982": null
//                 },
//                 "1000 tablets": {
//                     "34948": null,
//                     "112367": null,
//                     "115473": null,
//                     "147417": null
//                 },
//                 "10 tablet mr": {
//                     "197735": null
//                 },
//                 "16 tablets": {
//                     "217451": null
//                 },
//                 "6 tablets": {
//                     "149751": null
//                 },
//                 "2 tablets": {
//                     "14114": null
//                 }
//             },
//             "650mg": {
//                 "10 tablets": {
//                     "1256": null,
//                     "1273": null,
//                     "1441": null,
//                     "2704": null,
//                     "2813": null,
//                     "3118": null,
//                     "4105": null,
//                     "4355": null,
//                     "4527": null,
//                     "5018": null,
//                     "5074": null,
//                     "6077": null,
//                     "7092": null,
//                     "7725": null,
//                     "7864": null,
//                     "8208": null,
//                     "8829": null,
//                     "8855": null,
//                     "9061": null,
//                     "9073": null,
//                     "9122": null,
//                     "9475": null,
//                     "9493": null,
//                     "10365": null,
//                     "10768": null,
//                     "11520": null,
//                     "14640": null,
//                     "15027": null,
//                     "15040": null,
//                     "16931": null,
//                     "17221": null,
//                     "17531": null,
//                     "17535": null,
//                     "17848": null,
//                     "17853": null,
//                     "19638": null,
//                     "24795": null,
//                     "25249": null,
//                     "26830": null,
//                     "27458": null,
//                     "27903": null,
//                     "28115": null,
//                     "30484": null,
//                     "30600": null,
//                     "32366": null,
//                     "32620": null,
//                     "33454": null,
//                     "33579": null,
//                     "34630": null,
//                     "35602": null,
//                     "35796": null,
//                     "36669": null,
//                     "37654": null,
//                     "39079": null,
//                     "39892": null,
//                     "40718": null,
//                     "41295": null,
//                     "41399": null,
//                     "42741": null,
//                     "44102": null,
//                     "44180": null,
//                     "44251": null,
//                     "44638": null,
//                     "45866": null,
//                     "46149": null,
//                     "47184": null,
//                     "50474": null,
//                     "53051": null,
//                     "53239": null,
//                     "53501": null,
//                     "53797": null,
//                     "54282": null,
//                     "54382": null,
//                     "54756": null,
//                     "55089": null,
//                     "55605": null,
//                     "56031": null,
//                     "57062": null,
//                     "57401": null,
//                     "57776": null,
//                     "58845": null,
//                     "58987": null,
//                     "59557": null,
//                     "59664": null,
//                     "59697": null,
//                     "60865": null,
//                     "72959": null,
//                     "73216": null,
//                     "73246": null,
//                     "73436": null,
//                     "73453": null,
//                     "73487": null,
//                     "75277": null,
//                     "75398": null,
//                     "75436": null,
//                     "76095": null,
//                     "76419": null,
//                     "76711": null,
//                     "78018": null,
//                     "78076": null,
//                     "78140": null,
//                     "78396": null,
//                     "78441": null,
//                     "78451": null,
//                     "79003": null,
//                     "79326": null,
//                     "80005": null,
//                     "80258": null,
//                     "81981": null,
//                     "82646": null,
//                     "82809": null,
//                     "85053": null,
//                     "85996": null,
//                     "86245": null,
//                     "87428": null,
//                     "88143": null,
//                     "89892": null,
//                     "89924": null,
//                     "90614": null,
//                     "91136": null,
//                     "93504": null,
//                     "94401": null,
//                     "95828": null,
//                     "95847": null,
//                     "98076": null,
//                     "98245": null,
//                     "99240": null,
//                     "99687": null,
//                     "112208": null,
//                     "112214": null,
//                     "112348": null,
//                     "113776": null,
//                     "115355": null,
//                     "116195": null,
//                     "116478": null,
//                     "116498": null,
//                     "117358": null,
//                     "118077": null,
//                     "118194": null,
//                     "118750": null,
//                     "118816": null,
//                     "119795": null,
//                     "119868": null,
//                     "119937": null,
//                     "120706": null,
//                     "120802": null,
//                     "121081": null,
//                     "121123": null,
//                     "121125": null,
//                     "121194": null,
//                     "121958": null,
//                     "122955": null,
//                     "123163": null,
//                     "123172": null,
//                     "124594": null,
//                     "127430": null,
//                     "127963": null,
//                     "128929": null,
//                     "130222": null,
//                     "131193": null,
//                     "132181": null,
//                     "132353": null,
//                     "132833": null,
//                     "133098": null,
//                     "133244": null,
//                     "134079": null,
//                     "134210": null,
//                     "134629": null,
//                     "135654": null,
//                     "138712": null,
//                     "138891": null,
//                     "138916": null,
//                     "138943": null,
//                     "140906": null,
//                     "141285": null,
//                     "142949": null,
//                     "143789": null,
//                     "143979": null,
//                     "145140": null,
//                     "145190": null,
//                     "147403": null,
//                     "147431": null,
//                     "147439": null,
//                     "147909": null,
//                     "148038": null,
//                     "148272": null,
//                     "148390": null,
//                     "148734": null,
//                     "148833": null,
//                     "148919": null,
//                     "148964": null,
//                     "148969": null,
//                     "149395": null,
//                     "149412": null,
//                     "149745": null,
//                     "149752": null,
//                     "149783": null,
//                     "149877": null,
//                     "149932": null,
//                     "149970": null,
//                     "149986": null,
//                     "150019": null,
//                     "150041": null,
//                     "150104": null,
//                     "150107": null,
//                     "150225": null,
//                     "150360": null,
//                     "150391": null,
//                     "150404": null,
//                     "150410": null,
//                     "150429": null,
//                     "150619": null,
//                     "150628": null,
//                     "150933": null,
//                     "151012": null,
//                     "151016": null,
//                     "151045": null,
//                     "151061": null,
//                     "151065": null,
//                     "151074": null,
//                     "151173": null,
//                     "151250": null,
//                     "151322": null,
//                     "151364": null,
//                     "151419": null,
//                     "151619": null,
//                     "151689": null,
//                     "151749": null,
//                     "151765": null,
//                     "151857": null,
//                     "151861": null,
//                     "151888": null,
//                     "152016": null,
//                     "152058": null,
//                     "152076": null,
//                     "152079": null,
//                     "152456": null,
//                     "152496": null,
//                     "152769": null,
//                     "152855": null,
//                     "152964": null,
//                     "153012": null,
//                     "153015": null,
//                     "153031": null,
//                     "153105": null,
//                     "153207": null,
//                     "153214": null,
//                     "153231": null,
//                     "153355": null,
//                     "153458": null,
//                     "153550": null,
//                     "153557": null,
//                     "153697": null,
//                     "153724": null,
//                     "153729": null,
//                     "153768": null,
//                     "153923": null,
//                     "154036": null,
//                     "154040": null,
//                     "154077": null,
//                     "154259": null,
//                     "154350": null,
//                     "154468": null,
//                     "154478": null,
//                     "154499": null,
//                     "154616": null,
//                     "154655": null,
//                     "154779": null,
//                     "154843": null,
//                     "154868": null,
//                     "155114": null,
//                     "155297": null,
//                     "155324": null,
//                     "155339": null,
//                     "155432": null,
//                     "155487": null,
//                     "155499": null,
//                     "155542": null,
//                     "155575": null,
//                     "155582": null,
//                     "155663": null,
//                     "155789": null,
//                     "155801": null,
//                     "155822": null,
//                     "155837": null,
//                     "155849": null,
//                     "155865": null,
//                     "155902": null,
//                     "155910": null,
//                     "155942": null,
//                     "156027": null,
//                     "156179": null,
//                     "156222": null,
//                     "156285": null,
//                     "156287": null,
//                     "156336": null,
//                     "156349": null,
//                     "156393": null,
//                     "156401": null,
//                     "156418": null,
//                     "156467": null,
//                     "156471": null,
//                     "156479": null,
//                     "156518": null,
//                     "156526": null,
//                     "156538": null,
//                     "156645": null,
//                     "156652": null,
//                     "156689": null,
//                     "156837": null,
//                     "156844": null,
//                     "156854": null,
//                     "156889": null,
//                     "156894": null,
//                     "156909": null,
//                     "156968": null,
//                     "156971": null,
//                     "156981": null,
//                     "157179": null,
//                     "157247": null,
//                     "157263": null,
//                     "157373": null,
//                     "157423": null,
//                     "157436": null,
//                     "157508": null,
//                     "157576": null,
//                     "157600": null,
//                     "157740": null,
//                     "157817": null,
//                     "157827": null,
//                     "157920": null,
//                     "157950": null,
//                     "157962": null,
//                     "158040": null,
//                     "158169": null,
//                     "158384": null,
//                     "158604": null,
//                     "158660": null,
//                     "158757": null,
//                     "158959": null,
//                     "158990": null,
//                     "159159": null,
//                     "159336": null,
//                     "159478": null,
//                     "159544": null,
//                     "159570": null,
//                     "159574": null,
//                     "159638": null,
//                     "159676": null,
//                     "159751": null,
//                     "159778": null,
//                     "159943": null,
//                     "159988": null,
//                     "160301": null,
//                     "161583": null,
//                     "161826": null,
//                     "162333": null,
//                     "163607": null,
//                     "165688": null,
//                     "166307": null,
//                     "166852": null,
//                     "167898": null,
//                     "168157": null,
//                     "168424": null,
//                     "169166": null,
//                     "169368": null,
//                     "170687": null,
//                     "170833": null,
//                     "170858": null,
//                     "171842": null,
//                     "171977": null,
//                     "172812": null,
//                     "174193": null,
//                     "174476": null,
//                     "174523": null,
//                     "176126": null,
//                     "179704": null,
//                     "179808": null,
//                     "179889": null,
//                     "180780": null,
//                     "181333": null,
//                     "181334": null,
//                     "181360": null,
//                     "181656": null,
//                     "183941": null,
//                     "183989": null,
//                     "184341": null,
//                     "184575": null,
//                     "185292": null,
//                     "185561": null,
//                     "186118": null,
//                     "186897": null,
//                     "187067": null,
//                     "188485": null,
//                     "192354": null,
//                     "192929": null,
//                     "193632": null,
//                     "193820": null,
//                     "194143": null,
//                     "194334": null,
//                     "194652": null,
//                     "195136": null,
//                     "195406": null,
//                     "196167": null,
//                     "196781": null,
//                     "197325": null,
//                     "197479": null,
//                     "197606": null,
//                     "197795": null,
//                     "197896": null,
//                     "197913": null,
//                     "198647": null,
//                     "198935": null,
//                     "199604": null,
//                     "199994": null,
//                     "210508": null,
//                     "211824": null,
//                     "212226": null,
//                     "212250": null,
//                     "213547": null,
//                     "213699": null,
//                     "215300": null,
//                     "215602": null,
//                     "216140": null,
//                     "216475": null,
//                     "217389": null,
//                     "217508": null,
//                     "217511": null,
//                     "218409": null,
//                     "219352": null,
//                     "219444": null,
//                     "219576": null,
//                     "221429": null,
//                     "223337": null,
//                     "223737": null,
//                     "223987": null,
//                     "224034": null
//                 },
//                 "10 tablet dt": {
//                     "4472": null,
//                     "6906": null,
//                     "44249": null,
//                     "53284": null,
//                     "75579": null,
//                     "75987": null,
//                     "77365": null,
//                     "91071": null,
//                     "113450": null,
//                     "140722": null,
//                     "141885": null,
//                     "152459": null,
//                     "155546": null,
//                     "158488": null,
//                     "159326": null,
//                     "189966": null,
//                     "212031": null,
//                     "215900": null
//                 },
//                 "15 tablets": {
//                     "9115": null,
//                     "9459": null,
//                     "9674": null,
//                     "16644": null,
//                     "20083": null,
//                     "24355": null,
//                     "29793": null,
//                     "32837": null,
//                     "33765": null,
//                     "34231": null,
//                     "46909": null,
//                     "49222": null,
//                     "49436": null,
//                     "56594": null,
//                     "58887": null,
//                     "72617": null,
//                     "74971": null,
//                     "76655": null,
//                     "79578": null,
//                     "83201": null,
//                     "83321": null,
//                     "84743": null,
//                     "90031": null,
//                     "90655": null,
//                     "96062": null,
//                     "97338": null,
//                     "116761": null,
//                     "121290": null,
//                     "130512": null,
//                     "131704": null,
//                     "145693": null,
//                     "147501": null,
//                     "148109": null,
//                     "148200": null,
//                     "148600": null,
//                     "151890": null,
//                     "152870": null,
//                     "154076": null,
//                     "154916": null,
//                     "155911": null,
//                     "156395": null,
//                     "156474": null,
//                     "158138": null,
//                     "165548": null,
//                     "174485": null,
//                     "174900": null,
//                     "177130": null,
//                     "221679": null
//                 },
//                 "6 tablets": {
//                     "50850": null,
//                     "151731": null
//                 },
//                 "15 tablet dt": {
//                     "90046": null,
//                     "180419": null
//                 },
//                 "10 tablet er": {
//                     "41266": null,
//                     "53417": null,
//                     "77332": null,
//                     "94489": null,
//                     "149814": null,
//                     "150551": null,
//                     "217648": null
//                 },
//                 "10 Tablet DR": {
//                     "193385": null
//                 },
//                 "5 tablets": {
//                     "195006": null
//                 },
//                 "15 tablet ir": {
//                     "155398": null
//                 },
//                 "4 tablets": {
//                     "151547": null
//                 }
//             },
//             "1000mg": {
//                 "10 tablets": {
//                     "1068": null,
//                     "1512": null,
//                     "2902": null,
//                     "3289": null,
//                     "7476": null,
//                     "31524": [
//                         {
//                             "pharmacy_id": 2,
//                             "selling_price": 150
//                         }
//                     ],
//                     "50931": null,
//                     "75802": null,
//                     "81946": null,
//                     "95013": null,
//                     "134993": null,
//                     "137323": null,
//                     "147413": null,
//                     "147978": null,
//                     "148153": null,
//                     "149428": null,
//                     "149664": null,
//                     "150725": null,
//                     "153488": null,
//                     "154844": null,
//                     "217411": null
//                 },
//                 "10 tablet sr": {
//                     "57229": null,
//                     "150393": null,
//                     "155103": null
//                 },
//                 "10 tablet er": {
//                     "28830": null
//                 },
//                 "1 Tablet": {
//                     "31362": null
//                 },
//                 "15 tablets": {
//                     "142201": null
//                 },
//                 "6 tablets": {
//                     "151811": null
//                 },
//                 "6 tablet xr": {
//                     "153328": null
//                 }
//             },
//             "125mg": {
//                 "10 tablets": {
//                     "1393": null,
//                     "6142": null,
//                     "78742": null,
//                     "118994": null,
//                     "119982": null,
//                     "132679": null,
//                     "149602": null,
//                     "152068": null,
//                     "155748": null,
//                     "188097": null
//                 },
//                 "10 tablet dt": {
//                     "32365": null,
//                     "148543": null,
//                     "183672": null
//                 }
//             },
//             "250mg": {
//                 "10 tablets": {
//                     "4084": null,
//                     "115957": null,
//                     "117767": null,
//                     "156189": null,
//                     "169880": null
//                 },
//                 "15 tablets": {
//                     "31601": null
//                 },
//                 "10 tablet dt": {
//                     "3588": null,
//                     "147751": null
//                 }
//             },
//             "300mg": {
//                 "10 tablets": {
//                     "50659": null,
//                     "54776": null,
//                     "115683": null,
//                     "224228": null
//                 },
//                 "15 tablet dt": {
//                     "112621": null
//                 },
//                 "10 tablet dt": {
//                     "193300": null
//                 }
//             },
//             "120mg": {
//                 "10 disintegrating strips": {
//                     "120404": null
//                 }
//             },
//             "60mg": {
//                 "10 disintegrating strips": {
//                     "119041": null
//                 }
//             },
//             "325mg": {
//                 "10 tablets": {
//                     "148122": null,
//                     "211846": null
//                 }
//             },
//             "750mg": {
//                 "10 tablets": {
//                     "148143": null
//                 }
//             },
//             "50mg": {
//                 "10 tablets": {
//                     "148617": null
//                 }
//             }
//         },
//         "Miscellaneous": {
//             "1000mg": {
//                 "100 ml": {
//                     "2285": null,
//                     "3752": null,
//                     "8285": null,
//                     "8478": null,
//                     "10082": null,
//                     "15099": null,
//                     "18703": null,
//                     "18709": null,
//                     "27639": null,
//                     "28720": null,
//                     "40260": [
//                         {
//                             "pharmacy_id": 1,
//                             "selling_price": 100
//                         }
//                     ],
//                     "44350": null,
//                     "50635": null,
//                     "54087": null,
//                     "58072": null,
//                     "59093": null,
//                     "73301": null,
//                     "73503": null,
//                     "73919": null,
//                     "75835": null,
//                     "76056": null,
//                     "86783": null,
//                     "88545": null,
//                     "89587": null,
//                     "92756": null,
//                     "93573": null,
//                     "93914": null,
//                     "94924": null,
//                     "95211": null,
//                     "99123": null,
//                     "112999": null,
//                     "115586": null,
//                     "116865": null,
//                     "120220": null,
//                     "121800": null,
//                     "123556": null,
//                     "126938": null,
//                     "139566": null,
//                     "141417": null,
//                     "141573": null,
//                     "145212": null,
//                     "147721": null,
//                     "147738": null,
//                     "147987": null,
//                     "148410": null,
//                     "148479": null,
//                     "148860": null,
//                     "149370": null,
//                     "149508": null,
//                     "149717": null,
//                     "149720": null,
//                     "150515": null,
//                     "150930": null,
//                     "151397": null,
//                     "151398": null,
//                     "151736": null,
//                     "152134": null,
//                     "153653": null,
//                     "153847": null,
//                     "155369": null,
//                     "155705": null,
//                     "155967": null,
//                     "156061": null,
//                     "156219": null,
//                     "157406": null,
//                     "157487": null,
//                     "157831": null,
//                     "157945": null,
//                     "158278": null,
//                     "158461": null,
//                     "158555": null,
//                     "158689": null,
//                     "158708": null,
//                     "158977": null,
//                     "158995": null,
//                     "159247": null,
//                     "159358": null,
//                     "159888": null,
//                     "160547": null,
//                     "161105": null,
//                     "161404": null,
//                     "162676": null,
//                     "177188": null,
//                     "183988": null,
//                     "184490": null,
//                     "187918": null,
//                     "188280": null,
//                     "192211": null,
//                     "192788": null,
//                     "194695": null,
//                     "195892": null,
//                     "196027": null,
//                     "198202": null,
//                     "210185": null,
//                     "214976": null,
//                     "216188": null,
//                     "217597": null,
//                     "219569": null,
//                     "224750": null,
//                     "225187": null
//                 },
//                 "1 Infusion": {
//                     "160514": null
//                 }
//             },
//             "170mg": {
//                 "5 suppositories": {
//                     "1736": null,
//                     "98413": null,
//                     "116258": null,
//                     "126776": null,
//                     "148944": null,
//                     "165195": null,
//                     "177841": null
//                 }
//             },
//             "250mg": {
//                 "5 suppositories": {
//                     "3872": null,
//                     "116260": null,
//                     "127118": null,
//                     "165742": null,
//                     "178222": null
//                 },
//                 "100 ml": {
//                     "127538": null
//                 },
//                 "60 ml": {
//                     "160726": null
//                 }
//             },
//             "80mg": {
//                 "5 suppositories": {
//                     "1196": null,
//                     "98196": null,
//                     "114733": null,
//                     "126761": null,
//                     "152932": null,
//                     "166169": null,
//                     "178194": null
//                 }
//             },
//             "100mg": {
//                 "100 ml": {
//                     "9533": null,
//                     "94509": null,
//                     "129756": null
//                 }
//             },
//             "500mg": {
//                 "50 ml": {
//                     "99616": null
//                 },
//                 "100 ml": {
//                     "36056": null
//                 },
//                 "10 caplets": {
//                     "23970": null
//                 }
//             },
//             "1000mg/100ml": {
//                 "100 ml": {
//                     "113996": null,
//                     "151830": null
//                 },
//                 "1 Infusion": {
//                     "39934": null
//                 }
//             },
//             "125mg": {
//                 "60 ml": {
//                     "116164": null
//                 },
//                 "5 suppositories": {
//                     "164594": null
//                 }
//             },
//             "10mg/ml": {
//                 "100 ml": {
//                     "73356": null,
//                     "129247": null
//                 }
//             },
//             "1% w/v": {
//                 "100 ml": {
//                     "170441": null
//                 }
//             },
//             "1gm": {
//                 "100 ml": {
//                     "156171": null,
//                     "167887": null
//                 }
//             },
//             "150mg": {
//                 "15 ml": {
//                     "147934": null
//                 }
//             }
//         },
//         "Drops": {
//             "125mg": {
//                 "15 ml": {
//                     "12991": null,
//                     "14876": null,
//                     "149836": null,
//                     "154500": null,
//                     "156484": null,
//                     "157078": null,
//                     "160591": null
//                 },
//                 "10 ml": {
//                     "183178": null
//                 }
//             },
//             "150mg": {
//                 "15 ml": {
//                     "15407": null,
//                     "20464": null,
//                     "37264": null,
//                     "73873": null,
//                     "74068": null,
//                     "74483": null,
//                     "77884": null,
//                     "79655": null,
//                     "91206": null,
//                     "96266": null,
//                     "117422": null,
//                     "139311": null,
//                     "143687": null,
//                     "197733": null
//                 },
//                 "10 ml": {
//                     "168805": null
//                 }
//             },
//             "100mg/ml": {
//                 "10 ml": {
//                     "24899": null
//                 },
//                 "15 ml": {
//                     "11611": null,
//                     "72886": null,
//                     "73018": null,
//                     "79711": null,
//                     "93159": null,
//                     "112935": null,
//                     "149041": null,
//                     "149354": null,
//                     "154715": null,
//                     "216043": null
//                 },
//                 "30 ml": {
//                     "74058": null
//                 }
//             },
//             "100mg": {
//                 "15 ml": {
//                     "47907": null,
//                     "61051": null,
//                     "74795": null,
//                     "77761": null,
//                     "79936": null,
//                     "79966": null,
//                     "90248": null,
//                     "123091": null,
//                     "133060": null,
//                     "133072": null,
//                     "148364": null,
//                     "156724": null,
//                     "157150": null,
//                     "157626": null,
//                     "158228": null,
//                     "219448": null
//                 }
//             },
//             "650mg": {
//                 "15 ml": {
//                     "197870": null
//                 }
//             },
//             "150mg/5ml": {
//                 "15 ml": {
//                     "73460": null
//                 }
//             },
//             "100mg/5ml": {
//                 "15 ml": {
//                     "153919": null,
//                     "154135": null,
//                     "158276": null,
//                     "161215": null
//                 }
//             },
//             "125mg/ml": {
//                 "15 ml": {
//                     "152833": null
//                 }
//             }
//         },
//         "Injection": {
//             "150mg": {
//                 "2 ml": {
//                     "25270": null,
//                     "72533": null,
//                     "74107": null,
//                     "114168": null,
//                     "126735": null,
//                     "147514": null,
//                     "150365": null,
//                     "169252": null
//                 },
//                 "30 ml": {
//                     "156841": null
//                 },
//                 "15 ml": {
//                     "2195": null,
//                     "72504": null
//                 },
//                 "1 ml": {
//                     "154814": null
//                 },
//                 "10 ml": {
//                     "159720": null
//                 }
//             },
//             "500mg": {
//                 "2 ml": {
//                     "52684": null,
//                     "150288": null
//                 }
//             },
//             "1000mg": {
//                 "100 ml": {
//                     "83235": null,
//                     "92649": null,
//                     "93867": null,
//                     "117211": null,
//                     "121422": null,
//                     "147922": null,
//                     "152190": null,
//                     "152984": null,
//                     "156209": null,
//                     "156585": null
//                 },
//                 "1 Injection": {
//                     "73898": null
//                 },
//                 "2 ml": {
//                     "151372": null
//                 }
//             },
//             "1000mg/100ml": {
//                 "100 ml": {
//                     "94436": null
//                 },
//                 "1 Injection": {
//                     "48227": null
//                 }
//             },
//             "75mg/ml": {
//                 "2 ml": {
//                     "73864": null,
//                     "114376": null,
//                     "154880": null
//                 },
//                 "30 ml": {
//                     "29054": null,
//                     "37348": null,
//                     "155243": null,
//                     "157917": null,
//                     "159031": null
//                 }
//             },
//             "150mg/ml": {
//                 "2 ml": {
//                     "151573": null,
//                     "154234": null
//                 },
//                 "15 ml": {
//                     "155008": null
//                 }
//             },
//             "100mg": {
//                 "100 ml": {
//                     "53277": null
//                 }
//             }
//         },
//         "Capsule": {
//             "500mg": {
//                 "10 capsules": {
//                     "154222": null
//                 }
//             }
//         }
//     }
// }