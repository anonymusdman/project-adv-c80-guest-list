var guestlist=[];
function submit_name_guestlist() {
    var guestname = document.getElementById("input").value;
    guestlist.push(guestname);
    guestlist.sort();
    var val = '';
    for(i=0 ; i < guestlist.length ; i++) {
         val = val + guestlist[i] + '\n';
    }
    document.getElementById("guestlist").value = val;
}
    console.log(guestlist);
    console.log(guestname);
function name_to_search(searchString) {
    for(i=0 ; i < guestlist.length ; i++) {
        if(searchString==guestlist[i]){
            return guestlist[i] + '  is here';
        }
    }
    return searchString + '  isnt here';
}
function searchname() {
    console.log('name_to_search: '+name_to_search());
    var searchName = name_to_search(document.getElementById("specific_name").value);

    document.getElementById("foundname").innerHTML = searchName;
}