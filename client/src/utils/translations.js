export function loadTranslations(language) {
    let translations = null;
    try { 
        translations = require(`../gamedata/${language}/strings.json`)
      } catch(e){
        translations = require(`../gamedata/es/strings.json`)
        if(!translations) throw new Error("Can't load translations")
    }

    return translations;
}