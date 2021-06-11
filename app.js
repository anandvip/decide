let
getEle,
query,

createDate,leDate,
datum,datumN,
footerCreated,docEdited,
effortSpan,
projectStartDate,ongoingProjDate;


//Date footer

 datum    = new Date('27 Dec 2017'); //The day thought was captured
datumN    = new Date('11 June 2021');//Latest Edit

getEle    = (id) => document.getElementById(id);
 query    = (selector) => document.querySelectorAll(selector);

footerCreated = () => 
{
    effortSpan              = getEle('effortSpan');
    createDate              = getEle('createDate');
    leDate                  = getEle('leDate');
    projectStartDate        = new Date('27 Dec 2017');
    ongoingProjDate         = new Date();
    createDate.innerHTML    = `4Columns in use from: ${datum.toDateString()}`;
    leDate.innerHTML        = `Last used: ${datumN.toDateString()}`;
    effortSpan.innerHTML    = `Year: ${projectStartDate.getFullYear()} - ${ongoingProjDate.getFullYear()}`;
    return effortSpan, createDate, leDate, projectStartDate, ongoingProjDate;
}

//DOM load complete
if (document.readyState === 'complete') {
    document.addEventListener('DOMContentLoaded', footerCreated);
}else{
    footerCreated();
}