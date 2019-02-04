import en from "./en.json";
import es from "./es.json";
import cn from "./cn.json";

let langs = {en, es,cn}


export default function translateFunc(value, string){
  return langs[value][string]
  }