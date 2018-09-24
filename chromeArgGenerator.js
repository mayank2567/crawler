var request = require('request');

var proxyIpServerURL = 'http://localhost' //config.ipService;
var countries = [
{country:'afghanistan', code : 'AF'},
{country:'albania', code : 'AL'},
{country:'algeria', code : 'DZ'},
{country:'american samoa', code : 'AS'},
{country:'andorra', code : 'AD'},
{country:'angola', code : 'AO'},
{country:'antarctica', code : 'AQ'},
{country:'antigua and barbuda', code : 'AG'},
{country:'argentina', code : 'AR'},
{country:'armenia', code : 'AM'},
{country:'aruba', code : 'AW'},
{country:'australia', code : 'AU'},
{country:'austria', code : 'AT'},
{country:'azerbaijan', code : 'AZ'},
{country:'bahamas', code : 'BS'},
{country:'bahrain', code : 'BH'},
{country:'bangladesh', code : 'BD'},
{country:'barbados', code : 'BB'},
{country:'belarus', code : 'BY'},
{country:'belgium', code : 'BE'},
{country:'belize', code : 'BZ'},
{country:'benin', code : 'BJ'},
{country:'bermuda', code : 'BM'},
{country:'bhutan', code : 'BT'},
{country:'bolivia', code : 'BO'},
{country:'bosnia and herzegovina', code : 'BA'},
{country:'botswana', code : 'BW'},
{country:'bouvet island', code : 'BV'},
{country:'brazil', code : 'BR'},
{country:'british indian ocean territory', code : 'IO'},
{country:'brunei darussalam', code : 'BN'},
{country:'bulgaria', code : 'BG'},
{country:'burkina faso', code : 'BF'},
{country:'burundi', code : 'BI'},
{country:'cambodia', code : 'KH'},
{country:'cameroon', code : 'CM'},
{country:'canada', code : 'CA'},
{country:'cape verde', code : 'CV'},
{country:'cayman islands', code : 'KY'},
{country:'central african republic', code : 'CF'},
{country:'chad', code : 'TD'},
{country:'chile', code : 'CL'},
{country:'china', code : 'CN'},
{country:'christmas island', code : 'CX'},
{country:'cocos (keeling) islands', code : 'CC'},
{country:'colombia', code : 'CO'},
{country:'comoros', code : 'KM'},
{country:'congo', code : 'CG'},
{country:'congo, the democratic republic of the', code : 'CD'},
{country:'cook islands', code : 'CK'},
{country:'costa rica', code : 'CR'},
{country:'croatia', code : 'HR'},
{country:'cuba', code : 'CU'},
{country:'cyprus', code : 'CY'},
{country:'czech republic', code : 'CZ'},
{country:'denmark', code : 'DK'},
{country:'djibouti', code : 'DJ'},
{country:'dominica', code : 'DM'},
{country:'dominican republic', code : 'DO'},
{country:'ecuador', code : 'EC'},
{country:'egypt', code : 'EG'},
{country:'el salvador', code : 'SV'},
{country:'equatorial guinea', code : 'GQ'},
{country:'eritrea', code : 'ER'},
{country:'estonia', code : 'EE'},
{country:'ethiopia', code : 'ET'},
{country:'falkland islands (malvinas)', code : 'FK'},
{country:'faroe islands', code : 'FO'},
{country:'fiji', code : 'FJ'},
{country:'finland', code : 'FI'},
{country:'france', code : 'FR'},
{country:'french guiana', code : 'GF'},
{country:'french polynesia', code : 'PF'},
{country:'french southern territories', code : 'TF'},
{country:'gabon', code : 'GA'},
{country:'gambia', code : 'GM'},
{country:'georgia', code : 'GE'},
{country:'germany', code : 'DE'},
{country:'ghana', code : 'GH'},
{country:'gibraltar', code : 'GI'},
{country:'greece', code : 'GR'},
{country:'greenland', code : 'GL'},
{country:'grenada', code : 'GD'},
{country:'guadeloupe', code : 'GP'},
{country:'guam', code : 'GU'},
{country:'guatemala', code : 'GT'},
{country:'guinea', code : 'GN'},
{country:'guinea-bissau', code : 'GW'},
{country:'guyana', code : 'GY'},
{country:'haiti', code : 'HT'},
{country:'heard island and mcdonald islands', code : 'HM'},
{country:'honduras', code : 'HN'},
{country:'hong kong', code : 'HK'},
{country:'hungary', code : 'HU'},
{country:'iceland', code : 'IS'},
{country:'india', code : 'IN'},
{country:'indonesia', code : 'ID'},
{country:'iran, islamic republic of', code : 'IR'},
{country:'iraq', code : 'IQ'},
{country:'ireland', code : 'IE'},
{country:'israel', code : 'IL'},
{country:'italy', code : 'IT'},
{country:'jamaica', code : 'JM'},
{country:'japan', code : 'JP'},
{country:'jordan', code : 'JO'},
{country:'kazakhstan', code : 'KZ'},
{country:'kenya', code : 'KE'},
{country:'kiribati', code : 'KI'},
{country:'korea, republic of', code : 'KR'},
{country:'kuwait', code : 'KW'},
{country:'kyrgyzstan', code : 'KG'},
{country:'latvia', code : 'LV'},
{country:'lebanon', code : 'LB'},
{country:'lesotho', code : 'LS'},
{country:'liberia', code : 'LR'},
{country:'libyan arab jamahiriya', code : 'LY'},
{country:'liechtenstein', code : 'LI'},
{country:'lithuania', code : 'LT'},
{country:'luxembourg', code : 'LU'},
{country:'macao', code : 'MO'},
{country:'macedonia, the former yugoslav republic of', code : 'MK'},
{country:'madagascar', code : 'MG'},
{country:'malawi', code : 'MW'},
{country:'malaysia', code : 'MY'},
{country:'maldives', code : 'MV'},
{country:'mali', code : 'ML'},
{country:'malta', code : 'MT'},
{country:'marshall islands', code : 'MH'},
{country:'martinique', code : 'MQ'},
{country:'mauritania', code : 'MR'},
{country:'mauritius', code : 'MU'},
{country:'mayotte', code : 'YT'},
{country:'mexico', code : 'MX'},
{country:'micronesia, federated states of', code : 'FM'},
{country:'moldova, republic of', code : 'MD'},
{country:'monaco', code : 'MC'},
{country:'mongolia', code : 'MN'},
{country:'montenegro', code : 'ME'},
{country:'montserrat', code : 'MS'},
{country:'morocco', code : 'MA'},
{country:'mozambique', code : 'MZ'},
{country:'myanmar', code : 'MM'},
{country:'namibia', code : 'NA'},
{country:'nauru', code : 'NR'},
{country:'nepal', code : 'NP'},
{country:'netherlands', code : 'NL'},
{country:'netherlands antilles', code : 'AN'},
{country:'new caledonia', code : 'NC'},
{country:'new zealand', code : 'NZ'},
{country:'nicaragua', code : 'NI'},
{country:'niger', code : 'NE'},
{country:'nigeria', code : 'NG'},
{country:'niue', code : 'NU'},
{country:'norfolk island', code : 'NF'},
{country:'northern mariana islands', code : 'MP'},
{country:'norway', code : 'NO'},
{country:'oman', code : 'OM'},
{country:'pakistan', code : 'PK'},
{country:'palau', code : 'PW'},
{country:'palestinian territory, occupied', code : 'PS'},
{country:'panama', code : 'PA'},
{country:'papua new guinea', code : 'PG'},
{country:'paraguay', code : 'PY'},
{country:'peru', code : 'PE'},
{country:'philippines', code : 'PH'},
{country:'pitcairn', code : 'PN'},
{country:'poland', code : 'PL'},
{country:'portugal', code : 'PT'},
{country:'puerto rico', code : 'PR'},
{country:'qatar', code : 'QA'},
{country:'réunion', code : 'RE'},
{country:'romania', code : 'RO'},
{country:'russian federation', code : 'RU'},
{country:'rwanda', code : 'RW'},
{country:'saint helena', code : 'SH'},
{country:'saint kitts and nevis', code : 'KN'},
{country:'saint lucia', code : 'LC'},
{country:'saint pierre and miquelon', code : 'PM'},
{country:'saint vincent and the grenadines', code : 'VC'},
{country:'samoa', code : 'WS'},
{country:'san marino', code : 'SM'},
{country:'sao tome and principe', code : 'ST'},
{country:'saudi arabia', code : 'SA'},
{country:'senegal', code : 'SN'},
{country:'serbia', code : 'RS'},
{country:'seychelles', code : 'SC'},
{country:'sierra leone', code : 'SL'},
{country:'singapore', code : 'SG'},
{country:'slovakia', code : 'SK'},
{country:'slovenia', code : 'SI'},
{country:'solomon islands', code : 'SB'},
{country:'somalia', code : 'SO'},
{country:'south africa', code : 'ZA'},
{country:'south georgia and the south sandwich islands', code : 'GS'},
{country:'spain', code : 'ES'},
{country:'sri lanka', code : 'LK'},
{country:'sudan', code : 'SD'},
{country:'suriname', code : 'SR'},
{country:'svalbard and jan mayen', code : 'SJ'},
{country:'swaziland', code : 'SZ'},
{country:'sweden', code : 'SE'},
{country:'switzerland', code : 'CH'},
{country:'syrian arab republic', code : 'SY'},
{country:'taiwan', code : 'TW'},
{country:'tajikistan', code : 'TJ'},
{country:'tanzania, united republic of', code : 'TZ'},
{country:'thailand', code : 'TH'},
{country:'timor-leste', code : 'TL'},
{country:'togo', code : 'TG'},
{country:'tokelau', code : 'TK'},
{country:'tonga', code : 'TO'},
{country:'trinidad and tobago', code : 'TT'},
{country:'tunisia', code : 'TN'},
{country:'turkey', code : 'TR'},
{country:'turkmenistan', code : 'TM'},
{country:'turks and caicos islands', code : 'TC'},
{country:'tuvalu', code : 'TV'},
{country:'uganda', code : 'UG'},
{country:'ukraine', code : 'UA'},
{country:'united arab emirates', code : 'AE'},
{country:'united kingdom', code : 'GB'},
{country:'united states', code : 'US'},
{country:'united states minor outlying islands', code : 'UM'},
{country:'uruguay', code : 'UY'},
{country:'uzbekistan', code : 'UZ'},
{country:'vanuatu', code : 'VU'},
{country:'venezuela', code : 'VE'},
{country:'viet nam', code : 'VN'},
{country:'virgin islands, british', code : 'VG'},
{country:'virgin islands, u.s.', code : 'VI'},
{country:'wallis and futuna', code : 'WF'},
{country:'western sahara', code : 'EH'},
{country:'yemen', code : 'YE'},
{country:'zambia', code : 'ZM'},
{country:'zimbabwe', code : 'ZW'}
]
var lang = [{lang:'abkhazian', code : 'ab'},
{lang:'afar', code : 'aa'},
{lang:'afrikaans', code : 'af'},
{lang:'akan', code : 'ak'},
{lang:'albanian', code : 'sq'},
{lang:'amharic', code : 'am'},
{lang:'arabic', code : 'ar'},
{lang:'aragonese', code : 'an'},
{lang:'armenian', code : 'hy'},
{lang:'assamese', code : 'as'},
{lang:'avaric', code : 'av'},
{lang:'avestan', code : 'ae'},
{lang:'aymara', code : 'ay'},
{lang:'azerbaijani', code : 'az'},
{lang:'bambara', code : 'bm'},
{lang:'bashkir', code : 'ba'},
{lang:'basque', code : 'eu'},
{lang:'belarusian', code : 'be'},
{lang:'bengali (bangla)', code : 'bn'},
{lang:'bihari', code : 'bh'},
{lang:'bislama', code : 'bi'},
{lang:'bosnian', code : 'bs'},
{lang:'breton', code : 'br'},
{lang:'bulgarian', code : 'bg'},
{lang:'burmese', code : 'my'},
{lang:'catalan', code : 'ca'},
{lang:'chamorro', code : 'ch'},
{lang:'chechen', code : 'ce'},
{lang:'chichewa, chewa, nyanja', code : 'ny'},
{lang:'chinese', code : 'zh'},
{lang:'chinese (simplified)', code : 'zh-Hans'},
{lang:'chinese (traditional)', code : 'zh-Hant'},
{lang:'chuvash', code : 'cv'},
{lang:'cornish', code : 'kw'},
{lang:'corsican', code : 'co'},
{lang:'cree', code : 'cr'},
{lang:'croatian', code : 'hr'},
{lang:'czech', code : 'cs'},
{lang:'danish', code : 'da'},
{lang:'divehi, dhivehi, maldivian', code : 'dv'},
{lang:'dutch', code : 'nl'},
{lang:'dzongkha', code : 'dz'},
{lang:'english', code : 'en'},
{lang:'esperanto', code : 'eo'},
{lang:'estonian', code : 'et'},
{lang:'ewe', code : 'ee'},
{lang:'faroese', code : 'fo'},
{lang:'fijian', code : 'fj'},
{lang:'finnish', code : 'fi'},
{lang:'french', code : 'fr'},
{lang:'fula, fulah, pulaar, pular', code : 'ff'},
{lang:'galician', code : 'gl'},
{lang:'gaelic (scottish)', code : 'gd'},
{lang:'gaelic (manx)', code : 'gv'},
{lang:'georgian', code : 'ka'},
{lang:'german', code : 'de'},
{lang:'greek', code : 'el'},
{lang:'greenlandic', code : 'kl'},
{lang:'guarani', code : 'gn'},
{lang:'gujarati', code : 'gu'},
{lang:'haitian creole', code : 'ht'},
{lang:'hausa', code : 'ha'},
{lang:'hebrew', code : 'he'},
{lang:'herero', code : 'hz'},
{lang:'hindi', code : 'hi'},
{lang:'hiri motu', code : 'ho'},
{lang:'hungarian', code : 'hu'},
{lang:'icelandic', code : 'is'},
{lang:'ido', code : 'io'},
{lang:'igbo', code : 'ig'},
{lang:'indonesian', code : 'id, in'},
{lang:'interlingua', code : 'ia'},
{lang:'interlingue', code : 'ie'},
{lang:'inuktitut', code : 'iu'},
{lang:'inupiak', code : 'ik'},
{lang:'irish', code : 'ga'},
{lang:'italian', code : 'it'},
{lang:'japanese', code : 'ja'},
{lang:'javanese', code : 'jv'},
{lang:'kalaallisut, greenlandic', code : 'kl'},
{lang:'kannada', code : 'kn'},
{lang:'kanuri', code : 'kr'},
{lang:'kashmiri', code : 'ks'},
{lang:'kazakh', code : 'kk'},
{lang:'khmer', code : 'km'},
{lang:'kikuyu', code : 'ki'},
{lang:'kinyarwanda (rwanda)', code : 'rw'},
{lang:'kirundi', code : 'rn'},
{lang:'kyrgyz', code : 'ky'},
{lang:'komi', code : 'kv'},
{lang:'kongo', code : 'kg'},
{lang:'korean', code : 'ko'},
{lang:'kurdish', code : 'ku'},
{lang:'kwanyama', code : 'kj'},
{lang:'lao', code : 'lo'},
{lang:'latin', code : 'la'},
{lang:'latvian (lettish)', code : 'lv'},
{lang:'limburgish ( limburger)', code : 'li'},
{lang:'lingala', code : 'ln'},
{lang:'lithuanian', code : 'lt'},
{lang:'luga-katanga', code : 'lu'},
{lang:'luganda, ganda', code : 'lg'},
{lang:'luxembourgish', code : 'lb'},
{lang:'manx', code : 'gv'},
{lang:'macedonian', code : 'mk'},
{lang:'malagasy', code : 'mg'},
{lang:'malay', code : 'ms'},
{lang:'malayalam', code : 'ml'},
{lang:'maltese', code : 'mt'},
{lang:'maori', code : 'mi'},
{lang:'marathi', code : 'mr'},
{lang:'marshallese', code : 'mh'},
{lang:'moldavian', code : 'mo'},
{lang:'mongolian', code : 'mn'},
{lang:'nauru', code : 'na'},
{lang:'navajo', code : 'nv'},
{lang:'ndonga', code : 'ng'},
{lang:'northern ndebele', code : 'nd'},
{lang:'nepali', code : 'ne'},
{lang:'norwegian', code : 'no'},
{lang:'norwegian bokmål', code : 'nb'},
{lang:'norwegian nynorsk', code : 'nn'},
{lang:'nuosu', code : 'ii'},
{lang:'occitan', code : 'oc'},
{lang:'ojibwe', code : 'oj'},
{lang:'old church slavonic, old bulgarian', code : 'cu'},
{lang:'oriya', code : 'or'},
{lang:'oromo (afaan oromo)', code : 'om'},
{lang:'ossetian', code : 'os'},
{lang:'pāli', code : 'pi'},
{lang:'pashto, pushto', code : 'ps'},
{lang:'persian (farsi)', code : 'fa'},
{lang:'polish', code : 'pl'},
{lang:'portuguese', code : 'pt'},
{lang:'punjabi (eastern)', code : 'pa'},
{lang:'quechua', code : 'qu'},
{lang:'romansh', code : 'rm'},
{lang:'romanian', code : 'ro'},
{lang:'russian', code : 'ru'},
{lang:'sami', code : 'se'},
{lang:'samoan', code : 'sm'},
{lang:'sango', code : 'sg'},
{lang:'sanskrit', code : 'sa'},
{lang:'serbian', code : 'sr'},
{lang:'serbo-croatian', code : 'sh'},
{lang:'sesotho', code : 'st'},
{lang:'setswana', code : 'tn'},
{lang:'shona', code : 'sn'},
{lang:'sichuan yi', code : 'ii'},
{lang:'sindhi', code : 'sd'},
{lang:'sinhalese', code : 'si'},
{lang:'siswati', code : 'ss'},
{lang:'slovak', code : 'sk'},
{lang:'slovenian', code : 'sl'},
{lang:'somali', code : 'so'},
{lang:'southern ndebele', code : 'nr'},
{lang:'spanish', code : 'es'},
{lang:'sundanese', code : 'su'},
{lang:'swahili (kiswahili)', code : 'sw'},
{lang:'swati', code : 'ss'},
{lang:'swedish', code : 'sv'},
{lang:'tagalog', code : 'tl'},
{lang:'tahitian', code : 'ty'},
{lang:'tajik', code : 'tg'},
{lang:'tamil', code : 'ta'},
{lang:'tatar', code : 'tt'},
{lang:'telugu', code : 'te'},
{lang:'thai', code : 'th'},
{lang:'tibetan', code : 'bo'},
{lang:'tigrinya', code : 'ti'},
{lang:'tonga', code : 'to'},
{lang:'tsonga', code : 'ts'},
{lang:'turkish', code : 'tr'},
{lang:'turkmen', code : 'tk'},
{lang:'twi', code : 'tw'},
{lang:'uyghur', code : 'ug'},
{lang:'ukrainian', code : 'uk'},
{lang:'urdu', code : 'ur'},
{lang:'uzbek', code : 'uz'},
{lang:'venda', code : 've'},
{lang:'vietnamese', code : 'vi'},
{lang:'volapük', code : 'vo'},
{lang:'wallon', code : 'wa'},
{lang:'welsh', code : 'cy'},
{lang:'wolof', code : 'wo'},
{lang:'western frisian', code : 'fy'},
{lang:'xhosa', code : 'xh'},
{lang:'yiddish', code : 'yi, ji'},
{lang:'yoruba', code : 'yo'},
{lang:'zhuang, chuang', code : 'za'},
{lang:'zulu', code : 'zu'},
{lang:'slovakia', code : 'SK'},
{lang:'slovenia', code : 'SI'},
{lang:'solomon islands', code : 'SB'},
{lang:'somalia', code : 'SO'},
{lang:'south africa', code : 'ZA'},
{lang:'south georgia and the south sandwich islands', code : 'GS'},
{lang:'spain', code : 'ES'},
{lang:'sri lanka', code : 'LK'},
{lang:'sudan', code : 'SD'},
{lang:'suriname', code : 'SR'},
{lang:'svalbard and jan mayen', code : 'SJ'},
{lang:'swaziland', code : 'SZ'},
{lang:'sweden', code : 'SE'},
{lang:'switzerland', code : 'CH'},
{lang:'syrian arab republic', code : 'SY'},
{lang:'taiwan', code : 'TW'},
{lang:'tajikistan', code : 'TJ'},
{lang:'tanzania, united republic of', code : 'TZ'},
{lang:'thailand', code : 'TH'},
{lang:'timor-leste', code : 'TL'},
{lang:'togo', code : 'TG'},
{lang:'tokelau', code : 'TK'},
{lang:'tonga', code : 'TO'},
{lang:'trinidad and tobago', code : 'TT'},
{lang:'tunisia', code : 'TN'},
{lang:'turkey', code : 'TR'},
{lang:'turkmenistan', code : 'TM'},
{lang:'turks and caicos islands', code : 'TC'},
{lang:'tuvalu', code : 'TV'},
{lang:'uganda', code : 'UG'},
{lang:'ukraine', code : 'UA'},
{lang:'united arab emirates', code : 'AE'},
{lang:'united kingdom', code : 'GB'},
{lang:'united states', code : 'US'},
{lang:'united states minor outlying islands', code : 'UM'},
{lang:'uruguay', code : 'UY'},
{lang:'uzbekistan', code : 'UZ'},
{lang:'vanuatu', code : 'VU'},
{lang:'venezuela', code : 'VE'},
{lang:'viet nam', code : 'VN'},
{lang:'virgin islands, british', code : 'VG'},
{lang:'virgin islands, u.s.', code : 'VI'},
{lang:'wallis and futuna', code : 'WF'},
{lang:'western sahara', code : 'EH'},
{lang:'yemen', code : 'YE'},
{lang:'zambia', code : 'ZM'},
{lang:'zimbabwe', code : 'ZW'}
]
 
//https://deviceatlas.com/blog/list-of-user-agent-strings
var borwserAgent = [
    {type : "chrome", agent : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"},
    {type : "edge", agent : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134"},
    {type : "firefox", agent : "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0"},
    {type : "opera", agent : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36 OPR/54.0.2952.54"},
    {type : "ie", agent : "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"},
    // {type : "chrome-andriod-phone", agent : "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"},
    // {type : "chrome-ios-phone", agent : "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"},
    {type : "webview", agent : "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.65 Mobile Safari/537.36"},
    {type : "safari", agent : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9"},
    // {type : "googlebot", agent : "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"},
    // {type : "bingbot", agent : "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)"},
    // {type : "yahoobot", agent : "Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)"},
    // {type : "kindle4", agent : "Mozilla/5.0 (X11; U; Linux armv7l like Android; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/533.2+ Kindle/3.0+"}
];

var viewport = [
    { type : "chrome", size : [{width : 1920 , height : 920},{width : 1440 , height : 900}, {width : 1280 , height : 800}, {width : 1280 , height : 950}] },
    { type : "edge", size : [{ width : 1920 , height : 963}, {width : 1280 , height : 800}, {width : 1440 , height : 900}, {width : 1280 , height : 950}] },
    { type : "firefox", size : [{ width : 1920 , height : 966}, { width : 1920 , height : 963}, {width : 1280 , height : 950}, {width : 1280 , height : 800}, {width : 1440 , height : 900}] },
    { type : "opera", size : [{ width : 1880 , height : 943}, {width : 1280 , height : 950}, {width : 1440 , height : 900}, {width : 1280 , height : 800} ] },
    { type : "ie", size : [{ width : 1920 , height : 920}, {width : 1920 , height : 920}] },
    // { type : "chrome-andriod-phone", size : { width : 1440 , height : 2560} },
    // { type : "chrome-ios-phone", size : { width : 1080 , height : 1920} },
]

var defaultBrowsers = ["chrome", "edge", "firefox","opera", "ie"];
var defaultBrowserCount = defaultBrowsers.length;

function getRandomBrowser(){
    var min = 0, max = defaultBrowserCount - 1;
    var pointer = Math.floor(Math.random() * (max - min + 1)) + min;
    return defaultBrowsers[pointer];
}

function getRandomViewPort(ports){
    if(Array.isArray(ports)){
        var min = 0, max = ports.length - 1;
        var pointer = Math.floor(Math.random() * (max - min + 1)) + min;
        return ports[pointer];
    }else{
        return ports;
    }    
}

function getTimeIntervalForCache(){
    request({
        url: proxyIpServerURL,
        method: "GET",
        timeout: 5000,
        followRedirect: false
    },function(error, response, body){
        if(!error && response.statusCode == 200){
            try{
                cacheDuration = JSON.parse(response.toJSON().body).WaitDuration;
                console.log("Cache timer set to : " + cacheDuration + ", at : " + Date.now());
            }
            catch(e){
                console.log("Error in JSON, Continue with old value. Value is :" + cacheDuration);
            }                
        }else{
            console.log("Sync interval for cahce is failing, set to old value :" + cacheDuration);
        }
    });
  }

function StartTimerForCache(){
    setInterval(getTimeIntervalForCache, 300000);
}

function startRedisConnection(){
    redisClient.on('connect', function() {
        console.log("Redis client connected " + config.redisServer);
      });
    redisClient.on('error', function (err) {
        console.log('Something went wrong ' + err);
    });
}

function onAppStart(){
}

module.exports = {
    getbrowserSession : async function(proxy, country, language, browserType){
        var session = undefined //await getCache(proxy);
        if(session) return JSON.parse(session);
        if(!browserType) browserType = getRandomBrowser();
        session = this.createBrowserSession(proxy, country, language, browserType);
        //await setCache(proxy,session);
        return session;
    },
    createBrowserSession : function(proxy, country, language, browserType){
        return {
            args : this.getArgs(browserType, country, language, proxy),
            viewPort : this.getViewPort(browserType),
            userAgent: this.getUserAgent(browserType)
        }
    },
    getArgs : function(browserType, country, language, proxy){
        var arg = [];
        arg.push("--user-agent=" + this.getUserAgent(browserType));
        arg.push("--lang=" + this.getLanguage(country,language));
        if(proxy){
            arg.push("--proxy-server=" + proxy);
        }
        return arg;
    },
    getUserAgent : function(browserType){
        var defaultvalue = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36";
        if(!browserType) return defaultvalue;
        browserType = browserType.toLowerCase();
        var bagent = borwserAgent.filter(function(ele){
            return ele.type === browserType;
        });
        if(bagent.length > 0){
            return bagent[0].agent;
        }else{
            return defaultvalue;
        }
    },
    getLanguage : function(country, langauge){
        var countryCode = "";
        var languageCode = "";
            if(country) country = country.toLowerCase();
            if(langauge) langauge = langauge.toLowerCase();
            var c = countries.filter(function(ele){
                return ele.country === country;
            });
            var l = lang.filter(function(ele){
                return ele.lang === langauge;
            });
            if(c.length > 0){
                countryCode = c[0].code; 
            }else {
                countryCode ="en";
            }
            if(l.length > 0){
                languageCode = l[0].code;
            }else{
                languageCode = "US,en";
            }
        return countryCode + "-" + languageCode;
    },
    getViewPort : function(browserType){
       var v = viewport.filter(function(ele){
            return ele.type === browserType;
       });
       if( v.length > 0){
           if(Array.isArray(v[0].size)){
                return getRandomViewPort(v[0].size);
           }else{
            return v[0].size;
           }           
       }else{
           return { width : 1920 , height : 920 };
       }
    }
}

onAppStart();
