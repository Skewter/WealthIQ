fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery.noConflict();fbuilderjQuery(window).on('pageshow',function(event){if(typeof event.originalEvent['persisted']!='undefined'&&event.originalEvent['persisted'])location.reload();});fbuilderjQuery.fbuilderjQueryGenerator=function(){(function($){if(!('fbuilder' in $))
{$.fbuilder=$.fbuilder||{};$.fbuilder['objName']='fbuilderjQuery';;(function(root){var lib={};lib.cf_logical_version='0.1';lib.IF=function(condition,if_true,if_false){if(condition){return(typeof if_true==='undefined')?true:if_true;}else{return(typeof if_false==='undefined')?false:if_false;}};lib.AND=function(){for(var i=0,h=arguments.length;i<h;i++){if(!arguments[i]){return false;}}
return true;};lib.OR=function(){for(var i=0,h=arguments.length;i<h;i++){if(arguments[i]){return true;}}
return false;};lib.NOT=function(_term){return(typeof _term=='undefined')?true:!_term;};lib.IN=function(_term,_values,_case_sensitive){function _reduce(str){var str=String(str).replace(/^\s+/,'').replace(/\s+$/,'').replace(/\s+/,' ');if(typeof _case_sensitive=='undefined'||!_case_sensitive)str=str.toLowerCase()
return str;};_term=_reduce(_term);if(typeof _values=='string')
{if($.fbuilder.isNumeric(_term)&&$.fbuilder.isNumeric(_values))return _term==_values;return _reduce(_values).indexOf(_term)!=-1;}
else if(typeof _values=='object'&&_values.length){for(var i=0,h=_values.length;i<h;i++)if(_reduce(_values[i])==_term)return true;}
return false;};if(window.CFFCOUNTIF==undefined){window['CFFCOUNTIF']=window['cffcountif']=function(){var r=0,l=arguments.length,t,callback;if(l){if(typeof arguments[l-1]=='function'){callback=arguments[l-1];}else{callback=(function(last_item){return function(x){return x==last_item;};})(arguments[l-1]);}
l-=1;for(var i=0;i<l;i++)
{if(Array.isArray(arguments[i]))
r+=CFFCOUNTIF.apply(this,arguments[i].concat(callback));else if(jQuery.isPlainObject(arguments[i]))
r+=CFFCOUNTIF.apply(this,Object.values(arguments[i]).concat(callback));else
r+=callback(arguments[i])?1:0;}}
return r;};}
if(window.CFFFILTER==undefined){window['CFFFILTER']=window['cfffilter']=function(){var r=[],l=arguments.length,t,callback=function(){return true;};if(l){if(typeof arguments[l-1]=='function'){callback=arguments[l-1];l-=1;}
for(var i=0;i<l;i++)
{if(Array.isArray(arguments[i]))
r=r.concat(CFFFILTER.apply(this,arguments[i].concat(callback)));else if(jQuery.isPlainObject(arguments[i]))
r=r.concat(CFFFILTER.apply(this,Object.values(arguments[i]).concat(callback)));else if(callback(arguments[i]))
r.push(arguments[i]);}}
return r;};}
root.CF_LOGICAL=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['default']={'prefix':'','callback':function()
{var math_prop=["LN10","PI","E","LOG10E","SQRT2","LOG2E","SQRT1_2","LN2","cos","pow","log","tan","sqrt","asin","abs","exp","atan2","atanh","random","acos","atan","sin"];for(var i=0,h=math_prop.length;i<h;i++)
{if(!window[math_prop[i]])
{if('random'!=math_prop[i]){window[math_prop[i]]=window[math_prop[i].toUpperCase()]=Math[math_prop[i]];}else{window[math_prop[i]]=window[math_prop[i].toUpperCase()]=function(args){args=args||{};let _n=Math.random(),_min='min' in args?Math.max(args['min'],0):0,_max='max' in args?Math.min(args['max'],Number.MAX_SAFE_INTEGER):(_min?Number.MAX_SAFE_INTEGER:1),_int='int' in args&&args['int']?1:0,_tmp;if(_int){_min=Math.ceil(_min);_max=Math.floor(_max);}
_tmp=Math.min(_min,_max);_max=Math.max(_min,_max);_min=_tmp;if(_int){_n=_n*(_max-_min+1)+_min;_n=Math.floor(_n);}else{_n=_n*(_max-_min)+_min;}
return _n;};}}}
if(Number.prototype.LENGTH==undefined)
{Number.prototype.LENGTH=function(){return this.valueOf().toString().length;};}
if(window.REMAINDER==undefined)
{window.REMAINDER=window.remainder=function(a,b){return a%b;};}
function ROUNDx(operation,num,y)
{if(y&&y!=0)
{var r=operation(num/y)*y,p=(new String(y)).split('.');if(p.length==2)r=PREC(r,p[1].length);return r;}
else
{return operation(num);}};if(window.ROUND==undefined)
{window.ROUND=window.round=function(num,y)
{if(y)return ROUNDx(Math.round,num,y);return ROUNDx(Math.round,num);}}
if(window.FLOOR==undefined)
{window.FLOOR=window.floor=function(num,y)
{if(y)return ROUNDx(Math.floor,num,y);return ROUNDx(Math.floor,num);}}
if(window.CEIL==undefined)
{window.CEIL=window.ceil=function(num,y)
{if(y)return ROUNDx(Math.ceil,num,y);return ROUNDx(Math.ceil,num);}}
if(window.PREC==undefined)
{window.PREC=window.prec=function(num,pr,if_not_integer)
{pr=pr||0;if_not_integer=if_not_integer||0;if(/^\d+$/.test(pr)&&$.fbuilder.isNumeric(num))
{if(Math.floor(num)!=num||!if_not_integer)
{var f=Math.pow(10,pr);num=Math.round(num*f)/f;return num.toFixed(pr);}}
return num;};}
if(window.TOBASE==undefined)
{window.TOBASE=window.tobase=window.toBase=window.ToBase=function(num,_from,_to)
{_from=_from||10;_to=_to||10;if(_from!=_to){try{var _decimal=parseInt(num,_from);return _decimal.toString(_to);}catch(err){}}
return num;};}
if(window.CDATE==undefined)
{window.CDATE=window.cdate=function(num,format)
{format=(typeof format!='undefined')?format:((typeof window.DATETIMEFORMAT!='undefined')?window.DATETIMEFORMAT:'dd/mm/yyyy');if(isFinite(num*1))
{var time_only=(Math.abs(num)<1);num=Math.round(num*86400000);if(time_only)num+=(new Date(2021,01,01,0,0,0,0)).valueOf();var date=new Date(num),d=(time_only)?0:date.getDate(),m=(time_only)?0:date.getMonth()+1,y=(time_only)?0:date.getFullYear(),h=date.getHours(),i=date.getMinutes(),s=date.getSeconds(),a='';m=(m<10)?'0'+m:m;d=(d<10)?'0'+d:d;if(/a/.test(format))
{a=(h>=12)?'pm':'am';h=h%12;h=(h==0)?12:h;}
h=(h<10)?'0'+h:h;i=(i<10)?'0'+i:i;s=(s<10)?'0'+s:s;return format.replace(/\by{2}\b/i,y<10?'0'+y:y%100).replace(/y+/i,y<10?'000'+y:((y<100)?'00'+y:y)).replace(/m+/i,m).replace(/d+/i,d).replace(/h+/i,h).replace(/i+/i,i).replace(/s+/i,s).replace(/a+/i,a);}
return num;};}
if(window.SUM==undefined)
{window.SUM=window.sum=function()
{var r=0,l=arguments.length,t,callback=function(x){return x;};if(l){if(typeof arguments[l-1]=='function'){callback=arguments[l-1];l-=1;}
for(var i=0;i<l;i++)
{if(Array.isArray(arguments[i]))
r+=SUM.apply(this,arguments[i].concat(callback));else if(jQuery.isPlainObject(arguments[i]))
r+=SUM.apply(this,Object.values(arguments[i]).concat(callback));else
{t=arguments[i];t=callback(t)*1;if(!isNaN(t))
{r+=t;}}}}
return r;};}
if(window.SIGMA==undefined)
{window.SIGMA=window.sigma=function()
{var r=0,l=arguments.length,n,m,callback,t;if(l==3){n=parseInt(arguments[0]);m=parseInt(arguments[1]);callback=arguments[2];if(!isNaN(n)&&!isNaN(m)&&typeof callback=='function'){for(var i=n;i<=m;i++){t=callback(i);if(!isNaN(t))r+=t;}}}
return r;};}
if(window.CONCATENATE==undefined)
{window.CONCATENATE=window.concatenate=function()
{var r='';for(var i in arguments)
{if(Array.isArray(arguments[i]))
r+=CONCATENATE.apply(this,arguments[i]);else if(jQuery.isPlainObject(arguments[i]))
r+=CONCATENATE.apply(this,Object.values(arguments[i]));else r+=(new String(arguments[i]));}
return r;};}
if(window.AVERAGE==undefined)
{window.AVERAGE=window.average=function()
{var _c=0;function c(v)
{if(Array.isArray(v)&&v.length)for(var i in v)c(v[i]);else _c++;}
for(var i in arguments)c(arguments[i]);return SUM.apply(this,arguments)/_c;};}
if(window.GCD==undefined)
{window.GCD=window.gcd=function(a,b)
{if(!b)return a;return GCD(b,a%b);};}
if(window.LCM==undefined)
{window.LCM=window.lcm=function(a,b)
{return(!a||!b)?0:ABS((a*b)/GCD(a,b));};}
if(window.LOGAB==undefined)
{window.LOGAB=window.logab=function(a,b)
{return LOG(a)/LOG(b);};}
if(window.NTHROOT==undefined)
{window.NTHROOT=window.nthroot=function(a,b)
{var n=(a<0&&b%2==1)?-1:1;return n*POW(Math.abs(a),1/b);};}
if(window.MIN==undefined)
{window.MIN=window.min=function()
{var l=[];for(var i in arguments)
var l=l.concat(arguments[i]);return Math.min.apply(this,l);};}
if(window.MAX==undefined)
{window.MAX=window.max=function()
{var l=[];for(var i in arguments)
var l=l.concat(arguments[i]);return Math.max.apply(this,l);};}
if(window.RADIANS==undefined)
{window.RADIANS=window.radians=function(a){return a*PI/180;};}
if(window.DEGREES==undefined)
{window.DEGREES=window.degrees=function(a){return a*180/PI;};}
if(window.FACTORIAL==undefined)
{window.FACTORIAL=window.factorial=function(a){if(a<0||FLOOR(a)!=a)return null;var r=1;for(var i=1;i<=a;i++)r*=i
return r;};}
if(window.FRACTIONTODECIMAL==undefined)
{window.FRACTIONTODECIMAL=window.fractiontodecimal=window.fractionToDecimal=function(v){try
{var x=v.toString().split('/');return parseInt(x[0],10)/((1 in x)?parseInt(x[1],10):1);}catch(err){return v;}};}
if(window.DECIMALTOFRACTION==undefined)
{window.DECIMALTOFRACTION=window.decimaltofraction=window.decimalToFraction=function(v){try
{if(v*1==parseInt(v,10))return parseInt(v,10);var x=v.toString().split('.'),top=parseInt(x[0]+''+x[1]),bottom=Math.pow(10,x[1].length),y=gcd(Math.abs(top),bottom);return(top/y)+'/'+(bottom/y);}catch(err){return v;}};}
if(window.FRACTIONSUM==undefined)
{window.FRACTIONSUM=window.fractionsum=function(){try
{var _aux=function(a,b){var d1,d2,m,r;a=(a+'/1').split('/');b=(b+'/1').split('/');d1=a[0]*b[1]+a[1]*b[0];d2=a[1]*b[1];if(isNaN(d1)||isNaN(d2))throw'Invalid numbers';m=abs(gcd(d1,d2));r=d1/m+IF(d2/m==1,'','/'+d2/m);return jQuery.isNumeric(r)?r*1:r;};var r=0;for(var i in arguments)r=_aux(r,arguments[i]);return r;}catch(err){}};}
if(window.FRACTIONSUB==undefined)
{window.FRACTIONSUB=window.fractionsub=function(){try
{var _aux=function(a,b){var d1,d2,m,r;a=(a+'/1').split('/');b=(b+'/1').split('/');d1=a[0]*b[1]-a[1]*b[0];d2=a[1]*b[1];if(isNaN(d1)||isNaN(d2))throw'Invalid numbers';m=abs(gcd(d1,d2));r=d1/m+IF(d2/m==1,'','/'+d2/m);return jQuery.isNumeric(r)?r*1:r;};var r=0;for(var i in arguments)
{if(i==0)r=_aux(arguments[i],r);else r=_aux(r,arguments[i]);}
return r;}catch(err){}};}
if(window.FRACTIONMULT==undefined)
{window.FRACTIONMULT=window.fractionmult=function(){try
{var _aux=function(a,b){var d1,d2,m,r;a=(a+'/1').split('/');b=(b+'/1').split('/');d1=a[0]*b[0];d2=a[1]*b[1];if(isNaN(d1)||isNaN(d2))throw'Invalid numbers';m=abs(gcd(d1,d2));r=d1/m+IF(d2/m==1,'','/'+d2/m);return jQuery.isNumeric(r)?r*1:r;};var r=1;for(var i in arguments)r=_aux(r,arguments[i]);return r;}catch(err){}};}
if(window.FRACTIONDIV==undefined)
{window.FRACTIONDIV=window.fractiondiv=function(){try
{var _aux=function(a,b){var d1,d2,m,r;a=(a+'/1').split('/');b=(b+'/1').split('/');d1=a[0]*b[1];d2=a[1]*b[0];if(isNaN(d1)||isNaN(d2))throw'Invalid numbers';m=abs(gcd(d1,d2));r=d1/m+IF(d2/m==1,'','/'+d2/m);return jQuery.isNumeric(r)?r*1:r;};var r=1;for(var i in arguments)
{if(i==0)r=_aux(arguments[i],r);else r=_aux(r,arguments[i]);}
return r;}catch(err){}};}
if(window.SCIENTIFICTODECIMAL==undefined)
{window.SCIENTIFICTODECIMAL=window.scientifictodecimal=function(x){x*=1;if(Math.abs(x)<1.0)
{var e=parseInt(x.toString().split('e-')[1]);if(e)
{x*=Math.pow(10,e-1);x='0.'+(new Array(e)).join('0')+x.toString().substring(2);}}
else
{var e=parseInt(x.toString().split('+')[1]);if(e>20)
{e-=20;x/=Math.pow(10,e);x+=(new Array(e+1)).join('0');}}
return x;};}
if(window.DECIMALTOSCIENTIFIC==undefined)
{window.DECIMALTOSCIENTIFIC=window.decimaltoscientific=function(x){var v=Number(x).toExponential();return(isNaN(v)||x=='')?x:v;};}
if(window.FORMAT==undefined)
{window.FORMAT=window.format=function(x,o){return fbuilderjQuery.fbuilder.calculator.format(x,o);};}
if(window.UNFORMAT==undefined)
{window.UNFORMAT=window.unformat=function(x,o){try
{var s;try
{s=(typeof o!='undefined'&&'decimalsymbol' in o)?o['decimalsymbol']:'.';}catch(err){s='.';}
return(x+'').replace(new RegExp('[^\\-\\d\\'+s+']','gi'),'').replace(new RegExp('\\'+s,'gi'),'.')*1;}
catch(err){return x;}};}
if(window.SINGLEDIGIT==undefined)
{window.SINGLEDIGIT=window.singledigit=function(v,callback){let result=v;try
{callback=typeof callback=='function'?callback:function(d){return SUM(d);};v=String(v).split('');do{result=callback(v);v=String(result).split('');}while(10<=result);}
catch(err){if('console' in window)console.log(err);}
return result;};}
fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['default']['prefix'],CF_LOGICAL);},'validator':function(v)
{return(typeof v=='number')?isFinite(v):(typeof v!='undefined');}};;(function(root){var lib={},default_format=(typeof window.DATETIMEFORMAT!='undefined')?window.DATETIMEFORMAT:'yyyy-mm-dd hh:ii:ss a',regExp='';Date.prototype.valid=function(){return isFinite(this);};function _processArguments(date,format,leading_zeros){if(arguments.length==1&&(typeof date=='boolean'||date==0||date==1))
{leading_zeros=date;date=undefined;format=undefined;}
leading_zeros=leading_zeros||0;return{date:date,format:format,leading_zeros:leading_zeros};}
function _leadingZeros(n){return n<10?0+''+n:n;};function _getDateObj(date,format){try{if(date instanceof Date)return date;}catch(err){}
var d=new Date();format=format||default_format;if(typeof date!='undefined'){if(typeof date=='number'){d=new Date(date*86400000);}else if(typeof date=='string'){var p;if(null!=(p=/(\d{4})[\/\-\.](\d{1,2})[\/\-\.](\d{1,2})/.exec(date))){if(/y{4}[\/\-\.]m{2}[\/\-\.]d{2}/i.test(format)){d=new Date(p[1],(p[2]-1),p[3]);}else{d=new Date(p[1],(p[3]-1),p[2]);}
date=date.replace(p[0],'');}
if(null!=(p=/(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})/.exec(date))){if(/d{2}[\/\-\.]m{2}[\/\-\.]y{4}/i.test(format)){d=new Date(p[3],(p[2]-1),p[1]);}else{d=new Date(p[3],(p[1]-1),p[2]);}
date=date.replace(p[0],'');}
if(null!=(p=/(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2})/.exec(date))){if(/d{2}[\/\-\.]m{2}[\/\-\.]y{2}/i.test(format)){d=new Date(2000+p[3]*1,(p[2]-1),p[1]);}else if(/m{2}[\/\-\.]d{2}[\/\-\.]y{2}/i.test(format)){d=new Date(2000+p[3]*1,(p[1]-1),p[2]);}else if(/y{2}[\/\-\.]d{2}[\/\-\.]m{2}/i.test(format)){d=new Date(2000+p[1]*1,(p[3]-1),p[2]);}else if(/y{2}[\/\-\.]m{2}[\/\-\.]d{2}/i.test(format)){d=new Date(2000+p[1]*1,(p[2]-1),p[3]);}
date=date.replace(p[0],'');}
if(null!=(p=/(\d{1,2})[:\.](\d{1,2})([:\.](\d{1,2}))?\s*([ap]m)?/i.exec(date))){if(/h+/i.test(format)){if(typeof p[5]!='undefined'&&/pm/i.test(p[5])&&p[1]*1!=12)p[1]=(p[1]*1+12)%24;if(typeof p[5]!='undefined'&&/am/i.test(p[5])&&p[1]*1==12)p[1]=0;d.setHours(p[1]);}
if(/i+/i.test(format))d.setMinutes(p[2]);if(/s+/i.test(format)&&(typeof p[4]!='undefined'))d.setSeconds(p[4]);}}else{d=new Date(date);}
d.setMilliseconds(0);if(!/h+/i.test(format))d.setHours(0);if(!/i+/i.test(format))d.setMinutes(0);if(!/s+/i.test(format))d.setSeconds(0);}
return d;};lib.cf_datetime_version='0.1';lib.DATEOBJ=function(date,format){var d=_getDateObj(date,format);if(d.valid())return d;return false;};lib.LEADINGZERO=function(v){if(!isNaN(v)&&0<=v){v=_leadingZeros(v);}
return v;};lib.YEAR=function(date,format){var d=_getDateObj(date,format);if(d.valid())return d.getFullYear();return false;};lib.MONTH=function(date,format,leading_zeros){var tmp=_processArguments.apply(null,arguments);date=tmp['date'];format=tmp['format'];leading_zeros=tmp['leading_zeros'];var d=_getDateObj(date,format),r=false;if(d.valid()){r=d.getMonth()+1;if(leading_zeros)r=_leadingZeros(r);}
return r;};lib.MONTHNAME=function(date,format,locale){var d=lib.DATEOBJ(date,format),r=false;if(d){locale=locale||'default';try{r=d.toLocaleString(locale,{month:'long'});}catch(err){r=d.toLocaleString('default',{month:'long'});}}
return r;};lib.WEEKDAYNAME=function(date,format,locale){var d=lib.DATEOBJ(date,format),r=false;if(d){locale=locale||'default';try{r=d.toLocaleString(locale,{weekday:'long'});}catch(err){r=d.toLocaleString('default',{weekday:'long'});}}
return r;};lib.DAY=function(date,format,leading_zeros){var tmp=_processArguments.apply(null,arguments);date=tmp['date'];format=tmp['format'];leading_zeros=tmp['leading_zeros'];var d=_getDateObj(date,format),r=false;if(d.valid())
{r=d.getDate();if(leading_zeros)r=_leadingZeros(r);}
return r;};lib.WEEKDAY=function(date,format,leading_zeros){var tmp=_processArguments.apply(null,arguments);date=tmp['date'];format=tmp['format'];leading_zeros=tmp['leading_zeros'];var d=_getDateObj(date,format),r=false;if(d.valid()){r=d.getDay()+1;if(leading_zeros)r=_leadingZeros(r);}
return r;};lib.WEEKNUM=function(date,format,leading_zeros){var tmp=_processArguments.apply(null,arguments);date=tmp['date'];format=tmp['format'];leading_zeros=tmp['leading_zeros'];var d=_getDateObj(date,format),i,n,r=false;if(d.valid()){i=new Date(d.getFullYear(),0,1,0,0,0,0);n=(d-i)/(24*60*60*1000);r=Math.max(Math.ceil((n+1)/7),1);if(leading_zeros)r=_leadingZeros(r);}
return r;};lib.HOURS=function(date,format,leading_zeros){var tmp=_processArguments.apply(null,arguments);date=tmp['date'];format=tmp['format'];leading_zeros=tmp['leading_zeros'];var d=_getDateObj(date,format),r=false;if(d.valid()){r=d.getHours();if(leading_zeros)r=_leadingZeros(r);}
return r;};lib.MINUTES=function(date,format,leading_zeros){var tmp=_processArguments.apply(null,arguments);date=tmp['date'];format=tmp['format'];leading_zeros=tmp['leading_zeros'];var d=_getDateObj(date,format),r=false;if(d.valid()){r=d.getMinutes();if(leading_zeros)r=_leadingZeros(r);}
return r;};lib.SECONDS=function(date,format,leading_zeros){var tmp=_processArguments.apply(null,arguments);date=tmp['date'];format=tmp['format'];leading_zeros=tmp['leading_zeros'];var d=_getDateObj(date,format),r=false;if(d.valid()){r=d.getSeconds();if(leading_zeros)r=_leadingZeros(r);}
return r;};lib.NOW=function(){return _getDateObj();};lib.TODAY=function(){var d=_getDateObj();d.setHours(0);d.setMinutes(0);d.setSeconds(0);return d;};lib.EOMONTH=function(d,n){n=(n||0)+1;var d1=_getDateObj(d);d1.setDate(1);d1.setMonth(d1.getMonth()+n);d1.setDate(d1.getDate()-1);return d1;};lib.DATEDIFF=function(date_one,date_two,date_format,return_format){var d1=_getDateObj(date_one,date_format),d2=_getDateObj(date_two,date_format),diff,r={'years':-1,'months':-1,'days':-1,'hours':-1,'minutes':-1,'seconds':-1};if(d1.valid()&&d2.valid()){if(d1.valueOf()>d2.valueOf()){d2=_getDateObj(date_one,date_format);d1=_getDateObj(date_two,date_format);}
diff=d2.valueOf()-d1.valueOf();if(typeof return_format=='undefined'||return_format=='d'){r.days=Math.floor(diff/86400000);}else if(/[m,y]/i.test(return_format)){var months,days,tmp;months=(d2.getFullYear()-d1.getFullYear())*12;months-=d1.getMonth()+1;months+=d2.getMonth()+1;days=d2.getDate()-d1.getDate();if(days<0){months--;tmp=new Date(d2.getFullYear(),d2.getMonth());tmp.setDate(tmp.getDate()-1);tmp.setDate(d1.getDate());if(d1.getDate()!=tmp.getDate()){tmp=new Date(d2.getFullYear(),d2.getMonth());tmp.setDate(tmp.getDate()-1);}
days=Math.abs(d2.valueOf()-tmp.valueOf())/(24*60*60*1000);}
r.months=months;r.days=Math.floor(days);if(/y/i.test(return_format)){r.years=Math.floor(months/12);r.months=months%12;}}
if(/h/i.test(return_format))r.hours=Math.floor(diff/3600000);else r.hours=Math.floor(diff%86400000/3600000);if(/i/i.test(return_format))r.minutes=Math.floor(diff/60000);else r.minutes=Math.floor(diff%86400000%3600000/60000);if(/s/i.test(return_format))r.seconds=Math.floor(diff/1000);else r.seconds=Math.floor(diff%86400000%3600000%60000/1000);}
return r;};if(typeof NETWORKDAYS=='undefined'){lib.NETWORKDAYS=lib.NETWORKDAYS=function(start_date,end_date,date_format,holidays,holidays_format){var tmp,result=0,min_date_tmp,max_date_tmp;date_format=date_format||'mm/dd/yyyy';holidays=holidays||[];holidays_format=holidays_format||date_format;start_date=DATEOBJ(start_date,date_format);end_date=DATEOBJ(end_date,date_format);min_date_tmp=Math.min(start_date,end_date);max_date_tmp=Math.max(start_date,end_date);start_date=new Date(min_date_tmp);end_date=new Date(max_date_tmp);if(!Array.isArray(holidays))holidays=[holidays];for(var i=0,h=holidays.length;i<h;i++){holidays[i]=GETDATETIMESTRING(DATEOBJ(holidays[i],holidays_format),'yyyy-mm-dd');}
while(start_date<=end_date){tmp=start_date.getDay();if(0!=tmp&&6!=tmp){tmp=GETDATETIMESTRING(start_date,'yyyy-mm-dd');if(holidays.indexOf(tmp)==-1)result++;}
start_date.setDate(start_date.getDate()+1);}
return result;};}
lib.DATETIMESUM=function(date,format,number,to_increase,ignore_weekend){var d=_getDateObj(date,format);ignore_weekend=ignore_weekend||false;if(d.valid()){if(typeof number!='number'&&isNaN(parseFloat(number)))number=0;else number=parseFloat(number);if(typeof to_increase=='undefined')to_increase='d';if(/y+/i.test(to_increase))d.setFullYear(d.getFullYear()+number);else if(/d+/i.test(to_increase)){if(ignore_weekend)
{var n=number<0?Math.ceil(number):Math.floor(number),s=number<0?-1:1;while(n)
{d.setDate(d.getDate()+s);if(0<d.getDay()&&d.getDay()<6)n-=s;}}
else d.setDate(d.getDate()+number);}
else if(/m+/i.test(to_increase)){var tmp=DAY(d)
d.setDate(1);d.setMonth(d.getMonth()+number);d=EOMONTH(d);d.setDate(MIN(tmp,DAY(d)));}
else if(/h+/i.test(to_increase))d.setHours(d.getHours()+number);else if(/i+/i.test(to_increase))d.setMinutes(d.getMinutes()+number);else d.setSeconds(d.getSeconds()+number);return d;}
return false;};lib.DECIMALTOTIME=lib.decimaltotime=function(value,from_format,to_format){function complete(v,f)
{if(1<f[0].length&&v<10)v='0'+v;return v;};from_format=from_format.toLowerCase();var y=/\by+\b/i.exec(to_format),m=/\bm+\b/i.exec(to_format),d=/\bd+\b/i.exec(to_format),h=/\bh+\b/i.exec(to_format),i=/\bi+\b/i.exec(to_format),s=/\bs+\b/i.exec(to_format),factor=1,components={};switch(from_format)
{case'y':factor=365*24*60*60;break;case'm':factor=30*24*60*60;break;case'd':factor=24*60*60;break;case'h':factor=60*60;break;case'i':factor=60;break;}
value*=factor;if(y){components['y']=FLOOR(value/(365*24*60*60));value=value%(365*24*60*60);}
if(m){components['m']=complete(FLOOR(value/(30*24*60*60)),m);value=value%(30*24*60*60);}
if(d){components['d']=complete(FLOOR(value/(24*60*60)),d);value=value%(24*60*60);}
if(h){components['h']=complete(FLOOR(value/(60*60)),h);value=value%(60*60);}
if(i){components['i']=complete(FLOOR(value/60),i);value=value%60;}
if(s){components['s']=complete(FLOOR(value),s);}
for(var index in components)
{to_format=to_format.replace(new RegExp('\\b'+index+'+\\b','i'),components[index]);}
return to_format;};lib.TIMETODECIMAL=lib.timetodecimal=function(value,from_format,to_format){from_format=from_format.replace(/[^ymdhisa\:\s]/ig,'').replace(/^[\s\:]+/,'').replace(/[\s\:]+$/,'').replace(/[\s\:]+/g,' ');value=(value+'').replace(/^[\s\:]+/,'').replace(/[\s\:]+$/,'').replace(/[\s\:]+/g,' ');to_format=to_format.toLowerCase();var value_components=value.split(/\s+/g),from_components=from_format.split(/\s+/g),factor=1,result=0,last_index=from_components.length-1;for(var j in from_components)
{if(!(j in value_components))continue;if(/y/i.test(from_components[j]))factor=365*24*60*60;else if(/m/i.test(from_components[j]))factor=30*24*60*60;else if(/d/i.test(from_components[j]))factor=24*60*60;else if(/h/i.test(from_components[j])){factor=60*60;if(last_index in value_components){let a=(value_components[last_index]+'').toLowerCase();if(a=='pm'&&value_components[j]*1<=12){value_components[j]=value_components[j]*1+12;}else if(a=='am'&&value_components[j]*1==12){value_components[j]=value_components[j]*1-12;}}}
else if(/i/i.test(from_components[j]))factor=60;else if(/s/i.test(from_components[j]))factor=1;else continue;result+=value_components[j]*factor;}
switch(to_format)
{case'y':factor=365*24*60*60;break;case'm':factor=30*24*60*60;break;case'd':factor=24*60*60;break;case'h':factor=60*60;break;case'i':factor=60;break;case's':factor=1;break;}
return result/factor;};lib.GETDATETIMESTRING=function(date,format){if(typeof format=='undefined')format=default_format;if(date.valid()){var m=date.getMonth()+1,d=date.getDate(),h=date.getHours(),i=date.getMinutes(),s=date.getSeconds(),a=(h>=12)?'pm':'am';m=(m<10)?'0'+m:m;d=(d<10)?'0'+d:d;if(/a+/.test(format)){h=h%12;h=(h)?h:12;}
h=(h<10)?'0'+h:h;i=(i<10)?'0'+i:i;s=(s<10)?'0'+s:s;return format.replace(/\by{2}\b/i,date.getFullYear()%100).replace(/y+/i,date.getFullYear()).replace(/m+/i,m).replace(/d+/i,d).replace(/h+/i,h).replace(/i+/i,i).replace(/s+/i,s).replace(/a+/i,a);}
return date;};root.CF_DATETIME=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['datetime']={'prefix':'','callback':function()
{fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['datetime']['prefix'],CF_DATETIME);},'validator':function(v)
{if(/^\s*((\d{4}[\/\-\.]\d{1,2}[\/\-\.]\d{1,2})|(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{4}))?\s*(\d{1,2}\s*:\s*\d{1,2}(\s*:\s*\d{1,2})?(\s*[ap]m)?)?\s*$/i.test(v))
{return true;}
return false;}};;(function(root){var lib={formsDependency:{}},elements_equations={};lib.cf_processing_version='0.1';function _getForm(_form)
{if(typeof _form=='undefined'||_form==null){if('currentFormId' in fbuilderjQuery.fbuilder)_form=fbuilderjQuery.fbuilder.currentFormId;else return'_1';}
if(/^_\d*$/.test(_form))return _form;if(/^\d*$/.test(_form))return'_'+_form;return $($(_form).length?_form:'#'+_form).find('[name="cp_calculatedfieldsf_pform_psequence"]').val();}
function _getField(_field,_form)
{try
{if(typeof _field=='undefined')return false;if(typeof _field=='object')
{if('ftype' in _field)return _field;if('jquery' in _field)
{if(_field.length)_field=_field[0];else return false;}
if('getAttribute' in _field)
{_form=$(_field).closest('form');var to_check=_field.getAttribute('class').match(/fieldname\d+/);if(to_check)_field=to_check[0];else{_field=_field.getAttribute('name').match(/fieldname\d+/)[0];}}
else return false;}
if(typeof _form=='undefined'&&typeof _field=='string'&&_field.match(/fieldname\d+(_\d+)/))_form=_field.match(/fieldname\d+(_\d+)/)[1];return $.fbuilder['forms'][_getForm(_form)].getItem(_field);}catch(err){return false;}}
function _fillElementsArray(e){if(!(e in elements_equations)){elements_equations[e]={};$(e).on('change keyup',function(){for(let i in elements_equations[e]){EVALEQUATION(i);}});}
if('currentEq' in $.fbuilder){if(!($.fbuilder['currentEq']['result'] in elements_equations[e])){elements_equations[e][$.fbuilder['currentEq']['result']]=1;}}}
lib.ELEMENTINFO=function(selector,to_get){let e=$(selector),r=[];to_get=(new String(to_get||'value')).toLowerCase().replace(/^\s*/,'').replace(/\s*$/,'');to_get=['html','text'].indexOf(to_get)!=-1?to_get:'val';if(e.length){_fillElementsArray(selector);e.each(function(i,e){r.push($(e)[to_get]());});}
return r.length==0?null:(r.length==1?r[0]:r);};lib.getField=function(_field,_form)
{var _fi=_getField(_field,_form),_fo;if(_fi){try{_fo=_fi['form_identifier'];if(_fo&&_fi&&'currentFormId' in $.fbuilder&&'currentEq' in $.fbuilder&&$.fbuilder['currentEq']['identifier']!=_fo){var _eqResultField=$.fbuilder['currentEq']['result'];if(!(_fi.name in lib.formsDependency)){lib.formsDependency[_fi.name]={};$('[name *= "'+_fi.name+'"]').on('change keyup depEvent',function(){var _fname=$(this).attr('name').match(/fieldname\d+_\d+/)[0];if(_fname in lib.formsDependency){for(var i in lib.formsDependency[_fname]){EVALEQUATION(i,lib.formsDependency[_fname][i])}}});}
lib.formsDependency[_fi.name][_eqResultField]=$.fbuilder['currentFormId'];}}catch(err){}}else if(typeof _form!='undefined'){if('currentFormId' in $.fbuilder&&'currentEq' in $.fbuilder){var _eqResultField=$.fbuilder['currentEq']['result'];$(_form).on('change keyup depEvent','[name*="'+_field+'"]',(function(_field){return function(){EVALEQUATION(_field);};})(_eqResultField));}}
return _fi;};lib.validform=lib.VALIDFORM=lib.ValidForm=function(_form,_silent){_silent=_silent||false;var o=_getForm(_form),f;if(o){f=$('[id="'+$.fbuilder.forms[o]['formId']+'"]');if(f.length)return _silent?f.validate().checkForm():f.valid();}
return false;};lib.validfield=lib.VALIDFIELD=lib.ValidField=function(_field,_form,_silent){_silent=_silent||false;var o=_getForm(_form),f=_getField(_field,_form),j;if(f){j=f.jQueryRef().find(':input');if(j.length)
return _silent?j.closest('form').validate().check(j):j.valid();}
return false;};lib.activatefield=lib.ACTIVATEFIELD=function(_field,_form)
{var o=_getForm(_form),f=_getField(_field,_form),j;if(f)
{j=f.jQueryRef();j.removeClass('ignorefield');if(j.find('[id*="'+f.name+'"]').hasClass('ignore'))
{j.add(j.find('.fields')).show();if(f.name in $.fbuilder.forms[o].toHide)delete $.fbuilder.forms[o].toHide[f.name];if(!(f.name in $.fbuilder.forms[o].toShow))$.fbuilder.forms[o].toShow[f.name]={'ref':{}};j.find('[id*="'+f.name+'"]').removeClass('ignore').trigger('change');$.fbuilder.showHideDep({'formIdentifier':o,'fieldIdentifier':f.name});}}};lib.ignorefield=lib.IGNOREFIELD=function(_field,_form)
{var o=_getForm(_form),f=_getField(_field,_form),j;if(f)
{j=f.jQueryRef();j.addClass('ignorefield');if(!j.find('[id*="'+f.name+'"]').hasClass('ignore'))
{j.add(j.find('.fields')).hide();if(!(f.name in $.fbuilder.forms[o].toHide))$.fbuilder.forms[o].toHide[f.name]={};if(f.name in $.fbuilder.forms[o].toShow)delete $.fbuilder.forms[o].toShow[f.name];j.find('[id*="'+f.name+'"]').addClass('ignore').trigger('change');$.fbuilder.showHideDep({'formIdentifier':o,'fieldIdentifier':f.name});}}};lib.isignored=lib.ISIGNORED=function(_field,_form)
{var o=_getForm(_form),f=_getField(_field,_form),j;if(f)return 0<f.jQueryRef().find('.ignore').length;return false;};lib.showfield=lib.SHOWFIELD=function(_field,_form)
{var f=_getField(_field,_form),j;if(f)
{j=f.jQueryRef();if(!j.find('[id*="'+f.name+'"]').hasClass('ignore'))
j.removeClass('hide-strong hide').show();}};lib.hidefield=lib.HIDEFIELD=function(_field,_form)
{var f=_getField(_field,_form);if(f)
{j=f.jQueryRef();if(!j.find('[id*="'+f.name+'"]').hasClass('ignore'))
f.jQueryRef().addClass('hide-strong');}};lib.ishidden=lib.ISHIDDEN=function(_field,_form)
{var o=_getForm(_form),f=_getField(_field,_form),j;if(f)return f.jQueryRef().is(':hidden');return true;};lib.disableequations=lib.DISABLEEQUATIONS=function(f)
{fbuilderjQuery(f||'[id*="cp_calculatedfieldsf_pform_"]').attr('data-evalequations',0);};lib.enableequations=lib.ENABLEEQUATIONS=function(f)
{fbuilderjQuery(f||'[id*="cp_calculatedfieldsf_pform_"]').attr('data-evalequations',1);};lib.EVALEQUATIONS=lib.evalequations=function(f)
{if(typeof f!='undefined'){fbuilderjQuery.fbuilder.calculator.defaultCalc(f,false,true);}else{for(var i in fbuilderjQuery.fbuilder.forms){fbuilderjQuery.fbuilder.calculator.defaultCalc(fbuilderjQuery('[id="'+fbuilderjQuery.fbuilder.forms[i].formId+'"]'),false,true);}}};lib.EVALEQUATION=lib.evalequation=function(_field,_form)
{try
{if(typeof _field=='object'&&'tagName' in _field&&_field.tagName=='FORM')
[_field,_form]=[_form,_field];var c=fbuilderjQuery.fbuilder.calculator;if(typeof _field=='undefined')c.defaultCalc(_form);var f=_getField(_field,_form),o=f.jQueryRef().closest('form')[0];for(i in o.equations)
{if(o.equations[i].result==f.name){c.enqueueEquation(f.form_identifier,[o.equations[i]]);c.processQueue(f.form_identifier);return;}}}
catch(err){if('console' in window)console.log(err);}};lib.COPYFIELDVALUE=lib.copyfieldvalue=function(_field,_form)
{var f=_getField(_field,_form),j;if(f)
{j=f.jQueryRef().find(':input:eq(0)');if(j.length)
{try
{if(j.is(':visible')){j.select();document.execCommand('copy');}else navigator.clipboard.writeText(j.val());}catch(err){}}}};function copyToClipboard(_field,_form,_html){_html=_html||false;if(!('ClipboardItem' in window))return;var f=_getField(_field,_form),h;if(f){h=f.jQueryRef()[_html?'html':'text']();}else{try{f=$(_field);if(f.length)h=f[_html?'html':'text']();}catch(err){}}
if(h){const clipboardItem=new ClipboardItem({'text/html':new Blob([h],{type:'text/html'}),'text/plain':new Blob([h],{type:'text/plain'})});navigator.clipboard.write([clipboardItem]).then(_=>{if('console' in window)console.log("clipboard.write() Ok")},error=>{if('console' in window)console.log(error)});}};lib.COPYTEXT=lib.copytext=function(_field,_form){copyToClipboard(_field,_form,false);};lib.COPYHTML=lib.copyhtml=function(_field,_form){copyToClipboard(_field,_form,true);};lib.gotopage=lib.GOTOPAGE=lib.goToPage=function(p,f)
{try
{var o=$('#'+$.fbuilder['forms'][_getForm(f)].formId),c;if(o.length)
{c=o.find('.pbreak:visible').attr('page');$.fbuilder.goToPage({'form':o,'from':c,'to':p,'forcing':true});}}catch(err){if('console' in window)console.log(err);}};lib.gotofield=lib.GOTOFIELD=lib.goToField=function(e,f)
{try
{var o=$('#'+$.fbuilder['forms'][_getForm(f)].formId),p,c;if(o.length)
{e=o.find('[id*="'+(Number.isInteger(e)?'fieldname'+e:e)+'_"]');if(e.length)
{c=o.find('.pbreak:visible').attr('page');p=e.closest('.pbreak').attr('page');$(document).one('cff-gotopage',function(evt,arg){if(e.is(':visible'))
$('html,body').animate({scrollTop:e.offset().top});});$.fbuilder.goToPage({'form':o,'from':c,'to':p,'forcing':true});}}}catch(err){if('console' in window)console.log(err);}};if(window.PRINTFORM==undefined)
{lib.printform=lib.PRINTFORM=function(show_pages,f)
{f=_getForm(f);function addRemoveClasses(add){var o=$('#'+$.fbuilder['forms'][f].formId),m=add?'addClass':'removeClass';if(o.length)
{o[m]('cff-print');if(!!show_pages)o.find('.pbreak')[m]('cff-print');while(o.length)
{o.siblings()[m]('cff-no-print');o=o.parent();}}};addRemoveClasses(true);window.print();setTimeout(function(){addRemoveClasses(false);},5000);};}
lib.RESETFORM=lib.resetform=function(f)
{function _reset(f){try{if(f.length&&f[0].tagName=='FORM'){if(!f.hasClass('cff-reset-form')){let seq=f.find('[name="cp_calculatedfieldsf_pform_psequence"]');if(seq.length){let fid=seq.val();f.find('.cff-calculated-field input').removeAttr('value');f[0].reset();setTimeout(function()
{var id=f.attr('id');if('validate' in f)f.validate().resetForm();f.find('.select2-hidden-accessible').trigger('change');f.find(':data(manually)').removeData('manually');$.fbuilder['showHideDep']({'formIdentifier':fid});$.fbuilder.forms[fid]['currentPage']=0;$("#fieldlist"+fid+" .pbreak").css("display","none");$("#fieldlist"+fid+" .pbreak").find(".field").addClass("ignorepb");$("#fieldlist"+fid+" .pb0").css("display","block");if($("#fieldlist"+fid+" .pb0").find(".field").length>0)
{$("#fieldlist"+fid+" .pb0").find(".field").removeClass("ignorepb");try
{let first_field=$("#fieldlist"+fid+" .pb0").find(".field:eq(0)");if(first_field.hasClass('hasDatepicker')){first_field.datepicker('option','showOn','none');first_field.focus();first_field.datepicker('option','showOn','focus');first_field.blur();}else first_field.focus();}
catch(e){}}
if(f.attr('data-evalequations')*1){f.addClass('cff-reset-form');$.fbuilder['calculator'].defaultCalc('#'+id,false);f.removeClass('cff-reset-form');}},50);}}else{setTimeout(function(){f.removeClass('cff-reset-form');},500);}}}catch(err){}}
if(typeof f!='undefined'){_reset(fbuilderjQuery(f));}else{for(var i in fbuilderjQuery.fbuilder.forms){_reset(fbuilderjQuery('[id="'+fbuilderjQuery.fbuilder.forms[i].formId+'"]'));}}};if(window.cffsanitize==undefined){lib.cffsanitize=lib.CFFSANITIZE=function(v,script_only){script_only=script_only||0;if(Array.isArray(v)||(typeof v==='object'&&!Array.isArray(v)&&v!==null)){for(var i in v){v[i]=lib.CFFSANITIZE(v[i],script_only);}}else{if(typeof v=='string'){if(script_only){v=v.replace(/<script\b.*\bscript>/ig,'').replace(/<script[^>]*>/ig,'').replace(/(\b)(on[a-z]+)\s*=/ig,"$1_$2=");}else{v=fbuilderjQuery('<p>').text(v).html();}}}
return v;};}
root.CF_FIELDS_MANAGEMENT=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['processing']={'prefix':'','callback':function()
{fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['processing']['prefix'],CF_FIELDS_MANAGEMENT);}};;(function(root){var lib={records:{}};lib.cff_connector_version='0.1';lib.cffProxy=lib.cffproxy=lib.CFFPROXY=function(){if(typeof fbuilderjQuery=='undefined'||!arguments.length||typeof arguments[0]!='function')return;var $=fbuilderjQuery,args=Array.prototype.slice.call(arguments);index=args.toString();if(typeof lib.records[index]!='undefined')return lib.records[index];var form_id=(typeof $.fbuilder['currentFormId']!='undefined')?$.fbuilder['currentFormId']:'cp_calculatedfieldsf_pform_1',aux=(function(eq,index){return function(value){lib.records[index]=value;$.fbuilder.calculator.enqueueEquation(eq.identifier,[eq]);$.fbuilder.calculator.removePending(eq.identifier);if(!(eq.identifier in $.fbuilder.calculator.processing_queue)||!$.fbuilder.calculator.processing_queue[eq.identifier])
{$.fbuilder.calculator.processQueue(eq.identifier);}};})($.fbuilder['currentEq'],index),f=args[0];args.shift();args.push(aux);$.fbuilder.calculator.addPending($.fbuilder['currentEq']['identifier']);setTimeout(function(){f.apply(null,args);},5);};root.CF_CONNECTOR=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['connector']={'prefix':'','callback':function()
{fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['connector']['prefix'],CF_CONNECTOR);}};;(function(root){var lib={records:{}};lib.cff_url_version='0.1';lib.getReferrer=lib.getreferrer=lib.GETREFERRER=function(){return document.referrer||null;};lib.generateURL=lib.generateurl=lib.GENERATEURL=function(url,params,hash){var urlComponents=url.split('#'),queryString='',connector='';if(typeof params=='object'&&params)
{connector=(url.indexOf('?')==-1)?'?':'&';queryString=jQuery.param(params);}
if(typeof hash=='string')urlComponents[1]=hash;urlComponents[0]+=connector+queryString;return urlComponents.join('#');};lib.redirectToURL=lib.redirecttourl=lib.REDIRECTTOURL=function(url,obj){document.location.href=url+(obj?(url.indexOf('?')===-1?'?':'&')+$.param(obj):'');};lib.getURL=lib.geturl=lib.GETURL=function(){return document.location.href;};lib.getURLProtocol=lib.geturlprotocol=lib.GETURLPROTOCOL=function(){return document.location.protocol.toLowerCase();};lib.getBaseURL=lib.getbaseurl=lib.GETBASEURL=function(){return window.location.protocol+'//'+window.location.host+'/';};lib.getURLHash=lib.geturlhash=lib.GETURLHASH=function(nohash){return window.location.hash.replace((nohash)?/^#/:'','');};lib.getURLPath=lib.geturlpath=lib.GETURLPATH=function(noslash){return window.location.pathname.replace((noslash)?new RegExp('^\/','g'):'','').replace((noslash)?new RegExp('\/$','g'):'','');};lib.getURLParameters=lib.geturlparameters=lib.GETURLPARAMETERS=function(url){var qs=url?url.split('?')[1]:window.location.search.slice(1),obj={};if(qs)
{qs=qs.split('#')[0];var arr=qs.split('&');for(var i=0;i<arr.length;i++)
{var a=arr[i].split('='),paramName=a[0],paramValue=typeof(a[1])==='undefined'?true:a[1];paramName=paramName.toLowerCase();if(typeof paramName==='string')paramName=decodeURIComponent(paramName);if(typeof paramValue==='string')paramValue=decodeURIComponent(paramValue);if(paramName.match(/\[(\d+)?\]$/))
{var key=paramName.replace(/\[(\d+)?\]/,'');if(!obj[key])obj[key]=[];if(paramName.match(/\[\d+\]$/))
{var index=/\[(\d+)\]/.exec(paramName)[1];obj[key][index]=paramValue;}
else
{obj[key].push(paramValue);}}
else
{if(!obj[paramName])
{obj[paramName]=paramValue;}
else if(obj[paramName]&&typeof obj[paramName]==='string')
{obj[paramName]=[obj[paramName]];obj[paramName].push(paramValue);}
else
{obj[paramName].push(paramValue);}}}}
return obj;};lib.getURLParameter=lib.geturlparameter=lib.GETURLPARAMETER=function(paramName,defaultValue){var parameters=lib.getURLParameters();paramName=paramName.toLowerCase();if(paramName in parameters)return parameters[paramName];else if(typeof defaultValue!='undefined')return defaultValue;else return null;}
root.CF_URL=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['url']={'prefix':'','callback':function()
{fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['url']['prefix'],CF_URL);}};;(function(root){var lib={records:{}};function eval_equation(eq)
{$.fbuilder.calculator.enqueueEquation(eq.identifier,[eq]);$.fbuilder.calculator.removePending(eq.identifier);if(!(eq.identifier in $.fbuilder.calculator.processing_queue)||!$.fbuilder.calculator.processing_queue[eq.identifier])$.fbuilder.calculator.processQueue(eq.identifier);}
function _getField(fieldname,form)
{var field=getField(fieldname,form);return(field&&'ftype' in field&&field['ftype']=='ffile')?field:false;}
lib.cff_file_version='0.1';lib.PDFPAGESNUMBER=lib.pdfpagesnumber=function(fieldname,form){var field=_getField(fieldname,form),files,counter=0,result=0,index;if(field)
{if(field.multiple)result=[];files=field.val(true);counter=files.length;if(counter)
{index='PDFPAGESNUMBER:'+field.val();if(index in lib.records)
{result=lib.records[index];}
else
{for(var i in files)
{if(typeof files[i]=='object')
{var reader=new FileReader();reader.onloadend=(function(eq,index,multiple){return function(evt){var reader=evt.target;try{var tmp=reader.result.match(/\/Type[\s]*\/Page[^s]/g);if(multiple)result.push((tmp)?tmp.length:0);else result+=(tmp)?tmp.length:0;}catch(err){}
counter--;if(counter==0)
{lib.records[index]=result;eval_equation(eq);}};})($.fbuilder['currentEq'],index,field.multiple)
reader.readAsBinaryString(files[i]);}}}}}
return result;}
lib.IMGDIMENSION=lib.imgdimension=function(fieldname,form){var field=_getField(fieldname,form),files,counter=0,result={width:0,height:0},index;if(field)
{if(field.multiple)result=[];files=field.val(true);counter=files.length;if(counter)
{index='IMGDIMENSION:'+field.val();if(index in lib.records)
{result=lib.records[index];}
else
{for(var i in files)
{if(typeof files[i]=='object')
{if(files[i].type.match(/image.*/i))
{var reader=new FileReader();reader.onloadend=(function(eq,index,multiple){return function(evt){var reader=evt.target;try{var image=new Image();image.onload=function(){if(multiple)result.push({width:this.naturalWidth,height:this.naturalHeight});else result={width:this.naturalWidth,height:this.naturalHeight};counter--;if(counter==0)
{lib.records[index]=result;eval_equation(eq);}};image.src=reader.result;}catch(err){}};})($.fbuilder['currentEq'],index,field.multiple)
reader.readAsDataURL(files[i]);}
else counter--;}}}}}
return result;}
lib.VIEWFILE=lib.viewfile=function(fieldname,id,form){var field=_getField(fieldname,form),files,el=document.getElementById(id);if(field&&el)
{el.innerHTML='';files=field.val(true);if(files.length)
{for(var i in files)
{if(typeof files[i]=='object')
{var reader=new FileReader();if(files[i].type.match(/image.*/i))
{reader.onloadend=function(evt){var reader=evt.target;try{var img=document.createElement('img');img.classList.add('cff-image-viewer');img.src=reader.result;el.appendChild(img);}catch(err){}};}
else if(files[i].type.match(/pdf/i))
{reader.onloadend=function(evt){var reader=evt.target;try{var iframe=document.createElement('iframe');iframe.classList.add('cff-pdf-viewer');iframe.src=reader.result;el.appendChild(iframe);}catch(err){}};}
reader.readAsDataURL(files[i]);}}}}}
lib.CSVTOJSON=lib.csvtojson=function(fieldname,args,form){var result=null;if(typeof args=='undefined'||args===null)args={};if(!('headline' in args))args['headline']=false;if(!('delimiter' in args))args['delimiter']=',';if(!('quote' in args))args['quote']='"';function processCSV(csv){var json=[],lines=csv.split(/[\r\n]+/),line,headers,obj;for(var i=0,h=lines.length;i<h;i++){if(!lines[i].length)continue;if(args['headline']&&typeof headers=='undefined'){headers=parseLine(lines[i]);}else{obj={};line=parseLine(lines[i]);for(var j=0,k=line.length;j<k;j++){obj[(typeof headers!='undefined')?headers[j]:j]=line[j];}
json.push(JSON.parse(JSON.stringify(obj)));}}
return json;};function parseLine(line){var flag=false,parts=[],cell='';for(var i=0,h=line.length;i<h;i++){if(line[i]==args['quote']){if(!flag&&(i==0||line[i-1]!='\\')){flag=true;continue;}
else if(flag&&line[i-1]!='\\'){flag=false;continue;}}else if(line[i]==args['delimiter']&&!flag){parts.push(cell);cell='';continue;}
cell+=line[i];}
parts.push(cell);return parts;};if(typeof fieldname=='number'||/fieldname\d+/i.test(fieldname)){var field=_getField(fieldname,form),counter=0,files;if(field)
{if(field.multiple)result=[];files=field.val(true);counter=files.length;if(counter)
{index='CSVTOJSON:'+field.val();if(index in lib.records)
{result=lib.records[index];}
else
{for(var i in files)
{if(typeof files[i]=='object'&&files[i].type.match(/csv.*/i))
{var reader=new FileReader();reader.onloadend=(function(eq,index,multiple){return function(evt){var reader=evt.target;try{var json=processCSV(reader.result);if(multiple)result.push(json);else result=json;}catch(err){}
counter--;if(counter==0)
{lib.records[index]=result;eval_equation(eq);}};})($.fbuilder['currentEq'],index,field.multiple)
reader.readAsBinaryString(files[i]);}}}}}}else if(typeof fieldname=='string'){result=processCSV(fieldname);}
return result;};lib.JSONTOCSV=lib.jsontocsv=function(json,delimiter,file_name){function isObject(v){return typeof v=='object'&&Object.getPrototypeOf(v)===Object.prototype?true:false;};let arr=typeof json!='object'?JSON.parse(json):json,str='',headers=[],row;delimiter=delimiter||',';file_name=file_name||false;for(let i in arr){row=[];if(0==i&&isObject(arr[i])){headers=Object.getOwnPropertyNames(arr[i]);str+=headers.join(delimiter)+'\r\n';}
if(isObject(arr[i])){row=Object.values(arr[i]);}else if(Array.isArray(arr[i])){row=arr[i];}else{row=[arr[i]];}
if(row.length){str+=row.join(delimiter)+'\r\n';}}
if(str.length&&file_name){let blob=new Blob([str],{type:'text/csv'}),url=window.URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=file_name;document.body.appendChild(a);a.click();document.body.removeChild(a);}
return str;};root.CF_FILE=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['file']={'prefix':'','callback':function()
{fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['file']['prefix'],CF_FILE);}};;(function(root){var lib={};if(window.WORDSCOUNTER==undefined){lib.WORDSCOUNTER=lib.wordscounter=function(text){try{return text.replace(/(?!\w|\s)./g,'').replace(/\s+/g,' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g,'$2').split(' ').length;}catch(err){return 0;}}}
if(window.CHARSCOUNTER==undefined){lib.CHARSCOUNTER=lib.charscounter=function(text,ignore_blank){try{var ignore_blank=ignore_blank||0;text+='';if(ignore_blank)text=text.replace(/[\s\r\n\t]/g,'');return text.length;}catch(err){return 0;}}}
if(window.INTEXT==undefined){lib.INTEXT=lib.intext=function(term,text,case_insensitive){try{var case_insensitive=case_insensitive||0;if(!term instanceof RegExp)term+='';text+='';if(case_insensitive){if(term instanceof RegExp)term=new RegExp(term.source,'i');else term=term.toLowerCase();text=text.toLowerCase();}
return Math.max(text.split(term).length-1,0);}catch(err){return 0;}}}
root.CF_TEXT=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['text']={'prefix':'','callback':function()
{fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['text']['prefix'],CF_TEXT);}};;(function(root){var lib={},data={"countries":{"AD":"Andorra","AE":"United Arab Emirates","AF":"Afghanistan","AG":"Antigua and Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"Antarctica","AR":"Argentina","AS":"American Samoa","AT":"Austria","AU":"Australia","AW":"Aruba","AX":"Åland Islands","AZ":"Azerbaijan","BA":"Bosnia and Herzegovina","BB":"Barbados","BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BL":"Saint Barthélemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BQ":"Caribbean Netherlands","BR":"Brazil","BS":"Bahamas","BT":"Bhutan","BV":"Bouvet Island","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Canada","CC":"Cocos Islands","CD":"Democratic Republic of the Congo","CF":"Central African Republic","CG":"Republic of the Congo","CH":"Switzerland","CI":"Ivory Coast","CK":"Cook Islands","CL":"Chile","CM":"Cameroon","CN":"China","CO":"Colombia","CR":"Costa Rica","CU":"Cuba","CV":"Cabo Verde","CW":"Curaçao","CX":"Christmas Island","CY":"Cyprus","CZ":"Czechia","DE":"Germany","DJ":"Djibouti","DK":"Denmark","DM":"Dominica","DO":"Dominican Republic","DZ":"Algeria","EC":"Ecuador","EE":"Estonia","EG":"Egypt","EH":"Western Sahara","ER":"Eritrea","ES":"Spain","ET":"Ethiopia","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands","FM":"Micronesia","FO":"Faroe Islands","FR":"France","GA":"Gabon","GB":"United Kingdom","GD":"Grenada","GE":"Georgia","GF":"French Guiana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Greenland","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Equatorial Guinea","GR":"Greece","GS":"South Georgia and the South Sandwich Islands","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Hong Kong","HM":"Heard Island and McDonald Islands","HN":"Honduras","HR":"Croatia","HT":"Haiti","HU":"Hungary","ID":"Indonesia","IE":"Ireland","IL":"Israel","IM":"Isle of Man","IN":"India","IO":"British Indian Ocean Territory","IQ":"Iraq","IR":"Iran","IS":"Iceland","IT":"Italy","JE":"Jersey","JM":"Jamaica","JO":"Jordan","JP":"Japan","KE":"Kenya","KG":"Kyrgyzstan","KH":"Cambodia","KI":"Kiribati","KM":"Comoros","KN":"Saint Kitts and Nevis","KP":"North Korea","KR":"South Korea","KW":"Kuwait","KY":"Cayman Islands","KZ":"Kazakhstan","LA":"Laos","LB":"Lebanon","LC":"Saint Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lithuania","LU":"Luxembourg","LV":"Latvia","LY":"Libya","MA":"Morocco","MC":"Monaco","MD":"Moldova","ME":"Montenegro","MF":"Saint Martin","MG":"Madagascar","MH":"Marshall Islands","MK":"North Macedonia","ML":"Mali","MM":"Myanmar","MN":"Mongolia","MO":"Macao","MP":"Northern Mariana Islands","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldives","MW":"Malawi","MX":"Mexico","MY":"Malaysia","MZ":"Mozambique","NA":"Namibia","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"New Zealand","OM":"Oman","PA":"Panama","PE":"Peru","PF":"French Polynesia","PG":"Papua New Guinea","PH":"Philippines","PK":"Pakistan","PL":"Poland","PM":"Saint Pierre and Miquelon","PN":"Pitcairn","PR":"Puerto Rico","PS":"Palestine","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Qatar","RE":"Réunion","RO":"Romania","RS":"Serbia","RU":"Russia","RW":"Rwanda","SA":"Saudi Arabia","SB":"Solomon Islands","SC":"Seychelles","SD":"Sudan","SE":"Sweden","SG":"Singapore","SH":"Saint Helena, Ascension and Tristan da Cunha","SI":"Slovenia","SJ":"Svalbard and Jan Mayen","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","SS":"South Sudan","ST":"Sao Tome and Principe","SV":"El Salvador","SX":"Sint Maarten","SY":"Syria","SZ":"Eswatini","TC":"Turks and Caicos Islands","TD":"Chad","TF":"French Southern Territories","TG":"Togo","TH":"Thailand","TJ":"Tajikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunisia","TO":"Tonga","TR":"Türkiye","TT":"Trinidad and Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzania","UA":"Ukraine","UG":"Uganda","UM":"United States Minor Outlying Islands","US":"United States of America","UY":"Uruguay","UZ":"Uzbekistan","VA":"Holy See","VC":"Saint Vincent and the Grenadines","VE":"Venezuela","VG":"Virgin Islands (UK)","VI":"Virgin Islands (US)","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis and Futuna","WS":"Samoa","YE":"Yemen","YT":"Mayotte","ZA":"South Africa","ZM":"Zambia","ZW":"Zimbabwe"},"timezones":{"Africa/Abidjan":{"u":0,"c":["CI","BF","GH","GM","GN","IS","ML","MR","SH","SL","SN","TG"]},"Africa/Accra":{"a":"Africa/Abidjan","c":["GH"],"r":1},"Africa/Addis_Ababa":{"a":"Africa/Nairobi","c":["ET"],"r":1},"Africa/Algiers":{"u":60,"c":["DZ"]},"Africa/Asmara":{"a":"Africa/Nairobi","c":["ER"],"r":1},"Africa/Asmera":{"a":"Africa/Nairobi","c":["ER"],"r":1},"Africa/Bamako":{"a":"Africa/Abidjan","c":["ML"],"r":1},"Africa/Bangui":{"a":"Africa/Lagos","c":["CF"],"r":1},"Africa/Banjul":{"a":"Africa/Abidjan","c":["GM"],"r":1},"Africa/Bissau":{"u":0,"c":["GW"]},"Africa/Blantyre":{"a":"Africa/Maputo","c":["MW"],"r":1},"Africa/Brazzaville":{"a":"Africa/Lagos","c":["CG"],"r":1},"Africa/Bujumbura":{"a":"Africa/Maputo","c":["BI"],"r":1},"Africa/Cairo":{"u":120,"c":["EG"]},"Africa/Casablanca":{"u":60,"d":0,"c":["MA"]},"Africa/Ceuta":{"u":60,"d":120,"c":["ES"]},"Africa/Conakry":{"a":"Africa/Abidjan","c":["GN"],"r":1},"Africa/Dakar":{"a":"Africa/Abidjan","c":["SN"],"r":1},"Africa/Dar_es_Salaam":{"a":"Africa/Nairobi","c":["TZ"],"r":1},"Africa/Djibouti":{"a":"Africa/Nairobi","c":["DJ"],"r":1},"Africa/Douala":{"a":"Africa/Lagos","c":["CM"],"r":1},"Africa/El_Aaiun":{"u":60,"d":0,"c":["EH"]},"Africa/Freetown":{"a":"Africa/Abidjan","c":["SL"],"r":1},"Africa/Gaborone":{"a":"Africa/Maputo","c":["BW"],"r":1},"Africa/Harare":{"a":"Africa/Maputo","c":["ZW"],"r":1},"Africa/Johannesburg":{"u":120,"c":["ZA","LS","SZ"]},"Africa/Juba":{"u":120,"c":["SS"]},"Africa/Kampala":{"a":"Africa/Nairobi","c":["UG"],"r":1},"Africa/Khartoum":{"u":120,"c":["SD"]},"Africa/Kigali":{"a":"Africa/Maputo","c":["RW"],"r":1},"Africa/Kinshasa":{"a":"Africa/Lagos","c":["CD"],"r":1},"Africa/Lagos":{"u":60,"c":["NG","AO","BJ","CD","CF","CG","CM","GA","GQ","NE"]},"Africa/Libreville":{"a":"Africa/Lagos","c":["GA"],"r":1},"Africa/Lome":{"a":"Africa/Abidjan","c":["TG"],"r":1},"Africa/Luanda":{"a":"Africa/Lagos","c":["AO"],"r":1},"Africa/Lubumbashi":{"a":"Africa/Maputo","c":["CD"],"r":1},"Africa/Lusaka":{"a":"Africa/Maputo","c":["ZM"],"r":1},"Africa/Malabo":{"a":"Africa/Lagos","c":["GQ"],"r":1},"Africa/Maputo":{"u":120,"c":["MZ","BI","BW","CD","MW","RW","ZM","ZW"]},"Africa/Maseru":{"a":"Africa/Johannesburg","c":["LS"],"r":1},"Africa/Mbabane":{"a":"Africa/Johannesburg","c":["SZ"],"r":1},"Africa/Mogadishu":{"a":"Africa/Nairobi","c":["SO"],"r":1},"Africa/Monrovia":{"u":0,"c":["LR"]},"Africa/Nairobi":{"u":180,"c":["KE","DJ","ER","ET","KM","MG","SO","TZ","UG","YT"]},"Africa/Ndjamena":{"u":60,"c":["TD"]},"Africa/Niamey":{"a":"Africa/Lagos","c":["NE"],"r":1},"Africa/Nouakchott":{"a":"Africa/Abidjan","c":["MR"],"r":1},"Africa/Ouagadougou":{"a":"Africa/Abidjan","c":["BF"],"r":1},"Africa/Porto-Novo":{"a":"Africa/Lagos","c":["BJ"],"r":1},"Africa/Sao_Tome":{"u":0,"c":["ST"]},"Africa/Timbuktu":{"a":"Africa/Abidjan","c":["ML"],"r":1},"Africa/Tripoli":{"u":120,"c":["LY"]},"Africa/Tunis":{"u":60,"c":["TN"]},"Africa/Windhoek":{"u":120,"c":["NA"]},"America/Adak":{"u":-600,"d":-540,"c":["US"]},"America/Anchorage":{"u":-540,"d":-480,"c":["US"]},"America/Anguilla":{"a":"America/Puerto_Rico","c":["AI"],"r":1},"America/Antigua":{"a":"America/Puerto_Rico","c":["AG"],"r":1},"America/Araguaina":{"u":-180,"c":["BR"]},"America/Argentina/Buenos_Aires":{"u":-180,"c":["AR"]},"America/Argentina/Catamarca":{"u":-180,"c":["AR"]},"America/Argentina/ComodRivadavia":{"a":"America/Argentina/Catamarca","r":1},"America/Argentina/Cordoba":{"u":-180,"c":["AR"]},"America/Argentina/Jujuy":{"u":-180,"c":["AR"]},"America/Argentina/La_Rioja":{"u":-180,"c":["AR"]},"America/Argentina/Mendoza":{"u":-180,"c":["AR"]},"America/Argentina/Rio_Gallegos":{"u":-180,"c":["AR"]},"America/Argentina/Salta":{"u":-180,"c":["AR"]},"America/Argentina/San_Juan":{"u":-180,"c":["AR"]},"America/Argentina/San_Luis":{"u":-180,"c":["AR"]},"America/Argentina/Tucuman":{"u":-180,"c":["AR"]},"America/Argentina/Ushuaia":{"u":-180,"c":["AR"]},"America/Aruba":{"a":"America/Puerto_Rico","c":["AW"],"r":1},"America/Asuncion":{"u":-240,"d":-180,"c":["PY"]},"America/Atikokan":{"a":"America/Panama","c":["CA"],"r":1},"America/Atka":{"a":"America/Adak","r":1},"America/Bahia":{"u":-180,"c":["BR"]},"America/Bahia_Banderas":{"u":-360,"c":["MX"]},"America/Barbados":{"u":-240,"c":["BB"]},"America/Belem":{"u":-180,"c":["BR"]},"America/Belize":{"u":-360,"c":["BZ"]},"America/Blanc-Sablon":{"a":"America/Puerto_Rico","c":["CA"],"r":1},"America/Boa_Vista":{"u":-240,"c":["BR"]},"America/Bogota":{"u":-300,"c":["CO"]},"America/Boise":{"u":-420,"d":-360,"c":["US"]},"America/Buenos_Aires":{"a":"America/Argentina/Buenos_Aires","r":1},"America/Cambridge_Bay":{"u":-420,"d":-360,"c":["CA"]},"America/Campo_Grande":{"u":-240,"c":["BR"]},"America/Cancun":{"u":-300,"c":["MX"]},"America/Caracas":{"u":-240,"c":["VE"]},"America/Catamarca":{"a":"America/Argentina/Catamarca","r":1},"America/Cayenne":{"u":-180,"c":["GF"]},"America/Cayman":{"a":"America/Panama","c":["KY"],"r":1},"America/Chicago":{"u":-360,"d":-300,"c":["US"]},"America/Chihuahua":{"u":-360,"c":["MX"]},"America/Ciudad_Juarez":{"u":-420,"d":-360,"c":["MX"]},"America/Coral_Harbour":{"a":"America/Panama","c":["CA"],"r":1},"America/Cordoba":{"a":"America/Argentina/Cordoba","r":1},"America/Costa_Rica":{"u":-360,"c":["CR"]},"America/Creston":{"a":"America/Phoenix","c":["CA"],"r":1},"America/Cuiaba":{"u":-240,"c":["BR"]},"America/Curacao":{"a":"America/Puerto_Rico","c":["CW"],"r":1},"America/Danmarkshavn":{"u":0,"c":["GL"]},"America/Dawson":{"u":-420,"c":["CA"]},"America/Dawson_Creek":{"u":-420,"c":["CA"]},"America/Denver":{"u":-420,"d":-360,"c":["US"]},"America/Detroit":{"u":-300,"d":-240,"c":["US"]},"America/Dominica":{"a":"America/Puerto_Rico","c":["DM"],"r":1},"America/Edmonton":{"u":-420,"d":-360,"c":["CA"]},"America/Eirunepe":{"u":-300,"c":["BR"]},"America/El_Salvador":{"u":-360,"c":["SV"]},"America/Ensenada":{"a":"America/Tijuana","r":1},"America/Fort_Nelson":{"u":-420,"c":["CA"]},"America/Fort_Wayne":{"a":"America/Indiana/Indianapolis","r":1},"America/Fortaleza":{"u":-180,"c":["BR"]},"America/Glace_Bay":{"u":-240,"d":-180,"c":["CA"]},"America/Godthab":{"a":"America/Nuuk","r":1},"America/Goose_Bay":{"u":-240,"d":-180,"c":["CA"]},"America/Grand_Turk":{"u":-300,"d":-240,"c":["TC"]},"America/Grenada":{"a":"America/Puerto_Rico","c":["GD"],"r":1},"America/Guadeloupe":{"a":"America/Puerto_Rico","c":["GP"],"r":1},"America/Guatemala":{"u":-360,"c":["GT"]},"America/Guayaquil":{"u":-300,"c":["EC"]},"America/Guyana":{"u":-240,"c":["GY"]},"America/Halifax":{"u":-240,"d":-180,"c":["CA"]},"America/Havana":{"u":-300,"d":-240,"c":["CU"]},"America/Hermosillo":{"u":-420,"c":["MX"]},"America/Indiana/Indianapolis":{"u":-300,"d":-240,"c":["US"]},"America/Indiana/Knox":{"u":-360,"d":-300,"c":["US"]},"America/Indiana/Marengo":{"u":-300,"d":-240,"c":["US"]},"America/Indiana/Petersburg":{"u":-300,"d":-240,"c":["US"]},"America/Indiana/Tell_City":{"u":-360,"d":-300,"c":["US"]},"America/Indiana/Vevay":{"u":-300,"d":-240,"c":["US"]},"America/Indiana/Vincennes":{"u":-300,"d":-240,"c":["US"]},"America/Indiana/Winamac":{"u":-300,"d":-240,"c":["US"]},"America/Indianapolis":{"a":"America/Indiana/Indianapolis","r":1},"America/Inuvik":{"u":-420,"d":-360,"c":["CA"]},"America/Iqaluit":{"u":-300,"d":-240,"c":["CA"]},"America/Jamaica":{"u":-300,"c":["JM"]},"America/Jujuy":{"a":"America/Argentina/Jujuy","r":1},"America/Juneau":{"u":-540,"d":-480,"c":["US"]},"America/Kentucky/Louisville":{"u":-300,"d":-240,"c":["US"]},"America/Kentucky/Monticello":{"u":-300,"d":-240,"c":["US"]},"America/Knox_IN":{"a":"America/Indiana/Knox","r":1},"America/Kralendijk":{"a":"America/Puerto_Rico","c":["BQ"],"r":1},"America/La_Paz":{"u":-240,"c":["BO"]},"America/Lima":{"u":-300,"c":["PE"]},"America/Los_Angeles":{"u":-480,"d":-420,"c":["US"]},"America/Louisville":{"a":"America/Kentucky/Louisville","r":1},"America/Lower_Princes":{"a":"America/Puerto_Rico","c":["SX"],"r":1},"America/Maceio":{"u":-180,"c":["BR"]},"America/Managua":{"u":-360,"c":["NI"]},"America/Manaus":{"u":-240,"c":["BR"]},"America/Marigot":{"a":"America/Puerto_Rico","c":["MF"],"r":1},"America/Martinique":{"u":-240,"c":["MQ"]},"America/Matamoros":{"u":-360,"d":-300,"c":["MX"]},"America/Mazatlan":{"u":-420,"c":["MX"]},"America/Mendoza":{"a":"America/Argentina/Mendoza","r":1},"America/Menominee":{"u":-360,"d":-300,"c":["US"]},"America/Merida":{"u":-360,"c":["MX"]},"America/Metlakatla":{"u":-540,"d":-480,"c":["US"]},"America/Mexico_City":{"u":-360,"c":["MX"]},"America/Miquelon":{"u":-180,"d":-120,"c":["PM"]},"America/Moncton":{"u":-240,"d":-180,"c":["CA"]},"America/Monterrey":{"u":-360,"c":["MX"]},"America/Montevideo":{"u":-180,"c":["UY"]},"America/Montreal":{"a":"America/Toronto","c":["CA"],"r":1},"America/Montserrat":{"a":"America/Puerto_Rico","c":["MS"],"r":1},"America/Nassau":{"a":"America/Toronto","c":["BS"],"r":1},"America/New_York":{"u":-300,"d":-240,"c":["US"]},"America/Nipigon":{"a":"America/Toronto","c":["CA"],"r":1},"America/Nome":{"u":-540,"d":-480,"c":["US"]},"America/Noronha":{"u":-120,"c":["BR"]},"America/North_Dakota/Beulah":{"u":-360,"d":-300,"c":["US"]},"America/North_Dakota/Center":{"u":-360,"d":-300,"c":["US"]},"America/North_Dakota/New_Salem":{"u":-360,"d":-300,"c":["US"]},"America/Nuuk":{"u":-180,"c":["GL"]},"America/Ojinaga":{"u":-360,"d":-300,"c":["MX"]},"America/Panama":{"u":-300,"c":["PA","CA","KY"]},"America/Pangnirtung":{"a":"America/Iqaluit","r":1},"America/Paramaribo":{"u":-180,"c":["SR"]},"America/Phoenix":{"u":-420,"c":["US","CA"]},"America/Port-au-Prince":{"u":-300,"d":-240,"c":["HT"]},"America/Port_of_Spain":{"a":"America/Puerto_Rico","c":["TT"],"r":1},"America/Porto_Acre":{"a":"America/Rio_Branco","r":1},"America/Porto_Velho":{"u":-240,"c":["BR"]},"America/Puerto_Rico":{"u":-240,"c":["PR","AG","CA","AI","AW","BL","BQ","CW","DM","GD","GP","KN","LC","MF","MS","SX","TT","VC","VG","VI"]},"America/Punta_Arenas":{"u":-180,"c":["CL"]},"America/Rainy_River":{"a":"America/Winnipeg","r":1},"America/Rankin_Inlet":{"u":-360,"d":-300,"c":["CA"]},"America/Recife":{"u":-180,"c":["BR"]},"America/Regina":{"u":-360,"c":["CA"]},"America/Resolute":{"u":-360,"d":-300,"c":["CA"]},"America/Rio_Branco":{"u":-300,"c":["BR"]},"America/Rosario":{"a":"America/Argentina/Cordoba","r":1},"America/Santa_Isabel":{"a":"America/Tijuana","r":1},"America/Santarem":{"u":-180,"c":["BR"]},"America/Santiago":{"u":-240,"d":-180,"c":["CL"]},"America/Santo_Domingo":{"u":-240,"c":["DO"]},"America/Sao_Paulo":{"u":-180,"c":["BR"]},"America/Scoresbysund":{"u":-60,"d":0,"c":["GL"]},"America/Shiprock":{"a":"America/Denver","r":1},"America/Sitka":{"u":-540,"d":-480,"c":["US"]},"America/St_Barthelemy":{"a":"America/Puerto_Rico","c":["BL"],"r":1},"America/St_Johns":{"u":-210,"d":-150,"c":["CA"]},"America/St_Kitts":{"a":"America/Puerto_Rico","c":["KN"],"r":1},"America/St_Lucia":{"a":"America/Puerto_Rico","c":["LC"],"r":1},"America/St_Thomas":{"a":"America/Puerto_Rico","c":["VI"],"r":1},"America/St_Vincent":{"a":"America/Puerto_Rico","c":["VC"],"r":1},"America/Swift_Current":{"u":-360,"c":["CA"]},"America/Tegucigalpa":{"u":-360,"c":["HN"]},"America/Thule":{"u":-240,"d":-180,"c":["GL"]},"America/Thunder_Bay":{"a":"America/Toronto","c":["CA"],"r":1},"America/Tijuana":{"u":-480,"d":-420,"c":["MX"]},"America/Toronto":{"u":-300,"d":-240,"c":["CA","BS"]},"America/Tortola":{"a":"America/Puerto_Rico","c":["VG"],"r":1},"America/Vancouver":{"u":-480,"d":-420,"c":["CA"]},"America/Virgin":{"a":"America/Puerto_Rico","c":["VI"],"r":1},"America/Whitehorse":{"u":-420,"c":["CA"]},"America/Winnipeg":{"u":-360,"d":-300,"c":["CA"]},"America/Yakutat":{"u":-540,"d":-480,"c":["US"]},"America/Yellowknife":{"u":-420,"d":-360,"c":["CA"]},"Antarctica/Casey":{"u":660,"c":["AQ"]},"Antarctica/Davis":{"u":420,"c":["AQ"]},"Antarctica/DumontDUrville":{"a":"Pacific/Port_Moresby","c":["AQ"],"r":1},"Antarctica/Macquarie":{"u":600,"d":660,"c":["AU"]},"Antarctica/Mawson":{"u":300,"c":["AQ"]},"Antarctica/McMurdo":{"a":"Pacific/Auckland","c":["AQ"],"r":1},"Antarctica/Palmer":{"u":-180,"c":["AQ"]},"Antarctica/Rothera":{"u":-180,"c":["AQ"]},"Antarctica/South_Pole":{"a":"Pacific/Auckland","c":["AQ"],"r":1},"Antarctica/Syowa":{"a":"Asia/Riyadh","c":["AQ"],"r":1},"Antarctica/Troll":{"u":0,"d":120,"c":["AQ"]},"Antarctica/Vostok":{"a":"Asia/Urumqi","c":["AQ"],"r":1},"Arctic/Longyearbyen":{"a":"Europe/Berlin","c":["SJ"],"r":1},"Asia/Aden":{"a":"Asia/Riyadh","c":["YE"],"r":1},"Asia/Almaty":{"u":360,"c":["KZ"]},"Asia/Amman":{"u":180,"c":["JO"]},"Asia/Anadyr":{"u":720,"c":["RU"]},"Asia/Aqtau":{"u":300,"c":["KZ"]},"Asia/Aqtobe":{"u":300,"c":["KZ"]},"Asia/Ashgabat":{"u":300,"c":["TM"]},"Asia/Ashkhabad":{"a":"Asia/Ashgabat","r":1},"Asia/Atyrau":{"u":300,"c":["KZ"]},"Asia/Baghdad":{"u":180,"c":["IQ"]},"Asia/Bahrain":{"a":"Asia/Qatar","c":["BH"],"r":1},"Asia/Baku":{"u":240,"c":["AZ"]},"Asia/Bangkok":{"u":420,"c":["TH","CX","KH","LA","VN"]},"Asia/Barnaul":{"u":420,"c":["RU"]},"Asia/Beirut":{"u":120,"d":180,"c":["LB"]},"Asia/Bishkek":{"u":360,"c":["KG"]},"Asia/Brunei":{"a":"Asia/Kuching","c":["BN"],"r":1},"Asia/Calcutta":{"a":"Asia/Kolkata","r":1},"Asia/Chita":{"u":540,"c":["RU"]},"Asia/Choibalsan":{"u":480,"c":["MN"]},"Asia/Chongqing":{"a":"Asia/Shanghai","r":1},"Asia/Chungking":{"a":"Asia/Shanghai","r":1},"Asia/Colombo":{"u":330,"c":["LK"]},"Asia/Dacca":{"a":"Asia/Dhaka","r":1},"Asia/Damascus":{"u":180,"c":["SY"]},"Asia/Dhaka":{"u":360,"c":["BD"]},"Asia/Dili":{"u":540,"c":["TL"]},"Asia/Dubai":{"u":240,"c":["AE","OM","RE","SC","TF"]},"Asia/Dushanbe":{"u":300,"c":["TJ"]},"Asia/Famagusta":{"u":120,"d":180,"c":["CY"]},"Asia/Gaza":{"u":120,"d":180,"c":["PS"]},"Asia/Harbin":{"a":"Asia/Shanghai","r":1},"Asia/Hebron":{"u":120,"d":180,"c":["PS"]},"Asia/Ho_Chi_Minh":{"u":420,"c":["VN"]},"Asia/Hong_Kong":{"u":480,"c":["HK"]},"Asia/Hovd":{"u":420,"c":["MN"]},"Asia/Irkutsk":{"u":480,"c":["RU"]},"Asia/Istanbul":{"a":"Europe/Istanbul","r":1},"Asia/Jakarta":{"u":420,"c":["ID"]},"Asia/Jayapura":{"u":540,"c":["ID"]},"Asia/Jerusalem":{"u":120,"d":180,"c":["IL"]},"Asia/Kabul":{"u":270,"c":["AF"]},"Asia/Kamchatka":{"u":720,"c":["RU"]},"Asia/Karachi":{"u":300,"c":["PK"]},"Asia/Kashgar":{"a":"Asia/Urumqi","c":["CN"],"r":1},"Asia/Kathmandu":{"u":345,"c":["NP"]},"Asia/Katmandu":{"a":"Asia/Kathmandu","r":1},"Asia/Khandyga":{"u":540,"c":["RU"]},"Asia/Kolkata":{"u":330,"c":["IN"]},"Asia/Krasnoyarsk":{"u":420,"c":["RU"]},"Asia/Kuala_Lumpur":{"a":"Asia/Singapore","c":["MY"],"r":1},"Asia/Kuching":{"u":480,"c":["MY","BN"]},"Asia/Kuwait":{"a":"Asia/Riyadh","c":["KW"],"r":1},"Asia/Macao":{"a":"Asia/Macau","r":1},"Asia/Macau":{"u":480,"c":["MO"]},"Asia/Magadan":{"u":660,"c":["RU"]},"Asia/Makassar":{"u":480,"c":["ID"]},"Asia/Manila":{"u":480,"c":["PH"]},"Asia/Muscat":{"a":"Asia/Dubai","c":["OM"],"r":1},"Asia/Nicosia":{"u":120,"d":180,"c":["CY"]},"Asia/Novokuznetsk":{"u":420,"c":["RU"]},"Asia/Novosibirsk":{"u":420,"c":["RU"]},"Asia/Omsk":{"u":360,"c":["RU"]},"Asia/Oral":{"u":300,"c":["KZ"]},"Asia/Phnom_Penh":{"a":"Asia/Bangkok","c":["KH"],"r":1},"Asia/Pontianak":{"u":420,"c":["ID"]},"Asia/Pyongyang":{"u":540,"c":["KP"]},"Asia/Qatar":{"u":180,"c":["QA","BH"]},"Asia/Qostanay":{"u":360,"c":["KZ"]},"Asia/Qyzylorda":{"u":300,"c":["KZ"]},"Asia/Rangoon":{"a":"Asia/Yangon","c":["MM"],"r":1},"Asia/Riyadh":{"u":180,"c":["SA","AQ","KW","YE"]},"Asia/Saigon":{"a":"Asia/Ho_Chi_Minh","r":1},"Asia/Sakhalin":{"u":660,"c":["RU"]},"Asia/Samarkand":{"u":300,"c":["UZ"]},"Asia/Seoul":{"u":540,"c":["KR"]},"Asia/Shanghai":{"u":480,"c":["CN"]},"Asia/Singapore":{"u":480,"c":["SG","MY"]},"Asia/Srednekolymsk":{"u":660,"c":["RU"]},"Asia/Taipei":{"u":480,"c":["TW"]},"Asia/Tashkent":{"u":300,"c":["UZ"]},"Asia/Tbilisi":{"u":240,"c":["GE"]},"Asia/Tehran":{"u":210,"c":["IR"]},"Asia/Tel_Aviv":{"a":"Asia/Jerusalem","r":1},"Asia/Thimbu":{"a":"Asia/Thimphu","r":1},"Asia/Thimphu":{"u":360,"c":["BT"]},"Asia/Tokyo":{"u":540,"c":["JP"]},"Asia/Tomsk":{"u":420,"c":["RU"]},"Asia/Ujung_Pandang":{"a":"Asia/Makassar","r":1},"Asia/Ulaanbaatar":{"u":480,"c":["MN"]},"Asia/Ulan_Bator":{"a":"Asia/Ulaanbaatar","r":1},"Asia/Urumqi":{"u":360,"c":["CN","AQ"]},"Asia/Ust-Nera":{"u":600,"c":["RU"]},"Asia/Vientiane":{"a":"Asia/Bangkok","c":["LA"],"r":1},"Asia/Vladivostok":{"u":600,"c":["RU"]},"Asia/Yakutsk":{"u":540,"c":["RU"]},"Asia/Yangon":{"u":390,"c":["MM","CC"]},"Asia/Yekaterinburg":{"u":300,"c":["RU"]},"Asia/Yerevan":{"u":240,"c":["AM"]},"Atlantic/Azores":{"u":-60,"d":0,"c":["PT"]},"Atlantic/Bermuda":{"u":-240,"d":-180,"c":["BM"]},"Atlantic/Canary":{"u":0,"d":60,"c":["ES"]},"Atlantic/Cape_Verde":{"u":-60,"c":["CV"]},"Atlantic/Faeroe":{"a":"Atlantic/Faroe","r":1},"Atlantic/Faroe":{"u":0,"d":60,"c":["FO"]},"Atlantic/Jan_Mayen":{"a":"Europe/Berlin","c":["SJ"],"r":1},"Atlantic/Madeira":{"u":0,"d":60,"c":["PT"]},"Atlantic/Reykjavik":{"a":"Africa/Abidjan","c":["IS"],"r":1},"Atlantic/South_Georgia":{"u":-120,"c":["GS"]},"Atlantic/St_Helena":{"a":"Africa/Abidjan","c":["SH"],"r":1},"Atlantic/Stanley":{"u":-180,"c":["FK"]},"Australia/ACT":{"a":"Australia/Sydney","r":1},"Australia/Adelaide":{"u":570,"d":630,"c":["AU"]},"Australia/Brisbane":{"u":600,"c":["AU"]},"Australia/Broken_Hill":{"u":570,"d":630,"c":["AU"]},"Australia/Canberra":{"a":"Australia/Sydney","r":1},"Australia/Currie":{"a":"Australia/Hobart","r":1},"Australia/Darwin":{"u":570,"c":["AU"]},"Australia/Eucla":{"u":525,"c":["AU"]},"Australia/Hobart":{"u":600,"d":660,"c":["AU"]},"Australia/LHI":{"a":"Australia/Lord_Howe","r":1},"Australia/Lindeman":{"u":600,"c":["AU"]},"Australia/Lord_Howe":{"u":630,"d":660,"c":["AU"]},"Australia/Melbourne":{"u":600,"d":660,"c":["AU"]},"Australia/NSW":{"a":"Australia/Sydney","r":1},"Australia/North":{"a":"Australia/Darwin","r":1},"Australia/Perth":{"u":480,"c":["AU"]},"Australia/Queensland":{"a":"Australia/Brisbane","r":1},"Australia/South":{"a":"Australia/Adelaide","r":1},"Australia/Sydney":{"u":600,"d":660,"c":["AU"]},"Australia/Tasmania":{"a":"Australia/Hobart","r":1},"Australia/Victoria":{"a":"Australia/Melbourne","r":1},"Australia/West":{"a":"Australia/Perth","r":1},"Australia/Yancowinna":{"a":"Australia/Broken_Hill","r":1},"Brazil/Acre":{"a":"America/Rio_Branco","r":1},"Brazil/DeNoronha":{"a":"America/Noronha","r":1},"Brazil/East":{"a":"America/Sao_Paulo","r":1},"Brazil/West":{"a":"America/Manaus","r":1},"CET":{"u":60,"d":120},"CST6CDT":{"u":-360,"d":-300},"Canada/Atlantic":{"a":"America/Halifax","r":1},"Canada/Central":{"a":"America/Winnipeg","r":1},"Canada/Eastern":{"a":"America/Toronto","c":["CA"],"r":1},"Canada/Mountain":{"a":"America/Edmonton","r":1},"Canada/Newfoundland":{"a":"America/St_Johns","r":1},"Canada/Pacific":{"a":"America/Vancouver","r":1},"Canada/Saskatchewan":{"a":"America/Regina","r":1},"Canada/Yukon":{"a":"America/Whitehorse","r":1},"Chile/Continental":{"a":"America/Santiago","r":1},"Chile/EasterIsland":{"a":"Pacific/Easter","r":1},"Cuba":{"a":"America/Havana","r":1},"EET":{"u":120,"d":180},"EST":{"u":-300},"EST5EDT":{"u":-300,"d":-240},"Egypt":{"a":"Africa/Cairo","r":1},"Eire":{"a":"Europe/Dublin","r":1},"Etc/GMT":{"u":0},"Etc/GMT+0":{"a":"Etc/GMT","r":1},"Etc/GMT+1":{"u":-60},"Etc/GMT+10":{"u":-600},"Etc/GMT+11":{"u":-660},"Etc/GMT+12":{"u":-720},"Etc/GMT+2":{"u":-120},"Etc/GMT+3":{"u":-180},"Etc/GMT+4":{"u":-240},"Etc/GMT+5":{"u":-300},"Etc/GMT+6":{"u":-360},"Etc/GMT+7":{"u":-420},"Etc/GMT+8":{"u":-480},"Etc/GMT+9":{"u":-540},"Etc/GMT-0":{"a":"Etc/GMT","r":1},"Etc/GMT-1":{"u":60},"Etc/GMT-10":{"u":600},"Etc/GMT-11":{"u":660},"Etc/GMT-12":{"u":720},"Etc/GMT-13":{"u":780},"Etc/GMT-14":{"u":840},"Etc/GMT-2":{"u":120},"Etc/GMT-3":{"u":180},"Etc/GMT-4":{"u":240},"Etc/GMT-5":{"u":300},"Etc/GMT-6":{"u":360},"Etc/GMT-7":{"u":420},"Etc/GMT-8":{"u":480},"Etc/GMT-9":{"u":540},"Etc/GMT0":{"a":"Etc/GMT","r":1},"Etc/Greenwich":{"a":"Etc/GMT","r":1},"Etc/UCT":{"a":"Etc/UTC","r":1},"Etc/UTC":{"u":0},"Etc/Universal":{"a":"Etc/UTC","r":1},"Etc/Zulu":{"a":"Etc/UTC","r":1},"Europe/Amsterdam":{"a":"Europe/Brussels","c":["NL"],"r":1},"Europe/Andorra":{"u":60,"d":120,"c":["AD"]},"Europe/Astrakhan":{"u":240,"c":["RU"]},"Europe/Athens":{"u":120,"d":180,"c":["GR"]},"Europe/Belfast":{"a":"Europe/London","c":["GB"],"r":1},"Europe/Belgrade":{"u":60,"d":120,"c":["RS","BA","HR","ME","MK","SI"]},"Europe/Berlin":{"u":60,"d":120,"c":["DE","DK","NO","SE","SJ"]},"Europe/Bratislava":{"a":"Europe/Prague","c":["SK"],"r":1},"Europe/Brussels":{"u":60,"d":120,"c":["BE","LU","NL"]},"Europe/Bucharest":{"u":120,"d":180,"c":["RO"]},"Europe/Budapest":{"u":60,"d":120,"c":["HU"]},"Europe/Busingen":{"a":"Europe/Zurich","c":["DE"],"r":1},"Europe/Chisinau":{"u":120,"d":180,"c":["MD"]},"Europe/Copenhagen":{"a":"Europe/Berlin","c":["DK"],"r":1},"Europe/Dublin":{"u":60,"d":0,"c":["IE"]},"Europe/Gibraltar":{"u":60,"d":120,"c":["GI"]},"Europe/Guernsey":{"a":"Europe/London","c":["GG"],"r":1},"Europe/Helsinki":{"u":120,"d":180,"c":["FI","AX"]},"Europe/Isle_of_Man":{"a":"Europe/London","c":["IM"],"r":1},"Europe/Istanbul":{"u":180,"c":["TR"]},"Europe/Jersey":{"a":"Europe/London","c":["JE"],"r":1},"Europe/Kaliningrad":{"u":120,"c":["RU"]},"Europe/Kiev":{"a":"Europe/Kyiv","r":1},"Europe/Kirov":{"u":180,"c":["RU"]},"Europe/Kyiv":{"u":120,"d":180,"c":["UA"]},"Europe/Lisbon":{"u":0,"d":60,"c":["PT"]},"Europe/Ljubljana":{"a":"Europe/Belgrade","c":["SI"],"r":1},"Europe/London":{"u":0,"d":60,"c":["GB","GG","IM","JE"]},"Europe/Luxembourg":{"a":"Europe/Brussels","c":["LU"],"r":1},"Europe/Madrid":{"u":60,"d":120,"c":["ES"]},"Europe/Malta":{"u":60,"d":120,"c":["MT"]},"Europe/Mariehamn":{"a":"Europe/Helsinki","c":["AX"],"r":1},"Europe/Minsk":{"u":180,"c":["BY"]},"Europe/Monaco":{"a":"Europe/Paris","c":["MC"],"r":1},"Europe/Moscow":{"u":180,"c":["RU"]},"Europe/Nicosia":{"a":"Asia/Nicosia","r":1},"Europe/Oslo":{"a":"Europe/Berlin","c":["NO","BV"],"r":1},"Europe/Paris":{"u":60,"d":120,"c":["FR","MC"]},"Europe/Podgorica":{"a":"Europe/Belgrade","c":["ME"],"r":1},"Europe/Prague":{"u":60,"d":120,"c":["CZ","SK"]},"Europe/Riga":{"u":120,"d":180,"c":["LV"]},"Europe/Rome":{"u":60,"d":120,"c":["IT","SM","VA"]},"Europe/Samara":{"u":240,"c":["RU"]},"Europe/San_Marino":{"a":"Europe/Rome","c":["SM"],"r":1},"Europe/Sarajevo":{"a":"Europe/Belgrade","c":["BA"],"r":1},"Europe/Saratov":{"u":240,"c":["RU"]},"Europe/Simferopol":{"u":180,"c":["RU","UA"]},"Europe/Skopje":{"a":"Europe/Belgrade","c":["MK"],"r":1},"Europe/Sofia":{"u":120,"d":180,"c":["BG"]},"Europe/Stockholm":{"a":"Europe/Berlin","c":["SE"],"r":1},"Europe/Tallinn":{"u":120,"d":180,"c":["EE"]},"Europe/Tirane":{"u":60,"d":120,"c":["AL"]},"Europe/Tiraspol":{"a":"Europe/Chisinau","r":1},"Europe/Ulyanovsk":{"u":240,"c":["RU"]},"Europe/Uzhgorod":{"a":"Europe/Kyiv","r":1},"Europe/Vaduz":{"a":"Europe/Zurich","c":["LI"],"r":1},"Europe/Vatican":{"a":"Europe/Rome","c":["VA"],"r":1},"Europe/Vienna":{"u":60,"d":120,"c":["AT"]},"Europe/Vilnius":{"u":120,"d":180,"c":["LT"]},"Europe/Volgograd":{"u":180,"c":["RU"]},"Europe/Warsaw":{"u":60,"d":120,"c":["PL"]},"Europe/Zagreb":{"a":"Europe/Belgrade","c":["HR"],"r":1},"Europe/Zaporozhye":{"a":"Europe/Kyiv","r":1},"Europe/Zurich":{"u":60,"d":120,"c":["CH","DE","LI"]},"Factory":{"u":0},"GB":{"a":"Europe/London","c":["GB"],"r":1},"GB-Eire":{"a":"Europe/London","c":["GB"],"r":1},"GMT":{"a":"Etc/GMT","r":1},"GMT+0":{"a":"Etc/GMT","r":1},"GMT-0":{"a":"Etc/GMT","r":1},"GMT0":{"a":"Etc/GMT","r":1},"Greenwich":{"a":"Etc/GMT","r":1},"HST":{"u":-600},"Hongkong":{"a":"Asia/Hong_Kong","r":1},"Iceland":{"a":"Africa/Abidjan","c":["IS"],"r":1},"Indian/Antananarivo":{"a":"Africa/Nairobi","c":["MG"],"r":1},"Indian/Chagos":{"u":360,"c":["IO"]},"Indian/Christmas":{"a":"Asia/Bangkok","c":["CX"],"r":1},"Indian/Cocos":{"a":"Asia/Yangon","c":["CC"],"r":1},"Indian/Comoro":{"a":"Africa/Nairobi","c":["KM"],"r":1},"Indian/Kerguelen":{"a":"Indian/Maldives","c":["TF","HM"],"r":1},"Indian/Mahe":{"a":"Asia/Dubai","c":["SC"],"r":1},"Indian/Maldives":{"u":300,"c":["MV","TF"]},"Indian/Mauritius":{"u":240,"c":["MU"]},"Indian/Mayotte":{"a":"Africa/Nairobi","c":["YT"],"r":1},"Indian/Reunion":{"a":"Asia/Dubai","c":["RE"],"r":1},"Iran":{"a":"Asia/Tehran","r":1},"Israel":{"a":"Asia/Jerusalem","r":1},"Jamaica":{"a":"America/Jamaica","r":1},"Japan":{"a":"Asia/Tokyo","r":1},"Kwajalein":{"a":"Pacific/Kwajalein","r":1},"Libya":{"a":"Africa/Tripoli","r":1},"MET":{"u":60,"d":120},"MST":{"u":-420},"MST7MDT":{"u":-420,"d":-360},"Mexico/BajaNorte":{"a":"America/Tijuana","r":1},"Mexico/BajaSur":{"a":"America/Mazatlan","r":1},"Mexico/General":{"a":"America/Mexico_City","r":1},"NZ":{"a":"Pacific/Auckland","c":["NZ"],"r":1},"NZ-CHAT":{"a":"Pacific/Chatham","r":1},"Navajo":{"a":"America/Denver","r":1},"PRC":{"a":"Asia/Shanghai","r":1},"PST8PDT":{"u":-480,"d":-420},"Pacific/Apia":{"u":780,"c":["WS"]},"Pacific/Auckland":{"u":720,"d":780,"c":["NZ","AQ"]},"Pacific/Bougainville":{"u":660,"c":["PG"]},"Pacific/Chatham":{"u":765,"d":825,"c":["NZ"]},"Pacific/Chuuk":{"a":"Pacific/Port_Moresby","c":["FM"],"r":1},"Pacific/Easter":{"u":-360,"d":-300,"c":["CL"]},"Pacific/Efate":{"u":660,"c":["VU"]},"Pacific/Enderbury":{"a":"Pacific/Kanton","r":1},"Pacific/Fakaofo":{"u":780,"c":["TK"]},"Pacific/Fiji":{"u":720,"c":["FJ"]},"Pacific/Funafuti":{"a":"Pacific/Tarawa","c":["TV"],"r":1},"Pacific/Galapagos":{"u":-360,"c":["EC"]},"Pacific/Gambier":{"u":-540,"c":["PF"]},"Pacific/Guadalcanal":{"u":660,"c":["SB","FM"]},"Pacific/Guam":{"u":600,"c":["GU","MP"]},"Pacific/Honolulu":{"u":-600,"c":["US","UM"]},"Pacific/Johnston":{"a":"Pacific/Honolulu","c":["UM"],"r":1},"Pacific/Kanton":{"u":780,"c":["KI"]},"Pacific/Kiritimati":{"u":840,"c":["KI"]},"Pacific/Kosrae":{"u":660,"c":["FM"]},"Pacific/Kwajalein":{"u":720,"c":["MH"]},"Pacific/Majuro":{"a":"Pacific/Tarawa","c":["MH"],"r":1},"Pacific/Marquesas":{"u":-570,"c":["PF"]},"Pacific/Midway":{"a":"Pacific/Pago_Pago","c":["UM"],"r":1},"Pacific/Nauru":{"u":720,"c":["NR"]},"Pacific/Niue":{"u":-660,"c":["NU"]},"Pacific/Norfolk":{"u":660,"d":720,"c":["NF"]},"Pacific/Noumea":{"u":660,"c":["NC"]},"Pacific/Pago_Pago":{"u":-660,"c":["AS","UM"]},"Pacific/Palau":{"u":540,"c":["PW"]},"Pacific/Pitcairn":{"u":-480,"c":["PN"]},"Pacific/Pohnpei":{"a":"Pacific/Guadalcanal","c":["FM"],"r":1},"Pacific/Ponape":{"a":"Pacific/Guadalcanal","c":["FM"],"r":1},"Pacific/Port_Moresby":{"u":600,"c":["PG","AQ","FM"]},"Pacific/Rarotonga":{"u":-600,"c":["CK"]},"Pacific/Saipan":{"a":"Pacific/Guam","c":["MP"],"r":1},"Pacific/Samoa":{"a":"Pacific/Pago_Pago","c":["AS"],"r":1},"Pacific/Tahiti":{"u":-600,"c":["PF"]},"Pacific/Tarawa":{"u":720,"c":["KI","MH","TV","UM","WF"]},"Pacific/Tongatapu":{"u":780,"c":["TO"]},"Pacific/Truk":{"a":"Pacific/Port_Moresby","c":["FM"],"r":1},"Pacific/Wake":{"a":"Pacific/Tarawa","c":["UM"],"r":1},"Pacific/Wallis":{"a":"Pacific/Tarawa","c":["WF"],"r":1},"Pacific/Yap":{"a":"Pacific/Port_Moresby","c":["FM"],"r":1},"Poland":{"a":"Europe/Warsaw","r":1},"Portugal":{"a":"Europe/Lisbon","r":1},"ROC":{"a":"Asia/Taipei","r":1},"ROK":{"a":"Asia/Seoul","r":1},"Singapore":{"a":"Asia/Singapore","c":["SG"],"r":1},"Turkey":{"a":"Europe/Istanbul","r":1},"UCT":{"a":"Etc/UTC","r":1},"US/Alaska":{"a":"America/Anchorage","r":1},"US/Aleutian":{"a":"America/Adak","r":1},"US/Arizona":{"a":"America/Phoenix","c":["US"],"r":1},"US/Central":{"a":"America/Chicago","r":1},"US/East-Indiana":{"a":"America/Indiana/Indianapolis","r":1},"US/Eastern":{"a":"America/New_York","r":1},"US/Hawaii":{"a":"Pacific/Honolulu","c":["US"],"r":1},"US/Indiana-Starke":{"a":"America/Indiana/Knox","r":1},"US/Michigan":{"a":"America/Detroit","r":1},"US/Mountain":{"a":"America/Denver","r":1},"US/Pacific":{"a":"America/Los_Angeles","r":1},"US/Samoa":{"a":"Pacific/Pago_Pago","c":["AS"],"r":1},"UTC":{"a":"Etc/UTC","r":1},"Universal":{"a":"Etc/UTC","r":1},"W-SU":{"a":"Europe/Moscow","r":1},"WET":{"u":0,"d":60},"Zulu":{"a":"Etc/UTC","r":1}}};if(window.TIMEZONEOFFSET==undefined){lib.TIMEZONEOFFSET=lib.timezoneoffset=function(){return new Date().getTimezoneOffset()/(-60);};}
if(window.TIMEZONE==undefined){lib.TIMEZONE=lib.timezone=function(country_id){let time_zones=[];country_id=country_id||false;try{if(country_id){if(typeof country_id=='string'){country_id=country_id.toUpperCase();for(let i in data['timezones']){if('c' in data['timezones'][i]&&data['timezones'][i]['c'].indexOf(country_id)!=-1){time_zones.push(i);}}}}else time_zones.push(Intl.DateTimeFormat().resolvedOptions().timeZone);}catch(err){console.log(err);}
return time_zones;}}
if(window.COUNTRY==undefined){lib.COUNTRY=lib.country=function(tz_ci){let countries=[];try{tz_ci=tz_ci||TIMEZONE()[0];if(typeof tz_ci=='string'){tz_ci=tz_ci.toUpperCase();if(tz_ci in data['countries']){countries.push(data['countries'][tz_ci]);}else{for(let i in data['timezones']){if(i.toUpperCase()==tz_ci){if('c' in data['timezones'][i]){let c=data['timezones'][i]['c'];for(let j in c){countries.push(data['countries'][c[j]]);}}}}}}}catch(err){console.log(err);}
return countries;}}
if(window.REGION==undefined){lib.REGION=lib.region=function(tz_ci){let regions=[],tz=[];try{tz_ci=tz_ci||false;if(tz_ci){if(typeof tz_ci=='string'){tz_ci=tz_ci.toUpperCase();if(tz_ci in data['countries']){for(let i in data['timezones']){if('c' in data['timezones'][i]&&data['timezones'][i]['c'].indexOf(tz_ci)!=-1){regions.push(i.split('/')[0]);}}}else{for(let i in data['timezones']){if(i.toUpperCase()==tz_ci){regions.push(i.split('/')[0]);break;}}}}}else{tz=TIMEZONE();for(let i in tz){regions.push(tz[i].split('/')[0]);}}}catch(err){console.log(err);}
regions=regions.filter(function(item,index){return regions.indexOf(item)===index;});return regions;}}
root.CF_LOCATION=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['location']={'prefix':'','callback':function()
{fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['location']['prefix'],CF_LOCATION);}};;(function(root){var lib={};function _cookie_name(cname){cname=cname+'';cname=cname.replace(/^\s+/,'').replace(/\s+$/,'');return cname.length?cname:false;}
if(window.CFFSETCOOKIE==undefined){lib.CFFSETCOOKIE=lib.cffsetcookie=function(cname,cvalue,exdays){let name=_cookie_name(cname),expires='';if(name){if(typeof exdays!='undefined'&&!isNaN(exdays)){const d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));expires=";expires="+d.toUTCString();}
document.cookie=name+"="+cvalue+expires+";path=/";return true;}
return false;};}
if(window.CFFGETCOOKIE==undefined){lib.CFFGETCOOKIE=lib.cffgetcookie=function(cname){let name=_cookie_name(cname);if(name){name=name+"=";let ca=document.cookie.split(';'),c;for(let i=0;i<ca.length;i++){c=ca[i];c=c.replace(/^\s+/g,'');if(c.indexOf(name)==0){return c.substring(name.length);}}}
return null;};}
if(window.CFFCHECKCOOKIE==undefined){lib.CFFCHECKCOOKIE=lib.cffcheckcookie=function(cname){let name=_cookie_name(cname);return(!name||null==lib.CFFGETCOOKIE(name))?false:true;};}
if(window.CFFDELETECOOKIE==undefined){lib.CFFDELETECOOKIE=lib.cffdeletecookie=function(cname){let name=_cookie_name(cname);if(name&&lib.CFFCHECKCOOKIE(name)){document.cookie=name+'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';}};}
root.CF_COOKIES=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['cookies']={'prefix':'','callback':function()
{fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['cookies']['prefix'],CF_COOKIES);}};$.fbuilder['version']='1.2.56';$.fbuilder['controls']=$.fbuilder['controls']||{};$.fbuilder['forms']=$.fbuilder['forms']||{};$.fbuilder['isNumeric']=function(n){return!isNaN(parseFloat(n))&&isFinite(n);};$.fbuilder['htmlEncode']=window['cff_esc_attr']=function(value)
{return $('<div/>').text(value).html().replace(/"/g,"&quot;").replace(/&amp;lt;/g,'&lt;').replace(/&amp;gt;/g,'&gt;');};$.fbuilder['htmlDecode']=window['cff_html_decode']=function(value)
{return(/&(?:#x[a-f0-9]+|#[0-9]+|[a-z0-9]+);?/ig.test(value))?$('<div/>').html(value).text():value;};$.fbuilder['sanitize']=window['cff_sanitize']=function(value)
{if(typeof value=='string')
value=value.replace(/<script\b.*\bscript>/ig,'').replace(/<script[^>]*>/ig,'').replace(/(\b)(on[a-z]+)\s*=/ig,"$1_$2=");return value;};$.fbuilder['escapeSymbol']=function(value)
{return value.replace(/([\^\$\-\.\,\[\]\(\)\/\\\*\?\+\!\{\}])/g,"\\$1");};$.fbuilder['parseValStr']=function(value,raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;value=String(value||'').trim();value=value.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"');var r=($.fbuilder.isNumeric(value))?((raw)?value:value*1):((no_quotes)?value:'"'+value+'"');return raw?r:(window.cffsanitize!=undefined?cffsanitize(r,true):r);};$.fbuilder['parseVal']=function(value,thousand,decimal,no_quotes)
{if(!!value==false)return 0;no_quotes=no_quotes||false;if(/(\d{1,2}[\/\.\-]\d{1,2}[\/\.\-]\d{4})|(\d{4}[\/\.\-]\d{1,2}[\/\.\-]\d{1,2})/.test(value))
return $.fbuilder['parseValStr'](value,false,no_quotes);thousand=$.fbuilder.escapeSymbol(String((typeof thousand!='undefined')?thousand:',').trim());decimal=String((!!!decimal||/^\s*$/.test(decimal))?'.':decimal).trim();var p,_thousand=/^\s*$/.test(thousand)?'\,':thousand,t=new String(value);try{if(1==t.match(new RegExp(_thousand,'g')).length){t=t.replace(new RegExp(_thousand+'\(\\d{1,2}\)$'),decimal+'$1');}}catch(err){}
t=t.replace(new RegExp(thousand,'g'),'').replace(new RegExp($.fbuilder.escapeSymbol(decimal),'g'),'.').replace(/\s/g,'');p=/[+\-]?((\d+(\.\d+)?)|(\.\d+))(?:[eE][+\-]?\d+)?/.exec(t);return(p)?((/^0\d/.test(p[0]))?p[0].substr(1):p[0])*1:$.fbuilder['parseValStr'](value,false,no_quotes);};$.fbuilder['isMobile']=function(){try{document.createEvent("TouchEvent");return true;}
catch(e){return false;}};$.fbuilder['setBrowserHistory']=function(r)
{if('history' in window)
{var b='#',s='';for(var id in $.fbuilder.forms)
{b+=s+'f'+id.replace(/[^\d]/g,'')+'p'+($.fbuilder.forms[id]['currentPage']||0);s='|';}
history[(r)?'replaceState':'pushState']({},document.title,b);}};$.fbuilder['manageHistory']=function(onload)
{var b=(document.URL.split('#')[1]||null),m,f,t,flag=false;if(b)
{while(m=b.match(/f(\d+)p(\d+)\|?/))
{f='_'+m[1];t=onload?0:m[2]*1;b=b.replace(m[0],'');flag=(!(f in $.fbuilder.forms)||t!=$.fbuilder['goToPage']({'formIdentifier':f,'from':0,'to':t,'animate':false}));}}
else
{for(f in $.fbuilder.forms)
if('currentPage' in $.fbuilder.forms[f])
$.fbuilder['goToPage']({'formIdentifier':f,'from':0,'to':0,'animate':false});}
if(flag)$.fbuilder.setBrowserHistory(true);};$.fbuilder['goToPage']=function(config)
{function swapPages(pageToHide,pageToShow,callback)
{var t=300,w=pageToHide.width(),f=pageToHide.closest('form'),fx=f.data('animation_effect')=='slide'?'slide':'fade';if(('animate' in config&&config.animate==false)||(f.data('animate_form')==undefined||f.data('animate_form')*1==0))t=0;if(fx=='fade'){pageToHide.fadeOut(t,function(){pageToHide.find(".field").addClass("ignorepb");pageToShow.fadeIn(t,function(){pageToShow.find(".ignorepb").removeClass("ignorepb");callback();if('callback' in config)config.callback();});});}else{f.css('overflow-x','hidden');var d=pageToHide.attr('page')*1<pageToShow.attr('page')*1?-1:1;pageToHide.animate({width:w,marginLeft:d*w},t,'linear',function(){pageToHide.hide().find(".field").addClass("ignorepb");pageToShow.css({width:w,marginLeft:-1*d*w}).show().animate({width:w,marginLeft:0},t,'linear',function(){pageToShow.css('width','100%');pageToShow.find(".ignorepb").removeClass("ignorepb");callback();if('callback' in config)config.callback();});});}};if(('formIdentifier' in config||'form' in config)&&'to' in config)
{var id=(config['form'])?$('[name="cp_calculatedfieldsf_pform_psequence"]',config['form']).val():config['formIdentifier'],formObj=$.fbuilder.forms[id],_from=(config['from']||formObj['currentPage']||0)*1,_to=config['to']*1,direction=(_from<_to)?1:-1,formDom=$(config['form']||'[id="'+formObj.formId+'"]'),pageDom,i=_from;_from=isNaN(_from)?0:_from;_to=isNaN(_to)?0:_to;while(i!=_to)
{if(direction==1&&(!('forcing' in config)||config['forcing']==false)&&!formDom.valid())break;i+=direction;}
formObj['currentPage']=i;pageDom=$(".pbreak.pb"+i,formDom);if(i!=_from){swapPages($(".pbreak:visible",formDom),pageDom,function()
{try
{if(!$.fbuilder.isMobile())
{var ff=pageDom.find(":focusable:first");if(ff&&!ff.hasClass('hasDatepicker')&&ff.attr('type')!='button'&&ff.attr('type')!='radio'&&ff.attr('type')!='checkbox'&&ff.closest('[uh]').length==0)ff.focus();}
var _wScrollTop=$(window).scrollTop(),_viewportHeight=$(window).height(),_scrollTop=formDom.offset().top;if(_scrollTop<_wScrollTop||(_wScrollTop+_viewportHeight)<_scrollTop)
$('html, body').animate({scrollTop:_scrollTop},0);}
catch(e){}
$(document).trigger('cff-gotopage',{'from':_from,'to':i,'form':formDom});});}else{formDom.validate().focusInvalid();}
return i;}};$.fbuilder['showHideDep']=function(config)
{var processItems=function(items,isNotFirstTime)
{for(var i=0,h=items.length;i<h;i++)
{if(typeof items[i]=='string')items[i]=$.fbuilder['forms'][id].getItem(items[i]);if(items[i])
{if(isNotFirstTime)
{$('[name="'+items[i].name+'"]').trigger('depEvent');if(items[i].usedInEquations){var equations=[];for(var j in items[i].usedInEquations)
if(getField(items[i].usedInEquations[j].result)['dynamicEval'])equations.push(items[i].usedInEquations[j]);if(equations.length)
$.fbuilder['calculator'].enqueueEquation(id,equations);}}
if('showHideDep' in items[i])
{var list=items[i]['showHideDep'](toShow,toHide,hiddenByContainer,interval);if(list&&list.length)processItems(list,true);}}}};if('formIdentifier' in config)
{var id=config['formIdentifier'];if(id in $.fbuilder['forms'])
{var interval=$('#'+$.fbuilder['forms'][id]['formId']).data('animate_form')?250:0,toShow=$.fbuilder['forms'][id]['toShow'],toHide=$.fbuilder['forms'][id]['toHide'],hiddenByContainer=$.fbuilder['forms'][id]['hiddenByContainer'],items=('fieldIdentifier' in config)?[$.fbuilder['forms'][id].getItem(config['fieldIdentifier'].replace(/_[cr]b\d+$/i,''))]:$.fbuilder['forms'][id].getItems();processItems(items);$('[id="'+$.fbuilder['forms'][id]['formId']+'"]').trigger('showHideDepEvent',$.fbuilder['forms'][id]['formId']);}}};$.fbuilder['cpcffLoadDefaults']=function(o)
{if(typeof cpcff_default!='undefined')
{var $=fbuilderjQuery,id=o.identifier.replace(/[^\d]/g,''),item,data,formObj,f;if(id in cpcff_default)
{data=cpcff_default[id];id='_'+id;formObj=$.fbuilder['forms'][id];f=$('#'+formObj['formId']);f.attr('data-evalequations',0);for(var fieldId in data)
{item=formObj.getItem(fieldId+id);try{if('setVal' in item)item.setVal(data[fieldId],true,true);$('[name*="'+item.name+'"]').trigger('trigger_ds');}
catch(err){}}
f.attr('data-evalequations',o.evalequations);$.fbuilder.showHideDep({'formIdentifier':o.identifier});f.trigger('cff-loaded-defaults');}}};$.fn.fbuilder=function(options){var opt=$.extend({},{pub:false,identifier:"",title:""},options,true);opt.messages=$.extend({previous:"Previous",next:"Next",pageof:"Page {0} of {0}",required:"This field is required.",email:"Please enter a valid email address.",datemmddyyyy:"Please enter a valid date with this format(mm/dd/yyyy)",dateddmmyyyy:"Please enter a valid date with this format(dd/mm/yyyy)",number:"Please enter a valid number.",digits:"Please enter only digits.",maxlength:"Please enter no more than {0} characters.",minlength:"Please enter at least {0} characters.",equalTo:"Please enter the same value again.",max:"Please enter a value less than or equal to {0}.",min:"Please enter a value greater than or equal to {0}.",currency:"Please enter a valid currency value."},(opt.messages||{}));opt.messages.max=$.validator.format(opt.messages.max);opt.messages.min=$.validator.format(opt.messages.min);opt.messages.maxlength=$.validator.format(opt.messages.maxlength);opt.messages.minlength=$.validator.format(opt.messages.minlength);opt.messages.dateyyyymmdd=opt.messages.datemmddyyyy;opt.messages.dateyyyyddmm=opt.messages.dateddmmyyyy;$.extend($.validator.messages,opt.messages);$("#cp_calculatedfieldsf_pform"+opt.identifier).validate({ignore:".ignore,.ignorepb",errorClass:'cpefb_error',errorElement:"div",errorPlacement:function(e,element)
{var _parent=element.closest('.dfield'),_uh=_parent.find('span.uh:visible'),_arg={'position':'absolute'},_t=_parent.find('input[type="button"],input[type="reset"],input[type="text"],input[type="number"],input[type="email"],input[type="file"],input[type="color"],input[type="date"],input[type="password"],input[type="email"],select,textarea');try{if(_t.length)_arg['left']=_t.first()[0].offsetLeft;}catch(err){}
e.addClass('message').css(_arg).appendTo((_uh.length)?_uh:_parent);}}).messages=opt.messages;var items=[],fieldsIndex={},reloadItemsPublic=function()
{var form_tag=$("#cp_calculatedfieldsf_pform"+opt.identifier),header_tag=$("#formheader"+opt.identifier),fieldlist_tag=$("#fieldlist"+opt.identifier),page_tag,i=0,page=0,getCaptchaHTML=function(){var captcha_tag=$("#cpcaptchalayer"+opt.identifier+':not(:empty)')
html='';if(captcha_tag.length)
{html+='<div class="captcha">'+captcha_tag.html()+'</div><div class="clearer"></div>';captcha_tag.remove();}
return html;},getSubmitHTML=function(){var submit_tag=$("#cp_subbtn"+opt.identifier+':not(:empty)'),html='';if(submit_tag.length)
{html+='<div class="pbSubmit" tabindex="0">'+submit_tag.html()+'</div>';submit_tag.remove();}
return html;};form_tag.addClass(theForm.formtemplate);theForm.form_tag=form_tag;if(!opt.cached)
{page_tag=$('<div class="pb'+page+' pbreak" page="'+page+'"></div>');header_tag.html($.fbuilder.sanitize(theForm.show()));fieldlist_tag.addClass(theForm.formlayout).append(page_tag);for(i;i<items.length;i++)
{items[i].index=i;if(items[i].ftype=="fPageBreak")
{page++;page_tag=$('<div class="pb'+page+' pbreak" page="'+page+'"></div>');fieldlist_tag.append(page_tag);}
else
{page_tag.append((items[i].ftype!='fhtml')?$.fbuilder.sanitize(items[i].show()):items[i].show());if(items[i].predefinedClick)
{page_tag.find("#"+items[i].name).attr({placeholder:items[i].predefined,value:""});}
if(items[i].exclude)
{page_tag.find('.'+items[i].name).addClass('cff-exclude');}
if('audiotutorial' in items[i]&&!/^\s*$/.test(items[i].audiotutorial))
{(function(){var t=(typeof opt!='undefined'&&'messages' in opt&&'audio_tutorial' in opt.messages)?opt.messages.audio_tutorial:false,e=items[i].jQueryRef(),c=$('<span class="cff-audio-icon" '+(t?'uh="'+cff_esc_attr(t)+'"':'')+'></span>'),a=$('<audio src="'+cff_esc_attr(items[i].audiotutorial)+'" class="cff-audio-tutorial"></audio>');a.appendTo(e.find('.dfield'));c.appendTo($(e.children('label')[0]||e));c.on('click',function(evt){var e=$(this);if(e.hasClass('cff-audio-stop-icon')){e.removeClass('cff-audio-stop-icon');a[0].pause();a[0].currentTime=0;}else{$('.cff-audio-stop-icon').trigger('click');e.addClass('cff-audio-stop-icon');a[0].play();}
evt.stopPropagation();evt.preventDefault();return false;});})()}
if(items[i].userhelpTooltip)
{var uh=items[i].jQueryRef();if(items[i].userhelp&&items[i].userhelp.length)
{if(items[i].tooltipIcon)$('<span class="cff-help-icon"></span>').attr('uh',items[i].userhelp).appendTo($(uh.children('label')[0]||uh));else{var target=uh.find('input[type="button"],input[type="reset"],input[type="text"],input[type="number"],input[type="email"],input[type="file"],input[type="color"],input[type="date"],input[type="password"],input[type="email"],select,textarea');if(!target.length)target=uh.find('.slider');if(!target.length)target=uh.find('.dfield label');if(!target.length)target=uh.find('.dfield');if(!target.length)target=uh;$(target).attr('uh',items[i].userhelp);}}
uh.find(".uh").remove();}}}}
else
{page=fieldlist_tag.find('.pbreak').length;i=items.length;}
if(page>0)
{if(!opt.cached)
{$(".pb"+page,fieldlist_tag).addClass("pbEnd");$(".pbreak",fieldlist_tag).each(function(index){var code='',bSubmit='';if(index==page)
{code+=getCaptchaHTML();bSubmit=getSubmitHTML();}
$(this).wrapInner('<fieldset></fieldset>').find('fieldset:eq(0)').prepend('<legend>'+opt.messages.pageof.replace(/\{\s*\d+\s*\}/,(index+1)).replace(/\{\s*\d+\s*\}/,(page+1))+'</legend>').append(code+'<div class="pbPrevious" tabindex="0">'+opt.messages.previous+'</div><div class="pbNext" tabindex="0">'+opt.messages.next+'</div>'+bSubmit+'<div class="clearer"></div>');});}
fieldlist_tag.find(".pbPrevious,.pbNext").on("keyup",function(evt){if(evt.which==13||evt.which==32)$(this).trigger('click');}).on("click",{'identifier':opt.identifier},function(evt){var _from=($.fbuilder.forms[evt.data.identifier]['currentPage']||0),_inc=($(this).hasClass("pbPrevious"))?-1:1,_p=$.fbuilder['goToPage']({'formIdentifier':evt.data.identifier,'from':_from,'to':_from+_inc,'callback':function()
{setTimeout(function(){if(_from!=_p)$.fbuilder.setBrowserHistory();if(_pDom.find('.fields:visible').length==0)
if(_inc==-1&&0<_p)_pDom.find('.pbPrevious').trigger('click');else if(!_pDom.hasClass('pbEnd'))_pDom.find('.pbNext').trigger('click');},10);}}),_pDom=$('.pb'+_p);return false;});}
else
{if(!opt.cached)$(".pb"+page,fieldlist_tag).append(getCaptchaHTML()+getSubmitHTML());}
if(!opt.cached&&opt.setCache)
{var url=document.location.href,data={'cffaction':'cff_cache','cache':form_tag.html().replace(/\n+/g,''),'form':form_tag.find('[name="cp_calculatedfieldsf_id"]').val()};$.post(url,data,function(data){if(typeof console!='undefined')console.log(data);});}
jQuery(document).on('click','.cff-help-icon',function(evt){evt.stopPropagation();evt.preventDefault();});$(document).on('click','#fbuilder .captcha img',function(){try{var e=$(this),src=e.attr('src');if(!(new RegExp('^http(s)?\:\/\/'+$.fbuilder.escapeSymbol(window.location.host),'i')).test(src))src=document.location.href.split('?')[0]+'?'+src.split('?')[1];e.attr('src',src.replace(/&\d+$/,'')+'&'+Math.floor(Math.random()*1000));}catch(err){if('console' in window)console.log(err);}});$(form_tag).find('.captcha img').trigger('click');$('#fieldlist'+opt.identifier).find(".pbSubmit").off('click').on("keyup",function(evt){if(evt.which==13||evt.which==32)$(this).trigger('click');}).on("click",{'identifier':opt.identifier},function(evt){$(this).closest("form").submit();});if(i>0)
{theForm.after_show(opt.identifier);for(var i=0;i<items.length;i++)
{items[i].after_show();if('csslayout' in items[i]&&/\bignorefield\b/i.test(items[i]['csslayout']))
IGNOREFIELD(items[i].name,items[i].form_identifier);}
theForm.form_tag.removeData('first_time');$('script[type="cff-script"]').each(function(){$(this).after(this.outerHTML.replace('cff-script','text/javascript')).remove();});$(document).on('change','#fieldlist'+opt.identifier+' .depItemSel,'+'#fieldlist'+opt.identifier+' .depItem',{'identifier':opt.identifier},function(evt)
{$.fbuilder.showHideDep({'formIdentifier':evt.data.identifier,'fieldIdentifier':evt.target.id});});setTimeout(function(){$.fbuilder.showHideDep({'formIdentifier':opt.identifier});$('.cff-processing-form').remove();if('form_tag' in theForm){theForm.form_tag.trigger('formReady',[theForm.form_tag.attr('id'),theForm.form_tag,theForm]);}},50);try
{$.widget.bridge('uitooltip',$.ui.tooltip);$("#fbuilder"+opt.identifier).uitooltip({show:false,hide:false,tooltipClass:"uh-tooltip",position:{my:"left top",at:"left bottom+5",collision:"flipfit"},items:"[uh]",content:function(){return $(this).attr("uh");},open:function(evt,ui){try{if(window.matchMedia("screen and (max-width: 640px)").matches&&window.orientation!=undefined){var duration=('undefined'!=typeof tooltip_duration&&/^\d+$/.test(tooltip_duration))?tooltip_duration:3000;setTimeout(function(){$(ui.tooltip).hide('fade');},duration);}}catch(err){}}});}catch(e){}}
$("#fieldlist"+opt.identifier+" .pbreak:not(.pb0)").find(".field").addClass("ignorepb");$("#fieldlist"+opt.identifier).find('[type="date"],[type="hidden"]').each(function(){$(this).rules('add',{step:false});});};var fform=function(){};$.extend(fform.prototype,{title:"Untitled Form",titletag:'H2',textalign:'default',headertextcolor:'',description:"This is my form. Please fill it out. It's awesome!",formlayout:"top_aligned",formtemplate:"",evalequations:1,evalequations_delay:0,evalequationsevent:2,loading_animation:0,animate_form:0,animation_effect:'fade',autocomplete:1,show:function(){let css=(this.textalign!='default')?'text-align:'+this.textalign+';':'';if(this.headertextcolor!='')css+='color:'+this.headertextcolor+';';return'<div class="fform" id="field">'+(!/^\s*$/.test(this.title)?'<'+this.titletag+' class="cff-form-title" style="'+css+'">'+this.title+'</'+this.titletag+'>':'')+(!/^\s*$/.test(this.description)?'<span class="cff-form-description" style="'+css+'">'+this.description+'</span>':'')+'</div>';},after_show:function(id){if(typeof $['validator']!='undefined')
{if(!('cffcurrency' in $.validator.methods))
$.validator.addMethod('cffcurrency',function(v,el)
{var f=el.id.match(/_\d+$/),esc=$.fbuilder.escapeSymbol,r;e=$.fbuilder['forms'][f[0]].getItem(el.name);r=new RegExp('^\\s*('+esc(e.currencySymbol)+')?\\s*\\-?\\d+('+esc(e.thousandSeparator)+'\\d{3})*'+((e.noCents)?'':'('+e.centSeparator+'\\d+)?')+'\\s*('+esc(e.currencyText)+')?\\s*$','i');return this.optional(el)||r.test(v)||($.fbuilder.isNumeric(v)&&(!e.noCents||v===FLOOR(v)));},$.validator.messages['currency']);$.validator.methods.number=function(v,el)
{var f=el.id.match(/_\d+$/),esc=$.fbuilder.escapeSymbol,e,r;if(f&&el.id.match(/fieldname/i))e=$.fbuilder['forms'][f[0]].getItem(el.name);if(!e)e={thousandSeparator:',',decimalSymbol:'.'};else v=e.val();r=new RegExp('^\\s*\\-?\\d+('+esc(e.thousandSeparator)+'\\d{3})*('+esc(e.decimalSymbol)+'\\d+)?\\s*\\%?\\s*$','i');return this.optional(el)||r.test(v)||$.fbuilder.isNumeric(v);};$.validator.methods.min=function(v,el,p)
{var f=el.id.match(/_\d+$/),e;if(f&&el.id.match(/fieldname/i))e=$.fbuilder['forms'][f[0]].getItem(el.name);if(e){v=e.val();if('dformat' in e&&e.dformat=='percent')v*=100;}
return this.optional(el)||v>=p;};$.validator.methods.max=function(v,el,p)
{var f=el.id.match(/_\d+$/),e;if(f&&el.id.match(/fieldname/i))e=$.fbuilder['forms'][f[0]].getItem(el.name);if(e){v=e.val();if('dformat' in e&&e.dformat=='percent')v*=100;}
return this.optional(el)||v<=p;};}
var form=$('#cp_calculatedfieldsf_pform'+id);form.on('keydown keyup keypress','[type="text"],[type="number"],[type="password"],[type="email"]',function(evt){if(evt.keyCode===13)
{evt.preventDefault();evt.stopPropagation();return false;}});if(typeof $.fn.fbuilder_localstorage!='undefined'&&form.hasClass('persist-form'))
{form.fbuilder_localstorage();}
form.attr('data-evalequations',('evalequations_delay' in this&&this.evalequations_delay)?0:this.evalequations).attr('data-evalequationsevent',this.evalequationsevent).attr('data-animate_form',this.animate_form).attr('data-animation_effect',this.animation_effect).attr('autocomplete',((this.autocomplete)?'on':'off')).find('input,select').on('blur',function(){try{if(!$(this).is(':file'))$(this).valid();}catch(e){};});if(!this.autocomplete)form.find('input[name*="fieldname"]:not([autocomplete])').attr('autocomplete','new-password');}});var theForm,ffunct={toShow:{},toHide:{},hiddenByContainer:{},getItem:function(name)
{if(name in fieldsIndex)return items[fieldsIndex[name]];var regExp=new RegExp((parseInt(name,10)==name)?'fieldname'+name+'_':name+'_',i);for(var i in items)
{if(items[i].name==name||regExp.test(items[i].name))
{return items[i];}}
return false;},getItems:function()
{return items;},loadData:function(f)
{var d=window[f];if(typeof d!='undefined')
{if(typeof d=='object'&&(typeof d.nodeType!=='undefined'||d instanceof jQuery)){d=JSON.parse(jQuery(d).val());}
else if(typeof d=='string'){d=JSON.parse(d);}
if(d.length==2)
{this.formId=d[1]['formid'];items=[];for(var i=0;i<d[0].length;i++)
{var obj=new $.fbuilder.controls[d[0][i].ftype]();obj=$.extend(true,{},obj,d[0][i]);obj.name=obj.name+opt.identifier;obj.form_identifier=opt.identifier;if('fieldlayout' in obj&&obj.fieldlayout!='default')
obj.csslayout=('csslayout' in obj?obj.csslayout+' ':'')+obj.fieldlayout
obj.init();items[i]=obj;fieldsIndex[obj.name]=i;}
theForm=new fform();theForm=$.extend(theForm,d[1][0]);opt.evalequations=d[1][0]['evalequations'];opt.evalequations_delay=(typeof d[1][0]['evalequations_delay']!='undefined'&&d[1][0]['evalequations_delay'])?1:0;opt.cached=(typeof d[1]['cached']!='undefined'&&d[1]['cached'])?true:false;opt.setCache=(!this.cached&&typeof d[1]['setCache']!='undefined'&&d[1]['setCache'])?true:false;reloadItemsPublic();}
$(document).on('formReady','form#'+this.formId,(function(opt,fid){return function(evt,fid2){if(fid==fid2){$.fbuilder.cpcffLoadDefaults(opt);$(this).attr('data-evalequations',opt.evalequations);if(opt.evalequations)fbuilderjQuery.fbuilder.calculator.defaultCalc(this,false,false);}};})(opt,this.formId));}}};$.fbuilder['forms'][opt.identifier]=ffunct;this.fBuild=ffunct;return this;};$.fbuilder.controls['ffields']=function(){};$.extend($.fbuilder.controls['ffields'].prototype,{form_identifier:"",name:"",shortlabel:"",index:-1,ftype:"",userhelp:"",audiotutorial:"",userhelpTooltip:false,csslayout:"",init:function(){},_getAttr:function(attr,raw)
{var me=this,f,v=String(me[attr]).trim(),raw=raw||false;if(!raw&&$.fbuilder.isNumeric(v))return parseFloat(v);f=(/^fieldname\d+$/i.test(v))?me.getField(v):false;if(f)
{v=f.val();if(f.ftype=='fdate')return v?new Date(v*86400000):'';if(!raw&&$.fbuilder.isNumeric(v))return parseFloat(v);return(new String(v)).replace(/^"+/,'').replace(/"+$/,'');}
return v;},_setHndl:function(attr,one)
{var me=this,v=String(me[attr]).trim();if($.fbuilder.isNumeric(v))return;var s=(/^fieldname\d+$/i.test(v))?'.'+v+me.form_identifier+' [id*="'+v+me.form_identifier+'"]':v,i=(one)?'one':'on';if('string'==typeof s&&!/^\s*$/.test(s))
{s=String(s).trim();if(!$.fbuilder.isNumeric(s.charAt(0)))
{$(document)[i]('change depEvent',s,function(evt){if(me['set_'+attr])me['set_'+attr](me._getAttr(attr),$(evt.target).hasClass('ignore'));});$(document)['one']('showHideDepEvent',function(evt,formId){try
{if(me['set_'+attr])
{me['set_'+attr](me._getAttr(attr),$(s).hasClass('ignore'));$('#'+formId).validate().resetForm();}}
catch(err){}});}}},getField:function(f){return $.fbuilder['forms'][this.form_identifier].getItem(f);},jQueryRef:function(){return $('.'+this.name);},show:function()
{return'Not available yet';},after_show:function(){},val:function(raw,no_quotes){raw=raw||false;no_quotes=no_quotes||false;var e=$("[id='"+this.name+"']:not(.ignore)");if(e.length)
{var v=e.val();if(raw)return $.fbuilder.parseValStr(v,raw,no_quotes);v=String(v).trim();return($.fbuilder.isNumeric(v))?$.fbuilder.parseVal(v):$.fbuilder.parseValStr(v,raw,no_quotes);}
return 0;},setVal:function(v,nochange)
{var e=$("[id='"+this.name+"']");e.val(v);if(!nochange)e.trigger('change');},setPlaceholder:function(v)
{$('[id="'+this.name+'"][type="text"]').add('[id="'+this.name+'"][type="text"]').attr('placeholder',v);}});window.addEventListener('popstate',function(){try
{$(".ui-datepicker").hide();$.fbuilder.manageHistory();}
catch(err){}});$(window).on('load',function(){$.fbuilder.manageHistory(true);});$(document).on('click','#fbuilder .cff-spinner-down,#fbuilder .cff-spinner-up',function(){var u=$(this).hasClass('cff-spinner-up'),e=$(this)[u?'prev':'next']('input'),o,s,m,v,l;if(e.length){o=getField(e.attr('id'),e[0].form);s=e.attr('step');if(isNaN(s*1))s=1;l=(new String(s)).split('.');s*=1;l=l.length==2?l[1].length:0;m=e.attr(u?'max':'min');v=o.val();if(e.hasClass('percent')){v=PREC(v*100,4)*1;}
if(u)v+=s;else v-=s;if(m)v=u?MIN(v,m):MAX(v,m);v=PREC(v,l);o.setVal(v);e.valid();}});function assign_data_cff_field_content(field){try{field=$(field);var field_name=field.attr('name').match(/fieldname\d+/)[0];form_obj=field.closest('form'),tags=form_obj.find('[data-cff-field="'+field_name+'"]');if(tags.length){var ignore=field.hasClass('ignore'),field_obj=getField(field,form_obj),value=(ignore||!field_obj)?'':field_obj.val(('toSubmit' in field_obj?'vt':true),true);value=Array.isArray(value)?value.join(', '):value;if(typeof value=='string'){value=value.replace(/\\\\/g,"\\").replace(/\\'/g,"'").replace(/\\"/g,'"');}
tags.each(function(){$(this).html(value);});}}catch(err){}};$(document).on('change keyup','#fbuilder :input[name*="fieldname"]',function(){var me=this;setTimeout(function(){assign_data_cff_field_content(me);},50);});$(document).on('keyup','#fbuilder :input[maxlength]',function(){var e=$(this),v=new String(e.val()),l=v.length,m=e.attr('maxlength');if(m*1<=l){setTimeout(function(){e.val(v.substring(0,m)).trigger('change');},5);}});$(document).one('showHideDepEvent',function(){try{var form_obj=$('#'+arguments[1]);form_obj.find('[data-cff-field]').each(function(){try{var tag_obj=$(this),field_name=tag_obj.attr('data-cff-field'),field_obj;if(field_name.length&&/fieldname\d+/.test(field_name)){field_obj=form_obj.find('[name*="'+field_name+'_"]');if(field_obj.length)assign_data_cff_field_content(field_obj);}}catch(err){}});}catch(err){}});$.fbuilder.controls['ftext']=function(){};$.extend($.fbuilder.controls['ftext'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"ftext",autocomplete:"off",predefined:"",predefinedClick:false,required:false,readonly:false,size:"medium",minlength:"",maxlength:"",equalTo:"",regExp:"",regExpMssg:"",show:function()
{this.minlength=cff_esc_attr(String(this.minlength).trim());this.maxlength=cff_esc_attr(String(this.maxlength).trim());this.equalTo=cff_esc_attr(String(this.equalTo).trim());this.predefined=this._getAttr('predefined',true);return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-text-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input aria-label="'+cff_esc_attr(this.title)+'" id="'+this.name+'" name="'+this.name+'"'+((this.minlength.length)?' minlength="'+cff_esc_attr(this.minlength)+'"':'')+((this.maxlength.length)?' maxlength="'+cff_esc_attr(this.maxlength)+'"':'')+((this.equalTo.length)?' equalTo="#'+cff_esc_attr(this.equalTo)+this.form_identifier+'"':'')+' class="field '+this.size+((this.required)?" required":"")+'" '+((this.readonly)?'readonly':'')+' type="text" value="'+cff_esc_attr(this.predefined)+'" autocomplete="'+this.autocomplete+'" /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{if(this.regExp!=""&&typeof $['validator']!='undefined')
{try{var parts=this.regExp.match(/(\/)(.*)(\/)([gimy]{0,4})$/i);this.regExp=(parts===null)?new RegExp(this.regExp):new RegExp(parts[2],parts[4].toLowerCase());if(!('pattern' in $.validator.methods))
$.validator.addMethod('pattern',function(value,element,param)
{try{return this.optional(element)||param.test(value);}
catch(err){return true;}});$('#'+this.name).rules('add',{'pattern':this.regExp,messages:{'pattern':this.regExpMssg}});}catch(err){}}},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var e=$('[id="'+this.name+'"]:not(.ignore)'),v;if(e.length){v=$.fbuilder.parseValStr(e.val(),raw,no_quotes);return(raw&&!no_quotes&&!isNaN(v))?'"'+v+'"':v;}
return 0;}});$.fbuilder.controls['fcurrency']=function(){};$.extend($.fbuilder.controls['fcurrency'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Currency",ftype:"fcurrency",predefined:"",predefinedClick:false,required:false,readonly:false,numberpad:false,spinner:false,size:"small",currencySymbol:"$",currencyText:"USD",thousandSeparator:",",centSeparator:".",noCents:false,min:"",max:"",step:1,formatDynamically:false,twoDecimals:false,set_step:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('step');else{var vb=e.val();e.removeAttr('value');if(!isNaN(v*1))e.attr('step',Math.abs(v*1?v:1));e.val(vb);}
if(!e.hasClass('cpefb_error'))e.removeClass('required');e.valid();if(this.required)e.addClass('required');},set_min:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('min');else e.attr('min',v);if(!e.hasClass('cpefb_error'))e.removeClass('required');e.valid();if(this.required)e.addClass('required');},set_max:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('max');else e.attr('max',v);if(!e.hasClass('cpefb_error'))e.removeClass('required');e.valid();if(this.required)e.addClass('required');},getFormattedValue:function(value)
{if(value=='')return value;var me=this,ts=me.thousandSeparator,cs=((cs=String(me.centSeparator).trim())!=='')?cs:'.',v=$.fbuilder.parseVal(value,ts,cs),parts=[],counter=0,str='',sign='';if(!isNaN(v))
{if(v<0)sign='-';v=ABS(v);if(this.twoDecimals)v=v.toFixed(2);parts=v.toString().split(".");for(var i=parts[0].length-1;i>=0;i--)
{counter++;str=parts[0][i]+str;if(counter%3==0&&i!=0)str=ts+str;}
parts[0]=str;if(parts[1])
{if(parts[1].length==1)parts[1]+='0';}
else parts[1]='00';return me.currencySymbol+sign+((me.noCents)?parts[0]:parts.join(cs))+me.currencyText;}
else
{return value;}},init:function()
{if(!/^\s*$/.test(this.min))this._setHndl('min');if(!/^\s*$/.test(this.max))this._setHndl('max');if(!/^\s*$/.test(this.step))this._setHndl('step');else this.step=1;},show:function()
{this.predefined=this._getAttr('predefined',true);return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+(this.spinner?'cff-spinner ':'')+this.name+' cff-currency-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield">'+
(this.spinner?'<div class="cff-spinner-components-container '+this.size+'"><button type="button" class="cff-spinner-down">-</button>':'')+'<input '+((this.numberpad)?'inputmode="decimal"':'')+' aria-label="'+cff_esc_attr(this.title)+'" '+((this.readonly)?'readonly':'')+' id="'+this.name+'" name="'+this.name+'" class="field cffcurrency '+(this.spinner?'large':this.size)+((this.required)?" required":"")+'" type="text" value="'+cff_esc_attr((this.formatDynamically)?this.getFormattedValue(this.predefined):this.predefined)+'" '+((!/^\s*$/.test(this.min))?'min="'+cff_esc_attr($.fbuilder.parseVal(this._getAttr('min'),this.thousandSeparator,this.centSeparator))+'" ':'')+((!/^\s*$/.test(this.max))?' max="'+cff_esc_attr($.fbuilder.parseVal(this._getAttr('max'),this.thousandSeparator,this.centSeparator))+'" ':'')+((!/^\s*$/.test(this.step))?' step="'+cff_esc_attr(this._getAttr('step',true))+'" ':'')+' />'+
(this.spinner?'<button type="button" class="cff-spinner-up">+</button></div>':'')+'<span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this;if(this.formatDynamically)
{$(document).on('change','[name="'+me.name+'"]',function(){this.value=me.getFormattedValue(this.value);});}
$('#'+me.name).rules('add',{'step':false});},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)
{var v=e.val();if(raw)return($.fbuilder.isNumeric(v))?v:$.fbuilder.parseValStr(v,raw,no_quotes);v=String(v).trim();v=v.replace(new RegExp($.fbuilder['escapeSymbol'](this.currencySymbol),'g'),'').replace(new RegExp($.fbuilder['escapeSymbol'](this.currencyText),'g'),'');return $.fbuilder.parseVal(v,this.thousandSeparator,this.centSeparator,no_quotes);}
return 0;}});$.fbuilder.controls['fnumber']=function(){};$.extend($.fbuilder.controls['fnumber'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Number",ftype:"fnumber",predefined:"",predefinedClick:false,required:false,readonly:false,numberpad:false,spinner:false,size:"small",prefix:"",postfix:"",thousandSeparator:"",decimalSymbol:".",min:"",max:"",step:1,formatDynamically:false,dformat:"digits",set_step:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('step');else{var vb=e.val();e.removeAttr('value');if(!isNaN(v*1))e.attr('step',Math.abs(v*1?v:1));e.val(vb);}
if(!e.hasClass('cpefb_error'))e.removeClass('required');e.valid();if(this.required)e.addClass('required');},set_min:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('min');else e.attr('min',v);if(!e.hasClass('cpefb_error'))e.removeClass('required');e.valid();if(this.required)e.addClass('required');},set_max:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('max');else e.attr('max',v);if(!e.hasClass('cpefb_error'))e.removeClass('required');e.valid();if(this.required)e.addClass('required');},getFormattedValue:function(value)
{if(value=='')return value;var ts=this.thousandSeparator,ds=((ds=String(this.decimalSymbol).trim())!=='')?ds:'.',v=$.fbuilder.parseVal(value,ts,ds),s='',counter=0,str='',parts=[],step=$('[id="'+this.name+'"]').attr('step'),prefix=this.dformat=='number'?this.prefix:'',postfix=this.dformat=='number'?this.postfix:'';if(!isNaN(v))
{if(v<0)s='-';v=ABS(v);parts=v.toString().split(".");for(var i=parts[0].length-1;i>=0;i--){counter++;str=parts[0][i]+str;if(counter%3==0&&i!=0)str=ts+str;}
parts[0]=str;if(typeof parts[1]!='undefined'&&parts[1]*1&&typeof step!='undefined'&&!isNaN(step*1)){var l=(new String(step)).split('.');if(l.length==2){l=Math.max(l.length-(new String(parts[1])).length,0);for(var i=0;i<l;i++)parts[1]+='0';}}
return prefix+s+parts.join(ds)+((this.dformat=='percent')?'%':'')+postfix;}
else
{return value;}},init:function()
{if(!/^\s*$/.test(this.min))this._setHndl('min');if(!/^\s*$/.test(this.max))this._setHndl('max');if(!/^\s*$/.test(this.step))this._setHndl('step');else this.step=1;},show:function()
{var _type=(this.dformat=='digits'||(this.dformat!='percent'&&this.prefix==''&&this.postfix==''&&this.thousandSeparator==''&&/^\s*(\.\s*)?$/.test(this.decimalSymbol)))?'number':'text';if(this.dformat=='digits')$(document).on('keydown','#'+this.name,function(evt){if(/^[\-,\+,e,\.,\,]$/i.test(evt.key)){evt.preventDefault();return false;}});this.predefined=this._getAttr('predefined',true);return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+(this.spinner?'cff-spinner ':'')+this.name+' cff-number-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield">'+
(this.spinner?'<div class="cff-spinner-components-container '+this.size+'"><button type="button" class="cff-spinner-down">-</button>':'')+'<input '+((this.numberpad)?'inputmode="decimal"':'')+' aria-label="'+cff_esc_attr(this.title)+'" id="'+this.name+'" name="'+this.name+'" '+((!/^\s*$/.test(this.min))?'min="'+cff_esc_attr($.fbuilder.parseVal(this._getAttr('min'),this.thousandSeparator,this.decimalSymbol))+'" ':'')+((!/^\s*$/.test(this.max))?' max="'+cff_esc_attr($.fbuilder.parseVal(this._getAttr('max'),this.thousandSeparator,this.decimalSymbol))+'" ':'')+((!/^\s*$/.test(this.step))?' step="'+cff_esc_attr(this._getAttr('step',true))+'" ':'')+' class="field '+this.dformat+((this.dformat=='percent')?' number':'')+' '+(this.spinner?'large':this.size)+((this.required)?" required":"")+'" type="'+_type+'" value="'+cff_esc_attr((this.formatDynamically)?this.getFormattedValue(this.predefined):this.predefined)+'" '+((this.readonly)?'readonly':'')+' />'+
(this.spinner?'<button type="button" class="cff-spinner-up">+</button></div>':'')+'<span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this;if((me.formatDynamically&&me.dformat!='digits')||me.dformat=='percent')
{$(document).on('change','[name="'+me.name+'"]',function(){this.value=me.getFormattedValue(this.value);});}
$('#'+me.name).rules('add',{'step':false});},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)
{var v=String(e.val()).trim();if(raw)return($.fbuilder.isNumeric(v)&&this.thousandSeparator!='.')?v:$.fbuilder.parseValStr(v,raw,no_quotes);v=v.replace(new RegExp($.fbuilder['escapeSymbol'](this.prefix),'g'),'').replace(new RegExp($.fbuilder['escapeSymbol'](this.postfix),'g'),'');v=$.fbuilder.parseVal(v,this.thousandSeparator,this.decimalSymbol,no_quotes);return(this.dformat=='percent')?v/100:v;}
return 0;}});$.fbuilder.controls['fslider']=function(){};$.extend($.fbuilder.controls['fslider'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Slider",ftype:"fslider",exclude:false,readonly:false,predefined:"",predefinedMin:"",predefinedMax:"",predefinedClick:false,size:"small",thousandSeparator:",",centSeparator:".",typeValues:false,min:0,max:100,step:1,marks:false,divisions:5,range:false,logarithmic:false,minCaption:"",maxCaption:"",caption:"{0}",_expon:function(v)
{if(v==0)return v;var el=$('#'+this.name+'_slider'),step=this.calc_step,min=Math.max(el.slider('option','min'),step),max=FLOOR(el.slider('option','max')/step)*step,minv=Math.log(Math.max(min,0.01)),maxv=Math.log(max),scale=(maxv-minv)/(max-min);return ROUND(Math.exp(minv+scale*(v-min)),step);},_inverse:function(v)
{var el=$('#'+this.name+'_slider'),step=this.calc_step,min=Math.max(el.slider('option','min'),step),max=FLOOR(el.slider('option','max')/step)*step,minv=Math.log(Math.max(min,0.1)),maxv=Math.log(max),scale=(maxv-minv)/(max-min);return ROUND(((Math.log(v)-minv)/scale+min),step);},_setThousandsSeparator:function(v)
{let l=(new String(this.step)).split('.');l=l.length==2?l[1].length:0;v=$.fbuilder.parseVal(v,this.thousandSeparator,this.centSeparator);if(!isNaN(v))
{v=PREC(v,l);var parts=v.toString().split("."),counter=0,str='';for(var i=parts[0].length-1;i>=0;i--)
{counter++;str=parts[0][i]+str;if(counter%3==0&&i!=0)str=this.thousandSeparator+str;}
parts[0]=str;return parts.join(this.centSeparator);}
else
{return v;}},_setFieldValue:function(val,nochange)
{var me=this;if(me.range)
{var values=(typeof val!='undefined'&&val!==null)?val:$('#'+me.name+'_slider').slider('values'),vl=values[0],vr=values[1],vlf=me._setThousandsSeparator(vl),vrf=me._setThousandsSeparator(vr);$('.'+me.name).find('.cff-slider-tooltip-value').first().html(vlf);$('.'+me.name).find('.cff-slider-tooltip-value').last().html(vrf);$('#'+me.name+'_component_left').val(vlf);$('#'+me.name+'_component_right').val(vrf);$('#'+me.name).val('['+vl+','+vr+']').attr('vt','['+vlf+','+vrf+']');$('#'+me.name+'_caption').html(me.caption.replace(/\{\s*0\s*\}/,vlf).replace(/\{\s*0\s*\}/,vrf));}
else
{var v=(typeof val!='undefined'&&val!==null)?val:$('#'+me.name+'_slider').slider('value'),vf=me._setThousandsSeparator(v);$('.'+me.name).find('.cff-slider-tooltip-value').first().html(vf);$('#'+me.name).val(v).attr('vt',vf);$('#'+me.name+'_component_center').val(vf);$('#'+me.name+'_caption').html(me.caption.replace(/\{\s*0\s*\}/g,vf));}
if(!nochange)$('#'+me.name).trigger('change');},_toNumber:function(n){return(new String(n)).replace(/[^\-\d\.]/g,'')*1;},init:function()
{this.min=(/^\s*$/.test(this.min))?0:String(this.min).trim();this.max=(/^\s*$/.test(this.max))?100:String(this.max).trim();this.step=(/^\s*$/.test(this.step))?1:String(this.step).trim();this.predefinedMin=(/^\s*$/.test(this.predefinedMin))?this.min:String(this.predefinedMin).trim();this.predefinedMax=(/^\s*$/.test(this.predefinedMax))?this.max:String(this.predefinedMax).trim();this._setHndl('min');this._setHndl('max');this._setHndl('step');this._setHndl('predefinedMin');this._setHndl('predefinedMax');this.centSeparator=(/^\s*$/.test(this.centSeparator))?'.':String(this.centSeparator).trim();if(this.logarithmic&&!isNaN(this.step)){this.calc_step=this.step;this.step=Math.min(this.step,1);}},show:function()
{var me=this;function typeValuesComponents()
{function component(c)
{var min=cff_esc_attr(me.min),max=cff_esc_attr(me.max),step=cff_esc_attr(me.step),predefined=cff_esc_attr((c=='left')?me.predefinedMin:((c=='right')?me.predefinedMax:me.predefined)),timeoutId;$(document).on('keyup change','#'+me.name+'_component_'+c,function(evt){function stepRound(v)
{var _e=$('#'+me.name+'_slider'),_max=_e.slider('option','max'),_step=_e.slider('option','step');return MIN(CEIL(v,_step),_max);};var v=$('#'+me.name+'_component_center').val(),v1=$('#'+me.name+'_component_left').val(),v2=$('#'+me.name+'_component_right').val(),t=0;clearTimeout(timeoutId);if(evt.type=='keyup')t=2500;timeoutId=setTimeout(function(){if(v!=undefined)
{v=$.fbuilder.parseVal(v,me.thousandSeparator,me.centSeparator);if(isNaN(v))v=0;}
if(v1!=undefined)
{v1=$.fbuilder.parseVal(v1,me.thousandSeparator,me.centSeparator);if(isNaN(v1))v1=0;}
if(v2!=undefined)
{v2=$.fbuilder.parseVal(v2,me.thousandSeparator,me.centSeparator);if(isNaN(v2))v2=0;}
$('#'+me.name+'_slider').slider(((v!=undefined)?'value':'values'),((v!=undefined)?(me.logarithmic?me._inverse(v*1):stepRound(v*1)):[stepRound(Math.min(v1*1,v2*1)),stepRound(Math.max(v1*1,v2*1))]));me._setFieldValue(me.logarithmic?v:null);},t);});return'<div class="slider-type-'+c+'-component"><input aria-label="'+cff_esc_attr(me.title)+'" id="'+me.name+'_component_'+c+'" class="large" type="text" value="'+cff_esc_attr(/fieldname/.test(predefined)&&getField(predefined)&&'val' in getField(predefined)?getField(predefined).val():predefined)+'" '+((me.readonly)?'readonly':'')+' /></div>';};var str='';if(me.typeValues)
str+='<div class="slider-type-components '+me.size+'">'+
((me.range)?component('left')+component('right'):component('center'))+'</div>';return str;};me.predefined=(/^\s*$/.test(me.predefined))?me.min:me._toNumber(me._getAttr('predefined'));return'<div class="fields '+cff_esc_attr(me.csslayout)+' '+me.name+' cff-slider-field" id="field'+me.form_identifier+'-'+me.index+'">'+'<label>'+me.title+'</label>'+'<div class="dfield slider-container">'+
typeValuesComponents()+'<input id="'+me.name+'" name="'+me.name+'" class="field" type="hidden" value="'+cff_esc_attr(me.predefined)+'"/>'+'<div id="'+me.name+'_slider" class="slider '+me.size+'"></div>'+'<div class="corner-captions '+me.size+'">'+'<span class="left-corner">'+me.minCaption+'</span>'+'<span class="right-corner">'+me.maxCaption+'</span>'+'<div id="'+me.name+'_caption" class="slider-caption"></div>'+'<div class="clearer"></div>'+'</div>'+'<span class="uh">'+me.userhelp+'</span>'+'</div>'+'<div class="clearer"></div>'+'</div>';},set_min:function(v,ignore)
{try{var e=$('[id="'+this.name+'_slider"]'),c=this.val(),r=false;if(ignore)v=0;e.slider('option','min',v);if($.isArray(c)){if(c[0]<v){c[0]=v;r=true;}}
else if(c<v){c=v;r=true;}
if(r)this.setVal(c);this.set_min_caption(v);}
catch(err){}},set_max:function(v,ignore)
{try{var e=$('[id="'+this.name+'_slider"]'),c=this.val(),r=false;if(ignore)v=100;e.slider('option','max',v);if($.isArray(c)){if(v<c[1]){c[1]=v;r=true;}}
else if(v<c){c=v;r=true;}
if(r)this.setVal(c);this.set_max_caption(v);}
catch(err){}},set_min_caption:function(v)
{try{var e=$('.'+this.name+' .left-corner');e.html(this.minCaption.replace(/\{\s*0\s*\}/,v));}
catch(err){}},set_max_caption:function(v)
{try{var e=$('.'+this.name+' .right-corner');e.html(this.maxCaption.replace(/\{\s*0\s*\}/,v));}
catch(err){}},set_step:function(v,ignore)
{try{if(ignore)v=this.step;else this.step=v;if(this.logarithmic){this.calc_step=v;v=Math.min(v,1);}
$('[id="'+this.name+'_slider"]').slider("option","step",v);}
catch(err){}},set_marks:function(s,v){try{var me=this,e=$('.'+me.name+' .ui-slider-range');e.find('.mark').remove();if(s){for(let i=0;i<=v;i++){if(i&&i!=v){e.after('<span class="mark" style="position:absolute;left:calc('+PREC(i*(100/v),4,true)+'% );"></span>');}}}}catch(err){}},after_show:function()
{var me=this,opt={range:(me.range!=false)?me.range:"min",min:me._getAttr('min'),max:me._getAttr('max'),step:me._getAttr('step')};me.set_min_caption(opt.min);me.set_max_caption(opt.max);if(me.range)
{var _min=Math.min(Math.max(me._getAttr('predefinedMin'),opt.min),opt.max),_max=Math.min(Math.max(me._getAttr('predefinedMax'),opt.min),opt.max);opt['values']=[_min,_max];}
else opt['value']=Math.min(Math.max(me._getAttr('predefined'),opt.min),opt.max);opt['disabled']=me.readonly;opt['slide']=opt['stop']=(function(e){return function(event,ui)
{var v=(typeof ui.value!='undefined')?ui.value:ui.values;if(me.logarithmic){v=me._expon(v);e._setFieldValue(v);}else{$(this).slider(Array.isArray(v)?'values':'value',v);e._setFieldValue();}}})(me);$('#'+this.name+'_slider').slider(opt);$('#'+this.name+'_slider').find('.ui-slider-handle').each(function(){$(this).append('<div class="cff-slider-tooltip">'+'<div class="cff-slider-tooltip-arrow">'+'</div><div class="cff-slider-tooltip-value"></div>'+'</div>');});me._setFieldValue();$('#cp_calculatedfieldsf_pform'+me.form_identifier).on('reset',function(){setTimeout(function(){$('#'+me.name+'_slider').slider(opt);me._setFieldValue();},20);});try{var divisions=parseInt(me.divisions);me.set_marks(me.marks,(isNaN(divisions)||!divisions)?(me.max-me.min)/me.step:divisions);}catch(err){}},val:function(raw)
{try{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');return(e.length)?((raw)?e.val():JSON.parse(e.val())):0;}
catch(err){return 0;}},setVal:function(v,nochange)
{try{v=JSON.parse(v);}catch(err){}
try{$('[name="'+this.name+'"]').val(v);$('#'+this.name+'_slider').slider((($.isArray(v))?'values':'value'),(this.logarithmic?this._inverse(v):v));this._setFieldValue(v,nochange);}catch(err){}}});$.fbuilder.controls['fcolor']=function(){};$.extend($.fbuilder.controls['fcolor'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"fcolor",predefined:"",predefinedClick:false,required:false,readonly:false,size:"medium",show:function()
{this.predefined=this._getAttr('predefined',true);return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-color-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input aria-label="'+cff_esc_attr(this.title)+'" id="'+this.name+'" name="'+this.name+'"'+' class="field '+this.size+((this.required)?" required":"")+'" '+((this.readonly)?'readonly':'')+' type="color" value="'+cff_esc_attr(this.predefined)+'" /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function(){},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val(),raw,no_quotes);return 0;}});$.fbuilder.controls['femail']=function(){};$.extend($.fbuilder.controls['femail'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Email",ftype:"femail",autocomplete:"off",predefined:"",predefinedClick:false,required:false,readonly:false,size:"medium",equalTo:"",regExp:"",regExpMssg:"",show:function()
{this.predefined=this._getAttr('predefined');return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-email-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input aria-label="'+cff_esc_attr(this.title)+'" id="'+this.name+'" name="'+this.name+'" '+((this.equalTo!="")?"equalTo=\"#"+cff_esc_attr(this.equalTo+this.form_identifier)+"\"":"")+' class="field email '+this.size+((this.required)?" required":"")+'" type="email" value="'+cff_esc_attr(this.predefined)+'" '+((this.readonly)?'readonly':'')+' autocomplete="'+this.autocomplete+'" /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{if(this.regExp!=""&&typeof $['validator']!='undefined')
{try{var parts=this.regExp.match(/(\/)(.*)(\/)([gimy]{0,4})$/i);this.regExp=(parts===null)?new RegExp(this.regExp):new RegExp(parts[2],parts[4].toLowerCase());if(!('pattern' in $.validator.methods))
$.validator.addMethod('pattern',function(value,element,param)
{try{return this.optional(element)||param.test(value);}
catch(err){return true;}});$('#'+this.name).rules('add',{'pattern':this.regExp,messages:{'pattern':this.regExpMssg}});}catch(err){}}},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val(),raw,no_quotes);return 0;}});$.fbuilder.controls['fdate']=function(){};$.extend($.fbuilder.controls['fdate'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Date",ftype:"fdate",predefined:"",predefinedClick:false,size:"medium",required:false,readonly:false,disableKeyboardOnMobile:false,showDatepicker:true,dformat:"mm/dd/yyyy",dseparator:"/",showDropdown:false,dropdownRange:"-10:+10",invalidDates:"",mondayFirstDay:false,alwaysVisible:false,working_dates:[true,true,true,true,true,true,true],minDate:"",maxDate:"",currentDate:0,defaultDate:"",showTimepicker:false,tformat:"24",minHour:0,maxHour:23,minMinute:0,maxMinute:59,stepHour:1,stepMinute:1,defaultTime:"",ariaHourLabel:'hours',ariaMinuteLabel:'minutes',ariaAMPMLabel:'am or pm',errorMssg:'',_get_regexp:function()
{var me=this,df=me.dformat.replace(new RegExp('\\'+me.dseparator,'g'),'/'),rt;if(/^y/i.test(df))rt='(\\d{4})[^\\d](\\d{1,2})[^\\d](\\d{1,2})';else rt='(\\d{1,2})[\\/\\-\\.](\\d{1,2})[\\/\\-\\.](\\d{4})';return{d:df,r:rt};},_set_Events:function()
{var me=this,f=function(){me.set_dateTime();$('#'+me.name+'_date').valid();};$(document).off('change','#'+me.name+'_date').on('change','#'+me.name+'_date',function(){if(me.showDatepicker&&me.alwaysVisible)
$('#'+me.name+'_datepicker_container').datepicker('setDate',this.value);f();});$(document).off('change','#'+me.name+'_hours').on('change','#'+me.name+'_hours',function(){f();});$(document).off('change','#'+me.name+'_minutes').on('change','#'+me.name+'_minutes',function(){f();});$(document).off('change','#'+me.name+'_ampm').on('change','#'+me.name+'_ampm',function(){f();});$('#cp_calculatedfieldsf_pform'+me.form_identifier).on('reset',function(){setTimeout(function(){me.set_DefaultDate(true);me.set_DefaultTime();me.set_dateTime();},500);});},_validateDate:function(d)
{try{var e=this,w=e.working_dates,i=e.invalidDates,n=(e.alwaysVisible&&e.showDatepicker)?$('#'+e.name+'_datepicker_container'):$('#'+e.name+'_date');d=d||n.datepicker('getDate');if(d===null||!w[d.getDay()])return false;if(i!==null)
{for(var j=0,h=i.length;j<h;j++)
{if(d.getDate()==i[j].getDate()&&d.getMonth()==i[j].getMonth()&&d.getFullYear()==i[j].getFullYear())return false;}}
var _d=$.datepicker,_i=_d._getInst(n[0]),_mi=_d._determineDate(_i,_d._get(_i,'minDate'),null),_ma=_d._determineDate(_i,_d._get(_i,'maxDate'),null);if((_mi!=null&&d<_mi)||(_ma!=null&&_ma<d))return false;}
catch(_err){return false;}
return true;},_validateTime:function()
{var i=this;if(i.showTimepicker)
{var n=i.name,h=$('#'+n+'_hours').val(),m=$('#'+n+'_minutes').val();if(i.tformat==12)
{var x=$('#'+n+'_ampm').val()
if(x=='pm'&&h!=12)h=h*1+12;if(x=='am'&&h==12)h=0;}
if(h<i.minHour||i.maxHour<h||(h==i.minHour&&m<i.minMinute)||(h==i.maxHour&&i.maxMinute<m))return false;}
return true;},init:function()
{var me=this,_checkValue=function(v,min,max)
{v=parseInt(v);v=(isNaN(v))?max:v;return Math.min(Math.max(v,min),max);};me.dformat=me.dformat.replace(/\//g,me.dseparator);me.invalidDates=me.invalidDates.replace(/\s+/g,'');if(me.dropdownRange.indexOf(':')==-1)me.dropdownRange='-10:+10';if(!/^\s*$/.test(me.invalidDates))
{var dateRegExp=new RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/),counter=0,dates=me.invalidDates.split(',');me.invalidDates=[];for(var i=0,h=dates.length;i<h;i++)
{var range=dates[i].split('-');if(range.length==2&&range[0].match(dateRegExp)!=null&&range[1].match(dateRegExp)!=null)
{var fromD=new Date(range[0]),toD=new Date(range[1]);while(fromD<=toD)
{me.invalidDates[counter]=fromD;var tmp=new Date(fromD.valueOf());tmp.setDate(tmp.getDate()+1);fromD=tmp;counter++;}}
else
{for(var j=0,k=range.length;j<k;j++)
{if(range[j].match(dateRegExp)!=null)
{me.invalidDates[counter]=new Date(range[j]);counter++;}}}}}
me.minHour=_checkValue(me.minHour,0,23);me.maxHour=_checkValue(me.maxHour,0,23);me.minMinute=_checkValue(me.minMinute,0,59);me.maxMinute=_checkValue(me.maxMinute,0,59);me.stepHour=_checkValue(me.stepHour,1,Math.max(1,(me.maxHour-me.minHour)+1));me.stepMinute=_checkValue(me.stepMinute,1,Math.max(1,(me.maxMinute-me.minMinute)+1));me._setHndl('minDate');me._setHndl('maxDate');},get_hours:function()
{var me=this,str='',i=0,h,from=(me.tformat==12)?1:me.minHour,to=(me.tformat==12)?12:me.maxHour;while((h=from+me.stepHour*i)<=to)
{if(h<10)h='0'+''+h;str+='<option value="'+h+'">'+h+'</option>';i++;}
return'<select id="'+me.name+'_hours" name="'+me.name+'_hours" class="hours-component" aria-label="'+cff_esc_attr(me.ariaHourLabel)+'" '+((me.readonly)?'DISABLED':'')+'>'+str+'</select>:';},get_minutes:function()
{var me=this,str='',i=0,m,n=(me.minHour==me.maxHour)?me.minMinute:0,x=(me.minHour==me.maxHour)?me.maxMinute:59;while((m=n+me.stepMinute*i)<=x)
{if(m<10)m='0'+''+m;str+='<option value="'+m+'">'+m+'</option>';i++;}
return'<select id="'+me.name+'_minutes" name="'+me.name+'_minutes" class="minutes-component" aria-label="'+cff_esc_attr(me.ariaMinuteLabel)+'" '+((me.readonly)?'DISABLED':'')+'>'+str+'</select>';},get_ampm:function()
{var str='';if(this.tformat==12)
{return'<select id="'+this.name+'_ampm" class="ampm-component"  aria-label="'+cff_esc_attr(this.ariaAMPMLabel)+'" '+((this.readonly)?'DISABLED':'')+'><option value="am">am</option><option value="pm">pm</option></select>';}
return str;},set_dateTime:function(nochange)
{var me=this,str=$('#'+me.name+'_date').val(),e=$('#'+me.name);if(me.showTimepicker)
{str+=' '+$('#'+me.name+'_hours').val();str+=':'+$('#'+me.name+'_minutes').val();if($('#'+me.name+'_ampm').length)str+=$('#'+me.name+'_ampm').val();}
e.val(str);if(!nochange)e.trigger('change');},set_minDate:function(v,ignore)
{var e=$('[id*="'+this.name+'_"].hasDatepicker'),f;if(e.length)
{e.datepicker('option','minDate',(ignore)?null:v);if(e.has('.datepicker-container')){f=e;e=e.siblings('.date-component');}
if(e.val()!='')e.trigger('change');else if(f)f.find('.ui-state-active').removeClass('ui-state-active');}},set_maxDate:function(v,ignore)
{var e=$('[id*="'+this.name+'_"].hasDatepicker'),f;if(e.length)
{e.datepicker('option','maxDate',(ignore)?null:v);if(e.has('.datepicker-container')){f=e;e=e.siblings('.date-component');}
if(e.val()!='')e.trigger('change');else if(f)f.find('.ui-state-active').removeClass('ui-state-active');}},set_DefaultDate:function(init)
{var me=this,p={dateFormat:me.dformat.replace(/yyyy/g,"yy"),minDate:me._getAttr('minDate'),maxDate:me._getAttr('maxDate'),firstDay:(me.mondayFirstDay?1:0),disabled:me.readonly},dp=$("#"+me.name+"_date"),dd=me.currentDate&&init?new Date():((me.defaultDate!="")?me.defaultDate:((me.predefined!="")?me.predefined:''));if(me.alwaysVisible&&me.showDatepicker){dp=$("#"+me.name+"_datepicker_container");p['altField']=$("#"+me.name+"_date");p['altFormat']=p['dateFormat'];p['onSelect']=function(dateText,inst){$("#"+me.name+"_date").trigger('change');};}
dp.on('click',function(){$(document).trigger('click');$(this).trigger('focus');});if(me.showDropdown)p=$.extend(p,{changeMonth:true,changeYear:true,yearRange:me.dropdownRange});p=$.extend(p,{beforeShowDay:function(d){return[me._validateDate(d),""];}});if(me.defaultDate!="")p.defaultDate=me.defaultDate;dp.datepicker(p);if(!me.predefinedClick||!!init==false)dp.datepicker("setDate",dd);if(!me._validateDate()){dp.datepicker("setDate",'');$("#"+me.name+"_datepicker_container .ui-state-active").removeClass('ui-state-active');}},set_DefaultTime:function()
{var me=this,_setValue=function(f,v,m)
{v=Math.min(v*1,m*1);v=(v<10)?0+''+v:v;$('#'+f+' [value="'+v+'"]').prop('selected',true);};if(me.showTimepicker)
{var parts,time={},tmp=0,max_minutes=59;if((parts=/(\d{1,2}):(\d{1,2})\s*([ap]m)?/gi.exec(me.defaultTime))!=null)
{time['hour']=parts[1]*1+((parts.length==4&&/pm/i.test(parts[3])&&parts[1]!=12)?12:0);time['minute']=parts[2];}
else
{var d=new Date();time['hour']=d.getHours();time['minute']=d.getMinutes();}
time['hour']=Math.min(Math.max(time['hour'],me.minHour),me.maxHour);if(time['hour']<=me.minHour)time['minute']=Math.max(time['minute'],me.minMinute);if(me.maxHour<=time['hour'])time['minute']=Math.min(time['minute'],me.maxMinute);_setValue(me.name+'_hours',(me.tformat==12)?((time['hour']>12)?time['hour']-12:((time['hour']==0)?12:time['hour'])):time['hour'],(me.tformat==12)?12:me.maxHour);_setValue(me.name+'_minutes',time['minute'],(time['hour']==me.maxHour)?me.maxMinute:59);$('#'+me.name+'_ampm'+' [value="'+((time['hour']<12)?'am':'pm')+'"]').prop('selected',true);}},show:function()
{var me=this,n=me.name,attr='value',format_label=[],date_tag_type='text',disabled='',date_tag_class='field date'+me.dformat.replace(/[^a-z]/ig,"")+' '+me.size+((me.required&&me.showDatepicker)?' required':'');if(me.predefinedClick)attr='placeholder';if(me.showDatepicker&&!me.alwaysVisible)format_label.push(me.dformat);else{date_tag_type='hidden';if(!me.alwaysVisible)disabled='disabled';}
if(me.showTimepicker)format_label.push('HH:mm');this.predefined=this._getAttr('predefined');return'<div class="fields '+cff_esc_attr(me.csslayout)+' '+n+' cff-date-field" id="field'+me.form_identifier+'-'+me.index+'"><label '+(me.showDatepicker?'for="'+n+'_date"':'')+'>'+me.title+''+((me.required)?"<span class='r'>*</span>":"")+((format_label.length)?' <span class="dformat">('+format_label.join(' ')+')</span>':'')+'</label><div class="dfield"><input id="'+n+'" name="'+n+'" type="hidden" value="'+cff_esc_attr(me.predefined)+'"/>'+'<input aria-label="'+cff_esc_attr(me.title)+'" id="'+n+'_date" name="'+n+'_date" class="'+date_tag_class+' date-component" type="'+date_tag_type+'" '+attr+'="'+cff_esc_attr(me.predefined)+'" '+disabled+(me.disableKeyboardOnMobile?' inputmode="none"':'')+(me.errorMssg!=''?' data-msg="'+cff_esc_attr(me.errorMssg)+'"':'')+' />'+
(me.alwaysVisible&&me.showDatepicker?'<div id="'+n+'_datepicker_container" class="datepicker-container"></div>':'')+
((me.showTimepicker)?' '+me.get_hours()+me.get_minutes()+' '+me.get_ampm():'')+'<span class="uh">'+me.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this,date_format='date'+me.dformat.replace(/[^a-z]/ig,""),validator=function(v,e)
{try
{var p=e.name.replace('_date','').split('_'),i=$.fbuilder.forms['_'+p[1]].getItem(p[0]),o=me._get_regexp(),d=$($(e).hasClass('hasDatepicker')?e:$(e).siblings('.hasDatepicker:eq(0)')).datepicker('getDate');if(i!=null)return this.optional(e)||(i._validateDate()&&(new RegExp(o.r)).test(v)&&i._validateTime()&&DATEOBJ(v,me.dformat).getTime()==d.getTime());return true;}
catch(er)
{return false;}};if(!(date_format in $.validator.methods))$.validator.addMethod(date_format,validator);me.set_DefaultDate(true);me.set_DefaultTime();me._set_Events();me.set_dateTime();},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var me=this,e=$('[id="'+me.name+'"]:not(.ignore)'),o=me._get_regexp();if(e.length)
{var v=e.val();if(raw)return $.fbuilder.parseValStr(v,raw,no_quotes);v=String(e.val()).trim();var re=new RegExp('('+o.r+')?(\\s*(\\d{1,2})[:\\.](\\d{1,2})\\s*([amp]{2})?)?'),d=re.exec(v),h=0,m=0,s=me.showDatepicker?(new Date()).getSeconds():0,date;if(d)
{if(typeof d[6]!='undefined')h=d[6]*1;if(typeof d[7]!='undefined')m=d[7]*1;if(typeof d[8]!='undefined')
{var am=d[8].toLowerCase();if(am=='pm'&&h<12)h+=12;if(am=='am'&&h==12)h-=12;}
switch(o.d)
{case'yyyy/dd/mm':date=new Date(d[2],(d[4]*1-1),d[3],h,m,s,0);break;case'yyyy/mm/dd':date=new Date(d[2],(d[3]*1-1),d[4],h,m,s,0);break;case'dd/mm/yyyy':date=new Date(d[4],(d[3]*1-1),d[2],h,m,s,0);break;case'mm/dd/yyyy':date=new Date(d[4],(d[2]*1-1),d[3],h,m,s,0);break;}
if(isFinite(date))
{return date.valueOf()/86400000;}
else if((!me.showDatepicker||''==String($('[id="'+me.name+'_date"]').val()).trim())&&me.showTimepicker)return(h*3600000+m*60000)/86400000;}}
return 0;},setVal:function(v,nochange,init)
{init=init||false;try
{v=String(v).trim().replace(/\s+/g,' ').split(' ');if(this.showDatepicker)
{this.defaultDate=v[0];this.set_DefaultDate(init&&!this.defaultDate.length);}
if(this.showTimepicker)
{var t=(v.length==2)?v[1]:((!this.showDatepicker)?v[0]:false);if(t!==false)
{this.defaultTime=t;this.set_DefaultTime();}}
this.set_dateTime(nochange);}
catch(err){}}});$.fbuilder.controls['ftextarea']=function(){};$.extend($.fbuilder.controls['ftextarea'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"ftextarea",autocomplete:"off",predefined:"",predefinedClick:false,required:false,readonly:false,size:"medium",minlength:"",maxlength:"",rows:4,show:function()
{this.minlength=cff_esc_attr(String(this.minlength).trim());this.maxlength=cff_esc_attr(String(this.maxlength).trim());this.predefined=this._getAttr('predefined',true);return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-textarea-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><textarea aria-label="'+cff_esc_attr(this.title)+'" '+((!/^\s*$/.test(this.rows))?'rows='+this.rows:'')+' id="'+this.name+'" name="'+this.name+'"'+((this.minlength.length)?' minlength="'+cff_esc_attr(this.minlength)+'"':'')+((this.maxlength.length)?' maxlength="'+cff_esc_attr(this.maxlength)+'"':'')+' class="field '+this.size+((this.required)?" required":"")+'" '+((this.readonly)?'readonly':'')+' autocomplete="'+this.autocomplete+'">'+((!this.predefinedClick)?this.predefined:'')+'</textarea>'+
(this.maxlength.length?'<div class="'+this.name+'_counter cff-textarea-counter '+this.size+'"></div>':'')+'<span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function(){let e=$('[id="'+this.name+'"]'),update_counter=function(e){$('.'+e.attr('name')+'_counter').text(e.val().length+'/'+e.attr('maxlength'));};update_counter(e);e.on('keyup',function(){update_counter($(this));});},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)
{var v=$.fbuilder.parseValStr(e.val(),raw,no_quotes);if(!raw)v=v.replace(/[\n\r]+/g,' ');else if(!no_quotes)v=v.replace(/^"/,"`").replace(/"$/,"`");return v;}
return 0;}});$.fbuilder.controls['fcheck']=function(){};$.extend($.fbuilder.controls['fcheck'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Check All That Apply",ftype:"fcheck",layout:"one_column",required:false,readonly:false,merge:1,onoff:0,max:-1,min:-1,maxError:"Check no more than {0} boxes",minError:"Check at least {0} boxes",toSubmit:"text",showDep:false,show:function()
{this.choicesVal=((typeof(this.choicesVal)!="undefined"&&this.choicesVal!==null)?this.choicesVal:this.choices);var str="",classDep,n=this.name.match(/fieldname\d+/)[0];if(typeof this.choicesDep=="undefined"||this.choicesDep==null)
this.choicesDep=new Array();for(var i=0,h=this.choices.length;i<h;i++)
{if(typeof this.choicesDep[i]!='undefined')
this.choicesDep[i]=$.grep(this.choicesDep[i],function(x){return x!=""&&x!=n;});else
this.choicesDep[i]=[];classDep=(this.choicesDep[i].length)?'depItem':'';str+='<div class="'+this.layout+'"><label for="'+this.name+'_cb'+i+'" '+(!this.tooltipIcon&&this.userhelpTooltip&&this.userhelp&&this.userhelp.length?'uh="'+cff_esc_attr(this.userhelp)+'"':'')+'><input aria-label="'+cff_esc_attr(this.choices[i])+'" name="'+this.name+'[]" id="'+this.name+'_cb'+i+'" class="field '+classDep+' group '+((this.required||0<this.min)?" required":"")+'" value="'+cff_esc_attr(this.choicesVal[i])+'" vt="'+cff_esc_attr((this.toSubmit=='text')?this.choices[i]:this.choicesVal[i])+'" type="checkbox" '+(this.readonly?' onclick="return false;" ':'')+((this.choiceSelected[i])?"checked":"")+'/> '+
(this.onoff?'<span class="cff-switch"></span>':'')+'<span>'+
cff_html_decode(this.choices[i])+'</span></label></div>';}
return'<div class="fields '+cff_esc_attr(this.csslayout)+(this.onoff?' cff-switch-container':'')+' '+this.name+' cff-checkbox-field" id="field'+this.form_identifier+'-'+this.index+'"><label>'+this.title+''+((this.required||0<this.min)?"<span class='r'>*</span>":"")+'</label><div class="dfield">'+str+'<div class="clearer"></div>'+(!this.userhelpTooltip?'<span class="uh">'+this.userhelp+'</span>':'')+'</div><div class="clearer"></div></div>';},enable_disable:function()
{var m=this;if(0<m.max)
{var d=true;if($('[id*="'+m.name+'_"]:checked').length<m.max)d=false;$('[id*="'+m.name+'_"]:not(:checked)').prop('disabled',d);}},after_show:function()
{var m=this,tmp;$(document).off('click','[id*="'+m.name+'_"]').on('click','[id*="'+m.name+'_"]',function(){m.enable_disable();});m.enable_disable();if(m.readonly){$('[id*="'+m.name+'_"][_onclick]').each(function(){$(this).attr('onclick',$(this).attr('_onclick'));});}
if(0<m.max&&0<m.min&&m.max<m.min){tmp=m.min;m.min=m.max;m.max=tmp;}
if(0<m.max)
$('[id*="'+m.name+'_"]').rules('add',{maxlength:m.max,messages:{maxlength:m.maxError}});if(0<m.min)
$('[id*="'+m.name+'_"]').rules('add',{minlength:m.min,messages:{minlength:m.minError}});},showHideDep:function(toShow,toHide,hiddenByContainer,interval)
{if(typeof hiddenByContainer=='undefined')hiddenByContainer={};var me=this,item=$('input[id*="'+me.name+'_"]'),formObj=item.closest('form'),form_identifier=me.form_identifier,isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),result=[];try
{item.each(function(i,e){if(typeof me.choicesDep[i]!='undefined'&&me.choicesDep[i].length)
{var checked=e.checked;for(var j=0,k=me.choicesDep[i].length;j<k;j++)
{if(!/fieldname/i.test(me.choicesDep[i][j]))continue;var dep=me.choicesDep[i][j]+form_identifier;if(isHidden||!checked)
{if(typeof toShow[dep]!='undefined')
{delete toShow[dep]['ref'][me.name+'_'+i];if($.isEmptyObject(toShow[dep]['ref']))
delete toShow[dep];}
if(typeof toShow[dep]=='undefined')
{$('[id*="'+dep+'"],.'+dep,formObj).closest('.fields').hide();$('[id*="'+dep+'"]:not(.ignore)',formObj).addClass('ignore');toHide[dep]={};}}
else
{delete toHide[dep];if(typeof toShow[dep]=='undefined')
toShow[dep]={'ref':{}};toShow[dep]['ref'][me.name+'_'+i]=1;if(!(dep in hiddenByContainer))
{$('[id*="'+dep+'"],.'+dep,formObj).closest('.fields').fadeIn(interval||0);$('[id*="'+dep+'"].ignore',formObj).removeClass('ignore');}}
if($.inArray(dep,result)==-1)result.push(dep);}}});}
catch(e){}
return result;},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var v,me=this,m=me.merge&&!raw,e=$('[id*="'+me.name+'_"]:checked:not(.ignore)');if(!m)v=[];if(e.length)
{e.each(function(){var t=(m)?$.fbuilder.parseVal(this.value):$.fbuilder.parseValStr((raw=='vt')?this.getAttribute('vt'):this.value,raw,no_quotes);if(!$.fbuilder.isNumeric(t))t=t.replace(/^"/,'').replace(/"$/,'');if(m)v=(v)?v+t:t;else v.push(t);});}
return(typeof v=='object'&&typeof v['length']!=='undefined')?v:((v)?(($.fbuilder.isNumeric(v))?v:'"'+v+'"'):0);},setVal:function(v,nochange,_default)
{_default=_default||false;nochange=nochange||false;var t,n=this.name,c=0,e;if(!$.isArray(v))v=[v];$('[id*="'+n+'_"]').prop('checked',false);for(var i in v)
{t=(new String(v[i])).replace(/(['"])/g,"\\$1");if(0<this.max&&this.max<c+1)break;if(_default)e=$('[id*="'+n+'_"][vt="'+t+'"]');if(!_default||!e.length)e=$('[id*="'+n+'_"][value="'+t+'"]');if(e.length){e.prop('checked',true);c++;}}
this.enable_disable();if(!nochange)$('[id*="'+n+'_"]').trigger('change');},setChoices:function(choices)
{if($.isPlainObject(choices))
{var me=this,bk=me.val(true);if('texts' in choices&&$.isArray(choices.texts))me.choices=choices.texts;if('values' in choices&&$.isArray(choices.values))me.choicesVal=choices.values;if('dependencies' in choices&&$.isArray(choices.dependencies))
{me.choicesDep=choices.dependencies.map(function(x){return($.isArray(x))?x.map(function(y){return(typeof y=='number')?'fieldname'+parseInt(y):y;}):x;});}
var html=me.show(),e=$('.'+me.name),i=e.find('.ignore').length,ipb=e.find('.ignorepb').length;e.find('.dfield').replaceWith($(html).find('.dfield'));if(i)e.find('input').addClass('ignore');if(ipb)e.find('input').addClass('ignorepb');if(!$.isArray(bk))bk=[bk];for(var j in bk)
{try{bk[j]=JSON.parse(bk[j]);}catch(err){}}
me.setVal(bk,bk.every(function(e){return me.choicesVal.indexOf(e)>-1;}));}},getIndex:function()
{var i=[];$('[name*="'+this.name+'"]').each(function(j,v){if(this.checked){i.push(j);}});return i;}});$.fbuilder.controls['fradio']=function(){};$.extend($.fbuilder.controls['fradio'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Select a Choice",ftype:"fradio",layout:"one_column",required:false,readonly:false,onoff:0,toSubmit:"text",choiceSelected:"",showDep:false,untickAccepted:true,initStatus:function()
{$('[id*="'+this.name+'_"]').each(function(){$(this).data('previous-status',this.checked);});},show:function()
{this.choicesVal=((typeof(this.choicesVal)!="undefined"&&this.choicesVal!==null)?this.choicesVal:this.choices);var l=this.choices.length,str="",classDep="",n=this.name.match(/fieldname\d+/)[0];if(typeof this.choicesDep=="undefined"||this.choicesDep==null)
this.choicesDep=new Array();for(var i=0;i<l;i++)
{if(typeof this.choicesDep[i]!='undefined')
this.choicesDep[i]=$.grep(this.choicesDep[i],function(x){return x!=""&&x!=n;});else
this.choicesDep[i]=[];if(this.choicesDep[i].length)
classDep='depItem';}
for(var i=0;i<l;i++)
{str+='<div class="'+this.layout+'"><label for="'+this.name+'_rb'+i+'" '+(!this.tooltipIcon&&this.userhelpTooltip&&this.userhelp&&this.userhelp.length?'uh="'+cff_esc_attr(this.userhelp)+'"':'')+'><input aria-label="'+cff_esc_attr(this.choices[i])+'" name="'+this.name+'" id="'+this.name+'_rb'+i+'" class="field '+classDep+' group '+((this.required)?" required":"")+'" value="'+cff_esc_attr(this.choicesVal[i])+'" vt="'+cff_esc_attr((this.toSubmit=='text')?this.choices[i]:this.choicesVal[i])+'" type="radio" '+(this.readonly?' onclick="return false;" ':'')+((this.choices[i]+' - '+this.choicesVal[i]==this.choiceSelected)?"checked":"")+'/> '+
(this.onoff?'<span class="cff-switch"></span>':'')+'<span>'+cff_html_decode(this.choices[i])+'</span></label></div>';}
return'<div class="fields '+cff_esc_attr(this.csslayout)+(this.onoff?' cff-switch-container':'')+' '+this.name+' cff-radiobutton-field" id="field'+this.form_identifier+'-'+this.index+'"><label>'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield">'+str+'<div class="clearer"></div>'+(!this.userhelpTooltip?'<span class="uh">'+this.userhelp+'</span>':'')+'</div><div class="clearer"></div></div>';},after_show:function()
{var me=this,n=me.name;me.initStatus();if(me.untickAccepted)
{$(document).off('click','[id*="'+n+'_"]').on('click','[id*="'+n+'_"]',function(){var m=this,e=$(m);$('[id*="'+n+'_"]').each(function(){if(m!==this)$(this).data('previous-status',false);});if(e.data('previous-status')){m.checked=false;e.trigger('change');}
e.data('previous-status',m.checked);});}
if(me.readonly){$('[id*="'+n+'_"][_onclick]').each(function(){$(this).attr('onclick',$(this).attr('_onclick'));});}},showHideDep:function(toShow,toHide,hiddenByContainer,interval)
{if(typeof hiddenByContainer=='undefined')hiddenByContainer={};var me=this,item=$('input[id*="'+me.name+'_"]'),form_identifier=me.form_identifier,formObj=item.closest('form'),isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),result=[];try
{item.each(function(i,e){if(typeof me.choicesDep[i]!='undefined'&&me.choicesDep[i].length)
{var checked=e.checked;for(var j=0,k=me.choicesDep[i].length;j<k;j++)
{if(!/fieldname/i.test(me.choicesDep[i][j]))continue;var dep=me.choicesDep[i][j]+form_identifier;if(isHidden||!checked)
{if(typeof toShow[dep]!='undefined')
{delete toShow[dep]['ref'][me.name+'_'+i];if($.isEmptyObject(toShow[dep]['ref']))
delete toShow[dep];}
if(typeof toShow[dep]=='undefined')
{$('[id*="'+dep+'"],.'+dep,formObj).closest('.fields').hide();$('[id*="'+dep+'"]:not(.ignore)',formObj).addClass('ignore');toHide[dep]={};}}
else
{delete toHide[dep];if(typeof toShow[dep]=='undefined')
toShow[dep]={'ref':{}};toShow[dep]['ref'][me.name+'_'+i]=1;if(!(dep in hiddenByContainer))
{$('[id*="'+dep+'"],.'+dep,formObj).closest('.fields').fadeIn(interval||0);$('[id*="'+dep+'"].ignore',formObj).removeClass('ignore');}}
if($.inArray(dep,result)==-1)result.push(dep);}}});}
catch(e){}
return result;},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var e=$('[id*="'+this.name+'_"]:not(.ignore):checked');if(e.length)return $.fbuilder.parseValStr((raw=='vt')?e.attr('vt'):e.val(),raw,no_quotes);else if(raw=='vt')return $.fbuilder.parseValStr('',raw,no_quotes);return 0;},setVal:function(v,nochange,_default)
{_default=_default||false;nochange=nochange||false;var t=(new String(v)).replace(/(['"])/g,"\\$1"),n=this.name,e;$('[id*="'+n+'_"]').prop('checked',false);if(_default)e=$('[id*="'+n+'_"][vt="'+t+'"]');if(!_default||!e.length)e=$('[id*="'+n+'_"][value="'+t+'"]');if(e.length)e.prop('checked',true);this.initStatus();if(!nochange)$('[id*="'+n+'_"]').trigger('change');},setChoices:function(choices)
{if($.isPlainObject(choices))
{var bk=this.val(true);if('texts' in choices&&$.isArray(choices.texts))this.choices=choices.texts;if('values' in choices&&$.isArray(choices.values))this.choicesVal=choices.values;if('dependencies' in choices&&$.isArray(choices.dependencies))
{this.choicesDep=choices.dependencies.map(function(x){return($.isArray(x))?x.map(function(y){return(typeof y=='number')?'fieldname'+parseInt(y):y;}):x;});}
var html=this.show(),e=$('.'+this.name),i=e.find('.ignore').length,ipb=e.find('.ignorepb').length;e.find('.dfield').replaceWith($(html).find('.dfield'));if(i)e.find('input').addClass('ignore');if(ipb)e.find('input').addClass('ignorepb');try{bk=JSON.parse(bk);}catch(err){}
this.setVal(bk,this.choicesVal.indexOf(bk)>-1);}},getIndex:function()
{var i=-1;$('[name*="'+this.name+'"]').each(function(j,v){if(this.checked){i=j;return false;}});return i;}});$.fbuilder.controls['fdropdown']=function(){};$.extend($.fbuilder.controls['fdropdown'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Select a Choice",ftype:"fdropdown",size:"medium",required:false,toSubmit:"text",merge:0,choiceSelected:"",select2:false,multiple:false,vChoices:1,showDep:false,show:function()
{this.choicesVal=((typeof(this.choicesVal)!="undefined"&&this.choicesVal!==null)?this.choicesVal:this.choices)
var c=this.choices,cv=this.choicesVal,og=(typeof this.optgroup=='undefined')?new Array():this.optgroup,op_o=false,l=c.length,classDep='',str='',n=this.name.match(/fieldname\d+/)[0];if(typeof this.choicesDep=="undefined"||this.choicesDep==null)
this.choicesDep=new Array();for(var i=0;i<l;i++)
{if(typeof this.choicesDep[i]!='undefined'&&(typeof og[i]=='undefined'||!og[i]))
this.choicesDep[i]=$.grep(this.choicesDep[i],function(x){return x!=""&&x!=n;});else
this.choicesDep[i]=[];if(this.choicesDep[i].length&&(typeof og[i]=='undefined'||!og[i]))
classDep='depItem';}
for(var i=0;i<l;i++)
{if(og[i])
{if(op_o)str+='</optgroup>';str+='<optgroup label="'+cff_esc_attr(c[i])+'">';op_o=true;}
else
{str+='<option '+((this.choiceSelected==c[i]+' - '+cv[i])?"selected":"")+' '+((classDep!='')?'class="'+classDep+'"':'')+' value="'+cff_esc_attr(cv[i])+'" vt="'+cff_esc_attr((this.toSubmit=='text')?c[i]:cv[i])+'" data-i="'+i+'">'+cff_esc_attr(cff_sanitize(c[i]))+'</option>';}}
if(op_o)str+='</optgroup>';return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-dropdown-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label>'+'<div class="dfield"><select aria-label="'+cff_esc_attr(this.title)+'" id="'+this.name+'" name="'+this.name+((this.multiple)?'[]':'')+'" class="field '+((classDep!='')?' depItemSel ':'')+this.size+((this.required)?' required':'')+'" '+((this.multiple==true)?' multiple="multiple" size="'+((this.vChoices)?this.vChoices:1)+'"':'')+'>'+str+'</select><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div><div class="clearer"></div></div>';},after_show:function()
{var me=this;if(me.select2)
{function formatState(state)
{return!state.id?state.text:$('<span style="display:inline-flex;align-items:center">'+state.text+'</span>');};$('#'+me.name).after('<span class="cff-select2-container '+me.size+'"></span>');$('#'+me.name).on('change',function(){$(this).valid();});if('select2' in $.fn)
$('#'+me.name).select2({'templateResult':formatState,'templateSelection':formatState,'dropdownParent':$('#'+me.name).next('.cff-select2-container')});else
$(document).ready(function(){if('select2' in $.fn)$('#'+me.name).select2({'dropdownParent':$('#'+me.name).next('.cff-select2-container')});});}},showHideDep:function(toShow,toHide,hiddenByContainer,interval)
{if(typeof hiddenByContainer=='undefined')hiddenByContainer={};var me=this,item=$('#'+me.name+'.depItemSel'),form_identifier=me.form_identifier,formObj=item.closest('form'),isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),result=[];try
{if(item.length)
{var selected=[];$(item).find(':selected').each(function(){selected.push($(this).data('i'));});for(var i=0,h=me.choices.length;i<h;i++)
{if(typeof me.choicesDep[i]!='undefined'&&me.choicesDep[i].length)
{for(var j=0,k=me.choicesDep[i].length;j<k;j++)
{if(!/fieldname/i.test(me.choicesDep[i][j]))continue;var dep=me.choicesDep[i][j]+form_identifier;if(isHidden||$.inArray(i,selected)==-1)
{if(typeof toShow[dep]!='undefined')
{delete toShow[dep]['ref'][me.name+'_'+i];if($.isEmptyObject(toShow[dep]['ref']))
delete toShow[dep];}
if(typeof toShow[dep]=='undefined')
{$('[id*="'+dep+'"],.'+dep,formObj).closest('.fields').hide();$('[id*="'+dep+'"]:not(.ignore)',formObj).addClass('ignore');toHide[dep]={};}}
else
{delete toHide[dep];if(typeof toShow[dep]=='undefined')
toShow[dep]={'ref':{}};toShow[dep]['ref'][me.name+'_'+i]=1;if(!(dep in hiddenByContainer))
{$('[id*="'+dep+'"],.'+dep,formObj).closest('.fields').fadeIn(interval||0);$('[id*="'+dep+'"].ignore',formObj).removeClass('ignore');}}
if($.inArray(dep,result)==-1)result.push(dep);}}}}}
catch(e){}
return result;},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var e=$('[id="'+this.name+'"]:not(.ignore) option:selected'),v,m=this.multiple,g=this.merge&&!raw;if(m&&!g)v=[];if(e.length)
{e.each(function(){var t=$.fbuilder.parseValStr((raw=='vt')?this.getAttribute('vt'):this.value,raw,no_quotes);if(!$.fbuilder.isNumeric(t))t=t.replace(/^"/,'').replace(/"$/,'');if(!m||g)v=(v)?v+t:t;else v.push(t);});}
return(typeof v=='object'&&typeof v['length']!=='undefined')?v:(v?(($.fbuilder.isNumeric(v)||no_quotes)?v:'"'+v+'"'):(raw=='vt'?(no_quotes?'':'""'):0));},setVal:function(v,nochange,_default)
{_default=_default||false;nochange=nochange||false;if(!$.isArray(v))v=[v];var t,e,n=this.name,selector;for(var i in v)
{t=(new String(v[i])).replace(/(['"])/g,"\\$1");if(_default)e=$('[id="'+n+'"] OPTION[vt="'+t+'"]');if(!_default||!e.length)e=$('[id="'+n+'"] OPTION[value="'+t+'"]');if(e.length)e.prop('selected',true);}
if(!nochange)$('[id="'+n+'"]').trigger('change');},setChoices:function(choices)
{if($.isPlainObject(choices))
{var me=this,bk=me.val(true);if('texts' in choices&&$.isArray(choices.texts))me.choices=choices.texts;if('values' in choices&&$.isArray(choices.values))me.choicesVal=choices.values;if('dependencies' in choices&&$.isArray(choices.dependencies))
{me.choicesDep=choices.dependencies.map(function(x){return($.isArray(x))?x.map(function(y){return(typeof y=='number')?'fieldname'+parseInt(y):y;}):x;});}
if('optgroup' in choices&&$.isArray(choices.optgroup))me.optgroup=choices.optgroup;var html=me.show(),e=$('.'+me.name);e.find('select').html($(html).find('select').html());if(!$.isArray(bk))bk=[bk];for(var j in bk)
{try{bk[j]=JSON.parse(bk[j]);}catch(err){}}
me.setVal(bk,bk.every(function(e){return me.choicesVal.indexOf(e)>-1;}));}},getIndex:function()
{var f=$('[name*="'+this.name+'"]');if(this.multiple){var i=[];f.find('option').each(function(j,v){if(this.selected)i.push(j);});return i;}
else return f[0].selectedIndex;}});$.fbuilder.controls['ffile']=function(){};$.extend($.fbuilder.controls['ffile'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"ffile",required:false,size:"medium",accept:"",upload_size:"",multiple:false,preview:false,thumb_width:'80px',thumb_height:'',_patch:false,init:function(){this.thumb_width=String(this.thumb_width).trim();this.thumb_height=String(this.thumb_height).trim();var form_identifier=this.form_identifier.replace(/[^\d]/g,'');this._patch=('cpcff_default' in window&&form_identifier in cpcff_default)?true:false;},show:function()
{this.accept=cff_esc_attr(String(this.accept).trim());this.upload_size=cff_esc_attr(String(this.upload_size).trim());return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-file-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input aria-label="'+cff_esc_attr(this.title)+'" type="file" id="'+this.name+'" name="'+this.name+'[]"'+((this.accept.length)?' accept="'+this.accept+'"':'')+((this.upload_size.length)?' upload_size="'+this.upload_size+'"':'')+' class="field '+this.size+((this.required)?" required":"")+'" '+((this.multiple)?'multiple':'')+' /><div id="'+this.name+'_clearer" class="cff-file-clearer"></div>'+((this._patch)?'<input type="hidden" id="'+this.name+'_patch" name="'+this.name+'_patch" value="1" />':'')+'<span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this;if(!('accept' in $.validator.methods))
$.validator.addMethod("accept",function(value,element,param)
{if(this.optional(element))return true;else{param=typeof param==="string"?param.replace(/,/g,'|'):"png|jpe?g|gif";var regExpObj=new RegExp(".("+param+")$","i");for(var i=0,h=element.files.length;i<h;i++)
if(!element.files[i].name.match(regExpObj))return false;return true;}});if(!('upload_size' in $.validator.methods))
$.validator.addMethod("upload_size",function(value,element,params)
{if(this.optional(element))return true;else{var total=0;for(var i=0,h=element.files.length;i<h;i++)
total+=element.files[i].size/1024;return(total<=params);}});$('#'+me.name).on('change',function(){var h=this.files.length,n=0;$(this).siblings('span.files-list').remove();$('[id="'+me.name+'_patch"]').remove();if(1<=h)
{var filesContainer=$('<span class="files-list"></span>');for(var i=0;i<h;i++)
{(function(i,file){if(me.preview&&file.type.match('image.*')&&'FileReader' in window)
{var reader=new FileReader();reader.onload=function(e){var img=$('<img>');img.attr('src',e.target.result).css('maxWidth','100%');if(me.thumb_height!='')img.attr('height',me.thumb_height);if(me.thumb_width!='')img.attr('width',me.thumb_width);filesContainer.append($('<span>'+(n?', ':'')+'</span>').append(img));n++;};reader.readAsDataURL(file);}
else if(1<h){filesContainer.append($('<span>').text((n?', ':'')+file.name));n++;}})(i,this.files[i]);}
$('#'+this.id+'_clearer').after(filesContainer);}});$('#'+me.name+'_clearer').on('click',function(){$('#'+me.name).val('').trigger('change').valid();});},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var e=$("[id='"+this.name+"']:not(.ignore)"),result='',separator='';if(e.length)
{if(raw)result=Array.prototype.slice.call(e[0].files);else
{for(var i=0,h=e[0].files.length;i<h;i++)
{result+=separator+e[0].files[i].name;separator=', ';}
result=$.fbuilder.parseValStr(result,raw,no_quotes);}}
return result;}});$.fbuilder.controls['fpassword']=function(){};$.extend($.fbuilder.controls['fpassword'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"fpassword",predefined:"",predefinedClick:false,required:false,size:"medium",minlength:"",maxlength:"",equalTo:"",regExp:"",regExpMssg:"",show:function()
{this.minlength=cff_esc_attr(String(this.minlength).trim());this.maxlength=cff_esc_attr(String(this.maxlength).trim());this.equalTo=cff_esc_attr(String(this.equalTo).trim());this.predefined=this._getAttr('predefined',true);return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-password-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input aria-label="'+cff_esc_attr(this.title)+'" id="'+this.name+'" name="'+this.name+'"'+((this.minlength.length)?' minlength="'+cff_esc_attr(this.minlength)+'"':'')+((this.maxlength.length)?' maxlength="'+cff_esc_attr(this.maxlength)+'"':'')+((this.equalTo.length)?' equalTo="#'+this.equalTo+this.form_identifier+'"':'')+' class="field '+this.size+((this.required)?" required":"")+'" type="password" autocomplete="new-password" value="'+cff_esc_attr(this.predefined)+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{if(this.regExp!=""&&typeof $['validator']!='undefined')
{try{var parts=this.regExp.match(/(\/)(.*)(\/)([gimy]{0,4})$/i);this.regExp=(parts===null)?new RegExp(this.regExp):new RegExp(parts[2],parts[4].toLowerCase());if(!('pattern' in $.validator.methods))
$.validator.addMethod('pattern',function(value,element,param)
{try{return this.optional(element)||param.test(value);}
catch(err){return true;}});$('#'+this.name).rules('add',{'pattern':this.regExp,messages:{'pattern':this.regExpMssg}});}catch(err){}}},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val(),raw,no_quotes);return 0;}});$.fbuilder.controls['fPhone']=function(){};$.extend($.fbuilder.controls['fPhone'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Phone",ftype:"fPhone",required:false,readonly:false,size:"medium",dformat:"### ### ####",predefined:"888 888 8888",countryComponent:false,toDisplay:'iso',countries:[],defaultCountry:'',show:function()
{var me=this,db={"AF":"+93","AX":"+358","AL":"+355","DZ":"+213","AS":"+1684","AD":"+376","AO":"+244","AI":"+1264","AQ":"+672","AG":"+1268","AR":"+54","AM":"+374","AW":"+297","AU":"+61","AT":"+43","AZ":"+994","BS":"+1242","BH":"+973","BD":"+880","BB":"+1246","BY":"+375","BE":"+32","BZ":"+501","BJ":"+229","BM":"+1441","BT":"+975","BO":"+591","BA":"+387","BW":"+267","BV":"+47","BR":"+55","IO":"+246","BN":"+673","BG":"+359","BF":"+226","BI":"+257","KH":"+855","CM":"+237","CA":"+1","CV":"+238","KY":"+345","CF":"+236","TD":"+235","CL":"+56","CN":"+86","CX":"+61","CC":"+61","CO":"+57","KM":"+269","CG":"+242","CD":"+243","CK":"+682","CR":"+506","CI":"+225","HR":"+385","CU":"+53","CY":"+357","CZ":"+420","DK":"+45","DJ":"+253","DM":"+1767","DO":"+1849","EC":"+593","EG":"+20","SV":"+503","GQ":"+240","ER":"+291","EE":"+372","ET":"+251","FK":"+500","FO":"+298","FJ":"+679","FI":"+358","FR":"+33","GF":"+594","PF":"+689","TF":"+262","GA":"+241","GM":"+220","GE":"+995","DE":"+49","GH":"+233","GI":"+350","GR":"+30","GL":"+299","GD":"+1473","GP":"+590","GU":"+1671","GT":"+502","GG":"+44","GN":"+224","GW":"+245","GY":"+592","HT":"+509","HM":"+0","VA":"+379","HN":"+504","HK":"+852","HU":"+36","IS":"+354","IN":"+91","ID":"+62","IR":"+98","IQ":"+964","IE":"+353","IM":"+44","IL":"+972","IT":"+39","JM":"+1876","JP":"+81","JE":"+44","JO":"+962","KZ":"+7","KE":"+254","KI":"+686","KP":"+850","KR":"+82","XK":"+383","KW":"+965","KG":"+996","LA":"+856","LV":"+371","LB":"+961","LS":"+266","LR":"+231","LY":"+218","LI":"+423","LT":"+370","LU":"+352","MO":"+853","MK":"+389","MG":"+261","MW":"+265","MY":"+60","MV":"+960","ML":"+223","MT":"+356","MH":"+692","MQ":"+596","MR":"+222","MU":"+230","YT":"+262","MX":"+52","FM":"+691","MD":"+373","MC":"+377","MN":"+976","ME":"+382","MS":"+1664","MA":"+212","MZ":"+258","MM":"+95","NA":"+264","NR":"+674","NP":"+977","NL":"+31","AN":"+599","NC":"+687","NZ":"+64","NI":"+505","NE":"+227","NG":"+234","NU":"+683","NF":"+672","MP":"+1670","NO":"+47","OM":"+968","PK":"+92","PW":"+680","PS":"+970","PA":"+507","PG":"+675","PY":"+595","PE":"+51","PH":"+63","PN":"+64","PL":"+48","PT":"+351","PR":"+1939","QA":"+974","RO":"+40","RU":"+7","RW":"+250","RE":"+262","BL":"+590","SH":"+290","KN":"+1869","LC":"+1758","MF":"+590","PM":"+508","VC":"+1784","WS":"+685","SM":"+378","ST":"+239","SA":"+966","SN":"+221","RS":"+381","SC":"+248","SL":"+232","SG":"+65","SK":"+421","SI":"+386","SB":"+677","SO":"+252","ZA":"+27","SS":"+211","GS":"+500","ES":"+34","LK":"+94","SD":"+249","SR":"+597","SJ":"+47","SZ":"+268","SE":"+46","CH":"+41","SY":"+963","TW":"+886","TJ":"+992","TZ":"+255","TH":"+66","TL":"+670","TG":"+228","TK":"+690","TO":"+676","TT":"+1868","TN":"+216","TR":"+90","TM":"+993","TC":"+1649","TV":"+688","UG":"+256","UA":"+380","AE":"+971","GB":"+44","US":"+1","UY":"+598","UZ":"+998","VU":"+678","VE":"+58","VN":"+84","VG":"+1284","VI":"+1340","WF":"+681","YE":"+967","ZM":"+260","ZW":"+263"};me.predefined=new String(me._getAttr('predefined',true));me.dformat=me.dformat.replace(/^\s+/,'').replace(/\s+$/,'').replace(/\s+/g,' ');me.predefined=me.predefined.replace(/^\s+/,'').replace(/\s+$/,'').replace(/\s+/g,' ');var str="",tmp=me.dformat.split(/\s+/),tmpv=me.predefined.split(/\s+/),attr=(typeof me.predefinedClick!='undefined'&&me.predefinedClick)?'placeholder':'value',nc=me.dformat.replace(/\s/g,'').length,c=0;for(var i=0;i<tmpv.length;i++)
{if(String(tmpv[i]).trim()=="")
{tmpv.splice(i,1);}}
str='<div class="'+me.size+' components_container">';if(me.countryComponent)
{nc+=me.toDisplay=='iso'?3:4;str+='<div class="uh_phone" style="min-width:'+(100/nc*(me.toDisplay=='iso'?3:4))+'%;"><select id="'+me.name+'_'+c+'" name="'+me.name+'_'+c+'" class="field">';if(me.toDisplay!='iso'){db=Object.fromEntries(Object.entries(db).sort(function(a,b){var n1=a[1].replace(/[^\d]/g,'')*1,n2=b[1].replace(/[^\d]/g,'')*1;return n1<n2?-1:(n1==n2?0:1);}));delete db[me.defaultCountry=='CA'?'US':'CA'];delete db[me.defaultCountry=='RU'?'KZ':'RU'];}
if(!me.countries.length)me.countries=Object.keys(db);for(var i in me.countries)
str+='<option value="'+db[me.countries[i]]+'" '+(me.defaultCountry==me.countries[i]?'SELECTED':'')+'>'+(me.toDisplay=='iso'?me.countries[i]:db[me.countries[i]])+'</option>';str+='</select></div>';c++;}
for(var i=0,h=tmp.length;i<h;i++)
{if(String(tmp[i]).trim()!="")
{str+='<div class="uh_phone" style="min-width:'+(100/nc*tmp[i].length)+'%"><input aria-label="'+cff_esc_attr(me.title)+'" type="text" id="'+me.name+'_'+c+'" name="'+me.name+'_'+c+'" class="field '+((i==0&&!me.countryComponent)?' phone ':' digits ')+((me.required)?' required ':'')+'" size="'+String(tmp[i]).trim().length+'" '+attr+'="'+((tmpv[i])?tmpv[i]:"")+'" maxlength="'+String(tmp[i]).trim().length+'" minlength="'+String(tmp[i]).trim().length+'" '+((me.readonly)?'readonly':'')+' /><div class="l">'+String(tmp[i]).trim()+'</div></div>';c++;}}
str+='</div>';return'<div class="fields '+cff_esc_attr(me.csslayout)+' '+me.name+' cff-phone-field" id="field'+me.form_identifier+'-'+me.index+'"><label for="'+me.name+'">'+me.title+''+((me.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input type="hidden" id="'+me.name+'" name="'+me.name+'" class="field" />'+str+'<div class="clearer"></div><span class="uh">'+me.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this,tmp=me.dformat.split(' ');if(!('phone' in $.validator.methods))
$.validator.addMethod("phone",function(value,element)
{if(this.optional(element))return true;else return/^\+{0,1}\d*$/.test(value);});for(var i=0,h=tmp.length+(me.countryComponent?1:0);i<h;i++)
{$('#'+me.name+'_'+i).on('change',function(){var v='';$('[id*="'+me.name+'_"]').each(function(){v+=$(this).val();});$('#'+me.name).val(v).trigger('change');});if(i+1<h)
{$('#'+me.name+'_'+i).on('keyup',{'next':i+1},function(evt){var e=$(this);if(e.val().length==e.attr('maxlength'))
{e.trigger('change');$('#'+me.name+'_'+evt.data.next).trigger('focus');}});}}
$('#'+me.name+'_0').trigger('change');},val:function(raw,no_quotes)
{raw=raw||true;no_quotes=no_quotes||false;var e=$('[id="'+this.name+'"]:not(.ignore)'),p=$.fbuilder.parseValStr(e.val(),raw,no_quotes);if(e.length)return($.fbuilder.isNumeric(p)&&!no_quotes)?'"'+p+'"':p;return 0;},setVal:function(v)
{let me=this;function setPrefix(v,last){let r='',p='';last=last||false;if($('select[id*="'+me.name+'_"] option[value="'+v+'"]').length){$('select[id*="'+me.name+'_"]').val(v);return r;}
if(last)p=v;else r=v;while(last?p.length:r.length){if(last){r+=p.substring(p.length-1);p=p.substring(0,p.length-1);}else{p+=r.substring(0,1);r=r.substring(1);}
if($('select[id*="'+me.name+'_"] option[value="'+p+'"]').length){$('select[id*="'+me.name+'_"]').val(p);return r;}}
return v;};v=(new String(v)).replace(/^\s+/,'').replace(/\s+$/,'');$('input[id*="'+me.name+'_"]').val('');if(v.length)
{let d=me.dformat.split(/\s+/g),f=v.substr(0,1),n=0;v=(f!='+')?v.replace(/[^\d]/g,''):f+v.substr(1).replace(/[^\d]/g,'');for(let i in d){d[i]=d[i].length;n+=d[i];}
if(f=='+'&&$('select[id*="'+me.name+'_"]').length){if(n<v.length){let p=v.substring(0,v.length-n);v=v.substring(v.length-n);v=setPrefix(p,true)+v;}else{v=setPrefix(v,false);}}
for(let i in d){$('input[id*="'+me.name+'_"]:eq('+i+')').val(v.substring(0,d[i]));v=v.substring(d[i]);}}
$('[name="'+me.name+'"]').val(v);}});$.fbuilder.controls['fCommentArea']=function(){};$.extend($.fbuilder.controls['fCommentArea'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Comments here",ftype:"fCommentArea",userhelp:"A description of the section goes here.",show:function()
{return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' comment_area cff-instruct-text-field" id="field'+this.form_identifier+'-'+this.index+'"><label id="'+this.name+'">'+this.title+'</label><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';}});$.fbuilder.controls['fhidden']=function(){};$.extend($.fbuilder.controls['fhidden'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fhidden",title:"",predefined:"",show:function()
{this.predefined=this._getAttr('predefined',true);return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-hidden-field" id="field'+this.form_identifier+'-'+this.index+'" style="padding:0;margin:0;border:0;width:0;height:0;overflow:hidden;"><label for="'+this.name+'">'+this.title+'</label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'" type="hidden" value="'+cff_esc_attr(this.predefined)+'" class="field" /></div></div>';}});$.fbuilder.controls['fSectionBreak']=function(){};$.extend($.fbuilder.controls['fSectionBreak'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Section Break",ftype:"fSectionBreak",userhelp:"A description of the section goes here.",show:function()
{return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' section_breaks" id="field'+this.form_identifier+'-'+this.index+'"><div class="section_break" id="'+this.name+'" ></div><label>'+this.title+'</label><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';}});$.fbuilder.controls['fPageBreak']=function(){};$.extend($.fbuilder.controls['fPageBreak'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Page Break",ftype:"fPageBreak",show:function()
{return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' section_breaks" id="field'+this.form_identifier+'-'+this.index+'"><div class="section_break" id="'+this.name+'" ></div><label>'+this.title+'</label><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';}});$.fbuilder.controls['fsummary']=function(){};$.extend($.fbuilder.controls['fsummary'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Summary",ftype:"fsummary",fields:"",exclude_empty:false,titleClassname:"summary-field-title",valueClassname:"summary-field-value",fieldsArray:[],show:function()
{var me=this;if('string'!=typeof me.fields)return;var p=String(me.fields.replace(/\,+/g,',')).trim().split(','),l=p.length;if(l)
{var str='<div class="fields '+cff_esc_attr(me.csslayout)+' '+me.name+' cff-summary-field" id="field'+me.form_identifier+'-'+me.index+'">'+((!/^\s*$/.test(me.title))?'<h2>'+me.title+'</h2>':'')+'<div id="'+me.name+'"></div></div>';return str;}},after_show:function(){var me=this;if('string'!=typeof me.fields)return;var p=String(me.fields.replace(/\,+/g,',')).trim().split(','),l=p.length,str='';if(l)
{for(var i=0;i<l;i++)
{if(!/^\s*$/.test(p[i]))
{p[i]=String(p[i]).trim()+me.form_identifier;if($('.'+p[i]).length){str+='<div ref="'+p[i]+'" class="cff-summary-item"><span class="'+cff_esc_attr(me.titleClassname)+' cff-summary-title"></span><span class="'+cff_esc_attr(me.valueClassname)+' cff-summary-value"></span></div>';me.fieldsArray.push(p[i]);$(document).on('change','.'+p[i]+' [id*="'+p[i]+'"]',function(){me.update();});}}}
$(document).on('showHideDepEvent',function(evt,form_identifier)
{me.update();});$('#cp_calculatedfieldsf_pform'+me.form_identifier).on('reset',function(){setTimeout(function(){me.update();},10);});}
$('[id="'+me.name+'"]').html(str);},update:function()
{for(var j=0,k=this.fieldsArray.length;j<k;j++)
{var i=this.fieldsArray[j],e=$('[id="'+i+'"],[id^="'+i+'_rb"],[id^="'+i+'_cb"]'),tt=$('[ref="'+i+'"]');if(e.length&&tt.length)
{var l=$('[id="'+i+'"],[id^="'+i+'_rb"],[id^="'+i+'_cb"]').closest('.fields').find('label:first').clone().find('.r,.dformat').remove().end(),t=String(l.text()).trim().replace(/\:$/,''),v=[];e.each(function(){var e=$(this);if(/(checkbox|radio)/i.test(e.attr('type'))&&!e.is(':checked'))
{return;}
else if(e[0].tagName=='SELECT')
{var vt=[];e.find('option:selected').each(function(){vt.push($(this).attr('vt'));});v.push(vt.join(', '));}
else
{if(e.attr('vt'))
{v.push(e.attr('vt'));}
else if(e.attr('summary'))
{v.push($('#'+i).closest('.fields').find('.'+e.attr('summary')+i).html());}
else
{var d=$('[id="'+i+'_date"]');if(d.length)
{if(d.is(':disabled'))
{v.push(e.val().replace(d.val(),''));}
else v.push(e.val());}
else
{if(e.attr('type')=='file')
{var f=[];$.each(e[0].files,function(i,o){f.push(o.name);});v.push(f.join(', '));}
else
{var c=$('[id="'+i+'_caption"]');v.push((c.length&&!/^\s*$/.test(c.html()))?c.html():e.val());}}}}});v=v.join(', ');tt.find('.cff-summary-title')[(/^\s*$/.test(t))?'hide':'show']().html(t);var tmp=$('<div></div>').html(v);tmp.find('script').remove();tt.find('.cff-summary-value').html(tmp.html().replace(/\s(on[a-z]*\s*=)/gi,"_$1"));if(e.hasClass('ignore')||(this.exclude_empty&&v==''))
{tt.hide();}
else
{tt.show();}}}
$('[id="'+this.name+'"]').trigger('cff-summary-update');}});$.fbuilder.controls['fcontainer']=function(){};$.fbuilder.controls['fcontainer'].prototype={fields:[],columns:1,rearrange:0,after_show:function(e)
{var e=e||$('#'+this.name),f;for(var i=0,h=this.fields.length;i<h;i++)
{f=$('.fields.'+this.fields[i]+this.form_identifier).detach();if(this.columns>1)
{f.addClass('column'+this.columns);if(i%this.columns==0&&!this.rearrange)f.css('clear','left');}
f.appendTo(e);}},showHideDep:function(toShow,toHide,hiddenByContainer,interval)
{if(typeof hiddenByContainer=='undefined')hiddenByContainer={};var me=this,isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),fId,result=[];for(var i=0,h=me.fields.length;i<h;i++)
{if(!/fieldname/i.test(me.fields[i]))continue;fId=me.fields[i]+me.form_identifier;if(isHidden)
{if(typeof hiddenByContainer[fId]=='undefined')hiddenByContainer[fId]={};if(typeof hiddenByContainer[fId][me.name]=='undefined')
{hiddenByContainer[fId][me.name]={};if(typeof toHide[fId]=='undefined')
{$('.'+fId+' [id*="'+fId+'"],.'+fId).closest('.fields').hide();$('.'+fId+' [id*="'+fId+'"]:not(.ignore)').addClass('ignore');result.push(fId);}}}
else
{if(typeof hiddenByContainer[fId]!='undefined')
{delete hiddenByContainer[fId][me.name];if($.isEmptyObject(hiddenByContainer[fId]))
{delete hiddenByContainer[fId];if(typeof toHide[fId]=='undefined')
{$('.'+fId+' [id*="'+fId+'"],.'+fId).closest('.fields').fadeIn(interval||0);$('.'+fId+' [id*="'+fId+'"].ignore').removeClass('ignore');result.push(fId);}}}}}
return result;}};$.fbuilder.controls['ffieldset']=function(){};$.extend($.fbuilder.controls['ffieldset'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"ffieldset",fields:[],columns:1,collapsible:false,defaultCollapsed:true,selfClosing:false,rearrange:0,show:function()
{return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-fieldset-field cff-container-field '+((this.collapsible)?'cff-collapsible'+((this.selfClosing)?' cff-selfclosing':'')+((this.defaultCollapsed)?' cff-collapsed':''):'')+'" id="field'+this.form_identifier+'-'+this.index+'"><FIELDSET>'+((!/^\s*$/.test(this.title)||this.collapsible)?'<LEGEND>'+this.title+'</LEGEND>':'')+'<div id="'+this.name+'"></div></FIELDSET><div class="clearer"></div></div>';},after_show:function()
{var me=this;$.fbuilder.controls['fcontainer'].prototype.after_show.call(this);if(me.collapsible){function collapseApply(p){if(p.length)
{p.toggleClass('cff-collapsed');if(!p.hasClass('cff-collapsed'))
{p.siblings('.cff-selfclosing').addClass('cff-collapsed');}}}
$('.'+me.name+'>fieldset>legend').on('click',function(evt){collapseApply($(this).closest('.cff-collapsible'));evt.preventDefault();evt.stopPropagation();});$('.'+me.name).on('click',function(){var e=$(this);if(e.hasClass('cff-collapsed'))collapseApply(e);});}},showHideDep:function(toShow,toHide,hiddenByContainer)
{return $.fbuilder.controls['fcontainer'].prototype.showHideDep.call(this,toShow,toHide,hiddenByContainer);}});$.fbuilder.controls['fdiv']=function(){};$.extend($.fbuilder.controls['fdiv'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fdiv",fields:[],columns:1,rearrange:0,show:function()
{return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-div-field cff-container-field" id="field'+this.form_identifier+'-'+this.index+'"><div id="'+this.name+'"></div><div class="clearer"></div></div>';},after_show:function()
{$.fbuilder.controls['fcontainer'].prototype.after_show.call(this);},showHideDep:function(toShow,toHide,hiddenByContainer)
{return $.fbuilder.controls['fcontainer'].prototype.showHideDep.call(this,toShow,toHide,hiddenByContainer);}});$.fbuilder.controls['fMedia']=function(){};$.extend($.fbuilder.controls['fMedia'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fMedia",sMediaType:"image",data:{image:{sWidth:"",sHeight:"",sSrc:"",sAlt:"",sLink:"",sTarget:"",sFigcaption:""},audio:{sWidth:"",sSrc:"",sSrcAlt:"",sControls:1,sLoop:0,sAutoplay:0,sMuted:0,sPreload:"auto",sFallback:"",sFigcaption:"",sHideDownload:0},video:{sWidth:"",sHeight:"",sSrc:"",sSrcAlt:"",sPoster:"",sControls:1,sLoop:0,sAutoplay:0,sMuted:0,sPreload:"auto",sFallback:"",sFigcaption:"",sHideDownload:0}},_show_image:function()
{var d=this.data.image,esc=cff_esc_attr,a=[],l=[],r='';if(String(d.sWidth).trim())a.push('width="'+esc(d.sWidth)+'"');if(String(d.sHeight).trim())a.push('height="'+esc(d.sHeight)+'"');if(String(d.sSrc).trim())a.push('src="'+esc(d.sSrc)+'"');if(String(d.sAlt).trim())a.push('alt="'+esc(d.sAlt)+'"');if(String(d.sLink).trim())
{l.push('href="'+esc(d.sLink)+'"');if(String(d.sTarget).trim())l.push('target="'+esc(d.sTarget)+'"');r='<a '+l.join(' ')+' ><img '+a.join(' ')+' /></a>';}
else
{r='<img '+a.join(' ')+' />';}
return r;},_show_audio_video:function(d,isV)
{var esc=cff_esc_attr,a=[],s=[],t=(isV)?'video':'audio';if(String(d.sWidth).trim())s.push('width:'+esc(d.sWidth)+';');if(isV&&String(d.sHeight).trim())s.push('height:'+esc(d.sHeight)+';');if(isV&&String(d.sPoster).trim())a.push('poster="'+esc(d.sPoster)+'"');if(String(d.sSrc).trim())a.push('src="'+esc(d.sSrc)+'"');if(d.sAutoplay)a.push('autoplay');if(d.sControls)a.push('controls');if(d.sLoop)a.push('loop');if(d.sMuted)a.push('muted');if(d.sHideDownload)a.push('controlsList="nodownload"');a.push('preload="'+esc(d.sPreload)+'"');return'<'+t+' '+a.join(' ')+' style="'+s.join(' ')+'">'+((String(d.sSrcAlt).trim())?'<source src="'+esc(d.sSrcAlt)+'" />':'')+'<p>'+d.sFallback+'</p></'+t+'>';},_show_audio:function()
{return this._show_audio_video(this.data.audio,false);},_show_video:function()
{return this._show_audio_video(this.data.video,true);},show:function()
{return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-media-field" id="field'+this.form_identifier+'-'+this.index+'"><div class="clearer"><div class="field" id="'+this.name+'">'+this['_show_'+this.sMediaType]()+'</div></div><span class="uh">'+this.data[this.sMediaType].sFigcaption+'</span><div class="clearer"></div></div>';}});$.fbuilder.controls['frecordav']=function(){};$.extend($.fbuilder.controls['frecordav'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"frecordav",required:false,exclude:false,size:"medium",to_record:"video",max_time:0,beep:0,preview:false,video_width:320,video_height:240,record_label:'Record',stop_label:'Stop',status_message:'Recording saved',_has_hours_component:function(){return Math.floor(this.max_time/3600)?1:0;},_is_video:function(){return this.to_record=='video'||this.to_record=='audio-video';},_is_audio:function(){return this.to_record=='audio'||this.to_record=='audio-video';},_format_time_component:function(v)
{var _has_hours=this._has_hours_component(),hours=Math.floor(v/3600),minutes=Math.floor((v-hours*3600)/60),seconds=(v-hours*3600-minutes*60)%60,time_formatted=(_has_hours?(hours<10?'0'+hours:hours)+':':'')+(minutes<10?'0'+minutes:minutes)+':'+(seconds<10?'0'+seconds:seconds);return time_formatted;},_getUserMedia:function()
{return navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||false;},show:function()
{var max_time_formatted=this._format_time_component(this.max_time),time_formatted=(this._has_hours_component()?'00:':'')+'00:00';return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-record-av-field" id="field'+this.form_identifier+'-'+this.index+'">'+'<label for="'+this.name+'_record_btn">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label>'+'<div class="dfield">'+'<input type="file" id="'+this.name+'" name="'+this.name+'[]" class="hide-strong" />'+'<div class="cff-record-controls-container">'+'<div class="cff-record-btn" id="'+this.name+'_record_btn">'+cff_sanitize(this.record_label)+'</div>'+
(this.preview?'<div class="cff-record-play-btn hide-strong" id="'+this.name+'_play_btn"></div>':'')+
(this.max_time?'<div class="cff-record-time" id="'+this.name+'_record_time">'+time_formatted+'</div><div class="cff-record-max-time">'+max_time_formatted+'</div>':'')+'</div>'+'<div class="clearer"></div>'+'<div class="cff-record-status hide-strong" id="'+this.name+'_record_status">'+cff_sanitize(this.status_message)+'</div>'+
(this.preview?(this._is_video()?'<video id="'+this.name+'_media" width="'+cff_esc_attr(this.video_width)+'" height="'+cff_esc_attr(this.video_height)+'" class="hide-strong" style="margin-top:20px;" preload="metadata"></video>':'<audio id="'+this.name+'_media" class="hide-strong"></audio>'):'')+'<div class="clearer"></div>'+'<span class="uh">'+this.userhelp+'</span></div><div class="clearer" /></div>';},after_show:function()
{var me=this,mssg=$('#'+me.name+'_record_status'),record_btn=$('#'+this.name+'_record_btn'),play_btn=$('#'+me.name+'_play_btn'),file_ctrl=$('#'+me.name),media_ctrl=$('#'+me.name+'_media'),record_time=$('#'+me.name+'_record_time'),chunks=[],interval,streamRecorder,recording_flag=false;play_btn[_files().length?'removeClass':'addClass']('hide-strong');navigator.getUserMedia=me._getUserMedia();if(media_ctrl.length)
{media_ctrl[0].ontimeupdate=function(evt){if(!recording_flag)record_time.text(me._format_time_component(Math.round(evt.target.currentTime)));};media_ctrl[0].onended=function(evt){evt.target.currentTime=0;play_btn.removeClass('cff-record-stop-btn');};}
if(!navigator.getUserMedia){$('.'+me.name).remove();return;}
function _files(){return file_ctrl[0].files;};function _load_file(){var files=_files();if(files.length&&media_ctrl.length)
{media_ctrl[0].src=URL.createObjectURL(files[0]);return true;}
return false;}
function _random(){return Math.floor(Math.random()*(1000-9999+1)+1000);};function _stopRecording(){try{if(typeof streamRecorder!='undefined')
{streamRecorder.onstop=function(evt){var container=new DataTransfer(),file=new File(chunks,me.to_record+_random()+'.webm',{type:'video/webm',lastModified:new Date().getTime()});container.items.add(file);file_ctrl[0].files=container.files;play_btn.removeClass('cff-record-stop-btn hide-strong');mssg.removeClass('hide-strong');_load_file();};streamRecorder.stop();}}catch(err){console.log(err);};record_btn.removeClass('cff-record-btn-recording');if(me._is_video()&&media_ctrl.length)
{media_ctrl[0].pause();media_ctrl[0].srcObject=null;}
recording_flag=false;};record_btn.on('click',function(evt){var settings={video:(me._is_video())?{'facingMode':{exact:'user'}}:false,audio:(me._is_audio())?true:false};clearInterval(interval);play_btn.addClass('hide-strong');mssg.addClass('hide-strong');record_btn.toggleClass('cff-record-btn-recording');if(record_btn.hasClass('cff-record-btn-recording'))
{var i=0;chunks=[];recording_flag=true;if(me._is_video()&&media_ctrl.length)media_ctrl.removeClass('hide-strong');navigator.getUserMedia(settings,function(localMediaStream)
{streamRecorder=new MediaRecorder(localMediaStream);streamRecorder.ondataavailable=function(evt){chunks.push(evt.data);};streamRecorder.start();if(me._is_video()&&media_ctrl.length)
{media_ctrl[0].srcObject=localMediaStream;media_ctrl[0].play();}
interval=setInterval(function(){i++;if(i<me.max_time)record_time.text(me._format_time_component(i));else{clearInterval(interval);if(me.beep){var snd=new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");snd.play();}
_stopRecording();}},1000);},function(err){$('.'+me.name+' .dfield').html('<div class="cff-record-error">'+err.name+'</div>');});}
else
{_stopRecording();}});play_btn.on('click',function(){if(_load_file())
{play_btn.toggleClass('cff-record-stop-btn');if(play_btn.hasClass('cff-record-stop-btn'))media_ctrl[0].play();else media_ctrl[0].pause();}});}});$.fbuilder.controls['fButton']=function(){};$.extend($.fbuilder.controls['fButton'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fButton",sType:"button",sValue:"button",sLoading:false,sMultipage:false,sOnclick:"",sOnmousedown:"",userhelp:"A description of the section goes here.",show:function()
{var esc=cff_esc_attr,type=this.sType,clss='';if(this.sType=='calculate')
{type='button';clss='calculate-button';}
if(this.sType=='print')
{type='button';}
else if(this.sType=='reset')
{clss='reset-button';}
return'<div class="fields '+esc(this.csslayout)+' '+this.name+' cff-button-field" id="field'+this.form_identifier+'-'+this.index+'"><input id="'+this.name+'" type="'+type+'" value="'+esc(this.sValue)+'" class="field '+clss+'" /><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';},after_show:function()
{var me=this;$('#'+this.name).on('mousedown',function(){eval(me.sOnmousedown);});$('#'+this.name).on('click',function()
{var e=$(this),f=e.closest('form'),fid=me.form_identifier;if(e.hasClass('calculate-button'))
{var items=$.fbuilder['forms'][fid].getItems();if(me.sLoading)
{f.find('.cff-processing-form').remove();$('<div class="cff-processing-form"></div>').appendTo(e.closest('#fbuilder'));}
$(document).on('equationsQueueEmpty',function(evt,id){if(id==fid)
{if(me.sLoading)f.find('.cff-processing-form').remove();$(document).off('equationsQueueEmpty');for(var i=0,h=items.length;i<h;i++)
{if(items[i].ftype=='fsummary')
{items[i].update();}}}});$.fbuilder['calculator'].defaultCalc('#'+e.closest('form').attr('id'),false,true);}
if(e.hasClass('reset-button')){RESETFORM(e[0].form);setTimeout(function(){eval(me.sOnclick);},55)}else{eval(me.sOnclick);}
if(me.sType=='print')
{fbuilderjQuery.fbuilder.currentFormId=f.attr('id');PRINTFORM(me.sMultipage);}});}});$.fbuilder.controls['fhtml']=function(){};$.extend($.fbuilder.controls['fhtml'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fhtml",fcontent:"",show:function()
{var content=this.fcontent;content=content.replace(/\(\s*document\s*\)\.one\(\s*['"]showHideDepEvent['"]/ig,'(window).one("showHideDepEvent"').replace(/\bcurrentFormId\b/ig,'cp_calculatedfieldsf_pform'+this.form_identifier);return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-html-field" id="field'+this.form_identifier+'-'+this.index+'"><div id="'+this.name+'" class="dfield">'+content+'</div><div class="clearer"></div></div>';}});$.fbuilder.controls['facceptance']=function(){};$.extend($.fbuilder.controls['facceptance'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Accept terms and conditions",ftype:"facceptance",value:"I accept",required:true,onoff:0,url:"",message:"",show:function()
{var me=this,dlg='',label=me.title;if(!/^\s*$/.test(me.url))
{label='<a href="'+cff_esc_attr(String(me.url).trim())+'" target="_blank">'+label+'</a>';}
else if(!/^\s*$/.test(me.message))
{label='<a href="javascript:void(0);" class="cff-open-dlg">'+label+'</a>';dlg+='<div class="cff-dialog hide"><span class="cff-close-dlg"></span><div class="cff-dialog-content">'+me.message+'</div></div>'}
return'<div class="fields '+cff_esc_attr(me.csslayout)+(this.onoff?' cff-switch-container':'')+' '+me.name+' cff-checkbox-field" id="field'+me.form_identifier+'-'+me.index+'"><div class="dfield">'+'<div class="one_column"><label for="'+me.name+'"><input aria-label="'+cff_esc_attr(me.title)+'" name="'+me.name+'" id="'+me.name+'" class="field required" value="'+cff_esc_attr(me.value)+'" vt="'+cff_esc_attr((/^\s*$/.test(me.value))?me.title:me.value)+'" type="checkbox" /> '+
(this.onoff?'<span class="cff-switch"></span>':'')+'<span>'+
cff_html_decode(label)+''+((me.required)?'<span class="r">*</span>':'')+'</span></label></div>'+dlg+'<span class="uh"></span></div><div class="clearer"></div></div>';},after_show:function()
{$(document).on('click','.cff-open-dlg',function(){var dlg=$(this).closest('.fields').find('.cff-dialog'),w=dlg.data('width'),h=dlg.data('height');dlg.removeClass('hide');if('undefined'==typeof w)w=MIN($(this).closest('form').width(),$(window).width(),dlg.width());if('undefined'==typeof h)h=MIN($(this).closest('form').height(),$(window).height(),dlg.height());dlg.data('width',w);dlg.data('height',h);dlg.css({'width':w+'px','height':h+'px','margin-top':(-1*h/2)+'px','margin-left':(-1*w/2)+'px'});});$(document).on('click','.cff-close-dlg',function(){$(this).closest('.cff-dialog').addClass('hide');});},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var e=$('[id="'+this.name+'"]:checked:not(.ignore)');if(e.length)
{var t=$.fbuilder.parseValStr(e[0].value,raw,no_quotes);if(!$.fbuilder.isNumeric(t))t=t.replace(/^"/,'').replace(/"$/,'');}
return(t)?(($.fbuilder.isNumeric(t)&&!no_quotes)?t:'"'+t+'"'):0;}});$.fbuilder.controls['fqrcode']=function(){};$.extend($.fbuilder.controls['fqrcode'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"",ftype:"fqrcode",predefined:"",required:false,readonly:false,size:"medium",show:function()
{this.predefined=this._getAttr('predefined',true);return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-qrcode-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield">'+'<div id="'+this.name+'_qrcontainer" class="'+this.size+' cff-qrcode-container"></div>'+'<input aria-label="'+cff_esc_attr(this.title)+'" id="'+this.name+'" name="'+this.name+'"'+' class="field '+this.size+((this.required)?" required":"")+'" '+' '+((this.readonly)?'readonly':'')+' type="text" value="'+cff_esc_attr(this.predefined)+'" /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this;$('#'+me.name).on('focus',function(){$('#fbuilder .cff-qrcode-container[id!="'+me.name+'_qrcontainer"]').html('');if(typeof Html5QrcodeScanner!='undefined'&&$('#fbuilder .cff-qrcode-container[id="'+me.name+'_qrcontainer"]').html()==''){(new Html5QrcodeScanner(me.name+'_qrcontainer',{fps:10},false)).render(function(decodedText,decodedResult){me.setVal(decodedText);$('#html5-qrcode-button-camera-stop').trigger('click');},function(error){console.warn(`Code scan error = ${error}`);});}});},val:function(raw,no_quotes)
{raw=true;no_quotes=no_quotes||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val(),raw,no_quotes);return'';}});$.fbuilder.controls['fpopup']=function(){};$.extend($.fbuilder.controls['fpopup'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"",titletag:"P",ftype:"fpopup",fields:[],open_onload:false,open_onclick:'',close_button:true,modal:true,dragging:false,position:'center',width:'360px',height:'360px',columns:1,rearrange:0,show:function()
{let w=String(this.width).replace(/[^\d,p,x,\%,\.]/g,''),h=String(this.height).replace(/[^\d,p,x,\%,\.]/g,''),p='';w='width:'+(w.length?w:'90%')+';';h=(h.length?'height:'+h:'max-height:90%')+';';switch(this.position){case'center':p='top:50%;left:50%;transform:translate(-50%,-50%);';break;case'top-left':p='top:20px;left:20px;';break;case'top-right':p='top:20px;right:20px;';break;case'bottom-left':p='bottom:20px;left:20px;';break;case'bottom-right':p='bottom:20px;right:20px;';break;}
return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+(this.open_onload?'':' hide-strong ')+' cff-popup-field cff-container-field '+'" id="field'+this.form_identifier+'-'+this.index+'">'+
(this.modal?'<div class="cff-popup-modal">':'')+'<div class="cff-popup-container" style="'+w+h+p+'">'+'<div class="cff-popup-header"><'+this.titletag+' class="cff-popup-title">'+this.title+(this.close_button?'</'+this.titletag+'><div class="cff-popup-close ui-icon ui-icon-close" title="close"></div>':'')+'</div>'+'<div id="'+this.name+'" class="cff-popup-fields"></div>'+'<div class="clearer"></div>'+'</div>'+
(this.modal?'</div>':'')+'</div>';},after_show:function()
{let me=this,pos1=0,pos2=0,pos3=0,pos4=0,e=$('.'+me.name+' .cff-popup-container');function dragMouseDown(evt){evt.preventDefault();pos3=evt.clientX;pos4=evt.clientY;$(document).on('mouseup',closeDragElement);$(document).on('mousemove',elementDrag);}
function elementDrag(evt){evt.preventDefault();pos1=pos3-evt.clientX;pos2=pos4-evt.clientY;pos3=evt.clientX;pos4=evt.clientY;let o=e.offset(),sV=document.documentElement.scrollTop||document.body.scrollTop,sH=document.documentElement.scrollLeft||document.body.scrollLeft;e.offset({top:Math.min(Math.max(o.top-pos2,sV),(document.documentElement.clientHeight||document.body.clientHeight)+sV-e.height()),left:Math.min(Math.max(o.left-pos1,sH),(document.documentElement.clientWidth||document.body.clientWidth)+sH-e.width())});}
function closeDragElement(){$(document).off('mouseup');$(document).off('mousemove');}
$.fbuilder.controls['fcontainer'].prototype.after_show.call(this);$(document).on('click','.cff-popup-close',function(){$(this).closest('.cff-popup-field').addClass('hide-strong');});if(!/^\s*$/.test(me.open_onclick)){let btn=getField(me.open_onclick);if(btn!=false){$(document).on('click','#'+btn.jQueryRef().find('input').attr('id'),function(){SHOWFIELD(me.name);});}}
if(me.close_button){$(document).on('keyup',function(evt){if('Escape'==evt.key)HIDEFIELD(me.name);});}
if(me.dragging){e.find('.cff-popup-header').css('cursor','move').on('mousedown',dragMouseDown);}},showHideDep:function(toShow,toHide,hiddenByContainer)
{return $.fbuilder.controls['fcontainer'].prototype.showHideDep.call(this,toShow,toHide,hiddenByContainer);}});$.fbuilder.controls['fCalculated']=function(){};$.extend($.fbuilder.controls['fCalculated'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"fCalculated",predefined:"",required:false,size:"medium",min:"",max:"",eq:"",suffix:"",prefix:"",decimalsymbol:".",groupingsymbol:"",dependencies:[{'rule':'','complex':false,'fields':['']}],readonly:true,currency:false,noEvalIfManual:true,formatDynamically:false,dynamicEval:true,hidefield:false,validate:false,_onEquationsQueueEmpty:function(evt)
{var me=evt.data.obj;if(!me.noEvalIfManual)$('[id="'+me.name+'"]').data('manually',0);},configuration:function()
{var me=this;return{"suffix":me.suffix,"prefix":me.prefix,"groupingsymbol":me.groupingsymbol,"decimalsymbol":me.decimalsymbol,"currency":me.currency};},show:function()
{this.predefined=this._getAttr('predefined',true);return'<div class="fields '+cff_esc_attr(this.csslayout)+' '+this.name+' cff-calculated-field" id="field'+this.form_identifier+'-'+this.index+'" style="'+((this.hidefield)?'padding:0;margin:0;border:0;opacity:0;width:0;height:0;overflow:hidden;':'')+'"><label '+(!this.hidefield?'for="'+this.name+'"':'')+'>'+this.title+''+((this.required)?'<span class="r">*</span>':'')+'</label><div class="dfield"><input aria-label="'+cff_esc_attr(this.title)+'" id="'+this.name+'" name="'+this.name+'" '+((this.readonly)?' readonly ':'')+' '+((!/^\s*$/.test(this.min))?'min="'+cff_esc_attr($.fbuilder.parseVal(this._getAttr('min'),this.thousandSeparator,this.decimalSymbol))+'" ':'')+((!/^\s*$/.test(this.max))?' max="'+cff_esc_attr($.fbuilder.parseVal(this._getAttr('max'),this.thousandSeparator,this.decimalSymbol))+'" ':'')+' class="codepeoplecalculatedfield field '+this.size+((this.required)?" required":"")+'" type="'+((this.hidefield)?'hidden':'text')+'" value="'+cff_esc_attr(this.predefined)+'" />'+((!this.hidefield)?'<span class="uh">'+this.userhelp+'</span>':'')+'</div><div class="clearer"></div></div>';},after_show:function()
{var me=this,dependencies=[];$.each(me.dependencies,function(i,d)
{d.rule=d.rule.replace(/^\s+/,'').replace(/\s+$/,'');if(d.rule!=''&&d.fields.length){var fields=[];$.each(d.fields,function(j,f){if(f!='')
{fields.push(f);}});if(fields.length){dependencies.push({'rule':d.rule,'fields':fields});}}});me.dependencies=dependencies;var eq=me.eq;eq=eq.replace(/([^\:"'])\/\/[^\n\r]*/g,'$1 ').replace(/^\/\/[^\n\r]*/g,'').replace(/[\n\r]/g,' ').replace(/fieldname(\d+)/g,"fieldname$1"+me.form_identifier).replace(/form_identifier/g,'\''+this['form_identifier']+'\'').replace(/;\s*\)/g,')').replace(/;\s*$/,'');if(!/^\s*$/.test(eq))
{$.fbuilder.calculator.addEquation(me,eq,dependencies,me.form_identifier);}
var e=$('[id="'+me.name+'"]');e.on('calcualtedfield_changed',{obj:me},function(evt){if($.fbuilder['calculator'].getDepList(evt.data.obj.name,{value:evt.data.obj.val(),raw:evt.data.obj.val(true)},evt.data.obj.dependencies))
{$.fbuilder.showHideDep({'formIdentifier':evt.data.obj.form_identifier,'fieldIdentifier':evt.data.obj.name});}}).on('keyup',function(){if(!me.readonly)
{e.data('manually',1);e.data('bk',e.val());$(document).off('equationsQueueEmpty',me._onEquationsQueueEmpty);$(document).one('equationsQueueEmpty',{obj:me},me._onEquationsQueueEmpty);e.trigger('calcualtedfield_changed');}}).on('change',function(){if(e.data('manually')&&e.data('manually')==1&&me.formatDynamically)
{var v=(me.val(true,true)+'').replace(new RegExp('[^\\-\\d'+me.decimalsymbol.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,'\\$&')+']','g'),'').replace(/[^\d\-]/g,'.');this.value=$.fbuilder.calculator.format(v,me.configuration());try
{$(this).valid();}catch(err){}}else if($(this).hasClass('cpefb_error')||me.validate){try
{$(this).valid();}catch(err){}}
if(!me.noEvalIfManual)e.data('manually',0);});$('#cp_calculatedfieldsf_pform'+me.form_identifier).on('reset',function(){e.removeData('manually');});},showHideDep:function(toShow,toHide,hiddenByContainer,interval)
{if(typeof hiddenByContainer=='undefined')hiddenByContainer={};var me=this,result=[];if($.fbuilder['calculator'].getDepList(me.name,{value:me.val(),raw:me.val(true)},me.dependencies))
{var item=$('#'+me.name),identifier=me.form_identifier,isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),d,n,dep,clearRef=function(id){if(typeof toShow[id]!='undefined')
{delete toShow[id]['ref'][me.name];if($.isEmptyObject(toShow[id]['ref']))
delete toShow[id];}},hideField=function(id){$('.'+id+' [id*="'+id+'"],.'+id).closest('.fields').hide();$('.'+id+' [id*="'+id+'"]:not(.ignore)').addClass('ignore');toHide[id]={};};try
{d=item.attr('dep');if(typeof d!='undefined'&&!/^\s*$/.test(d))d=d.split(',');else d=[];n=item.attr('notdep');if(typeof n!='undefined'&&!/^\s*$/.test(n))n=n.split(',');else n=[];if(isHidden)
{n=n.concat(d);d=[];}
for(i=0;i<d.length;i++)
{if(!/fieldname/i.test(d[i]))continue;dep=d[i]+identifier;delete toHide[dep];if(typeof toShow[dep]=='undefined')
toShow[dep]={'ref':{}};toShow[dep]['ref'][me.name]=1;if(!(dep in hiddenByContainer))
{$('.'+dep+' [id*="'+dep+'"],.'+dep).closest('.fields').fadeIn(interval||0);$('.'+dep+' [id*="'+dep+'"].ignore').removeClass('ignore');}
if($.inArray(dep,result)==-1)result.push(dep);}
for(i=0;i<n.length;i++)
{if(!/fieldname/i.test(n[i]))continue;dep=n[i]+identifier;clearRef(dep);if(typeof toShow[dep]=='undefined'&&typeof toHide[dep]=='undefined')hideField(dep);if($.inArray(dep,result)==-1)result.push(dep);}}
catch(e){}}
return result;},val:function(raw,no_quotes)
{raw=raw||false;no_quotes=no_quotes||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)
{var v=e.val();if(raw)return $.fbuilder.parseValStr(v,raw,no_quotes);v=String(v).trim();v=v.replace(new RegExp($.fbuilder['escapeSymbol'](this.prefix),'g'),'').replace(new RegExp($.fbuilder['escapeSymbol'](this.suffix),'g'),'');return $.fbuilder.parseVal(v,this.groupingsymbol,this.decimalsymbol,no_quotes);}
return 0;},setVal:function(v,nochange)
{var e=$("[id='"+this.name+"']"),bk=e.data('bk');e.val(v);if(bk!=v){e.trigger('calcualtedfield_changed');if(!nochange)e.trigger('change');}}});$.fbuilder['extend_window']=function(prefix,obj)
{for(method in obj)
{window[prefix+method]=(function(m)
{return function()
{return m.obj[m.method_name].apply(m.obj,arguments);};})({"method_name":method,'obj':obj});}};$.fbuilder['calculator']=(function()
{var validators=[];if(typeof $.fbuilder['modules']!='undefined')
{var modules=$.fbuilder['modules'];for(var module in modules)
{if(typeof modules[module]['callback']!='undefined')
{modules[module]['callback']();}
if(typeof modules[module]['validator']!='undefined')
{validators.push(modules[module]['validator']);}}}
_validate_result=function(v)
{if(validators.length)
{var h=validators.length;while(h--)
{if(validators[h](v))
{return true;}}}
else
{return true;}
return false;};_eval=function(eq)
{return eval(eq);};_calculate=function(eq,suffix,__ME__)
{var e=$.fbuilder['forms'][suffix].getItem(__ME__),__ME__=e.val();if($('#'+e.name).data('manually')==1)return __ME__;var _match,field_regexp=new RegExp('(fieldname\\d+'+suffix+')(_[cr]b\\d+)?(\\|[rnv])?([\\D\\b])','i');$.fbuilder['currentFormId']=$.fbuilder['forms'][suffix].formId;eq='('+eq+')';while(_match=field_regexp.exec(eq))
{var field=$.fbuilder['forms'][suffix].getItem(_match[1]),v='';if(field||(_match[3]&&_match[3]=='|n'))
{if(_match[3]&&_match[3]=='|n')
{v='"'+_match[1].match(/fieldname\d+/)[0]+'"';}
else
{v=field.val((_match[3])?((_match[3]=='|v')?'vt':((_match[3]=='|r')?true:false)):false);if(typeof v=='object'&&typeof window.JSON!='undefined')v=JSON.stringify(v);else if($.fbuilder.isNumeric(v))v='('+v+')';}}
eq=eq.replace(_match[0],v+''+_match[4]);}
try
{var r=_eval(eq.replace(/^\(/,'').replace(/\)$/,'').replace(/\b__ME__\b/g,__ME__));return(typeof r!='undefined'&&_validate_result(r))?r:false;}
catch(e)
{if(typeof console!='undefined'){console.log(eq);console.log(e.message);}
return false;}};_checkValueThrowingEquation=function(t)
{if(typeof t.attr('data-timeout')!='undefined')clearTimeout(t.attr('data-timeout'));if(typeof t.attr('data-previousvalue')=='undefined')t.attr('data-previousvalue',t.val());else
{if(t.val()==t.attr('data-previousvalue'))
{t.removeAttr('data-timeout');obj.Calculate(t[0]);return;}
t.attr('data-previousvalue',t.val());}
t.attr('data-timeout',setTimeout(_checkValueThrowingEquation,500,t));};var CalcFieldClss=function(){};CalcFieldClss.prototype={processing_queue:{},pendings:{},queued_equations:{},addPending:function(form_identifier)
{if(!(form_identifier in this.pendings))this.pendings[form_identifier]=1;else this.pendings[form_identifier]++;},removePending:function(form_identifier)
{if((form_identifier in this.pendings)&&this.pendings[form_identifier])this.pendings[form_identifier]--;},thereIsPending:function(form_identifier)
{if(form_identifier in this.pendings)return this.pendings[form_identifier];return 0;},addEquation:function(fieldObj,equation,dependencies,form_identifier)
{var equation_result=$('[id="'+fieldObj.name+'"]');if(equation_result.length)
{var form=equation_result[0].form,equationObj,field,regexp=new RegExp('(fieldname\\d+)_'),match;if(typeof form.equations=='undefined')form['equations']=[];var i,j=-1,h=form.equations.length;for(i=0;i<h;i++)
{if(form.equations[i].result==fieldObj.name)break;if(form.equations[i].equation.match(fieldObj.name)){j=i;break;}}
if(i==h||j!=-1)
{equationObj={'result':fieldObj.name,'resultField':fieldObj,'equation':equation,'conf':fieldObj.configuration(),'dep':dependencies,'identifier':form_identifier};form.equations.splice(i,0,equationObj);while(match=/(pdfpagesnumber|imgdimension|viewfile|csvtojson)\s*\(\s*fieldname\d+_\d+(\|n)\b/i.exec(equation)){equation=equation.replace(match[2],match[0].replace('|n',''));}
equation=equation.replace(/fieldname\d+_\d+\|n\b/g,'');while(match=regexp.exec(equation))
{field=$.fbuilder['forms'][form_identifier].getItem(match[1]+form_identifier);if(field)
{if(typeof field.usedInEquations=='undefined')field.usedInEquations=[];field.usedInEquations.push(equationObj);}
equation=equation.replace(new RegExp(match[0],'g'),'');}}}},enqueueEquation:function(form_identifier,equations)
{if(typeof this.queued_equations[form_identifier]=='undefined')
this.queued_equations[form_identifier]=[];var queue=this.queued_equations[form_identifier],f;for(var i=0,h=equations.length;i<h;i++)
{f=-1;for(var j=0,k=queue.length;j<k;j++)
{if(queue[j].result==equations[i].result)break;if(queue[j].equation.match(equations[i].result)){f=j;break;}}
if(j==k||f!=-1)
{queue.splice(j,0,equations[i]);}}},getDepList:function(calculated_field,values,dependencies)
{var list=[],list_h=[];if(values.value!==false&&dependencies.length)
{for(var i=0,h=dependencies.length;i<h;i++)
{try
{var rule=eval(dependencies[i].rule.replace(/value\|r/gi,values.raw).replace(/value/gi,values.value));$.each(dependencies[i].fields,function(j,e)
{if(e!='')
{if(rule)
{var k=$.inArray(e,list_h);while(k!=-1)
{list_h.splice(k,1);k=$.inArray(e,list_h);}
if($.inArray(e,list)==-1)list.push(e);}
else
{if($.inArray(e,list)==-1)list_h.push(e);}}});}
catch(e)
{if(typeof console!='undefined')console.log(e.message);continue;}}}
$('[id="'+calculated_field+'"]').attr('dep',list.join(',')).attr('notdep',list_h.join(','));return list.length||list_h.length;},defaultCalc:function(form,enqueued,force_all)
{var dep=false;form=$(form);enqueued=enqueued||false;force_all=force_all||false;if(form.length)
{var fSec=form.attr('id').match(/_\d+$/)[0];if(enqueued)
{this.processQueue(fSec);}
else if(typeof form[0].equations!='undefined')
{if(force_all){this.queued_equations[fSec]=form[0].equations.slice(0);}else{var _dynamicEquations=[];for(var i=0,q=form[0].equations.slice(0),h=q.length;i<h;i++){if(getField(q[i].result)['dynamicEval'])
_dynamicEquations.push(q[i]);}
this.queued_equations[fSec]=_dynamicEquations;}
this.processQueue(fSec);}
$(form).trigger('cpcff_default_calc');}},Calculate:function(field)
{if(field.id==undefined)return;var id=field.id.replace(/_[cr]b\d+$/i,''),fSec=id.match(/(_\d+)?_\d+$/),item,me=this;if(fSec)
{fSec=(typeof fSec[1]!='undefined')?fSec[1]:fSec[0];item=$.fbuilder['forms'][fSec].getItem(id);if(item&&typeof item['usedInEquations']!='undefined')
{for(var i in item.usedInEquations){if(getField(item.usedInEquations[i].result)['dynamicEval'])
me.enqueueEquation(fSec,[item.usedInEquations[i]]);}
me.processQueue(fSec);}}},processQueue:function(fSec)
{var me=this;if(fSec in me.processing_queue&&me.processing_queue[fSec])
{setTimeout((function(fSec){if(fSec in me.processing_queue&&me.processing_queue[fSec]){me.processing_queue[fSec]=false;me.processQueue(fSec);}})(fSec),(typeof CFF_PROCESS_QUEUE_INTERVAL!='undefined')?CFF_PROCESS_QUEUE_INTERVAL:3000);return;}
me.processing_queue[fSec]=true;if(typeof me.queued_equations[fSec]!='undefined')
{var queue=me.queued_equations[fSec],eq_obj;while(queue.length)
{eq_obj=queue.shift();$.fbuilder['currentEq']=eq_obj;var field=$('[id="'+eq_obj.result+'"]'),result=_calculate(eq_obj.equation,eq_obj.identifier,eq_obj.result),bk=field.data('bk');field.val((result!==false)?me.format(result,eq_obj.resultField.configuration()):'');if(bk!=field.val())
{field.data('bk',field.val());field.trigger('calcualtedfield_changed');field.trigger('change');}}}
me.processing_queue[fSec]=false;if(!me.thereIsPending(fSec))$(document).trigger('equationsQueueEmpty',[fSec]);},format:function(value,config)
{config=$.extend({},config);if(!/^\s*$/.test(value))
{var symbol='',isNumeric=false;if($.fbuilder.isNumeric(value)&&!/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)/.test(value))
{isNumeric=true;if(value<0)symbol='-';var parts=value.toString().replace("-","").split("."),counter=0,str='';if(config.groupingsymbol)
{for(var i=parts[0].length-1;i>=0;i--){counter++;str=parts[0][i]+str;if(counter%3==0&&i!=0)str=config.groupingsymbol+str;}
parts[0]=str;}
if(!('decimalsymbol' in config))config.decimalsymbol='.';value=parts.join(config.decimalsymbol);}
if(config.currency&&!isNumeric)
{delete config.prefix;delete config.suffix;}
if(config.prefix)
{if(!config.currency)
{value=symbol+value;symbol='';}
value=config.prefix+value;}
if(config.suffix)value+=config.suffix;value=symbol+value;}
return value;},unformat:function(field)
{var escapeSymbol=$.fbuilder.escapeSymbol;var eq=field[0].form.equations,v=field.val();for(var i=0,h=eq.length;i<h;i++)
{if(eq[i].result==field[0].id)
{var c=eq[i].resultField.configuration();if(c.prefix&&!/^\s*$/.test(c.prefix))
{v=v.replace(new RegExp("^"+escapeSymbol(c.prefix)),'');}
if(c.suffix&&!/^\s*$/.test(c.suffix))
{v=v.replace(new RegExp(escapeSymbol(c.suffix)+"$"),'');}
if(!/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)/.test(v))
{if(c.groupingsymbol&&!/^\s*$/.test(c.groupingsymbol))
{v=v.replace(new RegExp(escapeSymbol(c.groupingsymbol),'g'),'');}
if(c.decimalsymbol&&!/^\s*$/.test(c.decimalsymbol))
{v=v.replace(new RegExp(escapeSymbol(c.decimalsymbol),'g'),'.');}}}}
return v;}};var obj=new CalcFieldClss();$(document).on('keyup change blur','[id="fbuilder"] :input,[id="fbuilder"] .cff-datatable-field .cff-datatable-container',function(evt)
{var t=$(evt.target),f=t.closest('form'),evalequations=f.attr('data-evalequations'),evalequationsevent=f.attr('data-evalequationsevent');if(typeof evalequations!='undefined'&&evalequations*1==0&&(!(t.hasClass('codepeoplecalculatedfield')&&evt.type=='change')||(t.hasClass('codepeoplecalculatedfield')&&t.data('manually')==1)))
{return;}
if(evt.type=='keyup')
{if('undefined'!=typeof evalequationsevent&&evalequationsevent*1==1)
{return;}
if(evt.keyCode&&(evt.keyCode>=33&&evt.keyCode<=40))return;_checkValueThrowingEquation(t);}
else
{if(((t.prop('tagName')=='INPUT'&&/(text|number|email|password)/.test(t.attr('type').toLowerCase())||t.prop('tagName')=='TEXTAREA')&&evt.type!='change'))
{return;}
obj.Calculate(t[0]);}});$(document).on('showHideDepEvent',function(evt,form_identifier)
{var f,evalequations,first_time;if(form_identifier)f=$('#'+form_identifier);else f=$('[id*="cp_calculatedfieldsf_pform_"]:eq(0)');if(f.length)
{first_time=(typeof f.data('first_time')=='undefined');f.data('first_time',0);evalequations=f.attr('data-evalequations');if(typeof evalequations=='undefined'||evalequations*1==1)
{if(first_time)obj.defaultCalc('#'+f.attr('id'));else obj.defaultCalc('#'+f.attr('id'),true);}}});return obj;})();try{!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);}catch(err){}if(typeof $.fn['fbuilder_serializeObject']=='undefined')
{$.fn.fbuilder_serializeObject=function()
{var o={},a=this.serializeArray();$.each(a,function(){if(/^fieldname\d+_\d+(\[\])?$/.test(this.name))this.name=this.name.match(/fieldname\d+/)[0];else return;if(o[this.name]){if(!o[this.name].push){o[this.name]=[o[this.name]];}
o[this.name].push(this.value||'');}else{o[this.name]=this.value||'';}});return o;};}
$.fn.fbuilder_localstorage=function(){var form=this,id=form.attr('id'),sq=(typeof id=='undefined')?1:id.replace(/[^\d]/g,''),localStore_obj,fields;if(sq=='')sq=1;localStore_obj=new $.fbuilder_localstorage(form,true);fields=localStore_obj.get_fields();if(!$.isEmptyObject(fields))
{if(typeof cpcff_default=='undefined')cpcff_default={};if(typeof cpcff_default[sq]=='undefined')cpcff_default[sq]={};cpcff_default[sq]=$.extend(cpcff_default[sq],fields);}
$(document).on('cff-loaded-defaults','#'+id,function(){localStore_obj.set_fields();});$(document).on('change','#'+id+' *',function(evt){if(typeof this['id']!='undefined'&&/^fieldname\d+_\d+$/i.test(this.id)&&typeof this['value']!='undefined')
{localStore_obj.set_fields();}});form.on('submit',function(){localStore_obj.clear_fields();});return this;}
$.fbuilder_localstorage=function(form,debug){this.form=form;this.id=form.attr('id')+'_'+form.find('[name="cp_calculatedfieldsf_id"]').val();this.debug=(typeof debug!='undefined'&&debug)?true:false;};$.fbuilder_localstorage.prototype=(function(){var is_available;function _log(mssg)
{if(typeof console!='undefined')console.log(mssg);};return{is_available:function(){if(typeof is_available!='undefined')return is_available;try{var storage=window['localStorage'],x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);is_available=true;return true;}
catch(e){if(this.debug)_log('localStorage object is not available');is_available=false;return e instanceof DOMException&&(e.code===22||e.code===1014||e.name==='QuotaExceededError'||e.name==='NS_ERROR_DOM_QUOTA_REACHED')&&storage.length!==0;}},get_fields:function(){try{if(typeof this.fields=='undefined')this.fields=JSON.parse(localStorage.getItem(this.id));return this.fields;}catch(err){_log('Error reading the fields.');_log(err);}},set_fields:function(){try{this.fields=this.form.fbuilder_serializeObject();localStorage.setItem(this.id,JSON.stringify(this.fields));}catch(err){_log('Error saving the fields.');_log(err);}},clear_fields:function(){try{localStorage.removeItem(this.id);}catch(err){_log('Error deleting the fields.');_log(err);}}};})();$.fbuilder.generate_form=function(fnum){try{var cp_calculatedfieldsf_fbuilder_config=window["cp_calculatedfieldsf_fbuilder_config"+fnum];if(cp_calculatedfieldsf_fbuilder_config&&$("#fbuilder"+fnum).length&&$("#fbuilder"+fnum).attr('data-processed')==undefined)
{if($("#fbuilder"+fnum).is(':visible'))
{var f=$("#fbuilder"+fnum).fbuilder((typeof cp_calculatedfieldsf_fbuilder_config.obj=='string')?JSON.parse(cp_calculatedfieldsf_fbuilder_config.obj):cp_calculatedfieldsf_fbuilder_config.obj);f.attr('data-processed',1);f.fBuild.loadData("form_structure"+fnum);}
else
{$.fbuilder.form_become_visible("#fbuilder"+fnum,(function(n){return function(){$.fbuilder.generate_form(n);};})(fnum));}}}catch(e){if(typeof console!='undefined')console.log(e);}};$.fbuilder.form_become_visible=function(element,callback){if(!('hidden_forms' in $.fbuilder))$.fbuilder.hidden_forms=[];$.fbuilder.hidden_forms.push({'element':element,'callback':callback});if('form_become_visible_interval' in $.fbuilder)clearInterval($.fbuilder['form_become_visible_interval']);$.fbuilder['form_become_visible_interval']=setInterval(function(){for(var i=$.fbuilder.hidden_forms.length-1;0<=i;i--)
{if($($.fbuilder.hidden_forms[i]['element']).is(':visible'))
{$.fbuilder.hidden_forms[i]['callback'].call();$.fbuilder.hidden_forms.splice(i,1);}}
if($.fbuilder.hidden_forms.length==0)clearInterval($.fbuilder['form_become_visible_interval']);},500);};}
var fcount=1;var fnum="_"+fcount;while(typeof window["cp_calculatedfieldsf_fbuilder_config"+fnum]!='undefined'||fcount<10)
{$.fbuilder.generate_form(fnum);fcount++;fnum="_"+fcount;}})(fbuilderjQuery);};fbuilderjQuery(fbuilderjQuery.fbuilderjQueryGenerator);fbuilderjQuery(window).on('load',fbuilderjQuery.fbuilderjQueryGenerator);fbuilderjQuery(document).on('elementor/popup/show',function(event,id,instance){var popup=fbuilderjQuery('[data-elementor-type="popup"]');if(popup.length){var psequence=fbuilderjQuery('[name="cp_calculatedfieldsf_pform_psequence"]'),fnum,flist;if(psequence.length){fnum=psequence.val();if(popup.find('#fieldlist'+fnum+':empty').length){popup.find("#fbuilder"+fnum).removeAttr('data-processed');fbuilderjQuery.fbuilderjQueryGenerator();}}}});