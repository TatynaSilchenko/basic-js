module.exports = function createDreamTeam(members) {
return(
    Array.isArray(members) &&  members
        .filter(el=>typeof el==='string').map(el=>el.trim().toUpperCase())
        .sort()
        .reduce((name,item)=>name+=item[0],"")
)
};